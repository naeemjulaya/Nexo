import { ChevronRight } from "lucide-react";

export function SettingRow({
  label,
  value,
  toggle,
}: {
  label: string;
  value?: string;
  toggle?: "on" | "off";
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-[13px] text-nx-text">{label}</span>
      {toggle ? (
        <span
          className="relative inline-block h-5 w-9 rounded-full"
          style={{ background: toggle === "on" ? "#2DD4BF" : "#263440" }}
        >
          <span
            className="absolute top-0.5 h-4 w-4 rounded-full bg-nx-text"
            style={{ left: toggle === "on" ? 18 : 2 }}
          />
        </span>
      ) : (
        <div className="flex items-center gap-1 text-[12px] text-nx-text3">
          {value}
          <ChevronRight size={13} />
        </div>
      )}
    </div>
  );
}
