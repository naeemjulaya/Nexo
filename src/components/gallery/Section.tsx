import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
  desc,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  desc?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-nx-primary">
            {eyebrow}
          </div>
          <h2
            className="mt-2 text-[26px] font-semibold text-white"
            style={{ fontFamily: "var(--font-nx)" }}
          >
            {title}
          </h2>
          {desc ? (
            <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-white/55">
              {desc}
            </p>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}
