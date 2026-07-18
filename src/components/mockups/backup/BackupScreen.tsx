import { Check, ChevronRight, Download, Upload } from "lucide-react";
import { PrimaryButton, ScreenHeader, SecondaryButton } from "@/components/shared";

export function BackupScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader title="Backup e exportação" back />
      <div className="flex-1 overflow-y-auto px-5 pb-4">
        <div className="rounded-xl border border-nx-border/60 bg-nx-surface p-4">
          <div className="text-[11px] uppercase tracking-wider text-nx-text3">
            Backup completo
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <div>
              <div className="text-[13.5px] text-nx-text">Último backup</div>
              <div className="text-[11.5px] text-nx-text3">
                12 nov, 21:04 · 3,2 MB
              </div>
            </div>
            <span
              className="rounded-full px-2 py-[2px] text-[10.5px] font-medium"
              style={{ background: "#0f2b1c", color: "#4ADE80" }}
            >
              ok
            </span>
          </div>
          <div className="mt-4 flex gap-2">
            <PrimaryButton className="h-10 flex-1 rounded-lg text-[12.5px]">
              <Download size={13} /> Criar backup
            </PrimaryButton>
            <SecondaryButton className="h-10 flex-1 rounded-lg text-[12.5px]">
              <Upload size={13} /> Restaurar
            </SecondaryButton>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-nx-text3">
            Escolhes onde guardar o ficheiro. O Nexo não envia nada para servidores.
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-nx-border/60 bg-nx-surface">
          <div className="p-4">
            <div className="text-[11px] uppercase tracking-wider text-nx-text3">
              Exportação aberta
            </div>
            <p className="mt-1 text-[12.5px] text-nx-text2">
              Os teus dados continuam sob o teu controlo.
            </p>
          </div>
          <button className="flex w-full items-center justify-between border-t border-nx-border/60 px-4 py-3 text-left">
            <div>
              <div className="text-[13px] text-nx-text">Exportar JSON</div>
              <div className="text-[10.5px] text-nx-text3">Estrutura completa</div>
            </div>
            <ChevronRight size={15} color="#9AA8B5" />
          </button>
          <button className="flex w-full items-center justify-between border-t border-nx-border/60 px-4 py-3 text-left">
            <div>
              <div className="text-[13px] text-nx-text">Exportar CSV</div>
              <div className="text-[10.5px] text-nx-text3">
                Título, link, plataforma, notas
              </div>
            </div>
            <ChevronRight size={15} color="#9AA8B5" />
          </button>
        </div>

        <div
          className="mt-4 flex items-start gap-2 rounded-xl p-3"
          style={{ background: "#1a2214", boxShadow: "inset 0 0 0 1px #2a361c" }}
        >
          <Check size={13} color="#C7F36B" className="mt-0.5" />
          <div className="text-[11.5px] leading-relaxed text-nx-text">
            Backup <span className="text-nx-accent">nexo-2025-11-12.json</span> criado
            em Downloads.
          </div>
        </div>
      </div>
    </div>
  );
}
