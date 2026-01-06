import { useState } from "react";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { Switch } from "../../components/ui/switch";

export const ViewsLeads = () => {
  const [edit, setEdit] = useState(true);
  return (
    <>
      <Sidebar>
        <div className="w-full px-2 md:px-6">
          <Card className="border rounded-none border-none shadow-sm ">
            <CardDescription>
              <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-3">
                  <h1 className="text-xl font-semibold text-gray-800">
                    Lead Profile
                  </h1>
                </div>

                <div className="flex items-center gap-2">
                 
                  <Switch
                    checked={!edit}
                    onCheckedChange={() => setEdit(!edit)}
                  />
                </div>
              </div>
              <Separator />
            </CardDescription>

            <CardContent>
              <form className="space-y-8">
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Lead ID */}
                  <div className="space-y-1.5">
                    <Label className="text-sm text-gray-600">Lead ID</Label>
                    <Input
                      placeholder="LD-1023"
                      disabled
                      className="bg-gray-100 cursor-not-allowed"
                    />
                  </div>

                  {/* Lead Name */}
                  <div className="space-y-1.5">
                    <Label className="text-sm">Lead Name</Label>
                    <Input
                      placeholder="John Doe"
                      disabled={edit}
                      className={edit ? "opacity-60 cursor-not-allowed" : ""}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label className="text-sm">Email</Label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      disabled={edit}
                      className={edit ? "opacity-60 cursor-not-allowed" : ""}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label className="text-sm">Phone Number</Label>
                    <Input
                      placeholder="+91 98765 43210"
                      disabled={edit}
                      className={edit ? "opacity-60 cursor-not-allowed" : ""}
                    />
                  </div>

                  {/* Source */}
                  <div className="space-y-1.5">
                    <Label className="text-sm">Source</Label>
                    <Select disabled={edit}>
                      <SelectTrigger
                        className={`${edit ? "opacity-60" : ""}   w-full`}
                      >
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Website">Website</SelectItem>
                        <SelectItem value="Call">Call</SelectItem>
                        <SelectItem value="Excel">Excel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Status */}
                  <div className="space-y-1.5">
                    <Label className="text-sm">Status</Label>
                    <Select disabled={edit}>
                      <SelectTrigger
                        className={`${edit ? "opacity-60" : ""}   w-full`}
                      >
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Contacted">Contacted</SelectItem>
                        <SelectItem value="Qualified">Qualified</SelectItem>
                        <SelectItem value="Lost">Lost</SelectItem>
                        <SelectItem value="Converted">Converted</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Assigned To */}
                  <div className="space-y-1.5">
                    <Label className="text-sm">Assigned To</Label>
                    <Select disabled={edit}>
                      <SelectTrigger
                        className={`${edit ? "opacity-60" : ""}   w-full`}
                      >
                        <SelectValue placeholder="Assign employee" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Emp1">Emp1</SelectItem>
                        <SelectItem value="Emp2">Emp2</SelectItem>
                        <SelectItem value="Emp3">Emp3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Created By */}
                  <div className="space-y-1.5">
                    <Label className="text-sm">Created By</Label>
                    <Select disabled={edit}>
                      <SelectTrigger
                        className={`${edit ? "opacity-60" : ""}   w-full`}
                      >
                        <SelectValue placeholder="System"></SelectValue>
                        <SelectContent>
                          <SelectItem value="Emp1">Emp1</SelectItem>
                          <SelectItem value="Emp2">Emp2</SelectItem>
                          <SelectItem value="Emp3">Emp3</SelectItem>
                        </SelectContent>
                      </SelectTrigger>
                    </Select>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex justify-end gap-3 pt-6 border-t">
                  <Button className="bg-red-600 text-white hover:bg-red-700">
                    Cancel
                  </Button>

                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    type="submit"
                    disabled={edit}
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
