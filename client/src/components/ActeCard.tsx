import { Acte } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ActeCardProps {
  acte: Acte;
}

export function ActeCard({ acte }: ActeCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Code copié dans le presse-papier");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="medical-card h-full flex flex-col overflow-hidden group">
      <CardHeader className="pb-2 bg-muted/30">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-base font-bold text-primary leading-tight">
            {acte.nom}
          </CardTitle>
          <Badge variant="outline" className="shrink-0 bg-background font-mono text-xs">
            {acte.raccourci}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Codes CCAM</p>
            <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-md border border-border/50">
              <code className="text-sm font-mono font-medium text-foreground flex-grow truncate" title={acte.codes}>
                {acte.codes}
              </code>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 hover:bg-background hover:text-primary"
                onClick={() => copyToClipboard(acte.codes)}
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground font-medium">{acte.categorie}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-secondary/20 border-t pt-3 pb-3 flex justify-between items-center">
        <span className="text-xs font-medium text-muted-foreground">Tarif conventionné</span>
        <span className="text-lg font-bold text-primary">{acte.tarif}</span>
      </CardFooter>
    </Card>
  );
}
