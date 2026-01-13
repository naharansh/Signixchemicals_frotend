import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import second from "../../assets/icons/star-svgrepo-com.svg";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import icon from "../../assets/icons/email.svg";
import { Separator } from "../../components/ui/separator";
export const HelpDesk = () => {
  return (
    <>
      <Sidebar>
        <div className="w-full bg-gray-50 p-4">
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

              {/* ROW 3 */}
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
        <div className="max-w-md my-4 ">
          <Card className="rounded-xl shadow-lg border border-gray-200 bg-white">
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

                <Button size="sm" className="rounded-md">
                  Tickets
                </Button>
              </div>
            </CardHeader>

            <CardContent className="py-4">
              <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
                <p className="text-sm font-medium text-gray-600">
                  Tickets Closed
                </p>
                <span className="text-lg font-bold text-gray-800">6</span>
              </div>
            </CardContent>

            <CardFooter className="pt-4">
              <div className="grid grid-cols-4 w-full text-center">
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold text-green-600">13</h1>
                  <p className="text-sm text-gray-600">Open</p>
                </div>

                <Separator orientation="vertical" className="mx-auto h-10" />

                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold text-gray-700">0</h1>
                  <p className="text-sm text-gray-600">Unassigned</p>
                </div>

                <Separator orientation="vertical" className="mx-auto h-10" />

                <div className="flex flex-col items-center relative ">
                  <h1 className="text-2xl font-bold text-red-600">3</h1>
                  <p className="text-sm text-gray-600">Urgent</p>
                </div>

                <Separator orientation="vertical" className="mx-auto h-10" />

                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold text-gray-400">0</h1>
                  <p className="text-sm text-gray-600">Failed</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
