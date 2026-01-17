import {
  CircleChevronDownIcon,
  Download,
  EyeIcon,
  FilterXIcon,
  Icon,
  PersonStandingIcon,
  Search,
} from "lucide-react";
import {
  Table,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Calendar } from "../../components/ui/calendar";
import { useState, useCallback, useMemo } from "react";
import { TableBody } from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../components/ui/empty";
import { useNavigate } from "react-router-dom";
export const OrderManagement = () => {
  const [isStartDatePopoverOpen, setIsStartDatePopoverOpen] = useState(false);
  const [isEndDatePopoverOpen, setIsEndDatePopoverOpen] = useState(false);
  const invoices = [
    {
      order_id: "100006",
      order_date: "2026-01-06T11:28:00",
      customer_name: "Kishan Digitals",
      customer_phone: "06375475956",
      store: "test",
      total_amount: 21900.0,
      order_status: "Delivered",
      payment_status: "Paid",
    },
    {
      order_id: "100005",
      order_date: "2025-12-12T13:12:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 69270.0,
      order_status: "Delivered",
      payment_status: "Paid",
    },
    {
      order_id: "100004",
      order_date: "2025-11-28T13:25:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "test",
      total_amount: 666300.0,
      order_status: "Delivered",
      payment_status: "Paid",
    },
    {
      order_id: "100003",
      order_date: "2025-11-28T13:21:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 8280.0,
      order_status: "Pending",
      payment_status: "Unpaid",
    },
    {
      order_id: "100002",
      order_date: "2025-11-28T12:38:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 800340.0,
      order_status: "Pending",
      payment_status: "Unpaid",
    },
    {
      order_id: "100001",
      order_date: "2025-11-28T12:31:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 652308.0,
      order_status: "Delivered",
      payment_status: "Paid",
    },
  ];

  const [orderType, setOrderType] = useState("all");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate=useNavigate()
  const stats = [
    { label: "Packaged", count: 2, color: "yellow",url:'/admin/OrderList/pending' },
    { label: "Confirmed", count: 2, color: "blue",url:'/admin/OrderList/confirmed'},
    { label: "Packaging", count: 2, color: "amber",url:'/admin/OrderList/packageing' },
    { label: "Out for Delivery", count: 2, color: "indigo",url:'/admin/OrderList/outfordeleviery' },
    { label: "Delivered", count: 2, color: "green",url:'/admin/OrderList/delivered' },
    { label: "Canceled", count: 2, color: "red",url:'/admin/OrderList/returned' },
    { label: "Returned", count: 2, color: "orange",url:'/admin/OrderList/failed' },
    { label: "Failed Delivery", count: 2, color: "rose" ,url:'/admin/OrderList/cancelled'},
  ];

  // Memoized value to check if any filter is active
  const isFilterActive = useMemo(() => {
    return orderType !== "all" || startDate !== null || endDate !== null;
  }, [orderType, startDate, endDate]);

  const formatDate = (d) => {
    return d
      ? d.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "Select date";
  };

  const handleShowOrders = useCallback(() => {
    const filters = {
      orderType,
      // Convert Date objects to ISO string for API calls, or use null/undefined
      startDate: startDate ? startDate.toISOString() : undefined,
      endDate: endDate ? endDate.toISOString() : undefined,
    };

    console.log("Applying filters:", filters);
    // **TODO:** Implement API call or state update to fetch/filter orders
  }, [orderType, startDate, endDate]);

  const resetFilters = useCallback(() => {
    setOrderType("all");
    setStartDate(null);
    setEndDate(null);
  }, []);

  return (
    <>
      <Sidebar>
        <div className="w-full my-3 px-3">
          <h1 className="text-xl font-semibold">All Orders</h1>

          <Card className="rounded-none  my-3 border border-none shadow-sm relative ">
            <CardHeader className="p-0 ">
              <div className="mb-4 flex items-center justify-between py-2 px-4">
                <div>
                  <h3 className="text-base font-semibold">Filter Orders</h3>
                  <p className="text-sm text-muted-foreground">
                    Narrow down results using filters
                  </p>
                </div>

                {isFilterActive && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-blue-600">
                      Filters Active
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={resetFilters}
                      title="Reset all filters"
                    >
                      <FilterXIcon className="h-4 w-4 text-gray-500 hover:text-red-500" />
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="rounded-none bg-background py-2 shadow-none p-0 -mt-7 sticky ">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-4 py-2">
                <div className="flex flex-col gap-1">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Order Type
                  </Label>
                  <Select
                    onValueChange={setOrderType}
                    defaultValue={orderType}
                    value={orderType}
                  >
                    <SelectTrigger className="w-full rounded-sm h-10">
                      <SelectValue placeholder="All Orders" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Orders</SelectItem>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Start Date
                  </Label>
                  <Popover
                    open={isStartDatePopoverOpen}
                    onOpenChange={setIsStartDatePopoverOpen}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        {formatDate(startDate)}
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={(d) => {
                          setStartDate(d);
                          setIsStartDatePopoverOpen(false);
                        }}
                        // Disable dates after the selected end date
                        disabled={(d) => endDate && d > endDate}
                        captionLayout="dropdown"
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex flex-col gap-1">
                  <Label className="text-xs font-medium text-muted-foreground">
                    End Date
                  </Label>
                  <Popover
                    open={isEndDatePopoverOpen}
                    onOpenChange={setIsEndDatePopoverOpen}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        {formatDate(endDate)}
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        // Disable dates before the selected start date
                        disabled={(d) => startDate && d < startDate}
                        onSelect={(d) => {
                          setEndDate(d);
                          setIsEndDatePopoverOpen(false);
                        }}
                        captionLayout="dropdown"
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="col-span-1 flex items-end">
                  <Button className="h-10 w-full" onClick={handleShowOrders}>
                    Show Orders
                  </Button>
                </div>
              </div>
            </CardContent>

            <Card className="rounded-none my-2 border   border-none shadow-none p-0">
              <CardContent className="py-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((item) => (
                    <Card
                      key={item.label}
                      className="rounded-lg cursor-pointer transition-all
                         hover:shadow-none hover:-translate-y-0.5 
                          hover: border border-primary/10 shadow-none rounded-none"
                    onClick={()=>navigate(item.url)}>
                      <CardContent className="p-0 px-2 ">
                        <div className="flex items-center justify-between px-2">
                          <div className="flex items-center gap-3 ">
                            <div
                              className={`h-11 w-11 flex items-center justify-center rounded-full
                      bg-${item.color}-100 text-${item.color}-600  `}
                            >
                              <PersonStandingIcon className="h-6 w-6" />
                            </div>

                            <div>
                              <h2 className="text-sm font-semibold">
                                {item.label}
                              </h2>
                              <p className="text-xs text-muted-foreground">
                                Orders
                              </p>
                            </div>
                          </div>

                          <div className="text-right ">
                            <p
                              className={`text-2xl font-bold text-${item.color}-600`}
                            >
                              {item.count}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 ">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search by Order ID"
                  className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  {/* <FaSearch /> */}
                  <Search className="h-4 w-4" />
                  Search
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                  Express-Bee
                </button>
                <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  {/* <FaDownload />  */}
                  <Download />
                  Export
                  <span className="ml-1">&#9662;</span>{" "}
                </button>
              </div>
            </div>

            <Table className="border rounded-none overflow-hidden my-4">
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead className="mx-5">Amount</TableHead>
                  <TableHead>Order Status</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.order_id}
                    className="hover:bg-muted/40 transition"
                  >
                    <TableCell className="font-medium">
                      #{invoice.order_id}
                    </TableCell>

                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(invoice.order_date).toLocaleDateString()}
                    </TableCell>

                    <TableCell>{invoice.customer_name}</TableCell>

                    <TableCell>{invoice.store}</TableCell>

                    <TableCell className="font-semibold">
                      <div className="flex flex-col px-3 py-2">
                        <p className="text-sm font-bold text-gray-900">
                          ₹{invoice.total_amount.toLocaleString()}
                        </p>

                        <Badge
                          className={`px-2 py-0.5 text-xs font-medium rounded-full 
        ${
          invoice.payment_status === "Paid"
            ? "bg-green-100 text-green-700 border-green-200"
            : invoice.payment_status === "Pending"
            ? "bg-yellow-100 text-yellow-700 border-yellow-200"
            : "bg-red-100 text-red-700 border-red-200"
        }
      `}
                        >
                          {invoice.payment_status}
                        </Badge>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={`px-3 py-1 text-xs font-medium rounded-full border 
      ${
        invoice.order_status === "Delivered"
          ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-200"
          : invoice.order_status === "Pending"
          ? "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200"
          : "bg-red-100 text-red-700 border-red-200 hover:bg-red-200"
      }
    `}
                      >
                        {invoice.order_status}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <Button size="sm" variant="outline" className="mx-4">
                        <EyeIcon />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
export const Pending = () => {
  const invoices = [
    {
      order_id: "100003",
      order_date: "2025-11-28T13:21:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 8280.0,
      order_status: "Pending",
      payment_status: "Unpaid",
    },
    {
      order_id: "100002",
      order_date: "2025-11-28T12:38:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 800340.0,
      order_status: "Pending",
      payment_status: "Unpaid",
    },
  ];
  return (
    <>
      <Sidebar>
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Pending Orders</h1>
          </div>

          <Card className="rounded-none border-none shadow-sm ">
            {/* Filter Header */}
            <CardHeader className="px-4 py-3   bg-muted/30 -mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Filter Orders</h3>
                  <p className="text-xs text-muted-foreground">
                    Narrow down results using filters
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-blue-600">
                    Filters Active
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    title="Reset all filters"
                    className="hover:text-red-500"
                  >
                    <FilterXIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Filters */}
            <CardContent className="sticky top-0 z-10 bg-background/90 backdrop-blur  px-4 py-3">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 -mt-2">
                {/* Order Type */}
                <div className="flex flex-col gap-1 ">
                  <Label className="text-xs text-muted-foreground">
                    Order Status
                  </Label>
                  <Select>
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All Orders" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Start Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    End Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Apply */}
                <div className="flex items-end">
                  <Button className="h-10 w-full">Apply Filters</Button>
                </div>
              </div>
            </CardContent>

            {/* Search + Actions */}
            <CardContent className="px-4 py-4 ">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search by Order ID"
                    className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    {/* <FaSearch /> */}
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                    Express-Bee
                  </button>
                  <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    {/* <FaDownload />  */}
                    <Download />
                    Export
                    <span className="ml-1">&#9662;</span>{" "}
                  </button>
                </div>
              </div>
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow
                      key={invoice.order_id}
                      className="hover:bg-muted/30"
                    >
                      <TableCell className="font-medium">
                        #{invoice.order_id}
                      </TableCell>

                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(invoice.order_date).toLocaleDateString()}
                      </TableCell>

                      <TableCell>{invoice.customer_name}</TableCell>
                      <TableCell>{invoice.store}</TableCell>

                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold">
                            ₹{invoice.total_amount.toLocaleString()}
                          </span>
                          <Badge
                            variant="outline"
                            className={
                              invoice.payment_status === "Paid"
                                ? "text-green-600 border-green-300"
                                : invoice.payment_status === "Pending"
                                ? "text-yellow-600 border-yellow-300"
                                : "text-red-600 border-red-300"
                            }
                          >
                            {invoice.payment_status}
                          </Badge>
                        </div>
                      </TableCell>

                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            invoice.order_status === "Delivered"
                              ? "text-green-600 border-green-300"
                              : invoice.order_status === "Pending"
                              ? "text-yellow-600 border-yellow-300"
                              : "text-red-600 border-red-300"
                          }
                        >
                          {invoice.order_status}
                        </Badge>
                      </TableCell>

                      <TableCell className="text-center space-x-1">
                        <Button size="icon" variant="ghost">
                          <EyeIcon className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
