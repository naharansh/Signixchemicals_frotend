import { EyeIcon, View } from "lucide-react";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

export const Subscription = () => {
  const invoices = [
    {
      invoice: "INV-001",
      customer: "Ashima Enterprises",
      salesperson: "Rahul Mehta",
      recurring: true,
      recurringPlan: "Monthly",
      subscriptionStatus: "Active",
    },
    {
      invoice: "INV-002",
      customer: "Global Tech Ltd.",
      salesperson: "Priya Sharma",
      recurring: false,
      recurringPlan: null,
      subscriptionStatus: "Pending",
    },
    {
      invoice: "INV-003",
      customer: "Bright Future Co.",
      salesperson: "Ankit Verma",
      recurring: true,
      recurringPlan: "Annual",
      subscriptionStatus: "Canceled",
    },
    {
      invoice: "INV-004",
      customer: "NextGen Solutions",
      salesperson: "Sneha Kapoor",
      recurring: false,
      recurringPlan: null,
      subscriptionStatus: "Active",
    },
    {
      invoice: "INV-005",
      customer: "Visionary Designs",
      salesperson: "Rohan Gupta",
      recurring: true,
      recurringPlan: "Quarterly",
      subscriptionStatus: "Active",
    },
  ];
  return (
    <>
      <Sidebar>
    
        <Card className="rounded-none border-none my-3">
          <CardContent className="px-4">
            <Table className="w-full text-sm">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="font-semibold">S no</TableHead>
                  <TableHead className="font-semibold">Number</TableHead>
                  <TableHead className="font-semibold">Customer</TableHead>
                  <TableHead className="font-semibold">Salesperson</TableHead>
                  <TableHead className="font-semibold">Recurring</TableHead>
                  <TableHead className="font-semibold">
                    Recurring Plan
                  </TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Action</TableHead>
                </TableRow>
              </TableHeader>

              <tbody>
                {invoices.map((item, key) => (
                  <TableRow
                    key={key}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell>{key + 1}</TableCell>
                    <TableCell>{item.invoice}</TableCell>
                    <TableCell>{item.customer}</TableCell>
                    <TableCell>{item.salesperson}</TableCell>
                    <TableCell>
                      {item.recurring ? (
                        <span className="text-green-600 font-medium">Yes</span>
                      ) : (
                        <span className="text-gray-500">No</span>
                      )}
                    </TableCell>
                    <TableCell>{item.recurringPlan || "-"}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.subscriptionStatus === "Active"
                            ? "bg-green-100 text-green-700"
                            : item.subscriptionStatus === "Canceled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.subscriptionStatus}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Popover>
                           <PopoverTrigger asChild>
                      <button
                       
                        className="inline-flex items-center justify-center 
               h-8 w-8 rounded-md 
               text-gray-600 hover:text-blue-600
               hover:bg-blue-50
               transition"
                        title="View"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Customer</h4>
           
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Customer</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
                value={item.customer}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Salespersoon</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
                value={item.salesperson}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4 ">
              <Label htmlFor="height" className="w-1/2">Recurring Plan</Label>
              <Input
                id="height"
              
                className="col-span-2 h-8"
                value={item.recurringPlan}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Status</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
                 value={item.subscriptionStatus}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </CardContent>
        </Card>
      </Sidebar>
    </>
  );
};
