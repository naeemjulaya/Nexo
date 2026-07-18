import type { ReactNode } from "react";
import type { NavTab } from "@/data/types";
import { BottomNavigation } from "./BottomNavigation";

function StatusBar() {
  return (
    <div className="flex h-7 items-center justify-between px-5 text-[11px] font-medium tracking-wide text-nx-text/90">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-nx-text/70" />
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-nx-text/40" />
        <span className="ml-1 inline-block h-2 w-3 rounded-[2px] border border-nx-text/60" />
      </div>
    </div>
  );
}

function GestureBar() {
  return (
    <div className="flex h-5 items-end justify-center pb-1.5">
      <span className="h-1 w-24 rounded-full bg-nx-text/25" />
    </div>
  );
}

export function PhoneFrame({
  label,
  caption,
  children,
  nav,
  wide = false,
}: {
  label: string;
  caption?: string;
  children: ReactNode;
  nav?: NavTab | null;
  wide?: boolean;
}) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <div
        className={
          "relative overflow-hidden rounded-[38px] bg-nx-bg ring-1 ring-[#1c2731] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] " +
          (wide ? "w-[360px]" : "w-[320px]")
        }
        style={{ fontFamily: "var(--font-nx)" }}
      >
        <StatusBar />
        <div className="flex h-[620px] flex-col">
          <div className="flex-1 overflow-hidden">{children}</div>
          {nav !== null && nav !== undefined ? <BottomNavigation active={nav} /> : null}
        </div>
        <GestureBar />
      </div>
      <figcaption className="max-w-[320px] text-center">
        <div className="text-sm font-medium text-white/90">{label}</div>
        {caption ? <div className="mt-0.5 text-xs text-white/40">{caption}</div> : null}
      </figcaption>
    </figure>
  );
}