export const Confirmed = () => {
  const invoices = [
    {
      order_id: "100003",
      order_date: "2025-11-28T13:21:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 8280.0,
      order_status: "Pending",
      payment_status: "Unpaid",
    },
    {
      order_id: "100002",
      order_date: "2025-11-28T12:38:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 800340.0,
      order_status: "Pending",
      payment_status: "Unpaid",
    },
  ];
  return (
    <>
      <Sidebar>
        <div className="w-full  my-3 space-y-3 px-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Confirmed Orders</h1>
          </div>
          <Card className="rounded-none border-none shadow-sm ">
            <CardHeader className="px-4 py-3   bg-muted/30 -mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Filter Orders</h3>
                  <p className="text-xs text-muted-foreground">
                    Narrow down results using filters
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-blue-600">
                    Filters Active
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    title="Reset all filters"
                    className="hover:text-red-500"
                  >
                    <FilterXIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="sticky top-0 z-10 bg-background/90 backdrop-blur  px-4 py-3">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 -mt-2">
                {/* Order Type */}
                <div className="flex flex-col gap-1 ">
                  <Label className="text-xs text-muted-foreground">
                    Order Status
                  </Label>
                  <Select>
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All Orders" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Start Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    End Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Apply */}
                <div className="flex items-end">
                  <Button className="h-10 w-full">Apply Filters</Button>
                </div>
              </div>
            </CardContent>

            <CardContent className="px-4 py-4 ">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search by Order ID"
                    className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    {/* <FaSearch /> */}
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                    Express-Bee
                  </button>
                  <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    {/* <FaDownload />  */}
                    <Download />
                    Export
                    <span className="ml-1">&#9662;</span>{" "}
                  </button>
                </div>
              </div>
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {invoices.length !== 0 ? (
                    invoices.map((invoice) => (
                      <TableRow
                        key={invoice.order_id}
                        className="hover:bg-muted/30"
                      >
                        <TableCell className="font-medium">
                          #{invoice.order_id}
                        </TableCell>

                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(invoice.order_date).toLocaleDateString()}
                        </TableCell>

                        <TableCell>{invoice.customer_name}</TableCell>
                        <TableCell>{invoice.store}</TableCell>

                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold">
                              ₹{invoice.total_amount.toLocaleString()}
                            </span>
                            <Badge
                              variant="outline"
                              className={
                                invoice.payment_status === "Paid"
                                  ? "text-green-600 border-green-300"
                                  : invoice.payment_status === "Pending"
                                  ? "text-yellow-600 border-yellow-300"
                                  : "text-red-600 border-red-300"
                              }
                            >
                              {invoice.payment_status}
                            </Badge>
                          </div>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              invoice.order_status === "Delivered"
                                ? "text-green-600 border-green-300"
                                : invoice.order_status === "Pending"
                                ? "text-yellow-600 border-yellow-300"
                                : "text-red-600 border-red-300"
                            }
                          >
                            {invoice.order_status}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-center space-x-1">
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <Empty>
                      <EmptyHeader>
                        <EmptyMedia variant="icon">
                          <Icon />
                        </EmptyMedia>
                        <EmptyTitle>No data</EmptyTitle>
                        <EmptyDescription>No data found</EmptyDescription>
                      </EmptyHeader>
                      <EmptyContent>
                        <Button>Add data</Button>
                      </EmptyContent>
                    </Empty>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
export const Packageing = () => {
  const invoices = [
    {
      order_id: "100003",
      order_date: "2025-11-28T13:21:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 8280.0,
      order_status: "Pending",
      payment_status: "Unpaid",
    },
    {
      order_id: "100002",
      order_date: "2025-11-28T12:38:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 800340.0,
      order_status: "Pending",
      payment_status: "Unpaid",
    },
  ];
  return (
    <>
      <Sidebar>
        <div className="w-full  my-3 space-y-3 px-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Packageing Orders</h1>
          </div>
          <Card className="rounded-none border-none shadow-sm">
            <CardHeader className="px-4 py-3   bg-muted/30 -mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Filter Orders</h3>
                  <p className="text-xs text-muted-foreground">
                    Narrow down results using filters
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-blue-600">
                    Filters Active
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    title="Reset all filters"
                    className="hover:text-red-500"
                  >
                    <FilterXIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="sticky top-0 z-10 bg-background/90 backdrop-blur  px-4 py-3">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 -mt-2">
                {/* Order Type */}
                <div className="flex flex-col gap-1 ">
                  <Label className="text-xs text-muted-foreground">
                    Order Status
                  </Label>
                  <Select>
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All Orders" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Start Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    End Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Apply */}
                <div className="flex items-end">
                  <Button className="h-10 w-full">Apply Filters</Button>
                </div>
              </div>
            </CardContent>
            <CardContent className="px-4 py-4 ">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search by Order ID"
                    className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    {/* <FaSearch /> */}
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                    Express-Bee
                  </button>
                  <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    {/* <FaDownload />  */}
                    <Download />
                    Export
                    <span className="ml-1">&#9662;</span>{" "}
                  </button>
                </div>
              </div>
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {invoices.length !== 0 ? (
                    invoices.map((invoice) => (
                      <TableRow
                        key={invoice.order_id}
                        className="hover:bg-muted/30"
                      >
                        <TableCell className="font-medium">
                          #{invoice.order_id}
                        </TableCell>

                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(invoice.order_date).toLocaleDateString()}
                        </TableCell>

                        <TableCell>{invoice.customer_name}</TableCell>
                        <TableCell>{invoice.store}</TableCell>

                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold">
                              ₹{invoice.total_amount.toLocaleString()}
                            </span>
                            <Badge
                              variant="outline"
                              className={
                                invoice.payment_status === "Paid"
                                  ? "text-green-600 border-green-300"
                                  : invoice.payment_status === "Pending"
                                  ? "text-yellow-600 border-yellow-300"
                                  : "text-red-600 border-red-300"
                              }
                            >
                              {invoice.payment_status}
                            </Badge>
                          </div>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              invoice.order_status === "Delivered"
                                ? "text-green-600 border-green-300"
                                : invoice.order_status === "Pending"
                                ? "text-yellow-600 border-yellow-300"
                                : "text-red-600 border-red-300"
                            }
                          >
                            {invoice.order_status}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-center space-x-1">
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <Empty>
                      <EmptyHeader>
                        <EmptyMedia variant="icon">
                          <Icon />
                        </EmptyMedia>
                        <EmptyTitle>No data</EmptyTitle>
                        <EmptyDescription>No data found</EmptyDescription>
                      </EmptyHeader>
                      <EmptyContent>
                        <Button>Add data</Button>
                      </EmptyContent>
                    </Empty>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
export const OutForDeleviry = () => {
  const invoices = [];

  return (
    <>
      <Sidebar>
        <div className="w-full  my-3 space-y-3 px-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">OutForDeleviry Orders</h1>
          </div>
          <Card className="rounded-none border-none shadow-sm mx-5">
            <CardHeader className="px-4 py-3   bg-muted/30 -mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Filter Orders</h3>
                  <p className="text-xs text-muted-foreground">
                    Narrow down results using filters
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-blue-600">
                    Filters Active
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    title="Reset all filters"
                    className="hover:text-red-500"
                  >
                    <FilterXIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="sticky top-0 z-10 bg-background/90 backdrop-blur  px-4 py-3">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 -mt-2">
                {/* Order Type */}
                <div className="flex flex-col gap-1 ">
                  <Label className="text-xs text-muted-foreground">
                    Order Status
                  </Label>
                  <Select>
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All Orders" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Start Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    End Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Apply */}
                <div className="flex items-end">
                  <Button className="h-10 w-full">Apply Filters</Button>
                </div>
              </div>
            </CardContent>
            <CardContent className="px-4 py-4 ">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search by Order ID"
                    className="border border-gray-300 rounded-md px-3 py-2 w-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                   
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                    Express-Bee
                  </button>
                  <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    {/* <FaDownload />  */}
                    <Download />
                    Export
                    <span className="ml-1">&#9662;</span>{" "}
                  </button>
                </div>
              </div>
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {Array.isArray(invoices) && invoices.length > 0 ? (
                    invoices.map((invoice) => (
                      <TableRow
                        key={invoice.order_id}
                        className="hover:bg-muted/30"
                      >
                        <TableCell className="font-medium">
                          #{invoice.order_id}
                        </TableCell>

                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(invoice.order_date).toLocaleDateString()}
                        </TableCell>

                        <TableCell>{invoice.customer_name}</TableCell>
                        <TableCell>{invoice.store}</TableCell>

                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold">
                              ₹{invoice.total_amount?.toLocaleString()}
                            </span>
                            <Badge
                              variant="outline"
                              className={
                                invoice.payment_status === "Paid"
                                  ? "text-green-600 border-green-300"
                                  : invoice.payment_status === "Pending"
                                  ? "text-yellow-600 border-yellow-300"
                                  : "text-red-600 border-red-300"
                              }
                            >
                              {invoice.payment_status}
                            </Badge>
                          </div>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              invoice.order_status === "Delivered"
                                ? "text-green-600 border-green-300"
                                : invoice.order_status === "Pending"
                                ? "text-yellow-600 border-yellow-300"
                                : "text-red-600 border-red-300"
                            }
                          >
                            {invoice.order_status}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-center space-x-1">
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-10">
                        <Empty>
                          <EmptyHeader>
                            <EmptyTitle>No data</EmptyTitle>
                            <EmptyDescription>No data found</EmptyDescription>
                          </EmptyHeader>
                        </Empty>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
export const Delivered = () => {
  const invoices = [
    {
      order_id: "100006",
      order_date: "2026-01-06T11:28:00",
      customer_name: "Kishan Digitals",
      customer_phone: "06375475956",
      store: "test",
      total_amount: 21900.0,
      order_status: "Delivered",
      payment_status: "Paid",
    },
    {
      order_id: "100005",
      order_date: "2025-12-12T13:12:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "In-House",
      total_amount: 69270.0,
      order_status: "Delivered",
      payment_status: "Paid",
    },
    {
      order_id: "100004",
      order_date: "2025-11-28T13:25:00",
      customer_name: "Test Test",
      customer_phone: "6544984967",
      store: "test",
      total_amount: 666300.0,
      order_status: "Delivered",
      payment_status: "Paid",
    },
  ];
  return (
    <>
      <Sidebar>
        <div className="w-full my-3 space-y-3 px-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Delivered Orders</h1>
          </div>
          <Card className="rounded-none border-none shadow-sm mx-5">
            <CardHeader className="px-4 py-3   bg-muted/30 -mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Filter Orders</h3>
                  <p className="text-xs text-muted-foreground">
                    Narrow down results using filters
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-blue-600">
                    Filters Active
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    title="Reset all filters"
                    className="hover:text-red-500"
                  >
                    <FilterXIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="sticky top-0 z-10 bg-background/90 backdrop-blur  px-4 py-3">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 -mt-2">
                {/* Order Type */}
                <div className="flex flex-col gap-1 ">
                  <Label className="text-xs text-muted-foreground">
                    Order Status
                  </Label>
                  <Select>
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All Orders" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Start Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    End Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Apply */}
                <div className="flex items-end">
                  <Button className="h-10 w-full">Apply Filters</Button>
                </div>
              </div>
            </CardContent>
            <CardContent className="px-4 py-4 ">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search by Order ID"
                    className="border border-gray-300 rounded-md px-3 py-2 w-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                   
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                    Express-Bee
                  </button>
                  <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    {/* <FaDownload />  */}
                    <Download />
                    Export
                    <span className="ml-1">&#9662;</span>{" "}
                  </button>
                </div>
              </div>
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {Array.isArray(invoices) && invoices.length > 0 ? (
                    invoices.map((invoice) => (
                      <TableRow
                        key={invoice.order_id}
                        className="hover:bg-muted/30"
                      >
                        <TableCell className="font-medium">
                          #{invoice.order_id}
                        </TableCell>

                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(invoice.order_date).toLocaleDateString()}
                        </TableCell>

                        <TableCell>{invoice.customer_name}</TableCell>
                        <TableCell>{invoice.store}</TableCell>

                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold">
                              ₹{invoice.total_amount?.toLocaleString()}
                            </span>
                            <Badge
                              variant="outline"
                              className={
                                invoice.payment_status === "Paid"
                                  ? "text-green-600 border-green-300"
                                  : invoice.payment_status === "Pending"
                                  ? "text-yellow-600 border-yellow-300"
                                  : "text-red-600 border-red-300"
                              }
                            >
                              {invoice.payment_status}
                            </Badge>
                          </div>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              invoice.order_status === "Delivered"
                                ? "text-green-600 border-green-300"
                                : invoice.order_status === "Pending"
                                ? "text-yellow-600 border-yellow-300"
                                : "text-red-600 border-red-300"
                            }
                          >
                            {invoice.order_status}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-center space-x-1">
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-10">
                        <Empty>
                          <EmptyHeader>
                            <EmptyTitle>No data</EmptyTitle>
                            <EmptyDescription>No data found</EmptyDescription>
                          </EmptyHeader>
                        </Empty>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
export const Returned = () => {
  const invoices = [];
  return (
    <>
      <Sidebar>
        <div className="w-full my-3 space-y-3 px-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Returned Orders</h1>
          </div>
          <Card className="rounded-none border-none shadow-sm mx-5">
            <CardHeader className="px-4 py-3   bg-muted/30 -mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Filter Orders</h3>
                  <p className="text-xs text-muted-foreground">
                    Narrow down results using filters
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-blue-600">
                    Filters Active
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    title="Reset all filters"
                    className="hover:text-red-500"
                  >
                    <FilterXIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="sticky top-0 z-10 bg-background/90 backdrop-blur  px-4 py-3">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 -mt-2">
                {/* Order Type */}
                <div className="flex flex-col gap-1 ">
                  <Label className="text-xs text-muted-foreground">
                    Order Status
                  </Label>
                  <Select>
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All Orders" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Start Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    End Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Apply */}
                <div className="flex items-end">
                  <Button className="h-10 w-full">Apply Filters</Button>
                </div>
              </div>
            </CardContent>
            <CardContent className="px-4 py-4 ">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search by Order ID"
                    className="border border-gray-300 rounded-md px-3 py-2 w-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                    Express-Bee
                  </button>
                  <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    {/* <FaDownload />  */}
                    <Download />
                    Export
                    <span className="ml-1">&#9662;</span>{" "}
                  </button>
                </div>
              </div>
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {Array.isArray(invoices) && invoices.length > 0 ? (
                    invoices.map((invoice) => (
                      <TableRow
                        key={invoice.order_id}
                        className="hover:bg-muted/30"
                      >
                        <TableCell className="font-medium">
                          #{invoice.order_id}
                        </TableCell>

                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(invoice.order_date).toLocaleDateString()}
                        </TableCell>

                        <TableCell>{invoice.customer_name}</TableCell>
                        <TableCell>{invoice.store}</TableCell>

                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold">
                              ₹{invoice.total_amount?.toLocaleString()}
                            </span>
                            <Badge
                              variant="outline"
                              className={
                                invoice.payment_status === "Paid"
                                  ? "text-green-600 border-green-300"
                                  : invoice.payment_status === "Pending"
                                  ? "text-yellow-600 border-yellow-300"
                                  : "text-red-600 border-red-300"
                              }
                            >
                              {invoice.payment_status}
                            </Badge>
                          </div>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              invoice.order_status === "Delivered"
                                ? "text-green-600 border-green-300"
                                : invoice.order_status === "Pending"
                                ? "text-yellow-600 border-yellow-300"
                                : "text-red-600 border-red-300"
                            }
                          >
                            {invoice.order_status}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-center space-x-1">
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-10">
                        <Empty>
                          <EmptyHeader>
                            <EmptyTitle>No data</EmptyTitle>
                            <EmptyDescription>No data found</EmptyDescription>
                          </EmptyHeader>
                        </Empty>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
export const FailedToDelevierd = () => {
  const invoices = [];
  return (
    <>
      <Sidebar>
        <div className="w-full  my-3 space-y-3 px-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Failed Orders</h1>
          </div>
          <Card className="rounded-none border-none shadow-sm mx-5">
            <CardHeader className="px-4 py-3   bg-muted/30 -mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Filter Orders</h3>
                  <p className="text-xs text-muted-foreground">
                    Narrow down results using filters
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-blue-600">
                    Filters Active
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    title="Reset all filters"
                    className="hover:text-red-500"
                  >
                    <FilterXIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="sticky top-0 z-10 bg-background/90 backdrop-blur  px-4 py-3">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 -mt-2">
                {/* Order Type */}
                <div className="flex flex-col gap-1 ">
                  <Label className="text-xs text-muted-foreground">
                    Order Status
                  </Label>
                  <Select>
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All Orders" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Start Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    End Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Apply */}
                <div className="flex items-end">
                  <Button className="h-10 w-full">Apply Filters</Button>
                </div>
              </div>
            </CardContent>
            <CardContent className="px-4 py-4 ">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search by Order ID"
                    className="border border-gray-300 rounded-md px-3 py-2 w-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    {/* <FaSearch /> */}
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                    Express-Bee
                  </button>
                  <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    {/* <FaDownload />  */}
                    <Download />
                    Export
                    <span className="ml-1">&#9662;</span>{" "}
                  </button>
                </div>
              </div>
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {Array.isArray(invoices) && invoices.length > 0 ? (
                    invoices.map((invoice) => (
                      <TableRow
                        key={invoice.order_id}
                        className="hover:bg-muted/30"
                      >
                        <TableCell className="font-medium">
                          #{invoice.order_id}
                        </TableCell>

                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(invoice.order_date).toLocaleDateString()}
                        </TableCell>

                        <TableCell>{invoice.customer_name}</TableCell>
                        <TableCell>{invoice.store}</TableCell>

                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold">
                              ₹{invoice.total_amount?.toLocaleString()}
                            </span>
                            <Badge
                              variant="outline"
                              className={
                                invoice.payment_status === "Paid"
                                  ? "text-green-600 border-green-300"
                                  : invoice.payment_status === "Pending"
                                  ? "text-yellow-600 border-yellow-300"
                                  : "text-red-600 border-red-300"
                              }
                            >
                              {invoice.payment_status}
                            </Badge>
                          </div>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              invoice.order_status === "Delivered"
                                ? "text-green-600 border-green-300"
                                : invoice.order_status === "Pending"
                                ? "text-yellow-600 border-yellow-300"
                                : "text-red-600 border-red-300"
                            }
                          >
                            {invoice.order_status}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-center space-x-1">
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-10">
                        <Empty>
                          <EmptyHeader>
                            <EmptyTitle>No data</EmptyTitle>
                            <EmptyDescription>No data found</EmptyDescription>
                          </EmptyHeader>
                        </Empty>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
export const Cancelled = () => {
  const invoices=[]
  return (
    <>
     <Sidebar>
       <div className="w-full my-3 space-y-2 p-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Cancelled Orders</h1>
        </div>
        <Card className="rounded-none border-none shadow-sm mx-5">
          <CardHeader className="px-4 py-3   bg-muted/30 -mt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">Filter Orders</h3>
                <p className="text-xs text-muted-foreground">
                  Narrow down results using filters
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-blue-600">
                  Filters Active
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  title="Reset all filters"
                  className="hover:text-red-500"
                >
                  <FilterXIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
            <CardContent className="sticky top-0 z-10 bg-background/90 backdrop-blur  px-4 py-3">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 -mt-2">
                {/* Order Type */}
                <div className="flex flex-col gap-1 ">
                  <Label className="text-xs text-muted-foreground">
                    Order Status
                  </Label>
                  <Select>
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All Orders" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Start Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">
                    End Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-10 justify-between"
                      >
                        Select date
                        <CircleChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar mode="single" captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Apply */}
                <div className="flex items-end">
                  <Button className="h-10 w-full">Apply Filters</Button>
                </div>
              </div>
            </CardContent>
                <CardContent className="px-4 py-4 ">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search by Order ID"
                    className="border border-gray-300 rounded-md px-3 py-2 w-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    {/* <FaSearch /> */}
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                    Express-Bee
                  </button>
                  <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    {/* <FaDownload />  */}
                    <Download />
                    Export
                    <span className="ml-1">&#9662;</span>{" "}
                  </button>
                </div>
              </div>
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {Array.isArray(invoices) && invoices.length > 0 ? (
                    invoices.map((invoice) => (
                      <TableRow
                        key={invoice.order_id}
                        className="hover:bg-muted/30"
                      >
                        <TableCell className="font-medium">
                          #{invoice.order_id}
                        </TableCell>

                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(invoice.order_date).toLocaleDateString()}
                        </TableCell>

                        <TableCell>{invoice.customer_name}</TableCell>
                        <TableCell>{invoice.store}</TableCell>

                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold">
                              ₹{invoice.total_amount?.toLocaleString()}
                            </span>
                            <Badge
                              variant="outline"
                              className={
                                invoice.payment_status === "Paid"
                                  ? "text-green-600 border-green-300"
                                  : invoice.payment_status === "Pending"
                                  ? "text-yellow-600 border-yellow-300"
                                  : "text-red-600 border-red-300"
                              }
                            >
                              {invoice.payment_status}
                            </Badge>
                          </div>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              invoice.order_status === "Delivered"
                                ? "text-green-600 border-green-300"
                                : invoice.order_status === "Pending"
                                ? "text-yellow-600 border-yellow-300"
                                : "text-red-600 border-red-300"
                            }
                          >
                            {invoice.order_status}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-center space-x-1">
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-10">
                        <Empty>
                          <EmptyHeader>
                            <EmptyTitle>No data</EmptyTitle>
                            <EmptyDescription>No data found</EmptyDescription>
                          </EmptyHeader>
                        </Empty>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
        </Card>
      </div>
     </Sidebar>
    </>
  );
};
