import { useState, useMemo } from "react";
import { DATA_COTATIONS, AMY_NOTES, REGLES_CUMUL } from "@/lib/data";
import { ActeCard } from "@/components/ActeCard";
import { SearchFilter } from "@/components/SearchFilter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Info, Calculator, FileText } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter logic
  const filteredData = useMemo(() => {
    let data = DATA_COTATIONS;

    // Filter by category
    if (selectedCategory) {
      data = data.filter(cat => cat.id === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      return data.map(cat => ({
        ...cat,
        actes: cat.actes.filter(acte => 
          acte.nom.toLowerCase().includes(lowerTerm) || 
          acte.codes.toLowerCase().includes(lowerTerm) || 
          acte.raccourci.toLowerCase().includes(lowerTerm) ||
          acte.tarif.includes(lowerTerm)
        )
      })).filter(cat => cat.actes.length > 0);
    }

    return data;
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-secondary/30 to-background pb-12 pt-8">
        <div className="absolute inset-0 overflow-hidden z-0 opacity-10 pointer-events-none">
          <img 
            src="/images/hero-medical-abstract.png" 
            alt="Medical Abstract Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-white p-3 rounded-2xl shadow-sm mb-4">
              <img src="/images/consultation-icon.png" alt="Logo" className="w-16 h-16 object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-3">
              Cotations Ophtalmologiques
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              L'outil de référence optimisé pour les orthoptistes, médecins et secrétaires.
              Retrouvez rapidement les codes CCAM et tarifs à jour.
            </p>
          </div>

          <SearchFilter 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={DATA_COTATIONS}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container flex-grow pb-16">
        <Tabs defaultValue="cotations" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="cotations" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" /> Cotations
            </TabsTrigger>
            <TabsTrigger value="amy" className="flex items-center gap-2">
              <Info className="h-4 w-4" /> Notes AMY
            </TabsTrigger>
            <TabsTrigger value="regles" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Règles
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cotations" className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredData.length === 0 ? (
              <div className="text-center py-20">
                <div className="bg-muted/30 rounded-full p-6 inline-block mb-4">
                  <Search className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Aucun résultat trouvé</h3>
                <p className="text-muted-foreground mt-2">Essayez de modifier vos termes de recherche.</p>
              </div>
            ) : (
              filteredData.map((category) => (
                <section key={category.id} className="scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6 border-b pb-2 border-border/60">
                    <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                      {category.titre}
                    </h2>
                    <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-full">
                      {category.actes.length}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.actes.map((acte) => (
                      <ActeCard key={acte.id} acte={acte} />
                    ))}
                  </div>
                </section>
              ))
            )}
          </TabsContent>

          <TabsContent value="amy" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Notes et Guidances AMY
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {AMY_NOTES.map((note, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/20 transition-colors">
                      <span className="font-medium text-foreground mb-2 sm:mb-0">{note.item}</span>
                      <Badge variant="secondary" className="w-fit">{note.note}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="regles" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="md:col-span-2 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-2">Règles de Cumul Importantes</h3>
                      <p className="text-muted-foreground">
                        Le respect des règles de cumul est essentiel pour éviter les rejets de facturation.
                        Veuillez consulter le tableau ci-dessous pour les cas les plus fréquents.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {REGLES_CUMUL.map((regle, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`h-2 w-full ${regle.regle === 'Interdit' ? 'bg-destructive' : 'bg-secondary'}`} />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{regle.acte}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-muted-foreground font-medium">Règle</span>
                      <Badge variant={regle.regle === 'Interdit' ? 'destructive' : 'default'}>
                        {regle.regle}
                      </Badge>
                    </div>
                    <Alert className="bg-muted/50 border-none">
                      <Info className="h-4 w-4" />
                      <AlertTitle>Remarque</AlertTitle>
                      <AlertDescription>
                        {regle.remarque}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-8 mt-auto">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Cotations Ophtalmologiques. Outil d'aide à la cotation.</p>
          <p className="mt-2 text-xs">Les tarifs sont donnés à titre indicatif et peuvent évoluer selon la réglementation en vigueur.</p>
        </div>
      </footer>
    </div>
  );
}

import { Search } from "lucide-react";
