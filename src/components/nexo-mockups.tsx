import type { ReactNode } from "react";
import {
  Search,
  Settings,
  Plus,
  MoreVertical,
  Play,
  Bookmark,
  Folder,
  Clock,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  Check,
  Bell,
  Download,
  Upload,
  Trash2,
  Share2,
  Archive,
  Filter,
  WifiOff,
  AlertTriangle,
  RefreshCw,
  Edit3,
  Link as LinkIcon,
  Star,
  Home,
  Layers,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
  Music2,
  Globe,
  X,
  Circle,
  Dot,
  ChevronUp,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Phone shell                                                                 */
/* -------------------------------------------------------------------------- */

function StatusBar() {
  return (
    <div className="flex h-7 items-center justify-between px-5 text-[11px] font-medium tracking-wide text-nx-text/90">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-nx-text/70" />
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-nx-text/40" />
        <span className="ml-1 inline-block h-2 w-3 rounded-[2px] border border-nx-text/60" />
      </div>
    </div>
  );
}

function GestureBar() {
  return (
    <div className="flex h-5 items-end justify-center pb-1.5">
      <span className="h-1 w-24 rounded-full bg-nx-text/25" />
    </div>
  );
}

function Phone({
  label,
  caption,
  children,
  nav,
  wide = false,
}: {
  label: string;
  caption?: string;
  children: ReactNode;
  nav?: "library" | "search" | "collections" | "review" | null;
  wide?: boolean;
}) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <div
        className={
          "relative overflow-hidden rounded-[38px] bg-nx-bg ring-1 ring-[#1c2731] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] " +
          (wide ? "w-[360px]" : "w-[320px]")
        }
        style={{ fontFamily: "var(--font-nx)" }}
      >
        <StatusBar />
        <div className="flex h-[620px] flex-col">
          <div className="flex-1 overflow-hidden">{children}</div>
          {nav !== null && nav !== undefined ? <BottomNav active={nav} /> : null}
        </div>
        <GestureBar />
      </div>
      <figcaption className="max-w-[320px] text-center">
        <div className="text-sm font-medium text-white/90">{label}</div>
        {caption ? <div className="mt-0.5 text-xs text-white/40">{caption}</div> : null}
      </figcaption>
    </figure>
  );
}

/* -------------------------------------------------------------------------- */
/* Shared bits                                                                 */
/* -------------------------------------------------------------------------- */

