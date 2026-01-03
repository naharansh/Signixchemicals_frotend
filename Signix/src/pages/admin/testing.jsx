import { useEffect, useRef, useState } from "react";
import Gantt from "frappe-gantt";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";


   const attendanceTestData = [
  // ===== SAME DAY (DAY FILTER) =====
  {
    id: "emp-1-day",
    name: "Nilesh Sharma",
    start: "2024-09-18",
    end: "2024-09-18",
  },

  // ===== SAME WEEK (WEEK FILTER) =====
  {
    id: "emp-2-week",
    name: "Kritik Maheshwari",
    start: "2024-09-16", // Monday
    end: "2024-09-16",
  },
  {
    id: "emp-3-week",
    name: "Rohit Verma",
    start: "2024-09-20", // Friday
    end: "2024-09-20",
  },

  // ===== SAME MONTH (MONTH FILTER) =====
  {
    id: "emp-4-month",
    name: "Aman Gupta",
    start: "2024-09-05",
    end: "2024-09-05",
  },
  {
    id: "emp-5-month",
    name: "Pooja Singh",
    start: "2024-09-28",
    end: "2024-09-28",
  },

  // ===== DIFFERENT MONTH (SHOULD NOT SHOW IN SEPT) =====
  {
    id: "emp-6-oct",
    name: "Neha Jain",
    start: "2024-10-03",
    end: "2024-10-03",
  },

  // ===== YEAR FILTER =====
  {
    id: "emp-7-year",
    name: "Arjun Patel",
    start: "2024-01-15",
    end: "2024-01-15",
  },

  // ===== DIFFERENT YEAR (EDGE CASE) =====
  {
    id: "emp-8-2023",
    name: "Old Record",
    start: "2023-12-31",
    end: "2023-12-31",
  },

  // ===== WEEK BOUNDARY TEST =====
  {
    id: "emp-9-sunday",
    name: "Sunday Task",
    start: "2024-09-22", // Sunday
    end: "2024-09-22",
  },

  // ===== MONTH END TEST =====
  {
    id: "emp-10-month-end",
    name: "Month End Task",
    start: "2024-09-30",
    end: "2024-09-30",
  },
];


export default function AttendanceChart() {
  const ganttRef = useRef(null);

  const [view, setView] = useState("day");
  const [selectedDate, setSelectedDate] = useState(
    new Date(attendanceTestData[0].start)
  );

  const viewModeMap = {
    day: "Hour",
    week: "Day",
    month: "Week",
    year: "Month",
  };

  
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

  const filteredTasks = filterTasks(attendanceTestData, view, selectedDate);

 
  useEffect(() => {
    if (!ganttRef.current || filteredTasks.length === 0) return;

    ganttRef.current.innerHTML = "";

    new Gantt(ganttRef.current, filteredTasks, {
      view_mode: viewModeMap[view],
      date_format:
        view === "day"
          ? "HH:mm"
          : view === "week"
          ? "DD MMM ddd"
          : view === "month"
          ? "DD MMM"
          : "MMM YYYY",
      bar_height: 28,
      padding: 20,
    });
  }, [view, selectedDate, filteredTasks]);

 
  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6 max-w-7xl mx-auto">
  <h2 className="text-xl font-semibold text-gray-800">
    Employee Attendance
  </h2>

 
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-lg shadow-sm p-4">
    
    
    <Select value={view} onValueChange={setView}>
      <SelectTrigger className="w-full sm:w-36">
        <SelectValue placeholder="View" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="day">Day</SelectItem>
        <SelectItem value="week">Week</SelectItem>
        <SelectItem value="month">Month</SelectItem>
        <SelectItem value="year">Year</SelectItem>
      </SelectContent>
    </Select>

    {/* Date Picker */}
    <input
      type="date"
      value={selectedDate.toISOString().split("T")[0]}
      onChange={(e) => setSelectedDate(new Date(e.target.value))}
      className="h-10 w-full sm:w-auto rounded-md border border-gray-300 px-3 text-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {filteredTasks.length === 0 ? (
    <div className="h-[400px] flex items-center justify-center text-gray-500 bg-white rounded-lg shadow-sm">
      No attendance data for selected period
    </div>
  ) : (
    <div
      ref={ganttRef}
      className="h-[400px] border rounded-lg bg-white shadow-sm mt-[70px]"
    />
  )}
</div>

  );
}
