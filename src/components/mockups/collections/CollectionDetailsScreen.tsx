import { ArrowLeft, Filter, Folder, MoreVertical } from "lucide-react";
import {
  Chip,
  ContentItem,
  Divider,
  IconButton,
} from "@/components/shared";
import { libraryItems } from "@/data/mockData";

export function CollectionDetailsScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <div className="flex items-center justify-between px-5 pt-3">
        <IconButton>
          <ArrowLeft size={18} color="#F3F6F8" />
        </IconButton>
        <IconButton>
          <MoreVertical size={17} color="#F3F6F8" />
        </IconButton>
      </div>
      <div className="px-5 pt-1">
        <div className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: "#0f2b30" }}
          >
            <Folder size={15} color="#2DD4BF" />
          </div>
          <div>
            <h1 className="text-[17px] font-semibold text-nx-text">
              Ideias para conteúdo
            </h1>
            <p className="text-[11px] text-nx-text3">42 itens · atualizado hoje</p>
          </div>
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed text-nx-text2">
          Referências de roteiro, gancho e edição para vídeos curtos do canal e do
          Instagram.
        </p>
        <div className="mt-3 flex gap-1.5 overflow-x-auto pb-3">
          <Chip active small>
            Todos
          </Chip>
          <Chip small>Não vistos</Chip>
          <Chip small>
            <Filter size={9} /> Ordenar
          </Chip>
        </div>
      </div>
      <div className="flex-1 overflow-hidden border-t border-nx-border/50">
        {libraryItems.slice(0, 3).map((it, i) => (
          <div key={i}>
            <ContentItem item={it} />
            {i < 2 ? <Divider /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
