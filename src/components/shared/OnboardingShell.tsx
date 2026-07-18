import type { ReactNode } from "react";
import { PrimaryButton } from "./PrimaryButton";

export function OnboardingShell({
  step,
  eyebrow,
  title,
  body,
  children,
}: {
  step: 1 | 2 | 3;
  eyebrow: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <div className="flex items-center justify-between px-5 pt-4">
        <span className="text-[11px] font-semibold tracking-[0.18em] text-nx-primary">
          NEXO
        </span>
        <button className="text-[12px] text-nx-text3">Ignorar</button>
      </div>
      <div className="flex flex-1 flex-col justify-between px-5 pb-6 pt-6">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-nx-text3">
            {eyebrow}
          </span>
          <h1 className="mt-1 text-[22px] font-semibold leading-tight text-nx-text">
            {title}
          </h1>
          <p className="mt-2 max-w-[260px] text-[13px] leading-relaxed text-nx-text2">
            {body}
          </p>
        </div>
        <div className="my-6 flex-1">{children}</div>
        <div>
          <div className="mb-5 flex items-center gap-1.5">
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className="h-1 rounded-full transition-all"
                style={{
                  width: n === step ? 22 : 6,
                  background: n === step ? "#2DD4BF" : "#263440",
                }}
              />
            ))}
          </div>
          <PrimaryButton className="h-11 w-full text-[14px]">
            {step === 3 ? "Começar" : "Continuar"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
