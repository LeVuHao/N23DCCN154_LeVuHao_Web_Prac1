export default function Badge({ label, color = "gray" }) {
  const style =
    color === "blue"
      ? "bg-sky-100 text-sky-700"
      : "bg-slate-100 text-slate-700";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${style}`}
    >
      {label}
    </span>
  );
}
