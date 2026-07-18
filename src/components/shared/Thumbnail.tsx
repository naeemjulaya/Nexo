import { Link as LinkIcon, Play } from "lucide-react";
import type { ThumbTone } from "@/data/types";

export function Thumbnail({
  tone = "teal",
  platform,
  size = 56,
  play = true,
  empty = false,
}: {
  tone?: ThumbTone;
  platform?: string;
  size?: number;
  play?: boolean;
  empty?: boolean;
}) {
  const tones: Record<ThumbTone, string> = {
    teal: "linear-gradient(140deg, #14343a 0%, #0f2429 100%)",
    amber: "linear-gradient(140deg, #3a2a14 0%, #2a1f10 100%)",
    violet: "linear-gradient(140deg, #26223a 0%, #1a1830 100%)",
    rose: "linear-gradient(140deg, #3a1e26 0%, #2a161c 100%)",
    slate: "linear-gradient(140deg, #1d2a35 0%, #141d25 100%)",
    olive: "linear-gradient(140deg, #2a3320 0%, #1e2618 100%)",
  };

  return (
    <div
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[10px]"
      style={{
        width: size,
        height: (size * 9) / 12,
        background: tones[tone],
      }}
    >
      {empty ? (
        <LinkIcon size={14} color="#4A5966" />
      ) : play ? (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/40 backdrop-blur-[1px]">
          <Play size={11} color="#F3F6F8" fill="#F3F6F8" strokeWidth={0} />
        </div>
      ) : null}
      {platform ? (
        <span className="absolute bottom-1 left-1 rounded-[3px] bg-black/55 px-1 py-[1px] text-[8.5px] font-medium text-white/85">
          {platform}
        </span>
      ) : null}
    </div>
  );
}
