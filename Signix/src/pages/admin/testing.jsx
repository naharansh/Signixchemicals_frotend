import { useEffect, useMemo, useRef, useState } from "react";
import Gantt from "frappe-gantt";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

/* ---------------- TEST DATA ---------------- */
const attendanceTestData = [
  {
    id: "emp-1",
    name: "Nilesh Sharma",
    start: "2024-09-18T09:00:00",
    end: "2024-09-18T18:00:00",
  },
  {
    id: "emp-2",
    name: "Kritik Maheshwari",
    start: "2024-09-16T10:00:00",
    end: "2024-09-16T17:30:00",
  },
  {
    id: "emp-3",
    name: "Rohit Verma",
    start: "2024-09-20T09:30:00",
    end: "2024-09-20T18:15:00",
  },
  {
    id: "emp-4",
    name: "Aman Gupta",
    start: "2024-09-05T09:00:00",
    end: "2024-09-05T18:00:00",
  },
  {
    id: "emp-5",
    name: "Pooja Singh",
    start: "2024-09-28T10:00:00",
    end: "2024-09-28T17:00:00",
  },
  {
    id: "emp-6",
    name: "Neha Jain",
    start: "2024-10-03T09:00:00",
    end: "2024-10-03T18:00:00",
  },
];

/* ---------------- HELPERS ---------------- */
const formatTime = (d) =>
  new Date(d).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });

const formatMonth = (d) =>
  new Date(d).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });

const dayDiff = (start, end) =>
  Math.max(
    1,
    Math.ceil(
      (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24) + 1
    )
  );

/* ---------------- COMPONENT ---------------- */
export default function AttendanceChart() {
  const ganttRef = useRef(null);

  const [view, setView] = useState("day");
  const [selectedDate, setSelectedDate] = useState(
    new Date(attendanceTestData[0].start)
  );

  /* ---------------- VIEW MODE MAP ---------------- */
  const viewModeMap = {
    day: "Hour",
    week: "Day",
    month: "Week",
    year: "Month",
  };

  /* ---------------- FILTER LOGIC ---------------- */
  const filterTasks = (tasks, view, date) => {
    const d = new Date(date);

    return tasks.filter((t) => {
      const start = new Date(t.start);

      if (view === "day") {
        return start.toDateString() === d.toDateString();
      }

      if (view === "week") {
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        weekStart.setHours(0, 0, 0, 0);

        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        weekEnd.setHours(23, 59, 59, 999);

        return start >= weekStart && start <= weekEnd;
      }

      if (view === "month") {
        return (
          start.getMonth() === d.getMonth() &&
          start.getFullYear() === d.getFullYear()
        );
      }

      if (view === "year") {
        return start.getFullYear() === d.getFullYear();
      }

      return true;
    });
  };

  /* ---------------- MONTH AGGREGATION ---------------- */
  const aggregateMonthTasks = (tasks) => {
    const map = {};

    tasks.forEach((t) => {
      if (!map[t.name]) {
        map[t.name] = {
          id: t.name,
          name: t.name,
          start: t.start,
          end: t.end,
          progress: 100,
        };
      } else {
        if (new Date(t.start) < new Date(map[t.name].start)) {
          map[t.name].start = t.start;
        }
        if (new Date(t.end) > new Date(map[t.name].end)) {
          map[t.name].end = t.end;
        }
      }
    });

    return Object.values(map);
  };

  /* ---------------- FINAL DATA ---------------- */
  const filteredTasks = useMemo(() => {
    const base = filterTasks(attendanceTestData, view, selectedDate);
    return view === "month" ? aggregateMonthTasks(base) : base;
  }, [view, selectedDate]);

  /* ---------------- INIT GANTT ---------------- */
  useEffect(() => {
    if (!ganttRef.current || filteredTasks.length === 0) return;

    ganttRef.current.innerHTML = "";

    new Gantt(ganttRef.current, filteredTasks, {
      view_mode: viewModeMap[view],
      bar_height: 30,
      padding: 20,

      custom_popup_html: (task) => {
        let label = "";

        if (view === "day") {
          label = `${formatTime(task.start)} – ${formatTime(task.end)}`;
        }

        if (view === "week") {
          label = formatDate(task.start);
        }

        if (view === "month") {
          label = `${formatMonth(task.start)} (${dayDiff(
            task.start,
            task.end
          )} days)`;
        }

        if (view === "year") {
          label = new Date(task.start).getFullYear();
        }

        return `
          <div style="padding:8px;font-size:13px">
            <div style="font-weight:600">${task.name}</div>
            <div style="color:#555;margin-top:4px">${label}</div>
          </div>
        `;
      },
    });
  }, [view, filteredTasks]);

  /* ---------------- UI ---------------- */
  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold">Employee Attendance</h2>

      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow">
        <Select value={view} onValueChange={setView}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Day</SelectItem>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="year">Year</SelectItem>
          </SelectContent>
        </Select>

        <input
          type="date"
          value={selectedDate.toISOString().split("T")[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="border rounded-md px-3 h-10"
        />
      </div>

      {filteredTasks.length === 0 ? (
        <div className="h-[400px] flex items-center justify-center bg-white rounded-lg shadow text-gray-500">
          No attendance data
        </div>
      ) : (
        <div
          ref={ganttRef}
          className="h-[400px] bg-white rounded-lg shadow"
        />
      )}
    </div>
  );
}
