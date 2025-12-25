import { useState } from "react";
import { AppSidebar } from "../../components/Appsliderbar/slidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import { Switch } from "../../components/ui/switch";
import { Upload } from "lucide-react";
import { Sidebar } from "../../components/sidebar";

export const ViewCompany = () => {
  const [edit, isedit] = useState(true);
  const [update, setupdate] = useState({
    companyName: "",
    companyType: "",
    sector: "",

    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    primaryPhone: "",
    secondaryPhone: "",
    email: "",
    password: "",

    website: "",
    logo: null,
  });
  const [logoPreview, setLogoPreview] = useState("https://i.pravatar.cc/100");
  const handleChange = (e) => {
    const { name, value } = e.target;

    setupdate((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    console.log("DSFSDf");
    e.preventDefault();
    console.log(update.logo);
    alert("form  is updated successfully");
  };
  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLogoPreview(URL.createObjectURL(file));

    setupdate((prev) => ({
      ...prev,
      logo: file.name,
    }));
  };
  return (
    <>

          <Sidebar>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-30 my-4 mx-1 items-start">
              <Card className="rounded-sm mx-5">
                <CardHeader>
                  <CardTitle className="text-base text-center">
                    Profile
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 justify-center flex-col">
                    <img
                      src={logoPreview}
                      alt="profile"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-lg text-center">
                        Company Logo
                      </p>
                      <label
                        className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center my-3
    ${
      edit
        ? "opacity-50 cursor-not-allowed pointer-events-none my-3"
        : "cursor-pointer"
    }
  `}
                      >
                        <Upload className="mb-2 text-blue-600" />
                        <p
                          className="text-sm text-blue-600 font-medium"
                          disabled={edit}
                        >
                          Click to Upload{" "}
                          <span className="text-gray-500">
                            or drag and drop
                          </span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          JPG or PNG (Max 450 × 450 px)
                        </p>
                        <input
                          type="file"
                          className="hidden"
                          disabled={edit}
                          onChange={handleLogoChange}
                        />
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-sm -ms-[90px] col-span-2 me-2 ">
                <CardHeader>
                  <CardTitle className="text-base  ">
                    <div className="flex justify-between">
                      <h4>Profile Information</h4>
                      <Switch
                        id="airplane-mode"
                        checked={edit}
                        onCheckedChange={() => isedit(!edit)}
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
                <Separator className="-my-5" />
                <CardDescription className="my-5 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                    <div className="flex flex-col gap-2 mx-5 my-2">
                      <Label>Company Name</Label>
                      <Input
                        disabled={edit}
                        type="text"
                        onChange={handleChange}
                        name="companyName"
                      />
                    </div>

                    <div className="flex flex-col gap-2 mx-5 my-2">
                      <Label>Company Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleChange({
                            target: {
                              name: "companyType",
                              value,
                            },
                          })
                        }
                      >
                        <SelectTrigger className="w-full" disabled={edit}>
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="startup">Startup</SelectItem>
                          <SelectItem value="ngo">NGO</SelectItem>
                          <SelectItem value="enterprise">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col mx-5 my-2">
                      <Label className="mb-2">Sector</Label>
                      <Select
                        className="mx-5"
                        onValueChange={(value) =>
                          handleChange({
                            target: {
                              name: "sector",
                              value,
                            },
                          })
                        }
                      >
                        <SelectTrigger className="w-full" disabled={edit}>
                          <SelectValue placeholder="Select the Sector" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it">IT</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="manufacturing">
                            Manufacturing
                          </SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col mx-5  my-2">
                      <Label className="mb-2">Address Line 1</Label>
                      <Input
                        placeholder="Address Line 1"
                        name="addressLine1"
                        disabled={edit}
                        type="text"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col mx-5  my-2">
                      <Label className="mb-2">Address Line 2</Label>
                      <Input
                        placeholder="Address Line 2"
                        name="addressLine2"
                        disabled={edit}
                        type="text"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col mx-5  my-2">
                      <Label className="mb-2">City</Label>
                      <Input
                        placeholder="City"
                        name="City"
                        disabled={edit}
                        type="text"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col mx-5  my-2">
                      <Label className="mb-2">state</Label>
                      <Input
                        placeholder="State"
                        name="state"
                        disabled={edit}
                        type="text"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col mx-5  my-2">
                      <Label className="mb-2">Country</Label>
                      <Input
                        placeholder="Country"
                        name="country"
                        disabled={edit}
                        type="text"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col mx-5  my-2">
                      <Label className="mb-2">PrimaryPhone</Label>
                      <Input
                        placeholder="Country"
                        name="country"
                        disabled={edit}
                      />
                    </div>
                    <div className="flex flex-col my-2 mx-5">
                      <Label className="mb-2">SecondaryPhone</Label>
                      <Input
                        placeholder="Enter the secondryPhone"
                        name="secondaryphone"
                        disabled={edit}
                        type="text"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col my-2 mx-5">
                      <Label className="mb-2">Email</Label>
                      <Input
                        placeholder="Enter the email"
                        name="mail"
                        disabled={edit}
                        type="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col my-2 mx-5">
                      <Label className="mb-2">Website</Label>
                      <Input
                        placeholder="enter email"
                        name="website"
                        type="email"
                        disabled={edit}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col my-2 mx-5">
                      <Label className="mb-2">Password</Label>
                      <Input
                        placeholder="Enter the Password"
                        type="password"
                        name="password"
                        disabled={edit}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </CardDescription>
                <CardFooter>
                  <Button className="w-full" disabled={edit}>
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </form>
          </Sidebar>
      
    </>
  );
};
