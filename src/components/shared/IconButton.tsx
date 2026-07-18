import type { ReactNode } from "react";

export function IconButton({
  children,
  primary,
}: {
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <button
      className="inline-flex h-8 w-8 items-center justify-center rounded-full"
      style={{
        background: primary ? "#17212B" : "transparent",
      }}
    >
      {children}
    </button>
  );
}
