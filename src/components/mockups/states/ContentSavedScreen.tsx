import { Check, Settings } from "lucide-react";
import {
  Chip,
  ContentItem,
  Divider,
  IconButton,
  ScreenHeader,
} from "@/components/shared";
import { libraryItems } from "@/data/mockData";

export function ContentSavedScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader
        title="Biblioteca"
        count="249 itens · 1 novo"
        actions={
          <IconButton>
            <Settings size={16} color="#9AA8B5" />
          </IconButton>
        }
      />
      <div className="mb-1 flex gap-1.5 overflow-x-auto px-5 pb-2">
        <Chip active>Todos</Chip>
        <Chip>Entrada</Chip>
        <Chip>Assistir depois</Chip>
      </div>
      <div className="flex-1 overflow-hidden">
        <div
          className="mx-5 mb-2 rounded-xl border-l-2 bg-nx-surface"
          style={{ borderColor: "#C7F36B" }}
        >
          <ContentItem item={{ ...libraryItems[0], fresh: true }} />
        </div>
        <Divider />
        {libraryItems.slice(1, 4).map((it, i) => (
          <div key={i}>
            <ContentItem item={it} />
            {i < 2 ? <Divider /> : null}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-5 bottom-24 rounded-xl bg-nx-elevated p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-full"
            style={{ background: "#0f2b30" }}
          >
            <Check size={12} color="#2DD4BF" strokeWidth={2.5} />
          </div>
          <span className="flex-1 text-[12.5px] text-nx-text">
            Guardado na Caixa de entrada.
          </span>
          <button className="text-[11.5px] font-medium text-nx-primary">
            Organizar
          </button>
        </div>
      </div>
    </div>
  );
}
