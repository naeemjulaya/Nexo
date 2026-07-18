import { WifiOff } from "lucide-react";
import { ContentItem, Divider, ScreenHeader } from "@/components/shared";
import { libraryItems } from "@/data/mockData";

export function OfflineScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader title="Biblioteca" count="offline" />
      <div className="mx-5 flex items-center gap-2 rounded-xl border border-nx-border/60 bg-nx-surface p-3">
        <WifiOff size={15} color="#F4BF50" />
        <div className="min-w-0 flex-1 text-[12px] text-nx-text2">
          Sem ligação. Os teus conteúdos guardados continuam disponíveis.
        </div>
      </div>
      <div className="mt-2 flex-1 overflow-hidden">
        {libraryItems.slice(0, 4).map((it, i) => (
          <div key={i}>
            <ContentItem item={{ ...it, tags: undefined }} compact />
            {i < 3 ? <Divider /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
