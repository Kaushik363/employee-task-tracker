export default function Dashboard({ employees }) {
  const allTasks = employees.flatMap((emp) => emp.tasks);
  const totalTasks = allTasks.length;
  const completedTasks = allTasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const completionRate =
    totalTasks === 0 ? 0 : ((completedTasks / totalTasks) * 100).toFixed(1);

  return (
    <section className="grid gap-4 md:grid-cols-3 mb-6">
      <div className="rounded-xl bg-slate-800 text-slate-50 p-4 shadow-sm animate-fade">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Total Tasks
        </p>
        <p className="mt-2 text-2xl font-semibold">{totalTasks}</p>
      </div>

      <div className="rounded-xl bg-slate-800 text-slate-50 p-4 shadow-sm animate-fade">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Completed Tasks
        </p>
        <p className="mt-2 text-2xl font-semibold">
          {completedTasks}
          <span className="ml-2 text-sm text-slate-300">
            ({completionRate}%)
          </span>
        </p>
      </div>

      <div className="rounded-xl bg-slate-800 text-slate-50 p-4 shadow-sm animate-fade">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Employees
        </p>
        <p className="mt-2 text-2xl font-semibold">{employees.length}</p>
      </div>
    </section>
  );
}
