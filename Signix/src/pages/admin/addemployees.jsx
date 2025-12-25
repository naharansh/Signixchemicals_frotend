import { useState } from "react";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
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

export const AddEmployees = () => {
  const [emp, setemp] = useState({
    emp_fname: "",
    emp_lname: "",
    emp_code: "",
    emp_email: "",
    emp_number: "",
    emp_date: "",
    emp_type: "",
    status: "",
    password: "",
    role: "",
    department: "",
    manager: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setemp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSelectChange = (name, value) => {
    setemp((prev) => ({ ...prev, [name]: value }));
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(emp);
  };
  return (
    <>
      <Sidebar>
        <form action="" method="get" onSubmit={SubmitForm}>
          <div className="grid gap-4 px-4 lg:px-6 grid-cols-1 my-5">
            <Card>
              <CardDescription className="flex justify-between">
                <h1 className="mx-2 text-xl">Personal Information</h1>
              </CardDescription>
              <Separator />
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2">employee_code</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_code"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Employee first_name</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_fname"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Employee last_name</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_lname"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Employee email</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_email"
                      type="email"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardDescription className="flex justify-between">
                <h1 className="mx-2 text-xl">Contact Information</h1>
              </CardDescription>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2">Contact number</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_number"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Date employee joined</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_date"
                      type="date"
                      onChange={handleChange}
                    />
                  </div>
                  {/* </div> use datepicker */}
                  <div className="flex flex-col">
                    <Label className="mb-2">Employment_type</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("emp_type", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FullTime">Full-time</SelectItem>
                        <SelectItem value="Part_time">Part-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">status</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("status", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Resigned">Resigned</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardDescription className="flex justify-between">
                <h1 className="mx-2 text-xl">Organizational Information</h1>
              </CardDescription>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2">Password</Label>
                    <Input
                      placeholder="Enter company name"
                      name="password"
                      type="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Role</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("role", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select the Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FullTimes">Full-time</SelectItem>
                        <SelectItem value="Part_times">Part-time</SelectItem>
                        <SelectItem value="Contracts">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Department</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("department", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FullTisdfme">Fulla-time</SelectItem>
                        <SelectItem value="PartYime">Part-time</SelectItem>
                        <SelectItem value="Contrdsact">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Managers</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("manager", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Resigned">Resigned</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex gap-3 justify-end mx-4">
              <Button type="submit" className="bg-blue-500 hover:bg-blue-900">
                Submit
              </Button>
              <Button type="button">Cancel</Button>
            </div>
          </div>
        </form>
      </Sidebar>
    </>
  );
};
