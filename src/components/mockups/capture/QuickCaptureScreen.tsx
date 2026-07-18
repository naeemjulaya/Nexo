import { Bookmark, Check } from "lucide-react";
import {
  Chip,
  PlatformDot,
  PrimaryButton,
  SecondaryButton,
  Thumbnail,
} from "@/components/shared";

export function QuickCaptureScreen() {
  return (
    <div className="relative flex h-full flex-col bg-black/60">
      <div className="flex-1" />
      <div className="rounded-t-3xl bg-nx-elevated pb-5 pt-3">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-nx-border" />
        <div className="px-5">
          <div className="mb-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlatformDot platform="Instagram" />
              <span className="text-[11px] text-nx-text3">· identificado</span>
            </div>
            <button className="text-[12px] text-nx-text3">Fechar</button>
          </div>
          <div className="mt-2 flex items-start gap-3 rounded-xl bg-nx-surface p-3">
            <Thumbnail tone="rose" platform="IG" size={48} />
            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-[13px] font-medium text-nx-text">
                Como estruturar um vídeo de produto sem parecer anúncio
              </p>
              <p className="mt-1 truncate text-[11px] text-nx-text3">
                instagram.com/reel/CxY…
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-2 text-[11px] uppercase tracking-wider text-nx-text3">
              Categoria rápida
            </div>
            <div className="flex flex-wrap gap-1.5">
              <Chip>Assistir depois</Chip>
              <Chip>Tutorial</Chip>
              <Chip active>
                <Check size={10} color="#D8FFFA" /> Aplicar
              </Chip>
              <Chip>Inspiração</Chip>
              <Chip>Referência</Chip>
            </div>
          </div>
          <PrimaryButton className="mt-5 h-12 w-full text-[14px]">
            <Bookmark size={15} strokeWidth={2.4} />
            Guardar na Caixa de entrada
          </PrimaryButton>
          <SecondaryButton className="mt-2 h-11 w-full border-nx-border/70 text-[13px] font-medium">
            Organizar agora
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
