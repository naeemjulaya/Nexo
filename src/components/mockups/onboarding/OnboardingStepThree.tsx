import { Clock, Layers, Search } from "lucide-react";
import { OnboardingShell } from "@/components/shared";

export function OnboardingStepThree() {
  return (
    <OnboardingShell
      step={3}
      eyebrow="03 · Encontrar mais tarde"
      title="Encontra quando realmente precisares."
      body="Pesquisa, coleções, notas pessoais e um modo de revisão para não esqueceres o que guardaste."
    >
      <div className="mx-auto mt-4 flex w-[240px] flex-col gap-2">
        <div className="flex items-center gap-2 rounded-xl bg-nx-input px-3 py-2.5">
          <Search size={13} color="#9AA8B5" />
          <span className="text-[12px] text-nx-text3">vídeo sobre fotografar bolos</span>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-xl border border-nx-border/60 bg-nx-surface p-2.5">
            <Layers size={13} color="#2DD4BF" />
            <div className="mt-1 text-[11px] text-nx-text">Coleções</div>
            <div className="text-[10px] text-nx-text3">7 ativas</div>
          </div>
          <div className="flex-1 rounded-xl border border-nx-border/60 bg-nx-surface p-2.5">
            <Clock size={13} color="#C7F36B" />
            <div className="mt-1 text-[11px] text-nx-text">Revisão</div>
            <div className="text-[10px] text-nx-text3">3 para rever</div>
          </div>
        </div>
      </div>
    </OnboardingShell>
  );
}
