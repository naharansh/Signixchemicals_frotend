import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Sidebar } from "../../components/sidebar";
import { Separator } from "../../components/ui/separator";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
export const AddCompany = () => {
  const [edit, setEdit] = useState({
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
    confirmPassword: "",
    website: "",
    logo: null,
  });

  const [errors, setErrors] = useState({});

  // INPUT HANDLER
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((prev) => ({ ...prev, [name]: value }));
  };

  // SELECT HANDLER
  const handleSelectChange = (name, value) => {
    setEdit((prev) => ({ ...prev, [name]: value }));
  };

  // FILE HANDLER
  const handleFileChange = (e) => {
    setEdit((prev) => ({ ...prev, logo: e.target.files[0] }));
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    Object.entries(edit).forEach(([key, value]) => {
      if (!value) newErrors[key] = "Required";
    });

    if (edit.password !== edit.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    console.log("DSFSDf");
    e.preventDefault();
    if (!validate()) {
      console.log(errors);
      alert("form cannot be submitted");
      return;
    }
    alert("Company is added successfully");
  };

  return (
    <Sidebar>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 px-4 lg:px-6 grid-cols-1 my-5">
          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardDescription className="flex justify-between">
                <h1 className="mx-2 text-xl">Personal Information</h1>
              </CardDescription>
              <Separator />
              <CardTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2">Company Name</Label>
                    <Input
                      placeholder="Enter company name"
                      name="companyName"
                      value={edit.companyName}
                      onChange={handleChange}
                    />
                    {errors.companyName && (
                      <span className="text-red-500">{errors.companyName}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <Label className="mb-2">Company Type</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("companyType", value)
                      }
                      value={edit.companyType}
                    >
                      <SelectTrigger className="w-full">
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
                    {errors.companyType && (
                      <span className="text-red-500">{errors.companyType}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <Label className="mb-2">Sector</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("sector", value)
                      }
                      value={edit.sector}
                    >
                      <SelectTrigger className="w-full">
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
                    {errors.sector && (
                      <span className="text-red-500">{errors.sector}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <Label htmlFor="picture">Upload Logo</Label>
                    <Input
                      id="picture"
                      type="file"
                      onChange={handleFileChange}
                    />
                    {errors.logo && (
                      <span className="text-red-500">{errors.logo}</span>
                    )}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Address Info */}
          <Card>
            <CardHeader>
              <CardDescription>
                <h1 className="mx-2 text-xl">Address Information</h1>
              </CardDescription>
              <Separator />
              <CardTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2">Address Line 1</Label>
                    <Input
                      placeholder="Address Line 1"
                      name="addressLine1"
                      value={edit.addressLine1}
                      onChange={handleChange}
                    />
                    {errors.companyName && (
                      <span className="text-red-500">{errors.companyName}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <Label className="mb-2">Address Line 2</Label>
                    <Input
                      placeholder="Address Line2"
                      name="addressLine2"
                      value={edit.addressLine2}
                      onChange={handleChange}
                    />
                    {errors.addressLine2 && (
                      <span className="text-red-500">
                        {errors.addressLine2}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">City</Label>
                    <Input
                      placeholder="City"
                      name="city"
                      value={edit.city}
                      onChange={handleChange}
                    />
                    {errors.city && (
                      <span className="text-red-500">{errors.city}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">State</Label>
                    <Input
                      placeholder="state"
                      name="state"
                      value={edit.state}
                      onChange={handleChange}
                    />
                    {errors.state && (
                      <span className="text-red-500">{errors.state}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <Label className="mb-2">Country</Label>
                    <Input
                      placeholder="Enter the Countery"
                      name="country"
                      value={edit.country}
                      onChange={handleChange}
                    />
                    {errors.country && (
                      <span className="text-red-500">{errors.country}</span>
                    )}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardDescription>
                <h1 className="mx-2 text-xl">Contact Information</h1>
              </CardDescription>
              <Separator />
              <CardTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2">Primary Phone</Label>
                    <Input
                      placeholder="Primary Phone"
                      name="primaryPhone"
                      value={edit.primaryPhone}
                      onChange={handleChange}
                    />
                    {errors.primaryPhone && (
                      <span className="text-red-500">
                        {errors.primaryPhone}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Secondary Phone</Label>
                    <Input
                      placeholder="Secondary Phone"
                      name="secondaryPhone"
                      value={edit.secondaryPhone}
                      onChange={handleChange}
                    />
                    {errors.secondaryPhone && (
                      <span className="text-red-500">
                        {errors.secondaryPhone}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <Label className="mb-2">Email</Label>
                    <Input
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={edit.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="text-red-500">{errors.email}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Website</Label>
                    <Input
                      placeholder="enter email"
                      name="website"
                      type="email"
                      value={edit.website}
                      onChange={handleChange}
                    />
                    {errors.website && (
                      <span className="text-red-500">{errors.website}</span>
                    )}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Password */}
          <Card>
            <CardHeader>
              <CardDescription>
                <h1 className="mx-2 text-xl">Password</h1>
              </CardDescription>
              <Separator />
              <CardTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2">Password</Label>
                    <Input
                      placeholder="Enter the Password"
                      type="password"
                      name="password"
                      value={edit.password}
                      onChange={handleChange}
                    />
                    {errors.companyName && (
                      <span className="text-red-500">{errors.companyName}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">confirmPassword</Label>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      value={edit.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                      <span className="text-red-500">
                        {errors.confirmPassword}
                      </span>
                    )}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-3 justify-end mx-4">
          <Button type="submit" className="bg-blue-500 hover:bg-blue-900">
            Submit
          </Button>
          <Button type="button">Cancel</Button>
        </div>
      </form>
    </Sidebar>
  );
};
