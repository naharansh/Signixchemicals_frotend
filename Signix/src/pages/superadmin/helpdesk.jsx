import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import second from "../../assets/icons/star-svgrepo-com.svg";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import icon from "../../assets/icons/email.svg";
import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { Star } from "lucide-react";

export const HelpDesk = () => {
  const [open, setopen] = useState(false);
  const [stars, setStars] = useState(3);

  return (
    <>
      <Sidebar>
        <div className="max-w-full my-4 ">
          <Card className="rounded-none shadow-sm  bg-white">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Support Team
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <img src={icon} alt="Support Icon" className="h-4 w-4" />
                    <p className="text-sm text-gray-500">
                      support@yuvmedia.com
                    </p>
                  </div>
                </div>

                <Button
                  size="sm"
                  className="rounded-md"
                  onClick={() => setopen(!open)}
                >
                  Tickets
                </Button>
              </div>
            </CardHeader>

            <CardContent className="py-4">
              <div className="grid grid-cols-2 gap-4 mx-2">
                <div className="flex items-center justify-between bg-gray-100 shadow rounded-lg  px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">
                    Tickets Closed
                  </p>
                  <span className="text-xl font-bold text-gray-900">6</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 w-full text-center  shadow-sm rounded-none">
                  <div className="flex flex-col items-center py-2">
                    <h1 className="text-2xl font-bold text-green-600">13</h1>
                    <p className="text-sm text-gray-500">Open</p>
                  </div>
                  <div className="flex flex-col items-center py-2">
                    <h1 className="text-2xl font-bold text-gray-700">0</h1>
                    <p className="text-sm text-gray-500">Unassigned</p>
                  </div>
                  <div className="flex flex-col items-center py-2">
                    <h1 className="text-2xl font-bold text-red-600">3</h1>
                    <p className="text-sm text-gray-500">Urgent</p>
                  </div>
                  <div className="flex flex-col items-center py-2">
                    <h1 className="text-2xl font-bold text-gray-400">0</h1>
                    <p className="text-sm text-gray-500">Failed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full  p-4">
          <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12 bg-white rounded-xl border p-6 space-y-6 lg:col-span-7">
              <div className="flex gap-6 items-start">
                <div className="w-40 shrink-0">
                  <h3 className="text-lg font-semibold text-gray-800">
                    My Tickets
                  </h3>
                  <p className="text-sm text-gray-500">Open Tickets</p>
                </div>

                <div className="grid grid-cols-1 gap-4 flex-1 lg:grid-cols-3">
                  <div className="rounded-lg border bg-gray-50 p-4 text-center">
                    <h4 className="text-xl font-semibold">1</h4>
                    <p className="text-sm text-gray-600">Tickets</p>
                  </div>

                  <div className="rounded-lg border bg-gray-50 p-4 text-center relative">
                    <h4 className="text-xl font-semibold">0</h4>
                    <p className="text-sm text-gray-600">High Priority</p>
                    <img
                      src={second}
                      alt=""
                      srcset=""
                      className="h-5 w-4 absolute -top-0 right-7"
                    />
                    <img
                      src={second}
                      alt=""
                      srcset=""
                      className="h-5 w-4 absolute -top-0 right-2"
                    />
                  </div>

                  <div className="rounded-lg border bg-purple-100 border-purple-400 p-4 text-center relative">
                    <h4 className="text-xl font-semibold">1</h4>
                    <p className="text-sm text-gray-600">Urgent</p>
                    <img
                      src={second}
                      alt=""
                      srcset=""
                      className="h-5 w-3 absolute -top-0 right-7"
                    />
                    <img
                      src={second}
                      alt=""
                      srcset=""
                      className="h-5 w-3 absolute -top-0 right-2"
                    />
                    <img
                      src={second}
                      alt=""
                      srcset=""
                      className="h-5 w-3 absolute -top-0 right-12"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-6 items-start grid grid-cols-1 gap-4 flex-1 lg:grid-cols-1">
                <div className="w-40 shrink-0">
                  <p className="text-sm font-medium text-gray-700">
                    Avg Open Hours
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 flex-1">
                  <div className="rounded-lg border bg-gray-50 p-3 text-center">
                    <h4 className="font-medium">4534:00</h4>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-3 text-center">
                    <h4 className="font-medium">00:00</h4>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-3 text-center">
                    <h4 className="font-medium">4534:00</h4>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start grid grid-cols-1 gap-4 flex-1 lg:grid-cols-1">
                <div className="w-40 shrink-0">
                  <p className="text-sm font-medium text-gray-700">
                    Failed Tickets
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 flex-1">
                  <div className="rounded-lg border bg-gray-50 p-3 text-center">
                    <h4 className="font-medium">0</h4>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-3 text-center">
                    <h4 className="font-medium">0</h4>
                  </div>
                  <div className="rounded-lg border bg-gray-50 p-3 text-center">
                    <h4 className="font-medium">0</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 bg-white rounded-xl border p-6 lg:col-span-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                My Performance
              </h3>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="rounded-lg border bg-gray-50 p-4 text-center">
                  <h4 className="text-xl font-semibold">75%</h4>
                  <p className="text-sm text-gray-600">Resolved</p>
                </div>
                <div className="rounded-lg border bg-gray-50 p-4 text-center">
                  <h4 className="text-xl font-semibold">2h</h4>
                  <p className="text-sm text-gray-600">Avg Response</p>
                </div>
                <div className="rounded-lg border bg-gray-50 p-4 text-center">
                  <h4 className="text-xl font-semibold">98%</h4>
                  <p className="text-sm text-gray-600">SLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <Dialog open={open} onOpenChange={setopen}>
            <form>
              <DialogTrigger asChild></DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Add Ticket</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Ticket'sTitle</Label>
                    <Input
                      id="name-1"
                      name="name"
                      className="w-full p-0 h-12 !text-2xl m-0"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Customer</Label>
                    <Input
                      type="text"
                      name="name"
                      className="w-full p-0 h-12 !text-2xl m-0"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Assigned_to</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Rows" />
                      </SelectTrigger>
                      <SelectContent>
                        {[5, 10, 20, 30].map((size) => (
                          <SelectItem key={size} value={size.toString()}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Phone</Label>
                    <Input
                      type="text"
                      name="name"
                      className="w-full p-0 h-12 !text-2xl m-0"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Phone</Label>
                    <Input
                      type="text"
                      name="name"
                      className="w-full p-0 h-12 !text-2xl m-0"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label>Tags</Label>
                        <Input type="text" className="w-full p-0 h-12 !text-2xl m-0"/>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div>
                      {/* Label + Input */}

                      {/* Star Rating */}
                      <div className="flex items-center gap-2">
                        <Label>Prority</Label>
                        <div className="flex gap-1">
                          {[1, 2, 3].map((i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 cursor-pointer ${
                                i <= stars
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-400"
                              }`}
                              onClick={() => setStars(i)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid gap-3 ">
                    <Textarea
                      placeholder="Add details about this ticket"
                      className="h-30 resize-none"
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
        )}
      </Sidebar>
    </>
  );
};
