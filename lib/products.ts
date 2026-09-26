import data from "@/data/products.json";

export type Range = "signature" | "essentiels" | "selection";

export type Product = {
  id: number;
  slug: string;
  name: string;
  type: string;
  price: number;
  range: Range;
  subCollection: string | null;
  handmade: boolean;
  fulfilment: "atelier" | "dropshipping";
  soldOut: boolean;
  personalised: boolean;
  oldName: string;
};

export const products = data as Product[];

export const RANGES: Record<Range, { label: string; badge: string; path: string; short: string }> = {
  signature: {
    label: "Signature Kitsune",
    badge: "Signature",
    path: "/signature",
    short: "Des pièces faites main et personnalisées : votre signe solaire, votre lune, votre chemin de vie, trois pierres choisies pour vous.",
  },
  essentiels: {
    label: "Les Essentiels",
    badge: "Essentiels",
    path: "/essentiels",
    short: "Une pierre, une intention. Les Essences Stellaires et leurs porte-clés, faits main à prix doux.",
  },
  selection: {
    label: "La Sélection",
    badge: "Sélection Kitsune",
    path: "/selection",
    short: "Colliers, bagues, boucles d'oreilles et bracelets que j'ai choisis chez des fournisseurs de confiance, pour compléter l'univers Kitsune.",
  },
};

/** Rayons de la Sélection, par type de bijou. */
export function aisle(p: Product): string {
  if (p.type === "Collier") return "Colliers et pendentifs";
  if (p.type === "Bracelet") return "Bracelets";
  if (p.type === "Boucles d'oreilles") return "Boucles d'oreilles";
  if (p.type === "Bague") return "Bagues";
  if (p.type === "Porte-clés") return "Porte-clés";
  return "Coffrets et accessoires";
}

export const SIGNATURE_DETAILS: Record<string, string> = {
  "trio-celeste": "Trois pierres pour votre signe solaire, votre lune et votre ascendant, sur perles de lave.",
  "bracelet-astro-guide": "Des pierres choisies à partir de votre thème astral complet.",
  "bracelet-chemin-de-vie-bijou-energetique-personnalise": "Des pierres liées à votre nombre de chemin de vie en numérologie.",
  "bracelet-cycle-lunaire": "Un bracelet qui suit les phases de la lune.",
  "bracelet-a-intention-ciblee": "Des pierres choisies pour l'intention que vous me confiez.",
  "bracelet-energetique-personnalise": "Une création libre, née de notre échange.",
  "bracelet-duo-parent-enfant": "Deux bracelets assortis, un adulte et un enfant.",
  "bracelet-intuitif-enfant": "Un bracelet taille enfant, aux pierres douces.",
};

export function bySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function inRange(range: Range) {
  return products.filter((p) => p.range === range);
}

export function formatPrice(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(n);
}

/** Couleurs indicatives des pierres, pour l'illustration en attendant les photos. */
const STONES: [RegExp, string][] = [
  [/améthyste|violet|pourpre|violette|fluorite/i, "#9b7fd4"],
  [/quartz rose|rose|tendresse|cœur|pétales|aurore/i, "#e7a6b8"],
  [/obsidienne|onyx|lave|ancrage|gin/i, "#2b2b36"],
  [/citrine|soleil|rayons|rayonnement/i, "#e8b64c"],
  [/cornaline|jaspe|olympe/i, "#c9583b"],
  [/lapis|sodalite|azur|marine|bleu|lagon|voie lactée/i, "#3f5bc2"],
  [/amazonite|aigue|émeraude|végétale|lagon|harmonie/i, "#5fb3a1"],
  [/pierre de lune|lune|séléné|écume|flocons|neige|yuki|howlite/i, "#dfe3f5"],
  [/labradorite|mystique|brume/i, "#7e8fa3"],
  [/œil de tigre|tigre|abondance/i, "#a8742b"],
  [/quartz fumé|santal|bois/i, "#8a6a4f"],
];

export function stoneColor(p: Product): string {
  for (const [re, c] of STONES) if (re.test(p.name) || re.test(p.oldName)) return c;
  return "#b8bcef";
}
