import type { Collection, ContentItem } from "./types";

export const libraryItems: ContentItem[] = [
  {
    title: "Como estruturar um vídeo de produto sem parecer anúncio",
    platform: "Instagram",
    creator: "@marina.films",
    date: "há 2 h",
    tags: [
      { label: "Aplicar", tone: "info" },
      { label: "roteiro" },
    ],
    tone: "rose",
    fav: true,
    fresh: true,
  },
  {
    title: "Animação simples para landing page de alimentos",
    platform: "YouTube",
    creator: "Studio Miel",
    date: "ontem",
    tags: [
      { label: "Assistir depois", tone: "warn" },
      { label: "motion" },
    ],
    tone: "amber",
  },
  {
    title: "Clean Architecture explicada com um exemplo Android",
    platform: "YouTube",
    creator: "Philipp Lackner",
    date: "3 dias",
    tags: [{ label: "android" }, { label: "estudo" }],
    tone: "teal",
  },
  {
    title: "Ideia de embalagem para doces caseiros — kraft + selo",
    platform: "TikTok",
    date: "5 dias",
    tags: [{ label: "Inspiração" }],
    tone: "olive",
  },
  {
    title:
      "twitter.com/…/status/1789412 — thread sobre estudar cálculo sem acumular matéria",
    platform: "X",
    date: "1 sem",
    empty: true,
    tone: "slate",
  },
  {
    title: "Transição simples para vídeos de produto (sem plugin)",
    platform: "Instagram",
    creator: "@edit.daily",
    date: "2 sem",
    tags: [{ label: "Aplicar", tone: "info" }],
    tone: "violet",
  },
];

export const searchResults: ContentItem[] = [
  {
    title: "Fotografar bolos com luz de janela — set caseiro",
    platform: "YouTube",
    creator: "Ateliê Confeito",
    date: "há 6 dias",
    tags: [
      { label: "Aplicar", tone: "info" },
      { label: "foto" },
    ],
    tone: "amber",
  },
  {
    title: "Ângulos para doces em bandeja — teste rápido",
    platform: "TikTok",
    creator: "@doce.arte",
    date: "há 2 sem",
    tags: [{ label: "Referência" }],
    tone: "olive",
  },
  {
    title: "Como fotografei os brigadeiros gourmet da Geny",
    platform: "Instagram",
    creator: "@geny.doces",
    date: "há 1 mês",
    tags: [{ label: "Caseirinhos" }],
    tone: "rose",
    fav: true,
  },
];

export const collections: Collection[] = [
  { name: "Ideias para conteúdo", count: 42, updated: "hoje", tone: "teal" },
  {
    name: "Desenvolvimento Android",
    count: 58,
    updated: "ontem",
    tone: "violet",
  },
  { name: "Marketing", count: 31, updated: "há 3 dias", tone: "amber" },
  { name: "Design de sites", count: 19, updated: "há 5 dias", tone: "slate" },
  { name: "Estudos", count: 27, updated: "há 1 sem", tone: "olive" },
  {
    name: "Caseirinhos da Geny",
    count: 14,
    updated: "há 2 sem",
    tone: "rose",
  },
  {
    name: "Para experimentar",
    count: 9,
    updated: "há 1 mês",
    tone: "teal",
  },
];

export const libraryStats = [
  { n: "18", l: "Entrada" },
  { n: "7", l: "Assistir" },
  { n: "4", l: "Aplicar" },
  { n: "3", l: "Rever" },
] as const;
