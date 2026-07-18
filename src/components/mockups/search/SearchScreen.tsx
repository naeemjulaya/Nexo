import { Filter, X } from "lucide-react";
import { Chip, ContentItem, Divider, SearchField } from "@/components/shared";
import { searchResults } from "@/data/mockData";

export function SearchScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <div className="px-5 pt-3">
        <SearchField
          className="border border-nx-primary/40"
          iconColor="#2DD4BF"
          defaultValue="vídeo sobre fotografar bolos"
          trailing={<X size={13} color="#9AA8B5" />}
        />
        <div className="mt-3 flex gap-1.5 overflow-x-auto pb-2">
          <Chip active small>
            <Filter size={9} /> 2 filtros
          </Chip>
          <Chip small>Instagram</Chip>
          <Chip small>Últimos 30 dias</Chip>
          <Chip small>Favoritos</Chip>
        </div>
      </div>
      <div className="border-t border-nx-border/50 px-5 py-2 text-[11px] text-nx-text3">
        4 resultados · ordenado por relevância
      </div>
      <div className="flex-1 overflow-hidden">
        {searchResults.map((it, i) => (
          <div key={i}>
            <ContentItem item={it} />
            {i < searchResults.length - 1 ? <Divider /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
