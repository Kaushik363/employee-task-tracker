import { useEffect, useState } from "react";
import employeesJson from "./data/employees.json";
import Dashboard from "./components/Dashboard";
import TaskFilter from "./components/TaskFilter";
import EmployeeList from "./components/EmployeeList";
import AddTaskModal from "./components/AddTaskModal";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("taskData");
    if (stored) {
      setEmployees(JSON.parse(stored));
    } else {
      setEmployees(employeesJson.employees);
    }
  }, []);

  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem("taskData", JSON.stringify(employees));
    }
  }, [employees]);

  const handleAddTask = (employeeId, taskTitle) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employeeId
          ? {
              ...emp,
              tasks: [
                ...emp.tasks,
                {
                  id: Date.now(),
                  title: taskTitle,
                  status: "Pending"
                }
              ]
            }
          : emp
      )
    );
    setShowModal(false);
  };

  const handleStatusChange = (employeeId, taskId, newStatus) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employeeId
          ? {
              ...emp,
              tasks: emp.tasks.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
              )
            }
          : emp
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <main className="max-w-5xl mx-auto px-4 py-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Employee Task Tracker
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-sm font-medium px-4 py-2 rounded-lg"
          >
            + New Task
          </button>
        </header>

        <Dashboard employees={employees} />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2 mt-1">
          <TaskFilter
            activeFilter={activeFilter}
            onChange={(value) => setActiveFilter(value)}
          />
          <input
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-64 px-3 py-2 rounded-lg border text-sm bg-white text-slate-900"
          />
        </div>

        <EmployeeList
          employees={employees}
          activeFilter={activeFilter}
          search={search}
          onStatusChange={handleStatusChange}
        />

        {showModal && (
          <AddTaskModal
            employees={employees}
            onAddTask={handleAddTask}
            onClose={() => setShowModal(false)}
          />
        )}
      </main>
    </div>
  );
}
