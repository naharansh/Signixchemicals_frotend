import { SidebarInset } from "../../components/ui/sidebar";
import { Sidebar } from "../../components/sidebar.jsx";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.jsx";
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
import { AppSidebar } from "../../components/Appsliderbar/slidebar.jsx";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { useRole } from "../../context/rolecontex.jsx";
import {
  Ban,
  Building2,
  CheckCircle,
  CheckCircle2,
  Clock,
  History,
  TrendingUp,
  XCircleIcon,
} from "lucide-react";
import { Badge } from "../../components/ui/badge.jsx";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select.jsx";
import {  
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  
} from "../../components/ui/dialog.jsx";
import { Button } from "../../components/ui/button.jsx";
import { useState } from "react";
import { Label } from "../../components/ui/label.jsx";
export default function Page() {
  const { role } = useRole();
  const [open, setopen] = useState(false);

  const testdata = {
    count: [
      {
        status: "TotalCompanies",
        totalCount: 41,
      },
      {
        status: "Active",
        totalCount: 10,
      },
      {
        status: "Pending",
        totalCount: 15,
      },
      {
        status: "Suspended",
        totalCount: 16,
      },
    ],
    data: [
      {
        _id: "cmp_001",
        company_name: "TechNova Solutions",
        email: "contact@technova.com",
        phone: "+91-9876543210",
        industry: "IT Services",
        registration_no: "TN-REG-45821",
        status: "pending",
        submitted_by: "admin",
        created_at: "2025-01-12T10:30:00Z",
      },
      {
        _id: "cmp_002",
        company_name: "GreenLeaf Agro",
        email: "info@greenleaf.in",
        phone: "+91-9123456780",
        industry: "Agriculture",
        registration_no: "GL-AG-90211",
        status: "pending",
        submitted_by: "manager",
        created_at: "2025-01-13T14:15:00Z",
      },
      {
        _id: "cmp_003",
        company_name: "UrbanBuild Constructions",
        email: "support@urbanbuild.com",
        phone: "+91-9988776655",
        industry: "Construction",
        registration_no: "UB-CON-77129",
        status: "pending",
        submitted_by: "admin",
        created_at: "2025-01-14T09:45:00Z",
      },
      {
        _id: "cmp_004",
        company_name: "FinEdge Analytics",
        email: "hello@finedge.io",
        phone: "+91-9090909090",
        industry: "Finance",
        registration_no: "FE-FIN-33910",
        status: "suspended",
        submitted_by: "superadmin",
        created_at: "2025-01-15T11:20:00Z",
      },
      {
        _id: "cmp_005",
        company_name: "HealthFirst Labs",
        email: "labs@healthfirst.in",
        phone: "+91-9345678123",
        industry: "Healthcare",
        registration_no: "HF-HL-55678",
        status: "active",
        submitted_by: "admin",
        created_at: "2025-01-16T16:05:00Z",
      },
    ],
  };
  const HelpDesk = [
    {
      ticketId: "HD-1001",
      subject: "Cannot login to portal",
      status: "Open",
      priority: "High",
      assignedTo: "John Smith",
      createdDate: "2026-01-10",
      lastUpdated: "2026-01-11",
      customerName: "Priya Sharma",
      contactEmail: "priya.sharma@example.com",
    },
    {
      ticketId: "HD-1002",
      subject: "Printer not working",
      status: "In Progress",
      priority: "Medium",
      assignedTo: "Sarah Lee",
      createdDate: "2026-01-09",
      lastUpdated: "2026-01-12",
      customerName: "Rajesh Kumar",
      contactEmail: "rajesh.kumar@example.com",
    },
    {
      ticketId: "HD-1003",
      subject: "Request for new laptop",
      status: "Pending",
      priority: "Low",
      assignedTo: "Unassigned",
      createdDate: "2026-01-08",
      lastUpdated: "2026-01-08",
      customerName: "Emily Tan",
      contactEmail: "emily.tan@example.com",
    },
  ];
  const subscriptiondata = {
    summary: [
      {
        label: "Active Subscriptions",
        count: 1234,
        status: "active",
      },
      {
        label: "Expired Subscriptions",
        count: 45678,
        status: "expired",
      },
    ],

    subscriptions: [
      {
        subscriptionId: "SUB-1001",
        userName: "Priya Sharma",
        status: "Active",
        plan: "Premium",
        startDate: "2025-12-01",
        expiryDate: "2026-12-01",
      },
      {
        subscriptionId: "SUB-1002",
        userName: "Rajesh Kumar",
        status: "Expired",
        plan: "Basic",
        startDate: "2024-11-15",
        expiryDate: "2025-11-15",
      },
      {
        subscriptionId: "SUB-1003",
        userName: "Emily Tan",
        status: "Active",
        plan: "Standard",
        startDate: "2025-06-10",
        expiryDate: "2026-06-10",
      },
      {
        subscriptionId: "SUB-1004",
        userName: "Ahmed Ali",
        status: "Expired",
        plan: "Premium",
        startDate: "2024-01-20",
        expiryDate: "2025-01-20",
      },
      {
        subscriptionId: "SUB-1005",
        userName: "Sunita Patel",
        status: "Active",
        plan: "Basic",
        startDate: "2025-09-05",
        expiryDate: "2026-09-05",
      },
    ],
  };
  const revenue_report = {
    summery: [
      {
        total_amount: 2000,
        status: "Today's Revenue",
      },
      {
        total_amount: 4000,
        status: "Current Month Revenue",
      },
      {
        total_amount: 1000,
        status: "Last's Month Revenue",
      },
    ],
  };
  const rawData = [
    { month: "Jan", year: 2024, revenue: 40000 },
    { month: "Feb", year: 2024, revenue: 30000 },
    { month: "Mar", year: 2024, revenue: 50000 },
    { month: "Apr", year: 2024, revenue: 20000 },
    { month: "May", year: 2024, revenue: 60000 },

    { month: "Jan", year: 2025, revenue: 55000 },
    { month: "Feb", year: 2025, revenue: 42000 },
    { month: "Mar", year: 2025, revenue: 70000 },
    { month: "Apr", year: 2025, revenue: 38000 },
    { month: "May", year: 2025, revenue: 82000 },
  ];
  return (
    <Sidebar>
      <AppSidebar />

      <SidebarInset>
        {role === "admin" ? (
          <>
            <div
              className="
      grid gap-4 px-4 lg:px-6
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      mb-5

      *:data-[slot=card]:bg-gradient-to-t
      *:data-[slot=card]:from-primary/5
      *:data-[slot=card]:to-card
      dark:*:data-[slot=card]:bg-card
      *:data-[slot=card]:shadow-xs
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
                    Trending up this month
                    <IconTrendingUp className="size-4" />
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
                    Down 20% this period
                    <IconTrendingDown className="size-4" />
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
                    Strong user retention
                    <IconTrendingUp className="size-4" />
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
                    Steady performance increase
                    <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Meets growth projections
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <Card className="@container/card">
                <Table>
                  <TableCaption>A list of your recent invoices.</TableCaption>

                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {subscriptiondata.subscriptions.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">
                          {invoice.invoice}
                        </TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                          {invoice.totalAmount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </Card>
            </div>
          </>
        ) : (
          <>
            <div className=" w-1/2 mx-auto">
              <Select
                onValueChange={(value) => {
                  if (value === "Customize") {
                    setopen(true);
                  }
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Today">Today</SelectItem>
                  <SelectItem value="Last_week">Last Week</SelectItem>
                  <SelectItem value="Last_Month">Last Month</SelectItem>
                  <SelectItem value="Last_year">Last Year</SelectItem>
                  <SelectItem value="Customize">Customize…</SelectItem>
                </SelectContent>
              </Select>
              <Dialog open={open} onOpenChange={setopen}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Customize Range</DialogTitle>
                    <DialogDescription>
                      Select your custom date range and save changes.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label>Start Date</Label>
                      <input type="date" className="border rounded px-2 py-1" />
                    </div>
                    <div className="grid gap-3">
                     <Label>End Date</Label>
                      <input type="date" className="border rounded px-2 py-1" />
                    </div>
                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Submit</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <h1 class="text-xl  text-gray-300 dark:text-white px-5 my-2">
              All Information
            </h1>
            <div
              className="
        grid gap-4 px-4 lg:px-6
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-1
        *:data-[slot=card]:bg-gradient-to-t
        *:data-[slot=card]:from-primary/5
        *:data-[slot=card]:to-card
        dark:*:data-[slot=card]:bg-card
        *:data-[slot=card]:shadow-xs
      "
            >
              {testdata.count.map((list, key) => (
                <Card
                  className="@container/card h-[150px] py-2 transition-transform hover:scale-105 hover:shadow-md"
                  key={key}
                >
                  <CardHeader className="flex flex-col items-center gap-2 text-center">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl  ${list.status === "TotalCompanies" ? "text-primary" : list.status === "Active" ? "text-green-600" : list.status === "Pending" ? "text-yellow-400" : "text-red-600"}`}
                    >
                      {list.status === "TotalCompanies" ? (
                        <Building2 className="h-7 w-7" />
                      ) : list.status === "Active" ? (
                        <CheckCircle className="h-7 w-7" />
                      ) : list.status === "Pending" ? (
                        <Clock className="h-7 w-7" />
                      ) : (
                        <Ban className="h-7 w-7" />
                      )}
                    </div>
                    <CardTitle
                      className={`text-3xl  tabular-nums @[250px]/card:text-4xl ${list.status === "TotalCompanies" ? "text-primary" : list.status === "Active" ? "text-green-600" : list.status === "Pending" ? "text-yellow-400" : "text-red-600"} `}
                    >
                      {list.totalCount}
                    </CardTitle>
                    <CardDescription className="text-sm  text-muted-foreground">
                      {list.status}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="rounded-none dark:bg-gray-900 py-2 px-2">
              <div className="flex flex-col sm:flex-row items-center  gap-4">
                <h1 class="text-xl  text-gray-300 dark:text-white px-5 my-2">
                  Subscription and Financial Report
                </h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {subscriptiondata.summary.map((list, key) => (
                  <Card key={key} className="h-[160px] rounded-xl shadow-sm">
                    <CardHeader className="flex flex-col items-center gap-2 text-center">
                      <div
                        className={`h-12 w-12 rounded-xl flex items-center justify-center
              ${
                list.status === "active"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
                      >
                        {list.status === "active" ? (
                          <CheckCircle2 className="h-6 w-6" />
                        ) : (
                          <XCircleIcon className="h-6 w-6" />
                        )}
                      </div>

                      <CardTitle
                        className={`text-lg sm:text-xl md:text-2xl font-bold ${
                          list.status === "active"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {list.count}
                      </CardTitle>

                      <CardDescription className="text-sm">
                        {list.label}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}

                {revenue_report.summery.map((list, key) => (
                  <Card key={key} className="h-[160px] rounded-xl shadow-sm">
                    <CardHeader className="flex flex-col items-center gap-3 text-center">
                      <div className="h-12 w-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        {list.status === "Today's Revenue" ? (
                          <Clock className="h-6 w-6 text-blue-600" />
                        ) : list.status === "Current Month Revenue" ? (
                          <TrendingUp className="h-6 w-6 text-green-600" />
                        ) : (
                          <History className="h-6 w-6 text-gray-600" />
                        )}
                      </div>

                      <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold">
                        {list.total_amount}
                      </CardTitle>

                      <CardDescription className="text-sm">
                        {list.status}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="@container/card my-4 mx-5 rounded-sm border border-none">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2 mb-4">
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Total Overview
                  </CardTitle>
                  <span
                    className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium 
                   bg-blue-100 text-blue-600 rounded-full"
                  >
                    Summary
                  </span>
                </div>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={rawData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(v) => `₹ ${v.toLocaleString()}`} />
                    <Bar dataKey="revenue" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 pt-0">
              <Card className="@container/card shadow-sm border rounded-sm py-2">
                <CardHeader className="border-b">
                  <CardTitle className="text-lg font-semibold">
                    Pending Companies
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Overview of all Pending Companies
                  </p>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="max-h-[350px] overflow-auto">
                    <Table>
                      <TableHeader className="sticky top-0 bg-background z-10">
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Company_Name</TableHead>
                          <TableHead>Registration_no</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        {testdata.data.map((list, key) =>
                          list.status === "pending" ? (
                            <TableRow key={key}>
                              <TableCell className="font-medium">
                                {list._id}
                              </TableCell>
                              <TableCell>{list.company_name}</TableCell>
                              <TableCell>{list.registration_no}</TableCell>
                              <TableCell>
                                <Badge className="bg-yellow-600">
                                  {list.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ) : (
                            ""
                          ),
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
              <Card className="@container/card shadow-sm border rounded-sm py-2">
                <CardHeader className="border-b">
                  <CardTitle className="text-lg font-semibold">
                    HelpDesk List
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Overview of all Helpdesk Tickets
                  </p>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="max-h-[350px] overflow-auto">
                    <Table>
                      <TableHeader className="sticky top-0 bg-background z-10">
                        <TableRow>
                          <TableHead>Ticket_ID</TableHead>
                          <TableHead>Customer_Name</TableHead>
                          <TableHead>Assigned_to</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Proirity</TableHead>
                          <TableHead>Last_Updated</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        {HelpDesk.map((list, key) => (
                          <TableRow key={key}>
                            <TableCell className="font-medium">
                              {list.ticketId}
                            </TableCell>
                            <TableCell>{list.customerName}</TableCell>
                            <TableCell>{list.assignedTo}</TableCell>
                            <TableCell>
                              <Badge
                                className={`${list.status === "Pending" ? "bg-yellow-600" : list.status === "Open" ? "bg-red-600" : "bg-green-500"}`}
                              >
                                {list.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{list.priority}</TableCell>
                            <TableCell>{list.lastUpdated}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </SidebarInset>
    </Sidebar>
  );
}
