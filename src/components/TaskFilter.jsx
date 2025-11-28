const OPTIONS = [
  { label: "All", value: "All" },
  { label: "Pending", value: "Pending" },
  { label: "In Progress", value: "In Progress" },
  { label: "Completed", value: "Completed" }
];

export default function TaskFilter({ activeFilter, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {OPTIONS.map((opt) => {
        const active = opt.value === activeFilter;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
              active
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
