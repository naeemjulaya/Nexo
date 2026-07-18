import { Plus, Settings } from "lucide-react";
import {
  Chip,
  ContentItem,
  Divider,
  IconButton,
  ScreenHeader,
} from "@/components/shared";
import { libraryItems, libraryStats } from "@/data/mockData";

export function LibraryScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader
        title="Biblioteca"
        count="248 itens · atualizado agora"
        actions={
          <>
            <IconButton>
              <Plus size={17} color="#F3F6F8" />
            </IconButton>
            <IconButton>
              <Settings size={16} color="#9AA8B5" />
            </IconButton>
          </>
        }
      />
      <div className="mx-5 mb-3 grid grid-cols-4 divide-x divide-nx-border/60 rounded-xl border border-nx-border/60 bg-nx-surface">
        {libraryStats.map((s, i) => (
          <div key={s.l} className="px-2 py-2.5 text-center">
            <div
              className="text-[15px] font-semibold"
              style={{ color: i === 3 ? "#C7F36B" : "#F3F6F8" }}
            >
              {s.n}
            </div>
            <div className="mt-0.5 text-[10px] text-nx-text3">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="mb-1 flex gap-1.5 overflow-x-auto px-5 pb-2">
        <Chip active>Todos</Chip>
        <Chip>Entrada</Chip>
        <Chip>Assistir depois</Chip>
        <Chip>Aplicar</Chip>
        <Chip>Favoritos</Chip>
      </div>
      <div className="flex-1 overflow-hidden">
        {libraryItems.slice(0, 5).map((it, i) => (
          <div key={i}>
            <ContentItem item={it} />
            {i < 4 ? <Divider /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
