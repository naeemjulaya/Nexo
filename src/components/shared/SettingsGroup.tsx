import type { ReactNode } from "react";

export function SettingsGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-4">
      <div className="px-5 pb-1.5 text-[10.5px] font-medium uppercase tracking-wider text-nx-text3">
        {title}
      </div>
      <div className="mx-4 divide-y divide-nx-border/50 rounded-xl border border-nx-border/60 bg-nx-surface">
        {children}
      </div>
    </div>
  );
}
