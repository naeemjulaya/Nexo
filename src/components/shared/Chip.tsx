import type { ReactNode } from "react";
import type { ChipTone } from "@/data/types";

export function Chip({
  children,
  active = false,
  small = false,
  tone,
}: {
  children: ReactNode;
  active?: boolean;
  small?: boolean;
  tone?: ChipTone;
}) {
  const base = small ? "px-2 py-[3px] text-[10.5px]" : "px-2.5 py-1 text-[11.5px]";
  if (active) {
    return (
      <span
        className={`${base} inline-flex items-center gap-1 rounded-full font-medium`}
        style={{ background: "#0f3a35", color: "#D8FFFA" }}
      >
        {children}
      </span>
    );
  }
  const toneStyle =
    tone === "warn"
      ? { color: "#E9C97A", background: "#221d10", border: "#3a3218" }
      : tone === "info"
        ? { color: "#9CC0F0", background: "#131c26", border: "#1f2f42" }
        : tone === "accent"
          ? { color: "#B8D97C", background: "#1a2214", border: "#2a361c" }
          : { color: "#A7B2BC", background: "#17212B", border: "#1f2b36" };
  return (
    <span
      className={`${base} inline-flex items-center gap-1 rounded-full font-medium`}
      style={{
        color: toneStyle.color,
        background: toneStyle.background,
        boxShadow: `inset 0 0 0 1px ${toneStyle.border}`,
      }}
    >
      {children}
    </span>
  );
}
