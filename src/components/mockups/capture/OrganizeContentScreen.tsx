import { Check, ChevronDown } from "lucide-react";
import { Chip, ScreenHeader } from "@/components/shared";

export function OrganizeContentScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader
        title="Organizar"
        back
        actions={
          <button className="text-[12.5px] font-medium text-nx-primary">Guardar</button>
        }
      />
      <div className="flex-1 overflow-y-auto px-5 pb-4">
        <label className="block text-[11px] uppercase tracking-wider text-nx-text3">
          Título
        </label>
        <input
          className="mt-1.5 h-10 w-full rounded-lg border border-nx-border/60 bg-nx-input px-3 text-[13px] text-nx-text outline-none"
          defaultValue="Como estruturar um vídeo de produto"
        />
        <label className="mt-4 block text-[11px] uppercase tracking-wider text-nx-text3">
          Nota pessoal
        </label>
        <div className="mt-1.5 rounded-lg border border-nx-primary/40 bg-nx-input p-3">
          <p className="text-[13px] leading-relaxed text-nx-text">
            Aplicar a estrutura de gancho → contexto → prova no próximo vídeo do
            lançamento da Geny.
          </p>
          <p className="mt-1.5 text-[11px] text-nx-text3">
            Escreve por que este conteúdo é importante para ti.
          </p>
        </div>
        <div className="mt-4">
          <div className="mb-2 text-[11px] uppercase tracking-wider text-nx-text3">
            Coleções
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Chip active>
              <Check size={10} color="#D8FFFA" /> Ideias para conteúdo
            </Chip>
            <Chip>Marketing</Chip>
            <Chip>Caseirinhos da Geny</Chip>
            <Chip>+</Chip>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2 text-[11px] uppercase tracking-wider text-nx-text3">
            Etiquetas
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Chip small>roteiro</Chip>
            <Chip small>gancho</Chip>
            <Chip small>produto</Chip>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-nx-border/60">
          <button className="flex w-full items-center justify-between px-3 py-2.5">
            <span className="text-[12.5px] text-nx-text">Estado e prioridade</span>
            <ChevronDown size={14} color="#9AA8B5" />
          </button>
          <div className="border-t border-nx-border/60 px-3 py-2.5">
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-nx-text2">Estado</span>
              <Chip small tone="info">
                Aplicar
              </Chip>
            </div>
            <div className="mt-2 flex items-center justify-between text-[12px]">
              <span className="text-nx-text2">Prioridade</span>
              <span className="text-nx-text">Média</span>
            </div>
          </div>
        </div>
        <button className="mt-4 flex w-full items-center justify-between rounded-lg border border-nx-border/60 px-3 py-2.5 text-left">
          <span className="text-[12.5px] text-nx-text">Criador e origem</span>
          <ChevronDown size={14} color="#9AA8B5" />
        </button>
      </div>
    </div>
  );
}
