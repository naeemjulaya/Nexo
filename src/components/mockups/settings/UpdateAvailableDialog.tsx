import { RefreshCw } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/shared";

export function UpdateAvailableDialog() {
  return (
    <div className="relative flex h-full flex-col bg-black/60">
      <div className="flex-1" />
      <div className="mx-5 mb-6 rounded-2xl bg-nx-elevated p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RefreshCw size={14} color="#2DD4BF" />
            <span className="text-[10.5px] uppercase tracking-wider text-nx-text3">
              Nova versão
            </span>
          </div>
          <span className="text-[11px] text-nx-text3">4,7 MB</span>
        </div>
        <h3 className="mt-2 text-[16px] font-semibold text-nx-text">
          Nexo 1.4.2 disponível
        </h3>
        <ul className="mt-3 space-y-1.5 text-[12px] leading-relaxed text-nx-text2">
          <li>· Categorias rápidas no menu Partilhar.</li>
          <li>· Modo de revisão semanal opcional.</li>
          <li>· Corrigido: thumbnails do TikTok em alguns links.</li>
        </ul>
        <div className="mt-4 flex gap-2">
          <SecondaryButton className="h-10 flex-1 rounded-lg text-[12.5px]">
            Lembrar mais tarde
          </SecondaryButton>
          <PrimaryButton className="h-10 flex-1 rounded-lg text-[12.5px]">
            Atualizar
          </PrimaryButton>
        </div>
      </div>
      <div className="h-2" />
    </div>
  );
}
