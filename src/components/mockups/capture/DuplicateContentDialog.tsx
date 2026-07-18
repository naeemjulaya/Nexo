import { AlertTriangle } from "lucide-react";
import { PrimaryButton, SecondaryButton, Thumbnail } from "@/components/shared";

export function DuplicateContentDialog() {
  return (
    <div className="relative flex h-full flex-col bg-black/60">
      <div className="flex-1" />
      <div className="rounded-t-3xl bg-nx-elevated pb-5 pt-3">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-nx-border" />
        <div className="px-5">
          <div className="flex items-start gap-2">
            <AlertTriangle size={16} color="#F4BF50" className="mt-0.5" />
            <div>
              <div className="text-[14px] font-semibold text-nx-text">
                Este conteúdo já está na tua biblioteca.
              </div>
              <div className="mt-0.5 text-[11.5px] text-nx-text3">
                Guardado há 3 dias em <span className="text-nx-text2">Marketing</span>.
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-xl bg-nx-surface p-3">
            <Thumbnail tone="amber" size={44} />
            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-[12.5px] font-medium text-nx-text">
                Animação simples para landing page de alimentos
              </p>
              <p className="mt-0.5 text-[11px] text-nx-text3">
                YouTube · Studio Miel
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <PrimaryButton className="h-11 w-full text-[13px]">
              Ver conteúdo existente
            </PrimaryButton>
            <SecondaryButton className="h-10 w-full text-[12.5px]">
              Atualizar informações
            </SecondaryButton>
            <SecondaryButton className="h-10 w-full text-[12.5px]">
              Guardar novamente
            </SecondaryButton>
            <button className="h-9 w-full text-[12px] text-nx-text3">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
