import { Clock, EyeIcon, Plus } from "lucide-react";
import { Sidebar } from "../../components/sidebar";
import second from "../../assets/icons/star-svgrepo-com.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Switch } from "../../components/ui/switch";
import { Badge } from "../../components/ui/badge";
import { useState } from "react";
import { Button } from "../../components/ui/button";
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
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

export const Sections = () => {
  const [toogle, settoggle] = useState(true);

  const invoices = [
    {
      invoice: "INV-1001",
      paymentStatus: "Paid",
      paymentMethod: "Credit Card",
      totalAmount: 4500,
    },
    {
      invoice: "INV-1002",
      paymentStatus: "Pending",
      paymentMethod: "UPI",
      totalAmount: 2800,
    },
    {
      invoice: "INV-1003",
      paymentStatus: "Failed",
      paymentMethod: "Net Banking",
      totalAmount: 1200,
    },
    {
      invoice: "INV-1004",
      paymentStatus: "Paid",
      paymentMethod: "Debit Card",
      totalAmount: 7600,
    },
    {
      invoice: "INV-1005",
      paymentStatus: "Pending",
      paymentMethod: "Cash",
      totalAmount: 3400,
    },
  ];

  return (
    <Sidebar>
      {/* ================= HEADER (FIXED FOR BOTH VIEWS) ================= */}
      <div className="sticky top-0 z-30 h-12 bg-background flex items-center px-6 border-b">
        <div className="ml-auto">
          <Switch
            checked={!toogle}
            onCheckedChange={() => settoggle(!toogle)}
          />
        </div>
      </div>

      {toogle && (
        <div className="w-full overflow-x-auto px-5 py-4">
          <div className="grid grid-cols-5 gap-6 min-w-[1500px]">
            {["New", "Inprogress", "On Hold", "Saved", "Cancelled"].map(
              (title, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold text-gray-700">
                      {title}
                    </h2>
                    <Plus className="h-4 w-4" />
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Progress value={2} className="h-2 w-full" />
                    <span className="text-xs text-gray-500">2%</span>
                  </div>

                  {title === "New" && (
                    <>
                      <Card className="mb-4 cursor-pointer">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">
                            Phone Pay Activation
                          </CardTitle>
                          <CardDescription className="text-xs">
                            Task ID: #00101
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="text-xs text-gray-600">
                          Enter your email below to login to your account.
                        </CardContent>

                        <CardFooter className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <img src={second} className="h-4 w-4" />
                            <Clock className="h-4" />
                          </div>
                          <div className="w-8 h-8 bg-green-500 text-white text-sm flex items-center justify-center rounded">
                            K
                          </div>
                        </CardFooter>
                      </Card>
                      <Card className="mb-4 cursor-pointer">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">
                            Phone Pay Activation
                          </CardTitle>
                          <CardDescription className="text-xs">
                            Task ID: #00101
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="text-xs text-gray-600">
                          Enter your email below to login to your account.
                        </CardContent>

                        <CardFooter className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <img src={second} className="h-4 w-4" />
                            <Clock className="h-4" />
                          </div>
                          <div className="w-8 h-8 bg-green-500 text-white text-sm flex items-center justify-center rounded">
                            K
                          </div>
                        </CardFooter>
                      </Card>
                    </>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* ================= TABLE VIEW ================= */}
      {!toogle && (
        <div className="px-6 py-4 space-y-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">All Leads</h1>
            <p className="text-sm text-muted-foreground">
              View and manage all invoice records
            </p>
          </div>

          <Card className="border-none shadow-sm">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {invoices.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.invoice}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            item.paymentStatus === "Paid"
                              ? "bg-green-100 text-green-700"
                              : item.paymentStatus === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }
                        >
                          {item.paymentStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.paymentMethod}</TableCell>
                      <TableCell className="font-semibold">
                        ₹{item.totalAmount}
                      </TableCell>
                      <TableCell className="mx-[400px]">
                        <Dialog>
                          <form>
                            <DialogTrigger asChild>
                              <Button
                                className="bg-white rounded-md    text-gray-600 hover:text-blue-600
        hover:bg-blue-50 transition"
                               
                              >
                                <EyeIcon className="h-4 w-4 " />
                              </Button>
                            </DialogTrigger>
                            <DialogContent >
                              <DialogHeader>
                                <DialogTitle>Lead</DialogTitle>
                              
                              </DialogHeader>
                              <div className="grid gap-4">
                                <div className="grid gap-3">
                                  <Label htmlFor="name-1">Invoice</Label>
                                  <Input
                                    id="name-1"
                                    name="name"
                                    value={item.invoice}
                                        disabled={true}
                                  />
                                </div>
                                <div className="grid gap-3">
                                  <Label htmlFor="username-1">Method</Label>
                                  <Input
                                    id="username-1"
                                    name="username"
                                    defaultValue={item.paymentMethod}
                                    disabled={true}
                                  />
                                </div>
                                  <div className="grid gap-3">
                                  <Label htmlFor="username-1">Payment</Label>
                                  <Input
                                    id="username-1"
                                    name="username"
                                    defaultValue={item.totalAmount}
                                    disabled={true}
                                  />
                                </div>
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Save changes</Button>
                              </DialogFooter>
                            </DialogContent>
                          </form>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </Sidebar>
  );
};
