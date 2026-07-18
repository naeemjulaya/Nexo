import { Clock, Home, Layers, Search } from "lucide-react";
import type { NavTab } from "@/data/types";

export function BottomNavigation({ active }: { active: NavTab }) {
  const items = [
    { id: "library" as const, label: "Biblioteca", Icon: Home },
    { id: "search" as const, label: "Pesquisa", Icon: Search },
    { id: "collections" as const, label: "Coleções", Icon: Layers },
    { id: "review" as const, label: "Revisão", Icon: Clock },
  ];

  return (
    <nav className="border-t border-nx-border/60 bg-nx-nav">
      <ul className="flex items-stretch justify-between px-2 py-1.5">
        {items.map(({ id, label, Icon }) => {
          const isActive = id === active;
          return (
            <li key={id} className="flex-1">
              <div className="flex flex-col items-center gap-0.5 py-1.5">
                <Icon
                  size={19}
                  strokeWidth={isActive ? 2.2 : 1.7}
                  color={isActive ? "#2DD4BF" : "#71808D"}
                />
                <span
                  className="text-[10.5px] font-medium"
                  style={{ color: isActive ? "#2DD4BF" : "#71808D" }}
                >
                  {label}
                </span>
                <span
                  className="mt-0.5 h-[2px] w-4 rounded-full"
                  style={{ background: isActive ? "#2DD4BF" : "transparent" }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
