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

export const LeaveApply = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [date, setDate] = useState(undefined);
  const [enddate, setendDate] = useState(undefined);

  const [opendialog, setDailog] = useState(false);
  return (
    <>
      <Sidebar>
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Leaves</h1>
              <p className="text-sm text-gray-500">
                Apply, track & manage leave requests
              </p>
            </div>
            <Dialog open={opendialog} onOpenChange={setDailog}>
              <form>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                    <span className="text-lg">
                      <PlusIcon />
                    </span>
                    Apply Leave
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Apply for Leave</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name-1">Leave Type</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Leave Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Leave Type</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className=" gap-3 flex">
                      <Label htmlFor="date" className="px-1 ">
                        Leave from
                      </Label>
                      <Label htmlFor="date" className="px-1 ms-29 ">
                        Leave to
                      </Label>
                    </div>
                    <div className="gap-3 flex">
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            id="date"
                            className="w-48 justify-between font-normal"
                          >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto overflow-hidden p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                              setDate(date);
                              setOpen(false);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                      <Popover open={close} onOpenChange={setClose}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            id="date"
                            className="w-48 justify-between font-normal"
                          >
                            {enddate
                              ? enddate.toLocaleDateString()
                              : "Select date"}
                            <ChevronDownIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto overflow-hidden p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={enddate}
                            captionLayout="dropdown"
                            onSelect={(enddate) => {
                              setendDate(enddate);
                              setClose(false);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name-1">Number of Days</Label>
                      <Input
                        type="text"
                        placeholder="number of days"
                        className="-mx-1"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name-1">Reason</Label>
                      <Textarea
                        placeholder="Type your Reason"
                        className="resize-none mx-auto"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        variant="outline"
                        onClick={() => setDailog(false)}
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-2 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="group">
              <Card className="h-full bg-blue-800 border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 ">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-5xl font-bold">12</h4>
                    <p className="text-blue-100 text-lg mt-2">
                      Total Leaves Taken
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="h-full bg-gradient-to-br from-amber-500 to-amber-600 border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 ">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-5xl font-bold">3</h4>
                    <p className="text-amber-100 text-lg mt-2">
                      Pending Approval
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="h-full bg-green-700 border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 ">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-5xl font-bold">18</h4>
                    <p className="text-emerald-100 text-lg mt-2">
                      Available Leaves
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-white/5  rounded-xl  shadow-xl py-6">
            <ul className="space-y-4">
              <li>
                <Card className="rou">
                  <CardContent>
                    <div className="flex items-center justify-between p-4 border-b border-gray-100 ">
                      <div className="">
                        <Avatar className="w-20 h-20">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>

                      <div className="flex-1 ml-4 self-start">
                        <h4 className="text-lg font-semibold ">Radha Kumari</h4>
                        <p className="text-sm text-gray-300">
                          Sales Department
                        </p>

                        <div className="flex items-center gap-3 mt-2">
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                            Sick Leave
                          </span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-400">May 8</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-400">
                            9 hours ago
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end justify-between h-full">
                        <Badge
                          variant="secondary"
                          className="px-3 py-1 bg-yellow-200 text-yellow-800 font-medium "
                        >
                          Pending
                        </Badge>

                        <ChevronRightIcon className="text-gray-300 w-5 h-5 mt-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </Sidebar>
    </>
  );
};
