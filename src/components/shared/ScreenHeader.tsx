import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

export function ScreenHeader({
  title,
  count,
  back,
  actions,
}: {
  title: string;
  count?: string;
  back?: boolean;
  actions?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between px-5 pb-3 pt-3">
      <div className="flex items-center gap-2">
        {back ? <ArrowLeft size={18} color="#F3F6F8" /> : null}
        <div>
          <h2 className="text-[17px] font-semibold leading-tight text-nx-text">{title}</h2>
          {count ? <p className="text-[11.5px] text-nx-text3">{count}</p> : null}
        </div>
      </div>
      <div className="flex items-center gap-1">{actions}</div>
    </div>
  );
}
