export type ThumbTone = "teal" | "amber" | "violet" | "rose" | "slate" | "olive";

export type ChipTone = "warn" | "info" | "accent";

export type NavTab = "library" | "search" | "collections" | "review";

export type ContentTag = {
  label: string;
  tone?: ChipTone;
};

export type ContentItem = {
  title: string;
  platform: string;
  creator?: string;
  date: string;
  tags?: ContentTag[];
  tone?: ThumbTone;
  empty?: boolean;
  status?: string;
  fav?: boolean;
  fresh?: boolean;
};

export type Collection = {
  name: string;
  count: number;
  updated: string;
  tone: ThumbTone;
};
