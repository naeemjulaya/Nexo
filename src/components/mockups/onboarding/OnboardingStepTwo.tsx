import {
  ChevronDown,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Music2,
  Twitter,
  Youtube,
} from "lucide-react";
import { OnboardingShell } from "@/components/shared";

export function OnboardingStepTwo() {
  return (
    <OnboardingShell
      step={2}
      eyebrow="02 · Fluxo de partilha"
      title="Partilha. Guarda. Continua."
      body="Do Instagram, TikTok, YouTube ou navegador, escolhe Nexo no menu Partilhar e volta ao que estavas a fazer."
    >
      <div className="mx-auto mt-4 flex w-[240px] flex-col gap-2">
        <div className="rounded-xl bg-nx-elevated p-3">
          <div className="mb-1 text-[10.5px] uppercase tracking-wider text-nx-text3">
            Menu Partilhar
          </div>
          <div className="flex items-center gap-2 text-[12px] text-nx-text2">
            <Instagram size={12} color="#E1306C" />
            <Music2 size={12} color="#9AA8B5" />
            <Youtube size={12} color="#EF5A5A" />
            <Facebook size={12} color="#4C8BF5" />
            <Twitter size={12} color="#9AA8B5" />
            <Linkedin size={12} color="#4C8BF5" />
            <Globe size={12} color="#9AA8B5" />
          </div>
        </div>
        <div className="flex items-center justify-center py-1">
          <ChevronDown size={16} color="#2DD4BF" />
        </div>
        <div
          className="rounded-xl p-3"
          style={{ background: "#0f3a35", color: "#D8FFFA" }}
        >
          <div className="mb-1 text-[10.5px] uppercase tracking-wider opacity-70">
            Guardado
          </div>
          <div className="text-[12.5px] font-medium">Caixa de entrada · 1 novo</div>
        </div>
      </div>
    </OnboardingShell>
  );
}
