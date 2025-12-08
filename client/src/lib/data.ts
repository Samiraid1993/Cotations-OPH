export interface Acte {
  id: string;
  nom: string;
  codes: string;
  raccourci: string;
  tarif: string;
  categorie: string;
  description?: string;
}

export interface Categorie {
  id: string;
  titre: string;
  icon: string;
  actes: Acte[];
}

export const DATA_COTATIONS: Categorie[] = [
  {
    id: "consultations",
    titre: "Consultations",
    icon: "Stethoscope",
    actes: [
      { id: "c1", nom: "Avis Ponctuel Consultant SANS Amy", codes: "APC / C2", raccourci: "APC", tarif: "55,00 €", categorie: "Consultation médecin" },
      { id: "c2", nom: "Avis Ponctuel Consultant urgence SANS Amy (APC + MCU dans 48h)", codes: "APC + MCU", raccourci: "C2 URG", tarif: "70,00 €", categorie: "Consultation médecin - urgence" },
      { id: "c3", nom: "Consultation suivi traitement SANS Amy", codes: "CS + MPC + MCS", raccourci: "CS", tarif: "30,00 €", categorie: "Consultation médecin" },
      { id: "c4", nom: "Consultation Urgence SANS Amy (CS + MCU dans 48h)", codes: "CS + MPC + MCS + MCU", raccourci: "CS URG", tarif: "45,00 €", categorie: "Consultation médecin - urgence" },
      { id: "c5", nom: "APC + Bilan orthoptique (avec ordonnance ou cas exceptionnel)", codes: "APC / C2", raccourci: "CONSC2", tarif: "55,00 €", categorie: "Consultation + orthoptie possible" },
      { id: "c6", nom: "CS + Bilan orthoptique (avec ordonnance ou cas exceptionnel)", codes: "CS + MPC + MCS", raccourci: "CS+ORTHO", tarif: "30,00 €", categorie: "Consultation + orthoptie possible" }
    ]
  },
  {
    id: "pachymetrie",
    titre: "Pachymétrie",
    icon: "Eye",
    actes: [
      { id: "p1", nom: "Pachy + Exploration des flux", codes: "BDQP003 + BBQP001", raccourci: "PACE", tarif: "31,18 €", categorie: "Acte technique" },
      { id: "p2", nom: "Pachy + RETINO", codes: "BDQP003 + BGQP007", raccourci: "PACR", tarif: "31,99 €", categorie: "Acte technique" },
      { id: "p3", nom: "Pachy + Exploration des flux + RETINO", codes: "BDQP003 + BBQP001 + BGQP007", raccourci: "PAC 1", tarif: "52,01 €", categorie: "Acte technique" },
      { id: "p4", nom: "Pachy + Exploration des flux + TOPOGRAPHIE CORNEE", codes: "BDQP003 + BBQP001 + BDQP002", raccourci: "PAC 2", tarif: "54,99 €", categorie: "Acte technique" }
    ]
  },
  {
    id: "vb",
    titre: "Vision Binoculaire",
    icon: "Glasses",
    actes: [
      { id: "v1", nom: "VB + MOT", codes: "BJQP002 + BLQP010", raccourci: "VBM", tarif: "38,90 €", categorie: "Acte technique" },
      { id: "v2", nom: "VB + MOT + RETINO", codes: "BJQP002 + BGQP007 + BLQP010", raccourci: "VB 1", tarif: "59,73 €", categorie: "Acte technique" },
      { id: "v3", nom: "VB + MOT + TOPOGRAPHIE CORNEE", codes: "BJQP002 + BDQP002 + BLQP010", raccourci: "VB 3", tarif: "62,71 €", categorie: "Acte technique" }
    ]
  },
  {
    id: "fond_oeil",
    titre: "Fond d'œil",
    icon: "ScanEye",
    actes: [
      { id: "f1", nom: "FO + Exploration des flux", codes: "BGQP002 + BBQP001", raccourci: "FO BB", tarif: "37,99 €", categorie: "Fond d'oeil" },
      { id: "f2", nom: "FO + Pachy", codes: "BGQP002 + BDQP003", raccourci: "FOP", tarif: "39,08 €", categorie: "Fond d'oeil" },
      { id: "f3", nom: "FO + RETINO", codes: "BGQP002 + BGQP007", raccourci: "FOR", tarif: "38,70 €", categorie: "Fond d'oeil" },
      { id: "f4", nom: "FO + Pachy + RETINO", codes: "BGQP002 + BDQP003 + BGQP007", raccourci: "FO2", tarif: "60,27 €", categorie: "Fond d'oeil" },
      { id: "f5", nom: "FO + Pachy + TOPOGRAPHIE CORNEE", codes: "BGQP002 + BDQP003 + BDQP002", raccourci: "FOT 3", tarif: "62,89 €", categorie: "Fond d'oeil" },
      { id: "f6", nom: "FO + Exploration des flux + RETINO", codes: "BGQP002 + BBQP001 + BGQP007", raccourci: "FO4", tarif: "58,72 €", categorie: "Fond d'oeil" },
      { id: "f7", nom: "FO + Exploration des flux + TOPOGRAPHIE CORNEE", codes: "BGQP002 + BBQP001 + BDQP002", raccourci: "FOT 4", tarif: "61,70 €", categorie: "Fond d'oeil" },
      { id: "f8", nom: "FO + MOT", codes: "BGQP002 + BJQP002", raccourci: "FOVMOT", tarif: "41,49 €", categorie: "Fond d'oeil" },
      { id: "f9", nom: "FO + VB", codes: "BGQP002 + BLQP010", raccourci: "FO+VB", tarif: "40,95 €", categorie: "Fond d'oeil" },
      { id: "f10", nom: "FO + MOT + RETINO", codes: "BGQP002 + BGQP007 + BJQP002", raccourci: "FO1", tarif: "51,90 €", categorie: "Fond d'oeil" },
      { id: "f11", nom: "FO + MOT + TOPOGRAPHIE CORNEE", codes: "BGQP002 + BDQP002 + BJQP002", raccourci: "FMT", tarif: "53,39 €", categorie: "Fond d'oeil" }
    ]
  },
  {
    id: "gonioscopie",
    titre: "Gonioscopie",
    icon: "Microscope",
    actes: [
      { id: "g1", nom: "GONIO + PAC", codes: "BDQP003 + BHQP002", raccourci: "GONIOP", tarif: "30,22 €", categorie: "Gonioscopie" },
      { id: "g2", nom: "GONIO + explo flux lacrymaux", codes: "BBQP001 + BHQP002", raccourci: "GONIO5", tarif: "27,86 €", categorie: "Gonioscopie" },
      { id: "g3", nom: "GONIO + Pachymétrie + RETINO", codes: "BDQP003 + BHQP002 + BGQP007", raccourci: "GONIO2", tarif: "51,03 €", categorie: "Gonioscopie" },
      { id: "g4", nom: "GONIO + explo flux lacrymaux + RETINO", codes: "BBQP001 + BHQP002 + BGQP007", raccourci: "GONIO4", tarif: "48,67 €", categorie: "Gonioscopie" }
    ]
  },
  {
    id: "adapt_ablation",
    titre: "Adaptation & Ablation",
    icon: "Scissors",
    actes: [
      { id: "aa1", nom: "ADAPT P + Explo flux lacrymaux", codes: "BDMP002 + BBQP001", raccourci: "ADAPT P1", tarif: "53,76 €", categorie: "Adaptation/Ablation" },
      { id: "aa2", nom: "ADAPT P + pachymetrie", codes: "BDMP002 + BDQP003", raccourci: "ADAPT P2", tarif: "54,95 €", categorie: "Adaptation/Ablation" },
      { id: "aa3", nom: "ABLATION + Explo flux lacrymaux", codes: "BDGP002 + BBQP001", raccourci: "ABLA 2", tarif: "30,50 €", categorie: "Ablation" },
      { id: "aa4", nom: "ABLATION + Pachymétrie", codes: "BDGP002 + BDQP003", raccourci: "ABLA 3", tarif: "31,69 €", categorie: "Ablation" },
      { id: "aa5", nom: "ABLATION P + Explo flux lacrymaux", codes: "BDGA002 + BBQP001", raccourci: "ABLAP3", tarif: "87,98 €", categorie: "Ablation" },
      { id: "aa6", nom: "ABLATION P + Pachymétrie", codes: "BDGA002 + BDQP003", raccourci: "ABLAP4", tarif: "89,17 €", categorie: "Ablation" }
    ]
  },
  {
    id: "adapt_lentilles",
    titre: "Adaptation Lentilles",
    icon: "Contact",
    actes: [
      { id: "al1", nom: "Adaptation lentille simple", codes: "BLMP002", raccourci: "ADAP", tarif: "71,04 €", categorie: "Adaptation lentille" },
      { id: "al2", nom: "ADAPT + Exploration des flux lacrymaux", codes: "BLMP002 + BBQP001", raccourci: "ADAP1", tarif: "80,64 €", categorie: "Adaptation lentille" },
      { id: "al3", nom: "ADAPT + Pachymetrie", codes: "BLMP002 + BDQP003", raccourci: "ADAP2", tarif: "81,83 €", categorie: "Adaptation lentille" },
      { id: "al4", nom: "ADAPT + Exploration des flux lacrymaux + Rétino", codes: "BLMP002 + BBQP001 + BGQP007", raccourci: "ADAPT 1", tarif: "101,47 €", categorie: "Adaptation lentille" },
      { id: "al5", nom: "ADAPT + Explo flux lacrymaux + topographie cornéenne", codes: "BLMP002 + BBQP001 + BDQP002", raccourci: "ADAPT 3", tarif: "104,45 €", categorie: "Adaptation lentille" },
      { id: "al6", nom: "ADAPT + Pachymetrie + topographie cornéenne", codes: "BLMP002 + BDQP003 + BDQP002", raccourci: "ADAPT 2", tarif: "105,63 €", categorie: "Adaptation lentille" }
    ]
  },
  {
    id: "oct",
    titre: "OCT",
    icon: "Activity",
    actes: [
      { id: "o1", nom: "OCT + VB", codes: "BZQK001 + BLQP010", raccourci: "OCTV", tarif: "69,20 €", categorie: "OCT" },
      { id: "o2", nom: "OCT + MOT", codes: "BZQK001 + BJQP002", raccourci: "OCTM", tarif: "69,66 €", categorie: "OCT" },
      { id: "o3", nom: "OCT + FO", codes: "BZQK001 + BGQP002", raccourci: "OCTF", tarif: "70,69 €", categorie: "OCT" },
      { id: "o4", nom: "OCT + RETINO", codes: "BZQK001 + BGQP007", raccourci: "OCTR", tarif: "66,95 €", categorie: "OCT" },
      { id: "o5", nom: "OCT + GONIO", codes: "BZQK001 + BHQP002", raccourci: "OCTG", tarif: "65,18 €", categorie: "OCT" },
      { id: "o6", nom: "OCT + FO + Pachymétrie", codes: "BZQK001 + BDQP003 + BGQP002", raccourci: "OCT2", tarif: "95,62 €", categorie: "OCT" },
      { id: "o7", nom: "OCT + FO + Topographie cornee", codes: "BZQK001 + BDQP002 + BGQP002", raccourci: "OCT9", tarif: "96,73 €", categorie: "OCT" },
      { id: "o8", nom: "OCT + Gonioscopie + Pachymetrie", codes: "BZQK001 + BHQP002 + BDQP003", raccourci: "OCT10", tarif: "86,76 €", categorie: "OCT" },
      { id: "o9", nom: "OCT + Gonioscopie + Topographie cornee", codes: "BZQK001 + BHQP002 + BDQP002", raccourci: "OCT11", tarif: "88,99 €", categorie: "OCT" },
      { id: "o10", nom: "OCT + Topographie cornee + Pachymetrie", codes: "BZQK001 + BDQP002 + BDQP003", raccourci: "OCT12", tarif: "91,14 €", categorie: "OCT" }
    ]
  }
];

