import { useState } from "react";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../../components/ui/card";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
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

export const AddLeads = () => {
  const [form, setform] = useState({
    lead_name: "",
    email: "",
    phone_no: "",
    source: "",
    status: "New",
    assigned_to: "",
    created_by: "",
  });
  const handleSelectChange = (name, value) => {
    setform((prev) => ({ ...prev, [name]: value }));
  };
  const handleChanges = (e) => {
    const { value, name } = e.target;
    setform((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmits = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <Sidebar>
        <div className="w-full px-4">
          <Card className="max-w-5xl mx-auto rounded-none shadow-md border border-none  py-6">
            
            <div className="px-6">
              <h1 className="text-xl font-semibold tracking-tight">Add Lead</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Fill in the details to create a new lead
              </p>
            </div>

            <Separator className="my-4" />

            <CardContent className="px-6">
              <form className="space-y-6" onSubmit={handleSubmits}>
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Lead Name */}
                  <div className="space-y-2">
                    <Label>Lead Name</Label>
                    <Input
                      placeholder="John Doe"
                      name="lead_name"
                      onChange={handleChanges}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      name="email"
                      onChange={handleChanges}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input
                      placeholder="+91 98765 43210"
                      name="phone_no"
                      onChange={handleChanges}
                    />
                  </div>

                  {/* Source */}
                  <div className="space-y-2">
                    <Label>Source</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("source", value)
                      }
                    >
                      <SelectTrigger className="w-full">
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
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select
                      value={form.status}
                      onValueChange={(value) =>
                        handleSelectChange("status", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
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
                  <div className="space-y-2">
                    <Label>Assigned To</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("assigned_to", value)
                      }
                    >
                      <SelectTrigger className="w-full">
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
                  <div className="space-y-2">
                    <Label>Created By</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("created_by", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Created by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Emp1">Emp1</SelectItem>
                        <SelectItem value="Emp2">Emp2</SelectItem>
                        <SelectItem value="Emp3">Emp3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

               
                <div className="flex justify-end gap-3 pt-4">
                  <Button className="bg-red-700 hover:bg-red-800">
                    Cancel
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                    type="Submit"
                  >
                    Submit
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
