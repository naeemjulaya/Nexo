import { Bookmark } from "lucide-react";
import { Chip, OnboardingShell, PlatformDot } from "@/components/shared";

export function OnboardingStepOne() {
  return (
    <OnboardingShell
      step={1}
      eyebrow="01 · Boas-vindas"
      title="Tudo o que guardas, num só lugar."
      body="Centraliza vídeos, publicações e links que encontras nas redes sociais — sem depender de nenhuma delas."
    >
      <div className="mx-auto mt-6 w-[240px] rounded-2xl border border-nx-border/60 bg-nx-surface p-3">
        <div className="mb-2 flex items-center gap-2">
          <PlatformDot platform="Instagram" />
          <span className="text-[10.5px] text-nx-text3">· hoje, 21:14</span>
        </div>
        <p className="text-[12.5px] leading-snug text-nx-text">
          Como estruturar um vídeo de produto sem parecer anúncio
        </p>
        <div className="mt-3 flex items-center justify-between">
          <Chip small tone="info">
            Aplicar
          </Chip>
          <Bookmark size={13} color="#2DD4BF" fill="#2DD4BF" strokeWidth={0} />
        </div>
      </div>
    </OnboardingShell>
  );
}
