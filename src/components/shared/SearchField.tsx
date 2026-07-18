import type { InputHTMLAttributes, ReactNode } from "react";
import { Search } from "lucide-react";

export function SearchField({
  trailing,
  iconColor = "#9AA8B5",
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  trailing?: ReactNode;
  iconColor?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl bg-nx-input px-3 py-2.5 ${className}`}
    >
      <Search size={14} color={iconColor} />
      <input
        className="flex-1 bg-transparent text-[13px] text-nx-text outline-none"
        {...props}
      />
      {trailing}
    </div>
  );
}
