import { useState } from "react";

export default function AddTaskModal({ employees, onAddTask, onClose }) {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(
    employees[0]?.id ?? ""
  );
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) {
      setError("Task title cannot be empty.");
      return;
    }
    if (!selectedEmployeeId) {
      setError("Please choose an employee.");
      return;
    }
    onAddTask(Number(selectedEmployeeId), title.trim());
    setTitle("");
    setError("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-5">
        <h2 className="text-lg font-semibold mb-3 text-slate-900">
          Create New Task
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Employee
            </label>
            <select
              className="w-full border rounded-lg px-3 py-2 text-sm text-slate-900 bg-white"
              value={selectedEmployeeId}
              onChange={(e) => {
                setSelectedEmployeeId(e.target.value);
                setError("");
              }}
            >
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name} – {emp.role}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Task Title
            </label>
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm text-slate-900 bg-white"
              placeholder="Ex: Fix user profile bug"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setError("");
              }}
            />
          </div>

          {error && (
            <p className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
              {error}
            </p>
          )}

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-sm rounded-lg bg-slate-100 text-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1.5 text-sm rounded-lg bg-blue-600 text-white"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
