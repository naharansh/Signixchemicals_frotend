import {
  Calendar1Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  PlusIcon,
} from "lucide-react";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import { Textarea } from "../../components/ui/textarea";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
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

export const LeaveApply = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [date, setDate] = useState(undefined);
  const [enddate, setendDate] = useState(undefined);
  const calculate = () => {
    if (!date || !enddate) {
      return 0;
    }
    const startDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    const endDate = new Date(
      enddate.getFullYear(),
      enddate.getMonth(),
      enddate.getDate()
    );
    const diffTime = endDate - startDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays + 1; // inclusive
  };
  const [leave, setleave] = useState({
    leave_type: "",
    leave_from: date ? date.toISOString() : null,
    leave_to: enddate ? enddate.toISOString() : null,
    numberOfdays: calculate(),
    reason: "",
  });
  const handleSelectChange = (name, value) => {
    setleave((prev = { ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  const [opendialog, setDailog] = useState(false);
  return (
    <>
      <Sidebar>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* LEFT CARD */}
      <div className="bg-white rounded-xl  shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-xl font-semibold">Leaves</h1>

          <Dialog open={opendialog} onOpenChange={setDailog}>
            <form onSubmit={handleSubmit}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                  <PlusIcon className="h-4 w-4" />
                  Apply Leave
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[480px] rounded-xl">
                <DialogHeader>
                  <DialogTitle>Apply for Leave</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  {/* Leave Type */}
                  <div className="space-y-2">
                    <Label>Leave Type</Label>
                    <Select >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select leave type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="sick">Sick Leave</SelectItem>
                          <SelectItem value="casual">Casual Leave</SelectItem>
                          <SelectItem value="paid">Paid Leave</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>From</Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between"
                          >
                            {date
                              ? date.toLocaleDateString()
                              : "Select date"}
                            <ChevronDownIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(d) => {
                              setDate(d);
                              setOpen(false);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>To</Label>
                      <Popover open={close} onOpenChange={setClose}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between"
                          >
                            {enddate
                              ? enddate.toLocaleDateString()
                              : "Select date"}
                            <ChevronDownIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                          <Calendar
                            mode="single"
                            selected={enddate}
                            onSelect={(d) => {
                              setendDate(d);
                              setClose(false);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Days */}
                  <div className="space-y-2">
                    <Label>Number of Days</Label>
                    <Input
                    
                      readOnly
                      className="bg-gray-100"
                    />
                  </div>

                  {/* Reason */}
                  <div className="space-y-2">
                    <Label>Reason</Label>
                    <Textarea placeholder="Enter reason" />
                  </div>
                </div>

                <DialogFooter className="pt-4">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Apply
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
          
      </div>
       <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          
          {/* Block 1 */}
          <div className="rounded-lg border bg-gray-50 p-4">
             <h2 className="text-2xl font-bold text-gray-900 text-center">24</h2>
            <p className="text-md text-gray-500 text-center">Total Leaves</p>
           
          </div>

          {/* Block 2 */}
          <div className="rounded-lg border bg-blue-50 p-4">
          
            <h2 className="text-2xl font-bold text-blue-600 text-center">10</h2>
              <p className="text-md text-gray-500 text-center">Used</p>
          </div>

          {/* Block 3 */}
          <div className="rounded-lg border bg-green-50 p-4">
           
            <h2 className="text-2xl font-bold text-green-600 text-center">14</h2>
             <p className="text-md text-gray-500 text-center">Available</p>
          </div>

          {/* Block 4 */}
          <div className="rounded-lg border bg-yellow-50 p-4">
            
            <h2 className="text-2xl font-bold text-yellow-600 text-center">2</h2>
            <p className="text-md  text-gray-500 text-center">Pending</p>
          </div>

            </div>
          </div>
      </div>

      {/* RIGHT TABLE */}
      <div className="col-span-2 bg-white rounded-xl   shadow-sm overflow-x-auto my-3">
        <Table className="w-full">
          <TableCaption>Leave history</TableCaption>

          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Days</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.invoice}
                className="odd:bg-muted/50 hover:bg-muted transition"
              >
                <TableCell>{invoice.invoice}</TableCell>
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
              <TableCell className="text-right">5</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
      </Sidebar>
    </>
  );
};
