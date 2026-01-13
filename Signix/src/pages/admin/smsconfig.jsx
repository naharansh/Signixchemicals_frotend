import { MailIcon, MailQuestionMarkIcon, SendIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Separator } from "../../components/ui/separator";
import { useState } from "react";
import { Switch } from "../../components/ui/switch";
import { Textarea } from "../../components/ui/textarea";

export const SMSCONFIG = () => {
  return (
    <>
      <div className="w-full  my-2">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <Card className="my-4 mx-3 rounded-none overflow-hidden px-2 py-2">
            <CardHeader className="px-2 pt-2 pb-1 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-base font-semibold text-gray-900">
                    Releans SMS
                  </h1>
                  <p className="text-sm text-gray-500 m-0">
                    SMS provider configuration & status
                  </p>
                </div>
              </div>
              <Separator className="mt-2" />
            </CardHeader>

            <CardContent className="px-2 pt-3 bg-white -mt-5">
              <form className="space-y-3">
                <Label className="text-sm m-0">Releans sms</Label>

                <RadioGroup className="my-2 px-3 l-2">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="active" id="r1" />
                    <Label htmlFor="r1">Active</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="inactive" id="r2" />
                    <Label htmlFor="r2">Inactive</Label>
                  </div>
                </RadioGroup>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Api key</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">From</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Otp template</Label>
                  <Input type="text" />
                </div>

                <div className="flex justify-end mt-6 pt-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                  <Button
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm 
               hover:bg-blue-700  
               transition duration-200 ease-in-out"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="rounded-none my-4 mx-3 px-2 py-2">
            <CardHeader className="px-2 pt-2 pb-1 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-base font-semibold text-gray-900">
                    Twilio sms
                  </h1>
                  <p className="text-sm text-gray-500 m-0">
                    SMS provider configuration & status
                  </p>
                </div>
              </div>
              <Separator className="mt-2" />
            </CardHeader>

            <CardContent className="px-2 pt-3 bg-white -mt-5">
              <form className="space-y-3">
                <Label className="text-sm m-0">Twilio sms</Label>

                <RadioGroup className="my-2 px-3 l-2">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="active" id="r1" />
                    <Label htmlFor="r1">Active</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="inactive" id="r2" />
                    <Label htmlFor="r2">Inactive</Label>
                  </div>
                </RadioGroup>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Sid</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Messaging service sid</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Token</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">From</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Otp template</Label>
                  <Input type="text" />
                </div>

                <div className="flex justify-end mt-6 pt-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                  <Button
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm 
               hover:bg-blue-700  
               transition duration-200 ease-in-out"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <Card className="my-4 mx-3 rounded-none overflow-hidden px-2 py-2">
            <CardHeader className="px-2 pt-2 pb-1 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-base font-semibold text-gray-900">
                    Nexmo sms
                  </h1>
                  <p className="text-sm text-gray-500 m-0">
                    SMS provider configuration & status
                  </p>
                </div>
              </div>
              <Separator className="mt-2" />
            </CardHeader>

            <CardContent className="px-2 pt-3 bg-white -mt-5">
              <form className="space-y-3">
                <Label className="text-sm m-0">Nexmo sms</Label>

                <RadioGroup className="my-2 px-3 l-2">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="active" id="r1" />
                    <Label htmlFor="r1">Active</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="inactive" id="r2" />
                    <Label htmlFor="r2">Inactive</Label>
                  </div>
                </RadioGroup>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Api key</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Api secret</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">From</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Otp template</Label>
                  <Input type="text" />
                </div>

                <div className="flex justify-end mt-6 pt-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                  <Button
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm 
               hover:bg-blue-700  
               transition duration-200 ease-in-out"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="rounded-none my-4 mx-3 px-2 py-2">
            <CardHeader className="px-2 pt-2 pb-1 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-base font-semibold text-gray-900">
                    Twilio sms
                  </h1>
                  <p className="text-sm text-gray-500 m-0">
                    SMS provider configuration & status
                  </p>
                </div>
              </div>
              <Separator className="mt-2" />
            </CardHeader>

            <CardContent className="px-2 pt-3 bg-white -mt-5">
              <form className="space-y-3">
                <Label className="text-sm m-0">Twilio sms</Label>

                <RadioGroup className="my-2 px-3 l-2">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="active" id="r1" />
                    <Label htmlFor="r1">Active</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="inactive" id="r2" />
                    <Label htmlFor="r2">Inactive</Label>
                  </div>
                </RadioGroup>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Api Key</Label>
                  <Input type="text" />
                </div>

                <div className="flex justify-end mt-6 pt-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                  <Button
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm 
               hover:bg-blue-700  
               transition duration-200 ease-in-out"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <Card className="my-4 mx-3 rounded-none overflow-hidden px-2 py-2">
            <CardHeader className="px-2 pt-2 pb-1 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-base font-semibold text-gray-900">
                    Msg91 sms
                  </h1>
                  <p className="text-sm text-gray-500 m-0">
                    SMS provider configuration & status
                  </p>
                </div>
              </div>
              <Separator className="mt-2" />
            </CardHeader>

            <CardContent className="px-2 pt-3 bg-white -mt-5">
              <form className="space-y-3">
                <Label className="text-sm m-0">Msg91 sms</Label>

                <RadioGroup className="my-2 px-3 l-2">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="active" id="r1" />
                    <Label htmlFor="r1">Active</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="inactive" id="r2" />
                    <Label htmlFor="r2">Inactive</Label>
                  </div>
                </RadioGroup>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Template id</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Auth_key</Label>
                  <Input type="text" />
                </div>

                <div className="flex justify-end mt-6 pt-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                  <Button
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm 
               hover:bg-blue-700  
               transition duration-200 ease-in-out"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
export const MailConfig = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="w-full my-1">
        <Card className="rounded-none border border-none shadow-sm mx-5 ">
          <CardContent className="space-y-4">
         
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-semibold flex items-center gap-2">
                  <MailIcon className="h-4 w-4" />
                  Email Integration
                </h3>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setopen(!open)}
                className="flex items-center gap-2"
              >
                Test
              </Button>
            </div>

            {open && (
              <div className="rounded-none  py-4 space-y-3 animate-in fade-in slide-in-from-top-2">
                <div className="space-y-1 flex justify-between flex-col lg:flex-row">
                  <Input
                    id="test-email"
                    type="email"
                    placeholder="example@domain.com"
                    className="w-full py-3 my-3 lg:p-5  lg:my-0"
                  />
                  <Button className="flex items-center gap-2 w-full lg:w-70 bg-blue-400 hover:bg-blue-800 p-5">
                    <SendIcon className="h-4 w-4" />
                    Send Test Mail
                  </Button>
                </div>

                <div className="flex justify-end"></div>
              </div>
            )}
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 gap-2 my-5 mx-5 lg:grid-cols-2">
          <Card className="my-4 mx-3 rounded-none overflow-hidden px-2 py-2">
            <CardHeader className="px-2 pt-2 pb-1 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-base font-semibold text-gray-900">
                    Smtp mail config
                  </h1>
                  <p className="text-sm text-gray-500 m-0">
                    Email provider configuration & status
                  </p>
                </div>
              </div>
              <Separator className="mt-2" />
            </CardHeader>

            <CardContent className="px-2 pt-3 bg-white -mt-5">
              <form className="space-y-3">
                <Label className="text-sm m-0">Smtp mail</Label>

                <RadioGroup className="my-2 px-0 l-2 lg:px-3 ">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="active" id="r1" />
                    <Label htmlFor="r1">Active</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="inactive" id="r2" />
                    <Label htmlFor="r2">Inactive</Label>
                  </div>
                </RadioGroup>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Mailer name</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Host</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Driver</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Port</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Username</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Email id</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Encryption</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Password</Label>
                  <Input type="text" />
                </div>

                <div className="flex justify-end mt-6 pt-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                  <Button
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm 
               hover:bg-blue-700  
               transition duration-200 ease-in-out"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="my-4 mx-3 rounded-none overflow-hidden px-2 py-2">
            <CardHeader className="px-2 pt-2 pb-1 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-base font-semibold text-gray-900">
                    Sendgrid mail config
                  </h1>
                  <p className="text-sm text-gray-500 m-0">
                    Email provider configuration & status
                  </p>
                </div>
              </div>
              <Separator className="mt-2" />
            </CardHeader>

            <CardContent className="px-2 pt-3 bg-white -mt-5">
              <form className="space-y-3">
                <Label className="text-sm my-0">Sendgrid mail</Label>

                <RadioGroup className="my-2 px-3 l-2">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="active" id="r1" />
                    <Label htmlFor="r1">Active</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="inactive" id="r2" />
                    <Label htmlFor="r2">Inactive</Label>
                  </div>
                </RadioGroup>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Mailer name</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Host</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Driver</Label>
                  <Input type="text" />
                </div>

                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Port</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Username</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Email id</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Encryption</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-2 my-2">
                  <Label className="text-sm  m-0">Password</Label>
                  <Input type="text" />
                </div>

                <div className="flex justify-end mt-6 pt-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                  <Button
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm 
               hover:bg-blue-700  
               transition duration-200 ease-in-out"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
export const Recapcha = () => {
  return (
    <>
    <div className="w-full my-1">
      <Card className="mx-5 my-2 rounded-none  shadow-sm border border-none  p-0">
        <CardHeader className="py-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-md font-semibold me-5">Google reCAPTCHA</h1>
                <Switch id="recaptcha-toggle" />
              </div>
            </div>

            <Button
              variant="outline"
              className="flex items-center gap-2 px-4 border border-blue-600 
             text-blue-900 font-medium rounded-md hover:bg-blue-600 
              
             transition duration-200 ease-in-out shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm0 0v-1m0 1v1m0-1h1m-1 0h-1"
                />
              </svg>
              Credentials Setup page
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <Label htmlFor="siteKey">Site Key</Label>
                <Input id="siteKey" type="text" placeholder="Enter site key" />
              </div>

              
              <div className="space-y-2">
                <Label htmlFor="secretKey">Secret Key</Label>
                <Input
                  id="secretKey"
                  type="password"
                  placeholder="Enter secret key"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-base font-semibold">Instructions</h2>

              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>
                  To get site key and secret key go to the Credentials page
                  <a
                    href="#"
                    className="ml-1 text-primary underline-offset-2 hover:underline"
                  >
                    (Click here)
                  </a>
                </li>

                <li>Add a label (Ex: abc company)</li>

                <li>Select reCAPTCHA v2 as reCAPTCHA Type</li>

                <li>
                  Select sub type:{" "}
                  <span className="font-medium">I’m not a robot checkbox</span>
                </li>

                <li>Add Domain (For ex: demo.6amtech.com)</li>

                <li>
                  Check in{" "}
                  <span className="font-medium">
                    “Accept the reCAPTCHA Terms of Service”
                  </span>
                </li>

                <li>Press Submit</li>

                <li>
                  Copy Site Key and Secret Key, paste in the input fields below
                  and save.
                </li>
              </ol>
            </div>
            <div className="flex justify-end items-center px-5 py-2 px-2">
              <Button className="btns w-25 text-lg ">Save</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      </div>
    </>
  );
};
export const Maps = () => {
  return (
    <>
      <Card className="mx-5 my-2 rounded-none  shadow-none border border-none  p-0">
        <CardContent className="border border-none">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
              
              <div className="space-y-2">
                <Label htmlFor="siteKey">Map api key (Client)</Label>
                <Input
                  id="siteKey"
                  type="text"
                  placeholder="Enter site key"
                  className="rounded-sm"
                />
              </div>

              {/* Secret Key */}
              <div className="space-y-2">
                <Label htmlFor="secretKey">Map api key (Server)</Label>
                <Input
                  id="secretKey"
                  type="text"
                  placeholder="Enter secret key"
                />
              </div>
            </div>
            <div className="flex justify-end mx-4  my-2">
              <Button className="w-50 py-4 text-lg">Save</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
export const PushNotification = () => {
  return (
    <>
      <Card className="mx-5 my-2 rounded-none  shadow-sm border border-none  p-0">
        <CardHeader>
          <div className="flex items-center gap-3">
            <h1 className="text-md font-semibold">
              Firebase Push Notification Setup
            </h1>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <Label>Server Key</Label>
            <Textarea placeholder="Type your message here." className="my-5" />
            <div className="flex justify-end">
              <Button className="p-5 bg-blue-800 hover:bg-blue-900 w-20 mb-3 ">
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="mx-5 my-2 rounded-none  shadow-sm border border-none  p-0 my-5 lg:my-0">
        <CardHeader>
            <div className="flex items-center gap-3">
            <h1 className="text-md font-semibold">
             Push Messages 
            </h1>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Order Pending Message</Label>
                </div>
                <Textarea
                  placeholder="Type your message here."
                  className="my-5 w-full lg:w-[90%]"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">
                      Order Confirmation Message
                    </Label>
                  </div>
                  <Textarea
                    placeholder="Type your message here."
                    className="my-5  w-[90%]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  ">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">
                    Order Processing Message
                  </Label>
                </div>
                <Textarea
                  placeholder="Type your message here."
                  className="my-5 w-[90%]"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">
                      Order out for Delevery Message
                    </Label>
                  </div>
                  <Textarea
                    placeholder="Type your message here."
                    className="my-5  w-[90%]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  ">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Order Delevered Message</Label>
                </div>
                <Textarea
                  placeholder="Type your message here."
                  className="my-5 w-[90%]"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">
                      Order Returned Message
                    </Label>
                  </div>
                  <Textarea
                    placeholder="Type your message here."
                    className="my-5  w-[90%]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Order Failed Message</Label>
                </div>
                <Textarea
                  placeholder="Type your message here."
                  className="my-5 w-[90%]"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">
                      Deliveryman Delivered Message
                    </Label>
                  </div>
                  <Textarea
                    placeholder="Type your message here."
                    className="my-5  w-[90%]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  ">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">
                    Deliveryman Reshedule Message
                  </Label>
                </div>
                <Textarea
                  placeholder="Type your message here."
                  className="my-5 w-[90%]"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">
                      Order Canceled Message
                    </Label>
                  </div>
                  <Textarea
                    placeholder="Type your message here."
                    className="my-5  w-[90%]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Order Delevered Message</Label>
                </div>
                <Textarea
                  placeholder="Type your message here."
                  className="my-5 w-[90%]"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">
                      Order Returned Message
                    </Label>
                  </div>
                  <Textarea
                    placeholder="Type your message here."
                    className="my-5  w-[90%]"
                  />
                </div>
              </div>
            </div>
           <div className="flex justify-end mb-3">
              <Button className="p-5 bg-blue-800 hover:bg-blue-900 w-20 ">
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
