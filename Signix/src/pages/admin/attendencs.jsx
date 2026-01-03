import { useState, Fragment, useMemo } from "react";
import { Sidebar } from "../../components/sidebar";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Switch } from "../../components/ui/switch";
import AttendanceChart from "./testing";


export const Toggles = () => {
   const [expandedMonth, setExpandedMonth] = useState(null);

  const attendanceData = [
    {
      month: "September 2024",
      workedHours: "269:56",
      extraHours: "00:00",
      employees: [
        {
          name: "Nilesh Sharma",
          checkIn: "09:00",
          checkOut: "18:00",
          workedHours: "231:35",
          extraHours: "00:00",
        },
        {
          name: "Kritik Maheshwari",
          checkIn: "10:00",
          checkOut: "14:30",
          workedHours: "38:21",
          extraHours: "00:00",
        },
      ],
    },
    {
      month: "October 2024",
      workedHours: "650:37",
      extraHours: "40:00",
      employees: [],
    },
  ];

  const toggleMonth = (month) => {
    setExpandedMonth(expandedMonth === month ? null : month);
  };

  const [switchd, setswitch] = useState(true);
  if(switchd)
  {
   return (
    <Sidebar>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4 mx-4">Attendance Report</h2>
          <Switch
                id="airplane-mode"
                checked={!switchd}
                onCheckedChange={() => setswitch(!switchd)}
              />


        </div>
        <Card className="rounded-md border bg-background">
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 border-b">
                <tr className="text-muted-foreground">
                  <th className="px-4 py-3 text-left">Employee</th>
                  <th className="px-4 py-3">Check In</th>
                  <th className="px-4 py-3">Check Out</th>
                  <th className="px-4 py-3">Worked Hours</th>
                  <th className="px-4 py-3">Extra Hours</th>
                </tr>
              </thead>

              <tbody>
                {attendanceData.map((monthData) => (
                  <Fragment key={monthData.month}>
                    <tr
                      onClick={() => toggleMonth(monthData.month)}
                      className="bg-muted/20 hover:bg-muted/40 cursor-pointer"
                    >
                      <td className="px-4 py-3 font-semibold flex items-center gap-2">
                        {expandedMonth === monthData.month ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                        {monthData.month}
                      </td>

                      <td colSpan={4} className="px-4 py-3">
                        Worked:{" "}
                        <span className="font-medium">
                          {monthData.workedHours}
                        </span>{" "}
                        | Extra:{" "}
                        <span
                          className={`font-medium ${
                            monthData.extraHours !== "00:00"
                              ? "text-green-600"
                              : "text-muted-foreground"
                          }`}
                        >
                          {monthData.extraHours}
                        </span>
                      </td>
                    </tr>

                    {expandedMonth === monthData.month &&
                      (monthData.employees.length ? (
                        monthData.employees.map((emp) => (
                          <tr
                            key={emp.name}
                            className="border-b hover:bg-muted/20"
                          >
                            <td className="px-4 py-2 pl-10 font-medium">
                              {emp.name}
                            </td>
                            <td className="px-4 py-2">{emp.checkIn}</td>
                            <td className="px-4 py-2">{emp.checkOut}</td>
                            <td className="px-4 py-2">{emp.workedHours}</td>
                            <td
                              className={`px-4 py-2 font-medium ${
                                emp.extraHours !== "00:00"
                                  ? "text-green-600"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {emp.extraHours}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={5}
                            className="px-4 py-4 text-center text-muted-foreground italic"
                          >
                            No employee records
                          </td>
                        </tr>
                      ))}

                    <tr>
                      <td colSpan={5}>
                        <Separator />
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </Sidebar>
  );
  }
  else
  {
   return(
    <>
    <Sidebar>
  <div className="flex flex-col h-full p-6 bg-gray-50">
    
   
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold">
        Attendance Report
      </h2>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">
          {switchd ? "Table View" : "Chart View"}
        </span>
        <Switch
          checked={!switchd}
          onCheckedChange={() => setswitch(!switchd)}
        />
      </div>
    </div>


   
      <AttendanceChart />
  

  </div>
</Sidebar>

    </>
   )
  }
  
};