export const AMY_NOTES = [
  { item: "OCT AVEC AMY", note: "Note" },
  { item: "AVEC Amy 8,5", note: "AMY guidance" },
  { item: "SANS Amy 8,5 mais avec AMY 6 ou Amy 5,8", note: "AMY alternatives" },
  { item: "Bilan orthoptique (cas exceptionnel avis strabisme/ordonnance)", note: "AMY guidance" },
  { item: "Fond d'oeil ou enfants sous skiacol/atropine (avec AMY8,5)", note: "AMY guidance" },
  { item: "Fond d'oeil SANS AMY 8,5 mais avec AMY 6 ou amy 5,8", note: "AMY guidance" },
  { item: "Gonioscopie oculaire", note: "AMY guidance" },
  { item: "Adaptation lentilles souples", note: "AMY guidance" },
  { item: "Adaptation de lentille pansement", note: "AMY guidance" },
  { item: "Ablation d’un corps étranger cornée superficiel", note: "AMY guidance" },
  { item: "Ablation d’un corps étranger cornée profond", note: "AMY guidance" },
  { item: "OCT (SANS amy 8,5)", note: "AMY guidance" }
];

export const REGLES_CUMUL = [
  { acte: "Consultation (médecin)", regle: "1 max / jour", remarque: "CS, APC, C2" },
  { acte: "Acte technique (médecin)", regle: "cumulable", remarque: "Ex: Ablation CE, Pachy, FO" },
  { acte: "Acte orthoptiste", regle: "1 max / jour", remarque: "AMY 8,5 ou autre selon acte" },
  { acte: "Deux consultations", regle: "Interdit", remarque: "Ne pas coter 2 CS/APC le même jour" },
  { acte: "Deux actes orthoptique", regle: "Interdit", remarque: "Ne pas coter 2 bilans le même jour" },
  { acte: "AMY 8,5", regle: "Obligatoire pour certains actes", remarque: "Voir AMY_notes" }
];


