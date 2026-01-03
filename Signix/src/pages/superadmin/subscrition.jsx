import { EyeIcon } from "lucide-react";
import { Sidebar } from "../../components/sidebar";
import { Card, CardContent } from "../../components/ui/card";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Separator } from "../../components/ui/separator";

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
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="h-8 w-8 rounded-md 
        text-gray-600 hover:text-blue-600
        hover:bg-blue-50 transition"
                            title="View"
                          >
                            <EyeIcon className="h-4 w-4" />
                          </button>
                        </DialogTrigger>

                        <DialogContent  >
                          <DialogTitle className="max-w-lg " > 
                          {/* Header */}
                          <div className="flex flex-col gap-1 text-center">
                            <h2 className="text-lg font-semibold">
                              Customer Details
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              View subscription information
                            </p>
                          </div>

                          <Separator className="my-1" />

                          {/* Content */}
                          <div className="grid gap-4">
                            <InfoField label="Customer" value={item.customer} />
                            <InfoField
                              label="Salesperson"
                              value={item.salesperson}
                            />
                            <InfoField
                              label="Recurring Plan"
                              value={item.recurringPlan}
                            />
                            <InfoField
                              label="Status"
                              value={item.subscriptionStatus}
                            />
                          </div>
                          </DialogTitle>
                        </DialogContent>
                      </Dialog>
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
const InfoField = ({ label, value }) => (
  <div className="grid grid-cols-3 items-center gap-4">
    <Label className="text-sm text-muted-foreground">{label}</Label>
    <Input
      value={value}
      readOnly
      className="col-span-2 h-9 bg-muted cursor-default"
    />
  </div>
);
