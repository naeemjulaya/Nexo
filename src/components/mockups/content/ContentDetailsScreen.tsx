import {
  Archive,
  ArrowLeft,
  Edit3,
  MoreVertical,
  Play,
  Share2,
  Star,
} from "lucide-react";
import {
  Chip,
  IconButton,
  PlatformDot,
  PrimaryButton,
  SecondaryButton,
} from "@/components/shared";

export function ContentDetailsScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <div className="flex items-center justify-between px-5 pt-3">
        <IconButton>
          <ArrowLeft size={18} color="#F3F6F8" />
        </IconButton>
        <div className="flex items-center gap-1">
          <IconButton>
            <Star size={16} color="#C7F36B" fill="#C7F36B" strokeWidth={0} />
          </IconButton>
          <IconButton>
            <MoreVertical size={17} color="#F3F6F8" />
          </IconButton>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pt-2 pb-4">
        <div
          className="mb-3 flex h-[130px] w-full items-center justify-center overflow-hidden rounded-xl"
          style={{ background: "linear-gradient(140deg,#14343a,#0f2429)" }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40">
            <Play size={17} color="#F3F6F8" fill="#F3F6F8" strokeWidth={0} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <PlatformDot platform="Instagram" />
          <span className="text-[11px] text-nx-text3">
            · @marina.films · guardado há 2 h
          </span>
        </div>
        <h1 className="mt-1.5 text-[17px] font-semibold leading-snug text-nx-text">
          Como estruturar um vídeo de produto sem parecer anúncio
        </h1>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Chip small tone="info">
            Aplicar
          </Chip>
          <Chip small>roteiro</Chip>
          <Chip small>gancho</Chip>
        </div>

        <div className="mt-4 rounded-xl border border-nx-border/60 bg-nx-surface p-3">
          <div className="text-[10.5px] uppercase tracking-wider text-nx-text3">
            Nota pessoal
          </div>
          <p className="mt-1 text-[13px] leading-relaxed text-nx-text">
            Aplicar gancho → contexto → prova no próximo vídeo do lançamento da Geny.
          </p>
        </div>

        <div className="mt-3 rounded-xl border border-nx-border/60 bg-nx-surface p-3">
          <div className="text-[10.5px] uppercase tracking-wider text-nx-text3">
            Texto partilhado
          </div>
          <p className="mt-1 text-[12.5px] leading-relaxed text-nx-text2">
            "3 mudanças que fizeram os meus vídeos parecerem menos anúncio e
            venderem mais."
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl bg-nx-surface px-3 py-2.5">
          <div className="min-w-0">
            <div className="text-[10.5px] uppercase tracking-wider text-nx-text3">
              Link original
            </div>
            <div className="mt-0.5 truncate text-[12px] text-nx-text">
              instagram.com/reel/CxY-8f2Kq
            </div>
          </div>
          <Share2 size={15} color="#9AA8B5" />
        </div>

        <PrimaryButton className="mt-4 h-11 w-full text-[13.5px]">
          Abrir original
        </PrimaryButton>
        <div className="mt-2 flex gap-2">
          <SecondaryButton className="h-10 flex-1 text-[12.5px]">
            <Edit3 size={13} /> Editar
          </SecondaryButton>
          <SecondaryButton className="h-10 flex-1 text-[12.5px]">
            <Archive size={13} /> Arquivar
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