// 🎯 PARCOURS OPTIMISÉS - Guide complet d'optimisation des cotations
export const PARCOURS_OPTIMISES: Categorie[] = [
  {
    id: "parcours_diabete",
    titre: "🔵 Diabète - Parcours Optimisés",
    icon: "Droplet",
    actes: [
      { 
        id: "pd1", 
        nom: "Dépistage Simple (OCT + Rétinographie)", 
        codes: "BZQK001 + BGQP007 + CS", 
        raccourci: "DIAB-DEP", 
        tarif: "89,28 €", 
        categorie: "Diabète - Dépistage",
        description: "✅ Cumul valide. ❌ NE PAS ajouter EBQF004 (angiographie)"
      },
      { 
        id: "pd2", 
        nom: "Diagnostic DMLA Suspecte (OCT + Angiographie)", 
        codes: "BZQK001 + EBQF004 + CS", 
        raccourci: "DIAB-DMLA", 
        tarif: "111,58 €", 
        categorie: "Diabète - Diagnostic",
        description: "✅ EBQF004 remplace rétinographie. ❌ NE PAS ajouter BGQP007"
      },
      { 
        id: "pd3", 
        nom: "Traitement Laser (Photocoagulation)", 
        codes: "BGNP008 + CS", 
        raccourci: "DIAB-LASER", 
        tarif: "148,40 €", 
        categorie: "Diabète - Traitement",
        description: "✅ Acte thérapeutique majeur. ✅ Répétable selon protocole"
      }
    ]
  },
  {
    id: "parcours_glaucome",
    titre: "🟢 Glaucome - Parcours Optimisés",
    icon: "Eye",
    actes: [
      { 
        id: "pg1", 
        nom: "Diagnostic et Suivi (OCT Bilat. + Champ Visuel)", 
        codes: "BZQK001 (150%) + BLQP004 + CS", 
        raccourci: "GLAU-DIAG", 
        tarif: "127,53 €", 
        categorie: "Glaucome - Diagnostic",
        description: "✅ OCT bilatéral (150%) = 84,81 €. ✅ Champ visuel essentiel. ❌ NE PAS ajouter pachymétrie"
      },
      { 
        id: "pg2", 
        nom: "Laser YAG (Glaucome Aigu)", 
        codes: "BEPP002 + CS", 
        raccourci: "GLAU-YAG", 
        tarif: "106,60 €", 
        categorie: "Glaucome - Laser",
        description: "✅ Laser YAG pour fermeture d'angle. ✅ Acte thérapeutique d'urgence"
      },
      { 
        id: "pg3", 
        nom: "Laser SLT (Glaucome Chronique)", 
        codes: "BEPP003 + CS", 
        raccourci: "GLAU-SLT", 
        tarif: "106,60 €", 
        categorie: "Glaucome - Laser",
        description: "✅ Laser SLT = alternative aux gouttes. ✅ Moins invasif que chirurgie"
      },
      { 
        id: "pg4", 
        nom: "Chirurgie (Trabéculectomie)", 
        codes: "BEFA008 + CS", 
        raccourci: "GLAU-CHIR", 
        tarif: "232,00 €", 
        categorie: "Glaucome - Chirurgie",
        description: "✅ Acte chirurgical majeur. ✅ Tarif très élevé. ✅ Suivi post-op essentiel"
      }
    ]
  },
  {
    id: "parcours_dmla",
    titre: "🟡 DMLA - Parcours Optimisés",
    icon: "Zap",
    actes: [
      { 
        id: "pdm1", 
        nom: "Diagnostic (OCT Bilat. + Angiographie)", 
        codes: "BZQK001 (150%) + EBQF004 + CS", 
        raccourci: "DMLA-DIAG", 
        tarif: "139,85 €", 
        categorie: "DMLA - Diagnostic",
        description: "✅ OCT bilatéral (150%) = 84,81 €. ✅ Angiographie fluorescéine. ❌ NE PAS ajouter rétinographie"
      },
      { 
        id: "pdm2", 
        nom: "Suivi Simple (OCT Bilatéral)", 
        codes: "BZQK001 (150%) + CS", 
        raccourci: "DMLA-SUIVI", 
        tarif: "107,81 €", 
        categorie: "DMLA - Suivi",
        description: "✅ OCT bilatéral (150%). ✅ Suivi simple sans angiographie"
      },
      { 
        id: "pdm3", 
        nom: "Traitement (Injection Intravitréenne)", 
        codes: "BGLB001 + CS", 
        raccourci: "DMLA-INJ", 
        tarif: "106,60 €", 
        categorie: "DMLA - Traitement",
        description: "✅ Anti-VEGF (Avastin, Lucentis, Eylea). ✅ Répétable selon protocole"
      }
    ]
  },
  {
    id: "parcours_cataracte",
    titre: "🔴 Cataracte - Parcours Optimisés",
    icon: "Cloud",
    actes: [
      { 
        id: "pc1", 
        nom: "Diagnostic Pré-opératoire (OCT + Fond d'œil)", 
        codes: "BZQK001 + BGQP002 + CS", 
        raccourci: "CAT-PREOP", 
        tarif: "92,54 €", 
        categorie: "Cataracte - Pré-op",
        description: "✅ Évaluation maculaire. ✅ Ajouter biométrie (BFQM001) pour calcul implant"
      },
      { 
        id: "pc2", 
        nom: "Chirurgie (Extraction + Implant)", 
        codes: "BFGA427 + CS", 
        raccourci: "CAT-CHIR", 
        tarif: "294,70 €", 
        categorie: "Cataracte - Chirurgie",
        description: "✅ Acte chirurgical majeur. ✅ Tarif très élevé (271,70 €). ✅ Suivi post-op essentiel"
      }
    ]
  }
];

