import type { ReactNode } from "react";

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{ background: "#0f2b30" }}
      >
        {icon}
      </div>
      <h3 className="text-[15px] font-semibold text-nx-text">{title}</h3>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-nx-text2">{description}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
