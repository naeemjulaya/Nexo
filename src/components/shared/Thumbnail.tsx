import { Link as LinkIcon, Play } from "lucide-react";
import type { ThumbTone } from "@/data/types";

const InstagramSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-[#E1306C]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeSvg = () => (
  <svg viewBox="0 0 24 24" fill="#FF0000" className="w-2.5 h-2.5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TikTokSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-[#25F4EE]">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.36 1.48-1.43 2.47-.14 1.2.44 2.4 1.45 3.06 1.05.7 2.47.69 3.52-.01 1.08-.7 1.66-1.92 1.67-3.18.02-4.96.01-9.92.01-14.88z"/>
  </svg>
);

const XSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

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

  const platformLogos: Record<string, JSX.Element> = {
    Instagram: <InstagramSvg />,
    IG: <InstagramSvg />,
    YouTube: <YouTubeSvg />,
    YT: <YouTubeSvg />,
    TikTok: <TikTokSvg />,
    TT: <TikTokSvg />,
    X: <XSvg />,
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
        <span className="absolute bottom-1 left-1 rounded-[3px] bg-black/70 px-1 py-[1px] text-[8.5px] font-medium text-white/90 flex items-center gap-1">
          {platformLogos[platform] || null}
          <span>{platform}</span>
        </span>
      ) : null}
    </div>
  );
}
