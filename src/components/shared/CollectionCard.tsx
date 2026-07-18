import { Folder } from "lucide-react";
import type { ThumbTone } from "@/data/types";

const toneBg: Record<ThumbTone, string> = {
  teal: "#0f2b30",
  amber: "#2a1f10",
  violet: "#1a1830",
  rose: "#2a161c",
  olive: "#1e2618",
  slate: "#141d25",
};

const toneColor: Record<ThumbTone, string> = {
  teal: "#2DD4BF",
  amber: "#E9C97A",
  violet: "#B49CE0",
  rose: "#E8A0B0",
  olive: "#C7F36B",
  slate: "#9AA8B5",
};

export function CollectionCard({
  name,
  count,
  updated,
  tone,
}: {
  name: string;
  count: number;
  updated: string;
  tone: ThumbTone;
}) {
  return (
    <div className="rounded-xl border border-nx-border/60 bg-nx-surface p-3">
      <div className="flex items-start justify-between">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ background: toneBg[tone] }}
        >
          <Folder size={15} color={toneColor[tone]} />
        </div>
        <span className="text-[10.5px] text-nx-text3">{count}</span>
      </div>
      <div className="mt-2 line-clamp-2 text-[12.5px] font-medium leading-snug text-nx-text">
        {name}
      </div>
      <div className="mt-2 flex items-center gap-1">
        <span className="h-4 w-6 rounded-[3px] bg-nx-interactive" />
        <span className="h-4 w-6 rounded-[3px] bg-nx-elevated" />
        <span className="h-4 w-6 rounded-[3px] bg-nx-interactive/60" />
      </div>
      <div className="mt-2 text-[10px] text-nx-text3">atualizado {updated}</div>
    </div>
  );
}
