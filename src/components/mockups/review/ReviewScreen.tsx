import { Bell, Play, Trash2 } from "lucide-react";
import {
  Chip,
  IconButton,
  PlatformDot,
  PrimaryButton,
  ScreenHeader,
  SecondaryButton,
} from "@/components/shared";

export function ReviewScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader
        title="Revisão"
        count="12 conteúdos aguardam revisão"
        actions={
          <IconButton>
            <Bell size={16} color="#9AA8B5" />
          </IconButton>
        }
      />
      <div className="px-5">
        <div className="mb-3 flex items-center justify-between text-[11px] text-nx-text3">
          <span>3 de 12 revistos</span>
          <span>guardados há mais de 30 dias</span>
        </div>
        <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-nx-interactive">
          <div className="h-full rounded-full" style={{ width: "25%", background: "#2DD4BF" }} />
        </div>
        <div className="rounded-2xl border border-nx-border/60 bg-nx-surface p-4">
          <div className="mb-3 flex items-center gap-2">
            <PlatformDot platform="YouTube" />
            <span className="text-[11px] text-nx-text3">· guardado há 47 dias</span>
          </div>
          <div
            className="mb-3 flex h-[120px] items-center justify-center overflow-hidden rounded-lg"
            style={{ background: "linear-gradient(140deg,#2a1f10,#1a1409)" }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40">
              <Play size={16} color="#F3F6F8" fill="#F3F6F8" strokeWidth={0} />
            </div>
          </div>
          <h3 className="text-[14px] font-medium leading-snug text-nx-text">
            Estrutura de roteiro para vídeos educativos (18 min)
          </h3>
          <p className="mt-1 text-[11.5px] text-nx-text3">
            Nunca abriste este conteúdo. Vale a pena manter?
          </p>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <PrimaryButton className="h-9 rounded-lg text-[12px]">
              Manter
            </PrimaryButton>
            <SecondaryButton className="h-9 rounded-lg text-[12px]">
              Assistir depois
            </SecondaryButton>
            <SecondaryButton className="h-9 rounded-lg text-[12px]">
              Para aplicar
            </SecondaryButton>
            <SecondaryButton className="h-9 rounded-lg text-[12px]">
              Arquivar
            </SecondaryButton>
          </div>
          <button className="mt-2 flex w-full items-center justify-center gap-1 text-[11.5px] text-nx-error/80">
            <Trash2 size={11} /> Eliminar
          </button>
        </div>
        <div className="mt-3 flex gap-1.5 overflow-x-auto">
          <Chip small>+7 dias</Chip>
          <Chip small active>
            +30 dias
          </Chip>
          <Chip small>Nunca abertos</Chip>
          <Chip small>Sem coleção</Chip>
          <Chip small>Sem nota</Chip>
        </div>
      </div>
    </div>
  );
}
