import { Eye, Pencil, Search } from "lucide-react";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Separator } from "../../components/ui/separator";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { useState } from "react";

export const EmailTemplate = () => {
  const mails = [
    {
      mail_id: "MAIL-1001",
      to: "customer1@example.com",
      subject: "Invoice #INV-2025-001",
      status: "Sent",
      sent_at: "2026-01-08T10:30:00Z",
      delivery_method: "SMTP",
      opened: "true",
      attachments: 1,
    },
    {
      mail_id: "MAIL-1002",
      to: "customer2@example.com",
      subject: "Payment Reminder",
      status: "Delivered",
      sent_at: "2026-01-08T12:15:00Z",
      delivery_method: "SMTP",
      opened: "false",
      attachments: 0,
    },
    {
      mail_id: "MAIL-1003",
      to: "customer3@example.com",
      subject: "Order Confirmation",
      status: "Failed",
      sent_at: "2026-01-08T14:45:00Z",
      delivery_method: "API",
      opened: "false",
      failure_reason: "Invalid email address",
    },
  ];

  return (
    <>
      <Sidebar>
        <div className="flex items-center justify-between gap-4 mb-4 my-5">
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search mails..."
              className="h-11 pl-10 pr-4 text-sm  transition"
            />
          </div>

          <Button className="h-11 px-6 text-sm font-semibold ">
            + Add New Mail
          </Button>
        </div>

        <div className="my-10  shadow-sm ">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                {[
                  "Mail ID",
                  "Subject",
                  "Responsible",
                  "Sent At",
                  "Opened",
                  "Attachment",
                  "Status",
                  "Actions",
                ].map((head) => (
                  <TableHead
                    key={head}
                    className="font-semibold text-gray-600 text-sm"
                  >
                    {head}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {mails.map((mail, index) => (
                <TableRow
                  key={mail.mail_id}
                  className={`transition-colors hover:bg-blue-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <TableCell className="font-medium">{mail.mail_id}</TableCell>
                  <TableCell>{mail.subject}</TableCell>
                  <TableCell>{mail.to}</TableCell>
                  <TableCell>{mail.sent_at}</TableCell>
                  <TableCell>{mail.opened}</TableCell>
                  <TableCell className="text-center text-gray-500">
                    {mail.attachments}
                  </TableCell>

                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        mail.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : mail.status === "Sent"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {mail.status}
                    </span>
                  </TableCell>

                  <TableCell>
                    <div className="flex justify-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:text-blue-600 transition"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:text-blue-600 transition"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Sidebar>
    </>
  );
};
export const CreateTemplate = () => {
  const [template, setTemplate] = useState({
    subject: "",
    recipients: "",
    mail_list: "",
    message: "",
    status:'',
  });
  const handleSelectChanges=(name,value)=>{
    console.log("sdfsdf")
    setTemplate((prev)=>({...prev,[name]:value}))
  }
const handleChanges=(e)=>{
  const {name,value}=e.target
  setTemplate((prev)=>({...prev,[name]:value}))
}
const SubmitForm=(e)=>{
  e.preventDefault()
  alert("Form is submitted")
  console.log(template)
}
  return (
    <>
      <Sidebar>
        <div className="w-full  my-5 px-3 ">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <Card className="border border-none rounded-none p-0 my-3 shadow-sm">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between pb-4 ">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        Create Mail
                      </h2>
                      <p className="text-sm text-gray-400 mt-1">
                        Fill out the details below to create a new mail for the
                        user.
                      </p>
                    </div>
                    <Button className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" onClick={SubmitForm}>
                      Send Mail
                    </Button>
                  </div>
                  <Separator className="-mt-[20px] mb-7 " />
                  <form className="space-y-4 py-2 ">
                    <div className="flex items-center gap-3">
                      <Label
                        htmlFor="subject"
                        className="w-28 font-medium text-gray-700"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Enter the subject..."
                        className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        onChange={handleChanges}
                        name="subject"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <Label
                          htmlFor="recipients"
                          className="mb-1 font-medium text-gray-700"
                        >
                          Recipients
                        </Label>
                        <Select onValueChange={(value)=>handleSelectChanges("recipients",value)}>
                          <SelectTrigger className="px-3 py-5 my-2 w-full transition">
                            <SelectValue placeholder="recipients" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex flex-col">
                        <Label
                          htmlFor="mailingList"
                          className="mb-1 font-medium text-gray-700"
                        >
                          Mailing List
                        </Label>
                        <Select onValueChange={(value)=>handleSelectChanges("mail_list",value)}>
                          <SelectTrigger className="px-3 py-5 my-2 w-full transition">
                            <SelectValue placeholder="Mail_list" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <Label
                          htmlFor="recipients"
                          className="mb-1 font-medium text-gray-700"
                        >
                          Status
                        </Label>
                        <Select onValueChange={(value)=>handleSelectChanges("status",value)}>
                          <SelectTrigger className="px-3 py-5 my-2 w-full transition">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <Label
                        htmlFor="message"
                        className="mb-1 font-medium text-gray-700"
                        name="message"
                        
                      >
                        Message
                      </Label>
                      <Textarea className="h-screen resize-none my-3 mx-0 rounded-none " name="message" onChange={handleChanges}/>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="">
             
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};
