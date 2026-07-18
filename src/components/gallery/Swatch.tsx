export function Swatch({
  hex,
  name,
  note,
}: {
  hex: string;
  name: string;
  note?: string;
}) {
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
