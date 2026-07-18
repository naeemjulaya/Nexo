import { Bookmark, Link as LinkIcon } from "lucide-react";
import { EmptyState, ScreenHeader } from "@/components/shared";

export function EmptyInboxScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader title="Caixa de entrada" count="0 itens novos" />
      <EmptyState
        icon={<Bookmark size={18} color="#2DD4BF" />}
        title="Nada de novo por aqui."
        description="Partilha um vídeo do Instagram, TikTok ou YouTube para Nexo e ele aparece aqui em segundos."
        action={
          <button className="flex items-center gap-1.5 rounded-xl border border-nx-border/60 px-3 py-2 text-[12px] text-nx-text">
            <LinkIcon size={12} /> Adicionar link manualmente
          </button>
        }
      />
    </div>
  );
}
