import { Dot, MoreVertical, Star } from "lucide-react";
import type { ContentItem as ContentItemData } from "@/data/types";
import { Chip } from "./Chip";
import { PlatformDot } from "./PlatformDot";
import { Thumbnail } from "./Thumbnail";

export function ContentItem({
  item,
  compact = false,
}: {
  item: ContentItemData;
  compact?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 px-5 py-3">
      <Thumbnail tone={item.tone} platform={item.platform} empty={item.empty} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="line-clamp-2 text-[13.5px] font-medium leading-snug text-nx-text">
            {item.title}
          </p>
          {item.fav ? (
            <Star size={13} color="#C7F36B" fill="#C7F36B" strokeWidth={0} />
          ) : null}
        </div>
        {!compact ? (
          <div className="mt-1 flex items-center gap-2 text-[11px] text-nx-text3">
            <PlatformDot platform={item.platform} />
            {item.creator ? <span>· {item.creator}</span> : null}
            <span>· {item.date}</span>
          </div>
        ) : null}
        {item.tags && item.tags.length ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <Chip key={t.label} small tone={t.tone}>
                {t.label}
              </Chip>
            ))}
            {item.fresh ? (
              <span
                className="inline-flex items-center gap-1 rounded-full px-1.5 py-[2px] text-[9.5px] font-semibold"
                style={{ background: "#1a2214", color: "#C7F36B" }}
              >
                <Dot size={12} color="#C7F36B" />
                novo
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
      <button className="-mr-1 mt-0.5 p-1 text-nx-text3">
        <MoreVertical size={15} />
      </button>
    </div>
  );
}
