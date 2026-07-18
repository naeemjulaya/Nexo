import { AlertTriangle, Archive, Link as LinkIcon } from "lucide-react";
import { PlatformDot, ScreenHeader, SecondaryButton } from "@/components/shared";

export function UnavailableContentScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader title="Detalhes" back />
      <div className="px-5">
        <div
          className="flex h-[130px] items-center justify-center rounded-xl border border-dashed"
          style={{ borderColor: "#3a3218", background: "#1a1710" }}
        >
          <div className="text-center">
            <AlertTriangle size={18} color="#F4BF50" className="mx-auto" />
            <div className="mt-1.5 text-[12px] text-nx-text2">
              Conteúdo indisponível na origem
            </div>
          </div>
        </div>
        <div className="mt-3">
          <PlatformDot platform="TikTok" />
          <h1 className="mt-1 text-[15.5px] font-semibold leading-snug text-nx-text">
            Ideia de embalagem para doces caseiros — kraft + selo
          </h1>
          <p className="mt-1 text-[11.5px] text-nx-text3">
            Guardado há 42 dias · última verificação: hoje
          </p>
        </div>
        <div className="mt-3 rounded-xl border border-nx-border/60 bg-nx-surface p-3">
          <div className="text-[10.5px] uppercase tracking-wider text-nx-text3">
            Nota pessoal (preservada)
          </div>
          <p className="mt-1 text-[12.5px] leading-relaxed text-nx-text">
            Usar como referência de rótulo para os potinhos de doce de leite.
          </p>
        </div>
        <div className="mt-4 space-y-2">
          <SecondaryButton className="h-11 w-full text-[13px]">
            <LinkIcon size={13} /> Substituir link
          </SecondaryButton>
          <SecondaryButton className="h-11 w-full text-[13px]">
            <Archive size={13} /> Arquivar
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
