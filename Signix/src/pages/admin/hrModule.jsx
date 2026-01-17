import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { AppSidebar } from "../../components/Appsliderbar/slidebar";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useMemo, useState } from "react";

import { Tooltip } from "../../components/ui/tooltip";
import { Sidebar } from "../../components/sidebar";
export const HrDashboard = () => {
  const testdata = {
    employees: [
      {
        id: "E001",
        name: "Priya Sharma",
        role: "HR Manager",
        department: "HR",
        joiningDate: "2022-03-15",
        status: "Active",
      },
      {
        id: "E002",
        name: "Arjun Mehta",
        role: "Software Developer",
        department: "IT",
        joiningDate: "2023-07-01",
        status: "Active",
      },
      {
        id: "E003",
        name: "Kavya Iyer",
        role: "Marketing Executive",
        department: "Marketing",
        joiningDate: "2024-01-10",
        status: "Active",
      },
      {
        id: "E004",
        name: "Rohan Das",
        role: "Finance Analyst",
        department: "Finance",
        joiningDate: "2021-11-20",
        status: "Resigned",
      },
    ],
    attendance: [
      {
        date: "2026-01-14",
        employeeId: "E001",
        checkIn: "09:05",
        checkOut: "18:10",
        hoursWorked: 9.1,
      },
      {
        date: "2026-01-14",
        employeeId: "E002",
        checkIn: "09:30",
        checkOut: "17:45",
        hoursWorked: 8.2,
      },
      {
        date: "2026-01-14",
        employeeId: "E003",
        checkIn: "10:00",
        checkOut: "19:00",
        hoursWorked: 9.0,
      },
    ],
    payroll: [
      {
        employeeId: "E001",
        month: "Jan 2026",
        basicPay: 80000,
        bonus: 5000,
        deductions: 2000,
        netPay: 83000,
      },
      {
        employeeId: "E002",
        month: "Jan 2026",
        basicPay: 60000,
        bonus: 3000,
        deductions: 1500,
        netPay: 61500,
      },
      {
        employeeId: "E003",
        month: "Jan 2026",
        basicPay: 45000,
        bonus: 2000,
        deductions: 1000,
        netPay: 46000,
      },
    ],
    leave: [
      {
        employeeId: "E001",
        leaveType: "Annual",
        startDate: "2026-02-01",
        endDate: "2026-02-05",
        status: "Approved",
      },
      {
        employeeId: "E002",
        leaveType: "Sick",
        startDate: "2026-01-20",
        endDate: "2026-01-22",
        status: "Pending",
      },
      {
        employeeId: "E003",
        leaveType: "Casual",
        startDate: "2026-01-10",
        endDate: "2026-01-11",
        status: "Approved",
      },
    ],
  };
  const chartConfig = {
    desktop: {
      label: "Revenue",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Performance",
      color: "hsl(var(--chart-2))",
    },
  };
  const timeToMinutes = (time) => {
    if (!time) return 0;
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };
  const chartData = useMemo(() => {
    return (
      testdata?.attendance?.map((d) => ({
        name: d.checkOut, // X-axis label
        value: timeToMinutes(d.checkIn), // Y-axis NUMBER
      })) || []
    );
  }, [testdata]);
  return (
    <>
      <Sidebar>
        
          <div
            className="
        grid gap-4 px-4 lg:px-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4

        *:data-[slot=card]:bg-gradient-to-t
        *:data-[slot=card]:from-primary/5
        *:data-[slot=card]:to-card
        dark:*:data-[slot=card]:bg-card
        *:data-[slot=card]:shadow-xs
        mb-5
      "
          >
            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  $1,250.00
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Trending up this month <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader>
                <CardDescription>New Customers</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  1,234
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Down 20% this period <IconTrendingDown className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Acquisition needs attention
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Active Accounts</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  45,678
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Strong user retention <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Engagement exceeds targets
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Growth Rate</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  4.5%
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Steady performance increase{" "}
                  <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Meets growth projections
                </div>
              </CardFooter>
            </Card>
          </div>
          <Card className="@container/card my-4 mx-5 rounded-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Total Overview</CardTitle>
            </CardHeader>

            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="url(#fillValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 pt-0">
         
            <Card className="@container/card shadow-sm border rounded-sm py-2">
              <CardHeader className="border-b">
                <CardTitle className="text-lg font-semibold">
                  Employee List
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Overview of all employees
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <div className="max-h-[350px] overflow-auto">
                  <Table>
                    <TableHeader className="sticky top-0 bg-background z-10">
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Joining Date</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {testdata.employees.map((list, key) => (
                        <TableRow
                          key={key}
                          className="hover:bg-muted/50 transition"
                        >
                          <TableCell className="font-medium">
                            {list.id}
                          </TableCell>
                          <TableCell>{list.name}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-700">
                              {list.department}
                            </span>
                          </TableCell>
                          <TableCell>{list.role}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {list.joiningDate}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card className="@container/card shadow-sm border rounded-sm py-2">
              <CardHeader className="border-b">
                <CardTitle className="text-lg font-semibold">
                  Attendance List
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Daily employee attendance tracking
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <div className="max-h-[350px] overflow-auto">
                  <Table>
                    <TableHeader className="sticky top-0 bg-background z-10">
                      <TableRow>
                        <TableHead>Employee ID</TableHead>
                        <TableHead>Check In</TableHead>
                        <TableHead>Check Out</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Hours</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {testdata.attendance.map((list, key) => (
                        <TableRow
                          key={key}
                          className="hover:bg-muted/50 transition"
                        >
                          <TableCell className="font-medium">
                            {list.employeeId}
                          </TableCell>
                          <TableCell>{list.checkIn}</TableCell>
                          <TableCell>{list.checkOut}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {list.date}
                          </TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 text-xs rounded-md ${
                                list.hoursWorked >= 8
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {list.hoursWorked} hrs
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            <Card className="@container/card shadow-sm border rounded-sm py-2">
              <CardHeader className="border-b">
                <CardTitle className="text-lg font-semibold">
                  Payroll List
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Daily employee Payroll tracking
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <div className="max-h-[350px] overflow-auto">
                  <Table>
                    <TableHeader className="sticky top-0 bg-background z-10">
                      <TableRow>
                        <TableHead>Employee ID</TableHead>
                        <TableHead>Month</TableHead>
                        <TableHead>Basic Pay</TableHead>
                        <TableHead>Deductions</TableHead>
                        <TableHead>NetPay</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {testdata.payroll.map((list, key) => (
                        <TableRow
                          key={key}
                          className="hover:bg-muted/50 transition"
                        >
                          <TableCell className="font-medium">
                            {list.employeeId}
                          </TableCell>
                          <TableCell>{list.month}</TableCell>
                          <TableCell>{list.basicPay}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {list.deductions}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {list.netPay}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            <Card className="@container/card shadow-sm border rounded-sm py-2">
              <CardHeader className="border-b">
                <CardTitle className="text-lg font-semibold">
                  Leave List
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Daily employee Leave tracking
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <div className="max-h-[350px] overflow-auto">
                  <Table>
                    <TableHeader className="sticky top-0 bg-background z-10">
                      <TableRow>
                        <TableHead>Employee ID</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>End Date</TableHead>
                        <TableHead>LeaveType</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {testdata.leave.map((list, key) => (
                        <TableRow
                          key={key}
                          className="hover:bg-muted/50 transition"
                        >
                          <TableCell className="font-medium">
                            {list.employeeId}
                          </TableCell>
                          <TableCell>{list.startDate}</TableCell>
                          <TableCell>{list.endDate}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {list.leaveType}
                          </TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 text-xs rounded-md ${
                                list.status == "Pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                              }`}
                            >
                              {list.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
       
      </Sidebar>
    </>
  );
};
export const SalesDashboard = () => {
  const salesdata = {
    recentOrders: [
      {
        orderId: "ORD-3001",
        date: "2026-01-01",
        product: "Laptop Pro 15",
        category: "Electronics",
        unitsSold: 5,
        revenue: 6000,
        profit: 1500,
        salesperson: "A. Sharma",
        region: "North",
      },
      {
        orderId: "ORD-3002",
        date: "2026-01-02",
        product: "Ergonomic Chair",
        category: "Furniture",
        unitsSold: 8,
        revenue: 1600,
        profit: 480,
        salesperson: "R. Patel",
        region: "West",
      },
      {
        orderId: "ORD-3003",
        date: "2026-01-03",
        product: "Coffee Beans",
        category: "Grocery",
        unitsSold: 20,
        revenue: 240,
        profit: 50,
        salesperson: "S. Khan",
        region: "East",
      },
      {
        orderId: "ORD-3004",
        date: "2026-01-04",
        product: "Smartphone X",
        category: "Electronics",
        unitsSold: 6,
        revenue: 5100,
        profit: 950,
        salesperson: "M. Gupta",
        region: "South",
      },
      {
        orderId: "ORD-3005",
        date: "2026-01-05",
        product: "Desk Lamp",
        category: "Furniture",
        unitsSold: 15,
        revenue: 600,
        profit: 150,
        salesperson: "P. Singh",
        region: "Central",
      },
    ],
    topProducts: [
      {
        rank: 1,
        product: "Laptop Pro 15",
        category: "Electronics",
        unitsSold: 5,
        revenue: 6000,
      },
      {
        rank: 2,
        product: "Smartphone X",
        category: "Electronics",
        unitsSold: 6,
        revenue: 5100,
      },
      {
        rank: 3,
        product: "Headphones Max",
        category: "Electronics",
        unitsSold: 12,
        revenue: 3000,
      },
      {
        rank: 4,
        product: "Ergonomic Chair",
        category: "Furniture",
        unitsSold: 8,
        revenue: 1600,
      },
      {
        rank: 5,
        product: "Rice Bag 10kg",
        category: "Grocery",
        unitsSold: 25,
        revenue: 500,
      },
    ],
    salespersonLeaderboard: [
      {
        rank: 1,
        salesperson: "A. Sharma",
        region: "North",
        orders: 3,
        revenue: 10500,
        profit: 2670,
      },
      {
        rank: 2,
        salesperson: "M. Gupta",
        region: "South",
        orders: 2,
        revenue: 9300,
        profit: 2000,
      },
      {
        rank: 3,
        salesperson: "R. Patel",
        region: "West",
        orders: 2,
        revenue: 3200,
        profit: 880,
      },
      {
        rank: 4,
        salesperson: "P. Singh",
        region: "Central",
        orders: 2,
        revenue: 1200,
        profit: 300,
      },
      {
        rank: 5,
        salesperson: "S. Khan",
        region: "East",
        orders: 2,
        revenue: 740,
        profit: 150,
      },
    ],
    regionalBreakdown: [
      {
        region: "North",
        orders: 3,
        unitsSold: 32,
        revenue: 10500,
        profit: 2670,
      },
      {
        region: "South",
        orders: 2,
        unitsSold: 13,
        revenue: 9300,
        profit: 2000,
      },
      {
        region: "West",
        orders: 2,
        unitsSold: 14,
        revenue: 3200,
        profit: 880,
      },
      {
        region: "Central",
        orders: 2,
        unitsSold: 45,
        revenue: 1200,
        profit: 300,
      },
      {
        region: "East",
        orders: 2,
        unitsSold: 90,
        revenue: 740,
        profit: 150,
      },
    ],
  };
  const chartConfig = {
    value: {
      label: "Revenue",
      color: "hsl(var(--chart-1))",
    },
  };
  const chartData = useMemo(() => {
    return salesdata.recentOrders.map((item) => ({
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      value: item.revenue, // 👈 main graph value
    }));
  }, []);

  /* Filter by selected range */

  return (
    <>
      <Sidebar>
       
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>DashBoard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div
            className="
        grid gap-4 px-4 lg:px-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4

        *:data-[slot=card]:bg-gradient-to-t
        *:data-[slot=card]:from-primary/5
        *:data-[slot=card]:to-card
        dark:*:data-[slot=card]:bg-card
        *:data-[slot=card]:shadow-xs
        mb-5
      "
          >
            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  $1,250.00
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Trending up this month <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader>
                <CardDescription>New Customers</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  1,234
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Down 20% this period <IconTrendingDown className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Acquisition needs attention
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Active Accounts</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  45,678
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Strong user retention <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Engagement exceeds targets
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Growth Rate</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  4.5%
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Steady performance increase{" "}
                  <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Meets growth projections
                </div>
              </CardFooter>
            </Card>
          </div>

          <Card className="@container/card rounded-sm border shadow-sm mx-5 my-4">
            <CardHeader className="pb-0">
              <CardTitle>Total Revenue</CardTitle>
              <p className="text-sm text-muted-foreground">
                Total for the last 5 days
              </p>
            </CardHeader>

            <CardContent className="pt-4">
              <ChartContainer config={chartConfig} className="h-[260px] w-full">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient
                      id="grayGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#4b4b4b" stopOpacity={0.6} />
                      <stop
                        offset="95%"
                        stopColor="#4b4b4b"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>

                  {/* Soft grid */}
                  <CartesianGrid vertical={false} strokeOpacity={0.15} />

                  {/* X Axis */}
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                  />

                  {/* Hidden Y Axis (like image) */}
                  <YAxis hide />

                  {/* Tooltip */}
                  <ChartTooltip
                    content={<ChartTooltipContent indicator="line" />}
                  />

                  {/* Area */}
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#302f2f"
                    strokeWidth={2.5}
                    fill="url(#grayGradient)"
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-0 mx-4">
            <Card className="@container/card shadow-sm border rounded-sm p-2 px-0 ">
              <CardHeader className="border-b pb-3">
                <CardTitle className="text-lg font-semibold">
                  Recent Orders
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Latest sales transactions
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <div className="max-h-[320px] overflow-auto">
                  <Table>
                    <TableHeader className="sticky top-0 bg-background z-10">
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-center">
                          Units Sold
                        </TableHead>
                        <TableHead>Salesperson</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {salesdata.recentOrders.map((list, key) => (
                        <TableRow
                          key={key}
                          className="hover:bg-muted/50 transition"
                        >
                          <TableCell className="font-medium">
                            {list.orderId}
                          </TableCell>

                          <TableCell>
                            <span className="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-700">
                              {list.category}
                            </span>
                          </TableCell>

                          <TableCell className="max-w-[180px] truncate">
                            {list.product}
                          </TableCell>

                          <TableCell className="text-center">
                            {list.unitsSold}
                          </TableCell>

                          <TableCell className="text-muted-foreground">
                            {list.salesperson}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card className="@container/card shadow-sm border rounded-sm p-2 px-0 ">
              <CardHeader className="border-b pb-3">
                <CardTitle className="text-lg font-semibold">
                  Salesperson Leaderboard
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Latest salesperson Leaderboard
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <div className="max-h-[320px] overflow-auto">
                  <Table>
                    <TableHeader className="sticky top-0 bg-background z-10">
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-center">
                          Units Sold
                        </TableHead>
                        <TableHead>Salesperson</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {salesdata.salespersonLeaderboard.map((list, key) => (
                        <TableRow
                          key={key}
                          className="hover:bg-muted/50 transition"
                        >
                          <TableCell className="font-medium">
                            {list.rank}
                          </TableCell>

                          <TableCell>{list.salesperson}</TableCell>

                          <TableCell className="max-w-[180px] truncate">
                            {list.region}
                          </TableCell>

                          <TableCell className="text-center">
                            {list.revenue}
                          </TableCell>

                          <TableCell>{list.profit}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card className="@container/card shadow-sm border rounded-sm">
              <CardHeader className="flex flex-row items-center justify-between border-b px-4 ">
                <div>
                  <CardTitle className="text-lg font-semibold">
                    Top Products
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Latest Top Products
                  </p>
                </div>

                {/* Optional action */}
                <span className="text-xs text-muted-foreground">
                  Last 30 days
                </span>
              </CardHeader>

              {/* Content */}
              <CardContent className="p-0">
                <div className="max-h-[340px] overflow-auto scrollbar-thin scrollbar-thumb-muted">
                  <Table>
                    {/* Sticky Header */}
                    <TableHeader className="sticky top-0 ">
                      <TableRow>
                        <TableHead className="w-[110px]">Order ID</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-center">
                          Units Sold
                        </TableHead>
                        <TableHead className="text-right">Revenue</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {salesdata.topProducts.map((list, index) => (
                        <TableRow key={index}>
                          {/* Order ID */}
                          <TableCell className="font-medium">
                            {list.rank}
                          </TableCell>

                          {/* Category */}
                          <TableCell className="text-muted-foreground">
                            {list.category}
                          </TableCell>

                          {/* Product */}
                          <TableCell className="max-w-[200px] truncate">
                            {list.product}
                          </TableCell>

                          {/* Units */}
                          <TableCell className="text-center font-medium">
                            {list.unitsSold}
                          </TableCell>

                          {/* Revenue */}
                          <TableCell className="text-right font-semibold text-green-600">
                            {list.revenue}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            <Card className="@container/card shadow-sm border rounded-sm">
              <CardHeader className="flex flex-row items-center justify-between border-b px-4 ">
                <div>
                  <CardTitle className="text-lg font-semibold">
                    Regional Breakdown
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Latest Regional Breakdown
                  </p>
                </div>

                {/* Optional action */}
                <span className="text-xs text-muted-foreground">
                  Last 30 days
                </span>
              </CardHeader>

              {/* Content */}
              <CardContent className="p-0">
                <div className="max-h-[340px] overflow-auto scrollbar-thin scrollbar-thumb-muted">
                  <Table>
                    {/* Sticky Header */}
                    <TableHeader className="sticky top-0 ">
                      <TableRow>
                        <TableHead className="w-[110px]">Order ID</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-center">
                          Units Sold
                        </TableHead>
                        <TableHead className="text-right">Revenue</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {salesdata.regionalBreakdown.map((list, index) => (
                        <TableRow key={index}>
                          {/* Order ID */}
                          <TableCell className="font-medium">
                            {list.orders}
                          </TableCell>

                          {/* Category */}
                          <TableCell className="text-muted-foreground">
                            {list.region}
                          </TableCell>

                          {/* Product */}
                          <TableCell className="max-w-[200px] truncate">
                            {list.profit}
                          </TableCell>

                          {/* Units */}
                          <TableCell className="text-center font-medium">
                            {list.unitsSold}
                          </TableCell>

                          {/* Revenue */}
                          <TableCell className="text-right font-semibold text-green-600">
                            {list.profit}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
       
      </Sidebar>
    </>
  );
};
export const Distributor = () => {
  const test_data = {
    reportDate: "2026-01-14",

    distributors: [
      {
        id: "D001",
        name: "Global Supplies Ltd",
        region: "North",

        revenueTrend: [
          { date: "2025-11-01", revenue: 65000 },
          { date: "2025-12-01", revenue: 72000 },
          { date: "2026-01-01", revenue: 80500 },
        ],

        products: [
          {
            sku: "P1001",
            name: "Laptop Pro 15",
            category: "Electronics",
            unitsSold: 120,
            unitsReturned: 5,
            revenue: 180000,
          },
          {
            sku: "P2001",
            name: "Office Chair Deluxe",
            category: "Furniture",
            unitsSold: 75,
            unitsReturned: 2,
            revenue: 37500,
          },
        ],

        totalRevenue: 217500,

        performance: {
          target: 200000,
          achieved: true,
        },
      },

      {
        id: "D002",
        name: "Sunrise Distribution",
        region: "South",

        products: [
          {
            sku: "P3001",
            name: "Smartphone X",
            category: "Electronics",
            unitsSold: 200,
            unitsReturned: 10,
            revenue: 140000,
          },
          {
            sku: "P4001",
            name: "Standing Desk",
            category: "Furniture",
            unitsSold: 40,
            unitsReturned: 1,
            revenue: 32000,
          },
        ],

        totalRevenue: 220000,

        performance: {
          target: 180000,
          achieved: false,
        },
      },
    ],

    summary: {
      totalDistributors: 2,
      totalRevenue: 389500,
      topDistributor: "Global Supplies Ltd",
      lowestDistributor: "Sunrise Distribution",
    },
  };

  const [range, setRange] = useState("90d");
  const chartConfig = {
    desktop: {
      label: "Revenue",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Performance",
      color: "hsl(var(--chart-2))",
    },
  };

  const chartData = useMemo(() => {
    return test_data.distributors.map((d) => ({
      name: d.name,
      value: d.totalRevenue,
    }));
  }, []);

  return (
    <>
      <Sidebar>
     
          
          <div
            className="
        grid gap-4 px-4 lg:px-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4

        *:data-[slot=card]:bg-gradient-to-t
        *:data-[slot=card]:from-primary/5
        *:data-[slot=card]:to-card
        dark:*:data-[slot=card]:bg-card
        *:data-[slot=card]:shadow-xs
        mb-5
      "
          >
            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  $1,250.00
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Trending up this month <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader>
                <CardDescription>New Customers</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  1,234
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Down 20% this period <IconTrendingDown className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Acquisition needs attention
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Active Accounts</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  45,678
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Strong user retention <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Engagement exceeds targets
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Growth Rate</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  4.5%
                </CardTitle>
                <CardAction />
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="flex gap-2 font-medium">
                  Steady performance increase{" "}
                  <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Meets growth projections
                </div>
              </CardFooter>
            </Card>
          </div>
          <Card className="@container/card my-4 mx-5">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Total Overview</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopOpacity={0.8} />
                      <stop offset="95%" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="url(#fillValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 pt-0">
            <Card className="@container/card shadow-sm border rounded-sm py-2">
              <CardHeader className="border-b">
                <CardTitle className="text-lg font-semibold">
                  Employee List
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Overview of all employees
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <div className="max-h-[350px] overflow-auto">
                  <Table>
                    <TableHeader className="sticky top-0 bg-background z-10">
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Joining Date</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {test_data.distributors.map((list, key) => (
                        <TableRow
                          key={key}
                          className="hover:bg-muted/50 transition"
                        >
                          <TableCell className="font-medium">
                            {list.id}
                          </TableCell>
                          <TableCell>{list.name}</TableCell>
                          <TableCell>{list.region}</TableCell>
                          <TableCell>{list.totalRevenue}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {list.performance.target}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            <Card className="@container/card shadow-sm border rounded-sm py-2">
              <CardHeader className="border-b">
                <CardTitle className="text-lg font-semibold">
                  Employee List
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Overview of all employees
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <div className="max-h-[350px] overflow-auto">
                  <Table>
                    <TableHeader className="sticky top-0 bg-background z-10">
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Joining Date</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {test_data.distributors.map((list, key) => (
                        <TableRow
                          key={key}
                          className="hover:bg-muted/50 transition"
                        >
                          <TableCell className="font-medium">
                            {list.id}
                          </TableCell>
                          <TableCell>{list.name}</TableCell>
                          <TableCell>{list.region}</TableCell>
                          <TableCell>{list.totalRevenue}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {list.performance.target}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        
      </Sidebar>
    </>
  );
};