// ⚠️ RESTRICTIONS CRITIQUES - À ÉVITER ABSOLUMENT
export const RESTRICTIONS_CRITIQUES = [
  { 
    acte1: "BGQP007 - Rétinographie", 
    acte2: "EBQF004 - Angiographie fluorescéine", 
    restriction: "❌ Incompatible - NE PAS cumuler",
    conseil: "Choisir EBQF004 (64,07 €) si DMLA/Diabète compliqué, BGQP007 (19,48 €) si simple dépistage"
  },
  { 
    acte1: "BHQP002 - Gonioscopie oculaire", 
    acte2: "BHRP001 - Épreuve de provocation glaucome", 
    restriction: "❌ Incompatible - NE PAS cumuler",
    conseil: "Choisir BHRP001 (42,18 €) si test diagnostic, BHQP002 (16,74 €) si examen simple"
  },
  { 
    acte1: "APC - Avis Ponctuel", 
    acte2: "Autres actes CCAM", 
    restriction: "⚠️ Cumul limité à BAHA001 (biopsie) à 50%",
    conseil: "Utiliser CS (Consultation Spécialiste) pour plus de flexibilité"
  }
];

// ✅ RÈGLES D'OR POUR L'OPTIMISATION
export const REGLES_OPTIMISATION = [
  { 
    titre: "📊 Règle 100% / 50% / 0%", 
    details: "Acte 1 (100%) + Acte 2 (50%) + Acte 3+ (0%). Ex: OCT (56,54€) + Champ (39,43€) = 56,54 + 19,72 = 76,26€"
  },
  { 
    titre: "💰 Facturation Bilatérale (150%)", 
    details: "Si 2 yeux examinés: OCT 84,81€ (+28,27€), Champ 59,15€ (+19,72€), FO 39€ (+13€)"
  },
  { 
    titre: "🎯 Priorités", 
    details: "1. CS (29€) 2. Acte le plus cher (100%) 3. 2e acte (50%) 4. Vérifier bilatéral 5. Vérifier incompatibilités"
  }
];
