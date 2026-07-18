import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Music2,
  Twitter,
  Youtube,
} from "lucide-react";

export function PlatformDot({ platform }: { platform: string }) {
  const map: Record<string, { Icon: typeof Instagram; color: string }> = {
    Instagram: { Icon: Instagram, color: "#E1306C" },
    TikTok: { Icon: Music2, color: "#9AA8B5" },
    YouTube: { Icon: Youtube, color: "#EF5A5A" },
    Facebook: { Icon: Facebook, color: "#4C8BF5" },
    X: { Icon: Twitter, color: "#9AA8B5" },
    LinkedIn: { Icon: Linkedin, color: "#4C8BF5" },
    Web: { Icon: Globe, color: "#9AA8B5" },
  };
  const { Icon, color } = map[platform] ?? map.Web;
  return (
    <span className="inline-flex items-center gap-1 text-[11px] text-nx-text2">
      <Icon size={11} color={color} strokeWidth={2} />
      {platform}
    </span>
  );
}
