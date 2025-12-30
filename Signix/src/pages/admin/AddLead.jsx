import { Clock, ClockCheck, Plus } from "lucide-react";
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
import { Progress } from "../../components/ui/progress";
import icon from "../../assets/icons/email-svgrepo-com (2).svg";
export const Sections = () => {
  return (
    <>
      <Sidebar>
   
        <div className="w-full px-5">
          <div className="grid grid-cols-5 gap-6 min-w-[1500px]">
           
            <div className="bg-gray-50 rounded-xl border  p-4">
              
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-gray-700">New</h2>
                <span className="text-xl font-medium ">
                    <Plus/>
                </span>
              </div>

              {/* Progress */}
              <div className="flex items-center gap-2 mb-4">
                <Progress value={2} className="h-2 w-full" />
                <span className="text-xs text-gray-500">2%</span>
              </div>

              {/* Card */}
              <Card className="w-full shadow-sm hover:shadow-md transition cursor-pointer">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">
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
                  <div className="flex">
                    <div className="flex ">
                      <img
                        src={second}
                        alt=""
                        srcset=""
                        className="h-5 w-4  "
                      />
                      <img src={second} alt="" srcset="" className="h-5 w-4" />
                        <img src={second} alt="" srcset="" className="h-5 w-4" />
                    </div>
                    <Clock className="h-4 my-auto " />
                  </div>
                  <div className="flex">
                    <div className="w-9 h-9 border border-green-500 text-center text-xl rounded-sm bg-green-500 text-white">
                      K
                    </div>
                    <div className="w-4 h-4 border border-black my-3 rounded-full mx-2"></div>
                  </div>
                </CardFooter>
              </Card>
                <Card className="w-full shadow-sm hover:shadow-md transition cursor-pointer my-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">
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
                  <div className="flex">
                    <div className="flex ">
                      <img
                        src={second}
                        alt=""
                        srcset=""
                        className="h-5 w-4  "
                      />
                      <img src={second} alt="" srcset="" className="h-5 w-4" />
                        <img src={second} alt="" srcset="" className="h-5 w-4" />
                    </div>
                    <Clock className="h-4 my-auto " />
                  </div>
                  <div className="flex">
                    <div className="w-9 h-9 border border-green-500 text-center text-xl rounded-sm bg-green-500 text-white">
                      K
                    </div>
                    <div className="w-4 h-4 border border-black my-3 rounded-full mx-2"></div>
                  </div>
                </CardFooter>
              </Card>
            </div>

            {/* Other columns */}
            <div className="bg-gray-50 rounded-xl border  p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-gray-700">Inprogress</h2>
                <span className="text-sm font-medium ">
                    <Plus/>
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Progress value={2} className="h-2 w-full" />
                <span className="text-xs text-gray-500">2%</span>
              </div>
               <Card className="w-full shadow-sm hover:shadow-md transition cursor-pointer">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">
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
                  <div className="flex">
                    <div className="flex ">
                      <img
                        src={second}
                        alt=""
                        srcset=""
                        className="h-5 w-4  "
                      />
                      <img src={second} alt="" srcset="" className="h-5 w-4" />
                        <img src={second} alt="" srcset="" className="h-5 w-4" />
                    </div>
                    <Clock className="h-4 my-auto " />
                  </div>
                  <div className="flex">
                    <div className="w-9 h-9 border border-green-500 text-center text-xl rounded-sm bg-green-500 text-white">
                      K
                    </div>
                    <div className="w-4 h-4 border border-black my-3 rounded-full mx-2"></div>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-xl border p-4">
               <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-gray-700">On Hold</h2>
                <span className="text-sm font-medium ">
                    <Plus/>
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Progress value={2} className="h-2 w-full" />
                <span className="text-xs text-gray-500">2%</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border p-4">
               <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-gray-700">Saved</h2>
                <span className="text-sm font-medium ">
                    <Plus/>
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Progress value={2} className="h-2 w-full" />
                <span className="text-xs text-gray-500">2%</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border p-4">
               <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-gray-700">Cancelled</h2>
                <span className="text-sm font-medium ">
                    <Plus/>
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Progress value={2} className="h-2 w-full" />
                <span className="text-xs text-gray-500">2%</span>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};
