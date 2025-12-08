import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Categorie } from "@/lib/data";

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  categories: Categorie[];
}

export function SearchFilter({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory,
  categories 
}: SearchFilterProps) {
  return (
    <div className="space-y-6 mb-8">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder="Rechercher un acte, un code ou un tarif..."
          className="pl-10 py-6 text-lg shadow-sm border-primary/20 focus-visible:ring-primary/30 transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <Badge 
          variant={selectedCategory === null ? "default" : "outline"}
          className={`cursor-pointer px-4 py-1.5 text-sm transition-all ${selectedCategory === null ? 'bg-primary hover:bg-primary/90' : 'hover:bg-secondary/50'}`}
          onClick={() => setSelectedCategory(null)}
        >
          Tous
        </Badge>
        <Badge 
          variant={selectedCategory === "parcours_optimises" ? "default" : "outline"}
          className={`cursor-pointer px-4 py-1.5 text-sm transition-all ${selectedCategory === "parcours_optimises" ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-secondary/50'}`}
          onClick={() => setSelectedCategory("parcours_optimises")}
        >
          🎯 Parcours Optimisés
        </Badge>
        {categories.map((cat) => (
          <Badge
            key={cat.id}
            variant={selectedCategory === cat.id ? "default" : "outline"}
            className={`cursor-pointer px-4 py-1.5 text-sm transition-all ${selectedCategory === cat.id ? 'bg-primary hover:bg-primary/90' : 'hover:bg-secondary/50'}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.titre}
          </Badge>
        ))}
      </div>
    </div>
  );
}