function BottomNav({ active }: { active: "library" | "search" | "collections" | "review" }) {
  const items = [
    { id: "library", label: "Biblioteca", Icon: Home },
    { id: "search", label: "Pesquisa", Icon: Search },
    { id: "collections", label: "Coleções", Icon: Layers },
    { id: "review", label: "Revisão", Icon: Clock },
  ] as const;
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

function PlatformDot({ platform }: { platform: string }) {
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

function Thumb({
  tone = "teal",
  platform,
  size = 56,
  play = true,
  empty = false,
}: {
  tone?: "teal" | "amber" | "violet" | "rose" | "slate" | "olive";
  platform?: string;
  size?: number;
  play?: boolean;
  empty?: boolean;
}) {
  const tones: Record<string, string> = {
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

function Chip({
  children,
  active = false,
  small = false,
  tone,
}: {
  children: ReactNode;
  active?: boolean;
  small?: boolean;
  tone?: "warn" | "info" | "accent";
}) {
  const base = small ? "px-2 py-[3px] text-[10.5px]" : "px-2.5 py-1 text-[11.5px]";
  if (active) {
    return (
      <span
        className={`${base} inline-flex items-center gap-1 rounded-full font-medium`}
        style={{ background: "#0f3a35", color: "#D8FFFA" }}
      >
        {children}
      </span>
    );
  }
  const toneStyle =
    tone === "warn"
      ? { color: "#E9C97A", background: "#221d10", border: "#3a3218" }
      : tone === "info"
        ? { color: "#9CC0F0", background: "#131c26", border: "#1f2f42" }
        : tone === "accent"
          ? { color: "#B8D97C", background: "#1a2214", border: "#2a361c" }
          : { color: "#A7B2BC", background: "#17212B", border: "#1f2b36" };
  return (
    <span
      className={`${base} inline-flex items-center gap-1 rounded-full font-medium`}
      style={{
        color: toneStyle.color,
        background: toneStyle.background,
        boxShadow: `inset 0 0 0 1px ${toneStyle.border}`,
      }}
    >
      {children}
    </span>
  );
}

function ScreenHeader({
  title,
  count,
  back,
  actions,
}: {
  title: string;
  count?: string;
  back?: boolean;
  actions?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between px-5 pb-3 pt-3">
      <div className="flex items-center gap-2">
        {back ? <ArrowLeft size={18} color="#F3F6F8" /> : null}
        <div>
          <h2 className="text-[17px] font-semibold leading-tight text-nx-text">{title}</h2>
          {count ? <p className="text-[11.5px] text-nx-text3">{count}</p> : null}
        </div>
      </div>
      <div className="flex items-center gap-1">{actions}</div>
    </div>
  );
}

function IconBtn({
  children,
  primary,
}: {
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <button
      className="inline-flex h-8 w-8 items-center justify-center rounded-full"
      style={{
        background: primary ? "#17212B" : "transparent",
      }}
    >
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Content rows                                                                */
/* -------------------------------------------------------------------------- */

type Item = {
  title: string;
  platform: string;
  creator?: string;
  date: string;
  tags?: { label: string; tone?: "warn" | "info" | "accent" }[];
  tone?: "teal" | "amber" | "violet" | "rose" | "slate" | "olive";
  empty?: boolean;
  status?: string;
  fav?: boolean;
  fresh?: boolean;
};

function ItemRow({ item, compact = false }: { item: Item; compact?: boolean }) {
  return (
    <div className="flex items-start gap-3 px-5 py-3">
      <Thumb tone={item.tone} platform={item.platform} empty={item.empty} />
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

function Divider() {
  return <div className="mx-5 h-px bg-nx-border/50" />;
}

/* -------------------------------------------------------------------------- */
/* Screens                                                                     */
/* -------------------------------------------------------------------------- */

/* --------------------------- Onboarding 1 / 2 / 3 ------------------------- */

function OnbShell({
  step,
  eyebrow,
  title,
  body,
  children,
}: {
  step: 1 | 2 | 3;
  eyebrow: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <div className="flex items-center justify-between px-5 pt-4">
        <span className="text-[11px] font-semibold tracking-[0.18em] text-nx-primary">
          NEXO
        </span>
        <button className="text-[12px] text-nx-text3">Ignorar</button>
      </div>
      <div className="flex flex-1 flex-col justify-between px-5 pb-6 pt-6">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-nx-text3">
            {eyebrow}
          </span>
          <h1 className="mt-1 text-[22px] font-semibold leading-tight text-nx-text">
            {title}
          </h1>
          <p className="mt-2 max-w-[260px] text-[13px] leading-relaxed text-nx-text2">
            {body}
          </p>
        </div>
        <div className="my-6 flex-1">{children}</div>
        <div>
          <div className="mb-5 flex items-center gap-1.5">
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className="h-1 rounded-full transition-all"
                style={{
                  width: n === step ? 22 : 6,
                  background: n === step ? "#2DD4BF" : "#263440",
                }}
              />
            ))}
          </div>
          <button
            className="h-11 w-full rounded-xl text-[14px] font-semibold"
            style={{ background: "#2DD4BF", color: "#07110F" }}
          >
            {step === 3 ? "Começar" : "Continuar"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Onb1() {
  return (
    <OnbShell
      step={1}
      eyebrow="01 · Boas-vindas"
      title="Tudo o que guardas, num só lugar."
      body="Centraliza vídeos, publicações e links que encontras nas redes sociais — sem depender de nenhuma delas."
    >
      <div className="mx-auto mt-6 w-[240px] rounded-2xl border border-nx-border/60 bg-nx-surface p-3">
        <div className="mb-2 flex items-center gap-2">
          <PlatformDot platform="Instagram" />
          <span className="text-[10.5px] text-nx-text3">· hoje, 21:14</span>
        </div>
        <p className="text-[12.5px] leading-snug text-nx-text">
          Como estruturar um vídeo de produto sem parecer anúncio
        </p>
        <div className="mt-3 flex items-center justify-between">
          <Chip small tone="info">
            Aplicar
          </Chip>
          <Bookmark size={13} color="#2DD4BF" fill="#2DD4BF" strokeWidth={0} />
        </div>
      </div>
    </OnbShell>
  );
}

function Onb2() {
  return (
    <OnbShell
      step={2}
      eyebrow="02 · Fluxo de partilha"
      title="Partilha. Guarda. Continua."
      body="Do Instagram, TikTok, YouTube ou navegador, escolhe Nexo no menu Partilhar e volta ao que estavas a fazer."
    >
      <div className="mx-auto mt-4 flex w-[240px] flex-col gap-2">
        <div className="rounded-xl bg-nx-elevated p-3">
          <div className="mb-1 text-[10.5px] uppercase tracking-wider text-nx-text3">
            Menu Partilhar
          </div>
          <div className="flex items-center gap-2 text-[12px] text-nx-text2">
            <Instagram size={12} color="#E1306C" />
            <Music2 size={12} color="#9AA8B5" />
            <Youtube size={12} color="#EF5A5A" />
            <Facebook size={12} color="#4C8BF5" />
            <Twitter size={12} color="#9AA8B5" />
            <Linkedin size={12} color="#4C8BF5" />
            <Globe size={12} color="#9AA8B5" />
          </div>
        </div>
        <div className="flex items-center justify-center py-1">
          <ChevronDown size={16} color="#2DD4BF" />
        </div>
        <div
          className="rounded-xl p-3"
          style={{ background: "#0f3a35", color: "#D8FFFA" }}
        >
          <div className="mb-1 text-[10.5px] uppercase tracking-wider opacity-70">
            Guardado
          </div>
          <div className="text-[12.5px] font-medium">Caixa de entrada · 1 novo</div>
        </div>
      </div>
    </OnbShell>
  );
}

function Onb3() {
  return (
    <OnbShell
      step={3}
      eyebrow="03 · Encontrar mais tarde"
      title="Encontra quando realmente precisares."
      body="Pesquisa, coleções, notas pessoais e um modo de revisão para não esqueceres o que guardaste."
    >
      <div className="mx-auto mt-4 flex w-[240px] flex-col gap-2">
        <div className="flex items-center gap-2 rounded-xl bg-nx-input px-3 py-2.5">
          <Search size={13} color="#9AA8B5" />
          <span className="text-[12px] text-nx-text3">vídeo sobre fotografar bolos</span>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-xl border border-nx-border/60 bg-nx-surface p-2.5">
            <Layers size={13} color="#2DD4BF" />
            <div className="mt-1 text-[11px] text-nx-text">Coleções</div>
            <div className="text-[10px] text-nx-text3">7 ativas</div>
          </div>
          <div className="flex-1 rounded-xl border border-nx-border/60 bg-nx-surface p-2.5">
            <Clock size={13} color="#C7F36B" />
            <div className="mt-1 text-[11px] text-nx-text">Revisão</div>
            <div className="text-[10px] text-nx-text3">3 para rever</div>
          </div>
        </div>
      </div>
    </OnbShell>
  );
}

/* ------------------------------ Library ---------------------------------- */

const libraryItems: Item[] = [
  {
    title: "Como estruturar um vídeo de produto sem parecer anúncio",
    platform: "Instagram",
    creator: "@marina.films",
    date: "há 2 h",
    tags: [{ label: "Aplicar", tone: "info" }, { label: "roteiro" }],
    tone: "rose",
    fav: true,
    fresh: true,
  },
  {
    title: "Animação simples para landing page de alimentos",
    platform: "YouTube",
    creator: "Studio Miel",
    date: "ontem",
    tags: [{ label: "Assistir depois", tone: "warn" }, { label: "motion" }],
    tone: "amber",
  },
  {
    title: "Clean Architecture explicada com um exemplo Android",
    platform: "YouTube",
    creator: "Philipp Lackner",
    date: "3 dias",
    tags: [{ label: "android" }, { label: "estudo" }],
    tone: "teal",
  },
  {
    title: "Ideia de embalagem para doces caseiros — kraft + selo",
    platform: "TikTok",
    date: "5 dias",
    tags: [{ label: "Inspiração" }],
    tone: "olive",
  },
  {
    title:
      "twitter.com/…/status/1789412 — thread sobre estudar cálculo sem acumular matéria",
    platform: "X",
    date: "1 sem",
    empty: true,
    tone: "slate",
  },
  {
    title: "Transição simples para vídeos de produto (sem plugin)",
    platform: "Instagram",
    creator: "@edit.daily",
    date: "2 sem",
    tags: [{ label: "Aplicar", tone: "info" }],
    tone: "violet",
  },
];

function LibraryScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader
        title="Biblioteca"
        count="248 itens · atualizado agora"
        actions={
          <>
            <IconBtn>
              <Plus size={17} color="#F3F6F8" />
            </IconBtn>
            <IconBtn>
              <Settings size={16} color="#9AA8B5" />
            </IconBtn>
          </>
        }
      />
      <div className="mx-5 mb-3 grid grid-cols-4 divide-x divide-nx-border/60 rounded-xl border border-nx-border/60 bg-nx-surface">
        {[
          { n: "18", l: "Entrada" },
          { n: "7", l: "Assistir" },
          { n: "4", l: "Aplicar" },
          { n: "3", l: "Rever" },
        ].map((s, i) => (
          <div key={s.l} className="px-2 py-2.5 text-center">
            <div
              className="text-[15px] font-semibold"
              style={{ color: i === 3 ? "#C7F36B" : "#F3F6F8" }}
            >
              {s.n}
            </div>
            <div className="mt-0.5 text-[10px] text-nx-text3">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="mb-1 flex gap-1.5 overflow-x-auto px-5 pb-2">
        <Chip active>Todos</Chip>
        <Chip>Entrada</Chip>
        <Chip>Assistir depois</Chip>
        <Chip>Aplicar</Chip>
        <Chip>Favoritos</Chip>
      </div>
      <div className="flex-1 overflow-hidden">
        {libraryItems.slice(0, 5).map((it, i) => (
          <div key={i}>
            <ItemRow item={it} />
            {i < 4 ? <Divider /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- Share capture sheet -------------------------- */

function ShareSheetScreen() {
  return (
    <div className="relative flex h-full flex-col bg-black/60">
      <div className="flex-1" />
      <div className="rounded-t-3xl bg-nx-elevated pb-5 pt-3">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-nx-border" />
        <div className="px-5">
          <div className="mb-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlatformDot platform="Instagram" />
              <span className="text-[11px] text-nx-text3">· identificado</span>
            </div>
            <button className="text-[12px] text-nx-text3">Fechar</button>
          </div>
          <div className="mt-2 flex items-start gap-3 rounded-xl bg-nx-surface p-3">
            <Thumb tone="rose" platform="IG" size={48} />
            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-[13px] font-medium text-nx-text">
                Como estruturar um vídeo de produto sem parecer anúncio
              </p>
              <p className="mt-1 truncate text-[11px] text-nx-text3">
                instagram.com/reel/CxY…
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-2 text-[11px] uppercase tracking-wider text-nx-text3">
              Categoria rápida
            </div>
            <div className="flex flex-wrap gap-1.5">
              <Chip>Assistir depois</Chip>
              <Chip>Tutorial</Chip>
              <Chip active>
                <Check size={10} color="#D8FFFA" /> Aplicar
              </Chip>
              <Chip>Inspiração</Chip>
              <Chip>Referência</Chip>
            </div>
          </div>
          <button
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl text-[14px] font-semibold"
            style={{ background: "#2DD4BF", color: "#07110F" }}
          >
            <Bookmark size={15} strokeWidth={2.4} />
            Guardar na Caixa de entrada
          </button>
          <button className="mt-2 h-11 w-full rounded-xl border border-nx-border/70 text-[13px] font-medium text-nx-text">
            Organizar agora
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Organize ---------------------------------- */

function OrganizeScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader
        title="Organizar"
        back
        actions={
          <button className="text-[12.5px] font-medium text-nx-primary">Guardar</button>
        }
      />
      <div className="flex-1 overflow-y-auto px-5 pb-4">
        <label className="block text-[11px] uppercase tracking-wider text-nx-text3">
          Título
        </label>
        <input
          className="mt-1.5 h-10 w-full rounded-lg border border-nx-border/60 bg-nx-input px-3 text-[13px] text-nx-text outline-none"
          defaultValue="Como estruturar um vídeo de produto"
        />
        <label className="mt-4 block text-[11px] uppercase tracking-wider text-nx-text3">
          Nota pessoal
        </label>
        <div className="mt-1.5 rounded-lg border border-nx-primary/40 bg-nx-input p-3">
          <p className="text-[13px] leading-relaxed text-nx-text">
            Aplicar a estrutura de gancho → contexto → prova no próximo vídeo do
            lançamento da Geny.
          </p>
          <p className="mt-1.5 text-[11px] text-nx-text3">
            Escreve por que este conteúdo é importante para ti.
          </p>
        </div>
        <div className="mt-4">
          <div className="mb-2 text-[11px] uppercase tracking-wider text-nx-text3">
            Coleções
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Chip active>
              <Check size={10} color="#D8FFFA" /> Ideias para conteúdo
            </Chip>
            <Chip>Marketing</Chip>
            <Chip>Caseirinhos da Geny</Chip>
            <Chip>+</Chip>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2 text-[11px] uppercase tracking-wider text-nx-text3">
            Etiquetas
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Chip small>roteiro</Chip>
            <Chip small>gancho</Chip>
            <Chip small>produto</Chip>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-nx-border/60">
          <button className="flex w-full items-center justify-between px-3 py-2.5">
            <span className="text-[12.5px] text-nx-text">Estado e prioridade</span>
            <ChevronDown size={14} color="#9AA8B5" />
          </button>
          <div className="border-t border-nx-border/60 px-3 py-2.5">
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-nx-text2">Estado</span>
              <Chip small tone="info">
                Aplicar
              </Chip>
            </div>
            <div className="mt-2 flex items-center justify-between text-[12px]">
              <span className="text-nx-text2">Prioridade</span>
              <span className="text-nx-text">Média</span>
            </div>
          </div>
        </div>
        <button className="mt-4 flex w-full items-center justify-between rounded-lg border border-nx-border/60 px-3 py-2.5 text-left">
          <span className="text-[12.5px] text-nx-text">Criador e origem</span>
          <ChevronDown size={14} color="#9AA8B5" />
        </button>
      </div>
    </div>
  );
}

/* ---------------------------- Detail screen ------------------------------- */

function DetailScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <div className="flex items-center justify-between px-5 pt-3">
        <IconBtn>
          <ArrowLeft size={18} color="#F3F6F8" />
        </IconBtn>
        <div className="flex items-center gap-1">
          <IconBtn>
            <Star size={16} color="#C7F36B" fill="#C7F36B" strokeWidth={0} />
          </IconBtn>
          <IconBtn>
            <MoreVertical size={17} color="#F3F6F8" />
          </IconBtn>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pt-2 pb-4">
        <div
          className="mb-3 flex h-[130px] w-full items-center justify-center overflow-hidden rounded-xl"
          style={{ background: "linear-gradient(140deg,#14343a,#0f2429)" }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40">
            <Play size={17} color="#F3F6F8" fill="#F3F6F8" strokeWidth={0} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <PlatformDot platform="Instagram" />
          <span className="text-[11px] text-nx-text3">
            · @marina.films · guardado há 2 h
          </span>
        </div>
        <h1 className="mt-1.5 text-[17px] font-semibold leading-snug text-nx-text">
          Como estruturar um vídeo de produto sem parecer anúncio
        </h1>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Chip small tone="info">
            Aplicar
          </Chip>
          <Chip small>roteiro</Chip>
          <Chip small>gancho</Chip>
        </div>

        <div className="mt-4 rounded-xl border border-nx-border/60 bg-nx-surface p-3">
          <div className="text-[10.5px] uppercase tracking-wider text-nx-text3">
            Nota pessoal
          </div>
          <p className="mt-1 text-[13px] leading-relaxed text-nx-text">
            Aplicar gancho → contexto → prova no próximo vídeo do lançamento da Geny.
          </p>
        </div>

        <div className="mt-3 rounded-xl border border-nx-border/60 bg-nx-surface p-3">
          <div className="text-[10.5px] uppercase tracking-wider text-nx-text3">
            Texto partilhado
          </div>
          <p className="mt-1 text-[12.5px] leading-relaxed text-nx-text2">
            "3 mudanças que fizeram os meus vídeos parecerem menos anúncio e
            venderem mais."
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl bg-nx-surface px-3 py-2.5">
          <div className="min-w-0">
            <div className="text-[10.5px] uppercase tracking-wider text-nx-text3">
              Link original
            </div>
            <div className="mt-0.5 truncate text-[12px] text-nx-text">
              instagram.com/reel/CxY-8f2Kq
            </div>
          </div>
          <Share2 size={15} color="#9AA8B5" />
        </div>

        <button
          className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xl text-[13.5px] font-semibold"
          style={{ background: "#2DD4BF", color: "#07110F" }}
        >
          Abrir original
        </button>
        <div className="mt-2 flex gap-2">
          <button className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-nx-border/60 text-[12.5px] text-nx-text">
            <Edit3 size={13} /> Editar
          </button>
          <button className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-nx-border/60 text-[12.5px] text-nx-text">
            <Archive size={13} /> Arquivar
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Search ------------------------------------ */

function SearchScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <div className="px-5 pt-3">
        <div className="flex items-center gap-2 rounded-xl border border-nx-primary/40 bg-nx-input px-3 py-2.5">
          <Search size={14} color="#2DD4BF" />
          <input
            className="flex-1 bg-transparent text-[13px] text-nx-text outline-none"
            defaultValue="vídeo sobre fotografar bolos"
          />
          <X size={13} color="#9AA8B5" />
        </div>
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
        {[
          {
            title: "Fotografar bolos com luz de janela — set caseiro",
            platform: "YouTube",
            creator: "Ateliê Confeito",
            date: "há 6 dias",
            tags: [{ label: "Aplicar", tone: "info" as const }, { label: "foto" }],
            tone: "amber" as const,
          },
          {
            title: "Ângulos para doces em bandeja — teste rápido",
            platform: "TikTok",
            creator: "@doce.arte",
            date: "há 2 sem",
            tags: [{ label: "Referência" }],
            tone: "olive" as const,
          },
          {
            title: "Como fotografei os brigadeiros gourmet da Geny",
            platform: "Instagram",
            creator: "@geny.doces",
            date: "há 1 mês",
            tags: [{ label: "Caseirinhos" }],
            tone: "rose" as const,
            fav: true,
          },
        ].map((it, i) => (
          <div key={i}>
            <ItemRow item={it} />
            {i < 2 ? <Divider /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- Collections grid ----------------------------- */

function CollectionCard({
  name,
  count,
  updated,
  tone,
}: {
  name: string;
  count: number;
  updated: string;
  tone: "teal" | "amber" | "violet" | "rose" | "slate" | "olive";
}) {
  return (
    <div className="rounded-xl border border-nx-border/60 bg-nx-surface p-3">
      <div className="flex items-start justify-between">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{
            background:
              tone === "teal"
                ? "#0f2b30"
                : tone === "amber"
                  ? "#2a1f10"
                  : tone === "violet"
                    ? "#1a1830"
                    : tone === "rose"
                      ? "#2a161c"
                      : tone === "olive"
                        ? "#1e2618"
                        : "#141d25",
          }}
        >
          <Folder
            size={15}
            color={
              tone === "teal"
                ? "#2DD4BF"
                : tone === "amber"
                  ? "#E9C97A"
                  : tone === "violet"
                    ? "#B49CE0"
                    : tone === "rose"
                      ? "#E8A0B0"
                      : tone === "olive"
                        ? "#C7F36B"
                        : "#9AA8B5"
            }
          />
        </div>
        <span className="text-[10.5px] text-nx-text3">{count}</span>
      </div>
      <div className="mt-2 line-clamp-2 text-[12.5px] font-medium leading-snug text-nx-text">
        {name}
      </div>
      <div className="mt-2 flex items-center gap-1">
        <span className="h-4 w-6 rounded-[3px] bg-nx-interactive" />
        <span className="h-4 w-6 rounded-[3px] bg-nx-elevated" />
        <span className="h-4 w-6 rounded-[3px] bg-nx-interactive/60" />
      </div>
      <div className="mt-2 text-[10px] text-nx-text3">atualizado {updated}</div>
    </div>
  );
}

function CollectionsScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader
        title="Coleções"
        count="7 coleções · 248 itens no total"
        actions={
          <IconBtn>
            <Plus size={17} color="#F3F6F8" />
          </IconBtn>
        }
      />
      <div className="flex-1 overflow-y-auto px-5 pb-4">
        <div className="grid grid-cols-2 gap-2.5">
          <CollectionCard name="Ideias para conteúdo" count={42} updated="hoje" tone="teal" />
          <CollectionCard
            name="Desenvolvimento Android"
            count={58}
            updated="ontem"
            tone="violet"
          />
          <CollectionCard name="Marketing" count={31} updated="há 3 dias" tone="amber" />
          <CollectionCard
            name="Design de sites"
            count={19}
            updated="há 5 dias"
            tone="slate"
          />
          <CollectionCard name="Estudos" count={27} updated="há 1 sem" tone="olive" />
          <CollectionCard
            name="Caseirinhos da Geny"
            count={14}
            updated="há 2 sem"
            tone="rose"
          />
          <CollectionCard
            name="Para experimentar"
            count={9}
            updated="há 1 mês"
            tone="teal"
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------ Collection detail ------------------------------- */

function CollectionDetailScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <div className="flex items-center justify-between px-5 pt-3">
        <IconBtn>
          <ArrowLeft size={18} color="#F3F6F8" />
        </IconBtn>
        <IconBtn>
          <MoreVertical size={17} color="#F3F6F8" />
        </IconBtn>
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
            <ItemRow item={it} />
            {i < 2 ? <Divider /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Review ------------------------------------ */

function ReviewScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader
        title="Revisão"
        count="12 conteúdos aguardam revisão"
        actions={
          <IconBtn>
            <Bell size={16} color="#9AA8B5" />
          </IconBtn>
        }
      />
      <div className="px-5">
        <div className="mb-3 flex items-center justify-between text-[11px] text-nx-text3">
          <span>3 de 12 revistos</span>
          <span>guardados há mais de 30 dias</span>
        </div>
        <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-nx-interactive">
          <div className="h-full rounded-full" style={{ width: "25%", background: "#2DD4BF" }} />
        </div>
        <div className="rounded-2xl border border-nx-border/60 bg-nx-surface p-4">
          <div className="mb-3 flex items-center gap-2">
            <PlatformDot platform="YouTube" />
            <span className="text-[11px] text-nx-text3">· guardado há 47 dias</span>
          </div>
          <div
            className="mb-3 flex h-[120px] items-center justify-center overflow-hidden rounded-lg"
            style={{ background: "linear-gradient(140deg,#2a1f10,#1a1409)" }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40">
              <Play size={16} color="#F3F6F8" fill="#F3F6F8" strokeWidth={0} />
            </div>
          </div>
          <h3 className="text-[14px] font-medium leading-snug text-nx-text">
            Estrutura de roteiro para vídeos educativos (18 min)
          </h3>
          <p className="mt-1 text-[11.5px] text-nx-text3">
            Nunca abriste este conteúdo. Vale a pena manter?
          </p>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <button
              className="h-9 rounded-lg text-[12px] font-semibold"
              style={{ background: "#2DD4BF", color: "#07110F" }}
            >
              Manter
            </button>
            <button className="h-9 rounded-lg border border-nx-border/60 text-[12px] text-nx-text">
              Assistir depois
            </button>
            <button className="h-9 rounded-lg border border-nx-border/60 text-[12px] text-nx-text">
              Para aplicar
            </button>
            <button className="h-9 rounded-lg border border-nx-border/60 text-[12px] text-nx-text">
              Arquivar
            </button>
          </div>
          <button className="mt-2 flex w-full items-center justify-center gap-1 text-[11.5px] text-nx-error/80">
            <Trash2 size={11} /> Eliminar
          </button>
        </div>
        <div className="mt-3 flex gap-1.5 overflow-x-auto">
          <Chip small>+7 dias</Chip>
          <Chip small active>
            +30 dias
          </Chip>
          <Chip small>Nunca abertos</Chip>
          <Chip small>Sem coleção</Chip>
          <Chip small>Sem nota</Chip>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Backup ------------------------------------ */

function BackupScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader title="Backup e exportação" back />
      <div className="flex-1 overflow-y-auto px-5 pb-4">
        <div className="rounded-xl border border-nx-border/60 bg-nx-surface p-4">
          <div className="text-[11px] uppercase tracking-wider text-nx-text3">
            Backup completo
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <div>
              <div className="text-[13.5px] text-nx-text">Último backup</div>
              <div className="text-[11.5px] text-nx-text3">
                12 nov, 21:04 · 3,2 MB
              </div>
            </div>
            <span
              className="rounded-full px-2 py-[2px] text-[10.5px] font-medium"
              style={{ background: "#0f2b1c", color: "#4ADE80" }}
            >
              ok
            </span>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg text-[12.5px] font-semibold"
              style={{ background: "#2DD4BF", color: "#07110F" }}
            >
              <Download size={13} /> Criar backup
            </button>
            <button className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg border border-nx-border/60 text-[12.5px] text-nx-text">
              <Upload size={13} /> Restaurar
            </button>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-nx-text3">
            Escolhes onde guardar o ficheiro. O Nexo não envia nada para servidores.
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-nx-border/60 bg-nx-surface">
          <div className="p-4">
            <div className="text-[11px] uppercase tracking-wider text-nx-text3">
              Exportação aberta
            </div>
            <p className="mt-1 text-[12.5px] text-nx-text2">
              Os teus dados continuam sob o teu controlo.
            </p>
          </div>
          <button className="flex w-full items-center justify-between border-t border-nx-border/60 px-4 py-3 text-left">
            <div>
              <div className="text-[13px] text-nx-text">Exportar JSON</div>
              <div className="text-[10.5px] text-nx-text3">Estrutura completa</div>
            </div>
            <ChevronRight size={15} color="#9AA8B5" />
          </button>
          <button className="flex w-full items-center justify-between border-t border-nx-border/60 px-4 py-3 text-left">
            <div>
              <div className="text-[13px] text-nx-text">Exportar CSV</div>
              <div className="text-[10.5px] text-nx-text3">
                Título, link, plataforma, notas
              </div>
            </div>
            <ChevronRight size={15} color="#9AA8B5" />
          </button>
        </div>

        <div
          className="mt-4 flex items-start gap-2 rounded-xl p-3"
          style={{ background: "#1a2214", boxShadow: "inset 0 0 0 1px #2a361c" }}
        >
          <Check size={13} color="#C7F36B" className="mt-0.5" />
          <div className="text-[11.5px] leading-relaxed text-nx-text">
            Backup <span className="text-nx-accent">nexo-2025-11-12.json</span> criado
            em Downloads.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Settings ---------------------------------- */

function SettingRow({
  label,
  value,
  toggle,
}: {
  label: string;
  value?: string;
  toggle?: "on" | "off";
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-[13px] text-nx-text">{label}</span>
      {toggle ? (
        <span
          className="relative inline-block h-5 w-9 rounded-full"
          style={{ background: toggle === "on" ? "#2DD4BF" : "#263440" }}
        >
          <span
            className="absolute top-0.5 h-4 w-4 rounded-full bg-nx-text"
            style={{ left: toggle === "on" ? 18 : 2 }}
          />
        </span>
      ) : (
        <div className="flex items-center gap-1 text-[12px] text-nx-text3">
          {value}
          <ChevronRight size={13} />
        </div>
      )}
    </div>
  );
}

function SettingsScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader title="Configurações" back />
      <div className="flex-1 overflow-y-auto pb-4">
        <SettingsGroup title="Aparência">
          <SettingRow label="Tema escuro" toggle="on" />
          <SettingRow label="Seguir o sistema" toggle="off" />
          <SettingRow label="Alto contraste" toggle="off" />
        </SettingsGroup>
        <SettingsGroup title="Captura">
          <SettingRow label="Guardar na Caixa de entrada" toggle="on" />
          <SettingRow label="Mostrar categorias rápidas" toggle="on" />
          <SettingRow label="Ao encontrar duplicados" value="Perguntar" />
        </SettingsGroup>
        <SettingsGroup title="Revisão">
          <SettingRow label="Lembretes locais" toggle="on" />
          <SettingRow label="Frequência" value="Semanal" />
          <SettingRow label="Considerar antigo após" value="30 dias" />
        </SettingsGroup>
        <SettingsGroup title="Dados">
          <SettingRow label="Backup e restauro" value="ok" />
          <SettingRow label="Exportar" />
          <SettingRow label="Limpar cache de thumbnails" value="8,4 MB" />
        </SettingsGroup>
        <SettingsGroup title="Aplicação">
          <SettingRow label="Procurar atualizações" value="v1.4.2" />
          <SettingRow label="Privacidade" />
          <SettingRow label="Sobre" />
        </SettingsGroup>
      </div>
    </div>
  );
}

function SettingsGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-4">
      <div className="px-5 pb-1.5 text-[10.5px] font-medium uppercase tracking-wider text-nx-text3">
        {title}
      </div>
      <div className="mx-4 divide-y divide-nx-border/50 rounded-xl border border-nx-border/60 bg-nx-surface">
        {children}
      </div>
    </div>
  );
}

/* ---------------------------- Special states ------------------------------ */

function DuplicateScreen() {
  return (
    <div className="relative flex h-full flex-col bg-black/60">
      <div className="flex-1" />
      <div className="rounded-t-3xl bg-nx-elevated pb-5 pt-3">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-nx-border" />
        <div className="px-5">
          <div className="flex items-start gap-2">
            <AlertTriangle size={16} color="#F4BF50" className="mt-0.5" />
            <div>
              <div className="text-[14px] font-semibold text-nx-text">
                Este conteúdo já está na tua biblioteca.
              </div>
              <div className="mt-0.5 text-[11.5px] text-nx-text3">
                Guardado há 3 dias em <span className="text-nx-text2">Marketing</span>.
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-xl bg-nx-surface p-3">
            <Thumb tone="amber" size={44} />
            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-[12.5px] font-medium text-nx-text">
                Animação simples para landing page de alimentos
              </p>
              <p className="mt-0.5 text-[11px] text-nx-text3">
                YouTube · Studio Miel
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <button
              className="h-11 w-full rounded-xl text-[13px] font-semibold"
              style={{ background: "#2DD4BF", color: "#07110F" }}
            >
              Ver conteúdo existente
            </button>
            <button className="h-10 w-full rounded-xl border border-nx-border/60 text-[12.5px] text-nx-text">
              Atualizar informações
            </button>
            <button className="h-10 w-full rounded-xl border border-nx-border/60 text-[12.5px] text-nx-text">
              Guardar novamente
            </button>
            <button className="h-9 w-full text-[12px] text-nx-text3">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function OfflineScreen() {
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
            <ItemRow item={{ ...it, tags: undefined }} compact />
            {i < 3 ? <Divider /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function EmptyInboxScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader title="Caixa de entrada" count="0 itens novos" />
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{ background: "#0f2b30" }}
        >
          <Bookmark size={18} color="#2DD4BF" />
        </div>
        <h3 className="text-[15px] font-semibold text-nx-text">
          Nada de novo por aqui.
        </h3>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-nx-text2">
          Partilha um vídeo do Instagram, TikTok ou YouTube para Nexo e ele aparece
          aqui em segundos.
        </p>
        <button className="mt-4 flex items-center gap-1.5 rounded-xl border border-nx-border/60 px-3 py-2 text-[12px] text-nx-text">
          <LinkIcon size={12} /> Adicionar link manualmente
        </button>
      </div>
    </div>
  );
}

function UpdateDialogScreen() {
  return (
    <div className="relative flex h-full flex-col bg-black/60">
      <div className="flex-1" />
      <div className="mx-5 mb-6 rounded-2xl bg-nx-elevated p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RefreshCw size={14} color="#2DD4BF" />
            <span className="text-[10.5px] uppercase tracking-wider text-nx-text3">
              Nova versão
            </span>
          </div>
          <span className="text-[11px] text-nx-text3">4,7 MB</span>
        </div>
        <h3 className="mt-2 text-[16px] font-semibold text-nx-text">
          Nexo 1.4.2 disponível
        </h3>
        <ul className="mt-3 space-y-1.5 text-[12px] leading-relaxed text-nx-text2">
          <li>· Categorias rápidas no menu Partilhar.</li>
          <li>· Modo de revisão semanal opcional.</li>
          <li>· Corrigido: thumbnails do TikTok em alguns links.</li>
        </ul>
        <div className="mt-4 flex gap-2">
          <button className="h-10 flex-1 rounded-lg border border-nx-border/60 text-[12.5px] text-nx-text">
            Lembrar mais tarde
          </button>
          <button
            className="h-10 flex-1 rounded-lg text-[12.5px] font-semibold"
            style={{ background: "#2DD4BF", color: "#07110F" }}
          >
            Atualizar
          </button>
        </div>
      </div>
      <div className="h-2" />
    </div>
  );
}

function UnavailableScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader title="Detalhes" back />
      <div className="px-5">
        <div
          className="flex h-[130px] items-center justify-center rounded-xl border border-dashed"
          style={{ borderColor: "#3a3218", background: "#1a1710" }}
        >
          <div className="text-center">
            <AlertTriangle size={18} color="#F4BF50" className="mx-auto" />
            <div className="mt-1.5 text-[12px] text-nx-text2">
              Conteúdo indisponível na origem
            </div>
          </div>
        </div>
        <div className="mt-3">
          <PlatformDot platform="TikTok" />
          <h1 className="mt-1 text-[15.5px] font-semibold leading-snug text-nx-text">
            Ideia de embalagem para doces caseiros — kraft + selo
          </h1>
          <p className="mt-1 text-[11.5px] text-nx-text3">
            Guardado há 42 dias · última verificação: hoje
          </p>
        </div>
        <div className="mt-3 rounded-xl border border-nx-border/60 bg-nx-surface p-3">
          <div className="text-[10.5px] uppercase tracking-wider text-nx-text3">
            Nota pessoal (preservada)
          </div>
          <p className="mt-1 text-[12.5px] leading-relaxed text-nx-text">
            Usar como referência de rótulo para os potinhos de doce de leite.
          </p>
        </div>
        <div className="mt-4 space-y-2">
          <button className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-nx-border/60 text-[13px] text-nx-text">
            <LinkIcon size={13} /> Substituir link
          </button>
          <button className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-nx-border/60 text-[13px] text-nx-text">
            <Archive size={13} /> Arquivar
          </button>
        </div>
      </div>
    </div>
  );
}

function SavedToastScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader
        title="Biblioteca"
        count="249 itens · 1 novo"
        actions={
          <IconBtn>
            <Settings size={16} color="#9AA8B5" />
          </IconBtn>
        }
      />
      <div className="mb-1 flex gap-1.5 overflow-x-auto px-5 pb-2">
        <Chip active>Todos</Chip>
        <Chip>Entrada</Chip>
        <Chip>Assistir depois</Chip>
      </div>
      <div className="flex-1 overflow-hidden">
        <div
          className="mx-5 mb-2 rounded-xl border-l-2 bg-nx-surface"
          style={{ borderColor: "#C7F36B" }}
        >
          <ItemRow item={{ ...libraryItems[0], fresh: true }} />
        </div>
        <Divider />
        {libraryItems.slice(1, 4).map((it, i) => (
          <div key={i}>
            <ItemRow item={it} />
            {i < 2 ? <Divider /> : null}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-5 bottom-24 rounded-xl bg-nx-elevated p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-full"
            style={{ background: "#0f2b30" }}
          >
            <Check size={12} color="#2DD4BF" strokeWidth={2.5} />
          </div>
          <span className="flex-1 text-[12.5px] text-nx-text">
            Guardado na Caixa de entrada.
          </span>
          <button className="text-[11.5px] font-medium text-nx-primary">
            Organizar
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Reference sections: palette / type / components                            */
/* -------------------------------------------------------------------------- */

function Swatch({ hex, name, note }: { hex: string; name: string; note?: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div
        className="mb-2 h-10 w-full rounded-lg"
        style={{ background: hex, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }}
      />
      <div className="text-[11px] font-medium text-white/85">{name}</div>
      <div className="mt-0.5 flex items-center justify-between">
        <code className="text-[10.5px] text-white/45">{hex}</code>
        {note ? <span className="text-[9.5px] text-white/35">{note}</span> : null}
      </div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
  desc,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  desc?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-nx-primary">
            {eyebrow}
          </div>
          <h2
            className="mt-2 text-[26px] font-semibold text-white"
            style={{ fontFamily: "var(--font-nx)" }}
          >
            {title}
          </h2>
          {desc ? (
            <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-white/55">
              {desc}
            </p>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Top-level page                                                              */
/* -------------------------------------------------------------------------- */

export function NexoMockups() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% -10%, #0e1a1d 0%, transparent 60%), radial-gradient(900px 500px at 100% 0%, #0f1a20 0%, transparent 50%), #07090c",
        fontFamily: "var(--font-nx)",
      }}
    >
      {/* Hero */}
      <header className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-6 w-6 items-center justify-center rounded-md"
            style={{ background: "#0f2b30" }}
          >
            <span
              className="h-2 w-2 rounded-sm"
              style={{ background: "#2DD4BF" }}
            />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
            Nexo · mockup set
          </span>
        </div>
        <h1 className="mt-6 max-w-3xl text-[42px] font-semibold leading-[1.05] tracking-[-0.01em] text-white">
          Uma biblioteca pessoal para o que guardas das redes sociais.
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
          Mockups de alta fidelidade para um aplicativo Android local-first. Fluxo
          de captura em um toque via Partilhar, organização opcional, revisão
          periódica e backup exportável — sem contas, sem nuvem, sem ruído.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-[12px] text-white/60">
          <span className="rounded-full border border-white/10 px-3 py-1">
            Android · 390 px
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Tema escuro
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Local-first
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Pronto para Jetpack Compose
          </span>
        </div>
      </header>

      {/* Palette */}
      <Section
        eyebrow="01 · Paleta"
        title="Superfícies escuras, um único verde a puxar a atenção."
        desc="A cor principal ocupa menos de 10% da interface; o verde-lima menos de 3%. Tudo o resto é hierarquia de cinzas azulados."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
          <Swatch hex="#0B0F14" name="Fundo" note="app" />
          <Swatch hex="#111820" name="Superfície" note="listas" />
          <Swatch hex="#17212B" name="Elevada" note="sheets" />
          <Swatch hex="#1D2A35" name="Interativa" note="press" />
          <Swatch hex="#141D25" name="Input" />
          <Swatch hex="#0F151C" name="Nav" />
          <Swatch hex="#263440" name="Bordas" />
          <Swatch hex="#F3F6F8" name="Texto" />
          <Swatch hex="#9AA8B5" name="Texto 2" />
          <Swatch hex="#667582" name="Texto 3" />
          <Swatch hex="#2DD4BF" name="Primária" note="< 10%" />
          <Swatch hex="#C7F36B" name="Destaque" note="< 3%" />
          <Swatch hex="#4ADE80" name="Sucesso" />
          <Swatch hex="#F4BF50" name="Atenção" />
          <Swatch hex="#F87171" name="Erro" />
          <Swatch hex="#60A5FA" name="Info" />
        </div>
      </Section>

      {/* Typography */}
      <Section
        eyebrow="02 · Tipografia"
        title="Manrope, com hierarquia funcional."
        desc="Compacta, muito legível, personalidade discreta. Sem títulos gigantes; a hierarquia vem do peso e do espaço."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { size: 28, weight: 600, label: "Título principal · 28 / 600", sample: "Biblioteca" },
            {
              size: 18,
              weight: 600,
              label: "Secção · 18 / 600",
              sample: "Ideias para conteúdo",
            },
            {
              size: 15,
              weight: 500,
              label: "Conteúdo · 15 / 500",
              sample: "Como estruturar um vídeo de produto",
            },
            {
              size: 13,
              weight: 400,
              label: "Corpo · 13 / 400",
              sample:
                "Escreve por que este conteúdo é importante para ti — a nota fica só no teu dispositivo.",
            },
            {
              size: 11,
              weight: 500,
              label: "Metadados · 11 / 500",
              sample: "Instagram · @marina.films · há 2 h",
            },
          ].map((t) => (
            <div
              key={t.label}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
            >
              <div className="text-[10.5px] uppercase tracking-wider text-white/40">
                {t.label}
              </div>
              <div
                className="mt-2 text-white"
                style={{
                  fontSize: t.size,
                  fontWeight: t.weight,
                  lineHeight: 1.25,
                }}
              >
                {t.sample}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Components strip */}
      <Section
        eyebrow="03 · Componentes"
        title="Peças reutilizáveis, densas e consistentes."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div
            className="rounded-2xl border border-white/5 p-5"
            style={{ background: "#0B0F14" }}
          >
            <div className="mb-3 text-[10.5px] uppercase tracking-wider text-white/40">
              Botões
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="h-10 rounded-lg text-[12.5px] font-semibold"
                style={{ background: "#2DD4BF", color: "#07110F" }}
              >
                Guardar na Caixa de entrada
              </button>
              <button className="h-10 rounded-lg border border-nx-border/70 text-[12.5px] text-nx-text">
                Organizar agora
              </button>
              <button className="h-10 rounded-lg text-[12.5px] text-nx-error">
                Eliminar item
              </button>
            </div>
          </div>
          <div
            className="rounded-2xl border border-white/5 p-5"
            style={{ background: "#0B0F14" }}
          >
            <div className="mb-3 text-[10.5px] uppercase tracking-wider text-white/40">
              Chips e filtros
            </div>
            <div className="flex flex-wrap gap-1.5">
              <Chip active>Todos</Chip>
              <Chip>Entrada</Chip>
              <Chip>Assistir depois</Chip>
              <Chip>Aplicar</Chip>
              <Chip tone="warn" small>
                Assistir depois
              </Chip>
              <Chip tone="info" small>
                Aplicar
              </Chip>
              <Chip tone="accent" small>
                novo
              </Chip>
            </div>
          </div>
          <div
            className="rounded-2xl border border-white/5 p-5"
            style={{ background: "#0B0F14", fontFamily: "var(--font-nx)" }}
          >
            <div className="mb-3 text-[10.5px] uppercase tracking-wider text-white/40">
              Item de conteúdo
            </div>
            <div className="rounded-xl bg-nx-surface">
              <ItemRow item={libraryItems[0]} />
            </div>
          </div>
        </div>
      </Section>

      {/* Onboarding flow */}
      <Section
        eyebrow="04 · Onboarding"
        title="Três ecrãs curtos, sem ilustrações genéricas."
      >
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Phone label="01 · Boas-vindas" nav={null}>
            <Onb1 />
          </Phone>
          <Phone label="02 · Fluxo de partilha" nav={null}>
            <Onb2 />
          </Phone>
          <Phone label="03 · Encontrar mais tarde" nav={null}>
            <Onb3 />
          </Phone>
        </div>
      </Section>

      {/* Core flows */}
      <Section
        eyebrow="05 · Fluxos principais"
        title="Da captura à revisão, sem fricção."
        desc="Biblioteca compacta como página inicial; captura rápida via bottom sheet; organização opcional; detalhes com nota preservada; pesquisa que também procura em notas."
      >
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Phone label="Biblioteca" caption="248 itens · filtros rápidos" nav="library">
            <LibraryScreen />
          </Phone>
          <Phone
            label="Captura pelo menu Partilhar"
            caption="bottom sheet · um toque para guardar"
            nav={null}
          >
            <ShareSheetScreen />
          </Phone>
          <Phone label="Organizar" caption="opcional · nota pessoal em destaque" nav={null}>
            <OrganizeScreen />
          </Phone>
          <Phone label="Detalhes do conteúdo" caption="ação principal: abrir original" nav={null}>
            <DetailScreen />
          </Phone>
          <Phone label="Pesquisa" caption="filtros ativos + resultados" nav="search">
            <SearchScreen />
          </Phone>
          <Phone label="Coleções" caption="grelha compacta e consistente" nav="collections">
            <CollectionsScreen />
          </Phone>
          <Phone label="Detalhes da coleção" caption="42 itens · Ideias para conteúdo" nav={null}>
            <CollectionDetailScreen />
          </Phone>
          <Phone label="Revisão" caption="12 conteúdos · progresso 3/12" nav="review">
            <ReviewScreen />
          </Phone>
          <Phone label="Guardado com sucesso" caption="snackbar + item recém-guardado" nav="library">
            <SavedToastScreen />
          </Phone>
        </div>
      </Section>

      {/* Data & settings */}
      <Section
        eyebrow="06 · Dados e definições"
        title="Controlo total sobre o que fica guardado."
      >
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Phone label="Backup e exportação" caption="ficheiro local · JSON ou CSV" nav={null}>
            <BackupScreen />
          </Phone>
          <Phone label="Configurações" caption="agrupadas por área" nav={null}>
            <SettingsScreen />
          </Phone>
          <Phone label="Atualização disponível" caption="diálogo com changelog" nav={null}>
            <UpdateDialogScreen />
          </Phone>
        </div>
      </Section>

      {/* Edge cases */}
      <Section
        eyebrow="07 · Estados especiais"
        title="O que acontece quando algo corre mal."
      >
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Phone label="Conteúdo duplicado" caption="ação principal: ver existente" nav={null}>
            <DuplicateScreen />
          </Phone>
          <Phone label="Sem ligação" caption="biblioteca continua acessível" nav="library">
            <OfflineScreen />
          </Phone>
          <Phone label="Caixa de entrada vazia" caption="ação: adicionar link manual" nav="library">
            <EmptyInboxScreen />
          </Phone>
          <Phone label="Conteúdo indisponível" caption="notas preservadas · substituir link" nav={null}>
            <UnavailableScreen />
          </Phone>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl px-6 py-14 text-[12px] text-white/40">
        Mockup set · Nexo (nome provisório). Sem logotipo definitivo. Dark-first,
        Android vertical, viável em Jetpack Compose.
      </footer>
    </main>
  );
}

// Silence unused imports guard for icons kept intentionally for future screens.
void Bookmark;
void ChevronUp;
void Circle;