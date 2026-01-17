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
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useMemo, useState } from "react";

import { Tooltip } from "../../components/ui/tooltip";

export const SalesDashboard = () => {
  const [range] = useState("90d");

  /* ---------------- DATA ---------------- */
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
      { rank: 1, product: "Laptop Pro 15", category: "Electronics", unitsSold: 5, revenue: 6000 },
      { rank: 2, product: "Smartphone X", category: "Electronics", unitsSold: 6, revenue: 5100 },
      { rank: 3, product: "Headphones Max", category: "Electronics", unitsSold: 12, revenue: 3000 },
      { rank: 4, product: "Ergonomic Chair", category: "Furniture", unitsSold: 8, revenue: 1600 },
      { rank: 5, product: "Rice Bag 10kg", category: "Grocery", unitsSold: 25, revenue: 500 },
    ],

    salespersonLeaderboard: [
      { rank: 1, salesperson: "A. Sharma", region: "North", orders: 3, revenue: 10500, profit: 2670 },
      { rank: 2, salesperson: "M. Gupta", region: "South", orders: 2, revenue: 9300, profit: 2000 },
      { rank: 3, salesperson: "R. Patel", region: "West", orders: 2, revenue: 3200, profit: 880 },
      { rank: 4, salesperson: "P. Singh", region: "Central", orders: 2, revenue: 1200, profit: 300 },
      { rank: 5, salesperson: "S. Khan", region: "East", orders: 2, revenue: 740, profit: 150 },
    ],

    regionalBreakdown: [
      { region: "North", orders: 3, unitsSold: 32, revenue: 10500, profit: 2670 },
      { region: "South", orders: 2, unitsSold: 13, revenue: 9300, profit: 2000 },
      { region: "West", orders: 2, unitsSold: 14, revenue: 3200, profit: 880 },
      { region: "Central", orders: 2, unitsSold: 45, revenue: 1200, profit: 300 },
      { region: "East", orders: 2, unitsSold: 90, revenue: 740, profit: 150 },
    ],
  };

  /* ---------------- CHART ---------------- */
  const chartConfig = {
    revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
    target: { label: "Units Sold", color: "hsl(var(--chart-2))" },
  };

  const chartData = useMemo(() => {
    return salesdata.recentOrders.map((item) => ({
      name: item.date,
      revenue: item.revenue,
      target: item.unitsSold,
    }));
  }, []);

  /* ---------------- UI ---------------- */
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 items-center gap-2 px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {[
            ["Total Revenue", "$1,250", IconTrendingUp],
            ["New Customers", "1,234", IconTrendingDown],
            ["Active Accounts", "45,678", IconTrendingUp],
            ["Growth Rate", "4.5%", IconTrendingUp],
          ].map(([title, value, Icon], i) => (
            <Card key={i}>
              <CardHeader>
                <CardDescription>{title}</CardDescription>
                <CardTitle className="text-2xl">{value}</CardTitle>
              </CardHeader>
              <CardFooter className="flex gap-2 text-sm">
                <Icon className="size-4" />
                Performance summary
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Chart */}
        <Card className="m-4">
          <CardHeader>
            <CardTitle>Revenue vs Units Sold</CardTitle>
            <CardDescription>Last 5 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="name" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="revenue" fill="var(--color-revenue)" radius={6} />
                <Bar dataKey="target" fill="var(--color-target)" radius={6} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 pb-10">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-center">Units</TableHead>
                    <TableHead>Salesperson</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesdata.recentOrders.map((o) => (
                    <TableRow key={o.orderId}>
                      <TableCell>{o.orderId}</TableCell>
                      <TableCell>{o.product}</TableCell>
                      <TableCell>{o.category}</TableCell>
                      <TableCell className="text-center">{o.unitsSold}</TableCell>
                      <TableCell>{o.salesperson}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle>Salesperson Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                    <TableHead className="text-right">Profit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesdata.salespersonLeaderboard.map((s) => (
                    <TableRow key={s.rank}>
                      <TableCell>{s.rank}</TableCell>
                      <TableCell>{s.salesperson}</TableCell>
                      <TableCell>{s.region}</TableCell>
                      <TableCell className="text-right">{s.revenue}</TableCell>
                      <TableCell className="text-right">{s.profit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
