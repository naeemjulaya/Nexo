import { Plus } from "lucide-react";
import { CollectionCard, IconButton, ScreenHeader } from "@/components/shared";
import { collections } from "@/data/mockData";

export function CollectionsScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader
        title="Coleções"
        count="7 coleções · 248 itens no total"
        actions={
          <IconButton>
            <Plus size={17} color="#F3F6F8" />
          </IconButton>
        }
      />
      <div className="flex-1 overflow-y-auto px-5 pb-4">
        <div className="grid grid-cols-2 gap-2.5">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.name}
              name={collection.name}
              count={collection.count}
              updated={collection.updated}
              tone={collection.tone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
