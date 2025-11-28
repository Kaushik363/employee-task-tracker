function StatusBadge({ status }) {
  let base =
    "inline-flex items-center text-xs px-2 py-1 rounded-full border font-medium";
  if (status === "Completed") {
    base += " bg-green-50 text-green-700 border-green-200";
  } else if (status === "In Progress") {
    base += " bg-yellow-50 text-yellow-700 border-yellow-200";
  } else {
    base += " bg-red-50 text-red-700 border-red-200";
  }
  return <span className={base}>{status}</span>;
}

export default function EmployeeList({
  employees,
  activeFilter,
  search,
  onStatusChange
}) {
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="space-y-4">
      {filteredEmployees.map((employee) => {
        const tasksToShow = employee.tasks.filter((task) =>
          activeFilter === "All" ? true : task.status === activeFilter
        );

        if (tasksToShow.length === 0) return null;

        return (
          <article
            key={employee.id}
            className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm animate-fade"
          >
            <header className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-base md:text-lg font-semibold text-slate-900">
                  {employee.name}
                </h2>
                <p className="text-xs text-slate-500">{employee.role}</p>
              </div>
              <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                {employee.tasks.length} total tasks
              </span>
            </header>

            <ul className="space-y-2">
              {tasksToShow.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2"
                >
                  <span className="text-sm text-slate-800">{task.title}</span>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={task.status} />
                    <select
                      className="text-xs px-2 py-1 rounded border bg-white text-slate-900"
                      value={task.status}
                      onChange={(e) =>
                        onStatusChange(
                          employee.id,
                          task.id,
                          e.target.value
                        )
                      }
                    >
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </section>
  );
}
