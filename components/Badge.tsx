type BadgeProps = {
  label: string;
  color?: "indigo" | "gray";
};

export default function Badge({ label, color = "gray" }: BadgeProps) {
  const style =
    color === "indigo"
      ? "bg-indigo-100 text-indigo-700"
      : "bg-slate-100 text-slate-700";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${style}`}
    >
      {label}
    </span>
  );
}
