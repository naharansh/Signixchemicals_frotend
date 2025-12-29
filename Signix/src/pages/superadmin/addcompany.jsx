import { useState } from "react";
import axios from "axios";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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

export const AddCompany = () => {
  // TEXT DATA ONLY
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
  });

  // FILE STATE (SEPARATE)
  const [file, setFile] = useState(null);

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
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    Object.entries(edit).forEach(([key, value]) => {
      if (!value) newErrors[key] = "Required";
    });

    if (!file) newErrors.file = "File required";

    if (edit.password !== edit.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const formData = new FormData();

    // append text fields
    Object.entries(edit).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // append file
    formData.append("file_path", file);

    try {
      await axios.post(
        "http://localhost:8080/company/createEmployee",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      alert("Company added successfully");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Submit failed");
    }
  };

  return (
    <Sidebar>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 px-4 lg:px-6 my-5">
          {/* PERSONAL INFO */}
          <Card>
            <CardHeader>
              <CardDescription>
                <h1 className="text-xl">Personal Information</h1>
              </CardDescription>
              <Separator />
              <CardTitle>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="my-2">Company Name</Label>
                    <Input
                      name="companyName"
                      value={edit.companyName}
                      onChange={handleChange}
                      className="my-2"
                    />
                    {errors.companyName && (
                      <p className="text-red-500">{errors.companyName}</p>
                    )}
                  </div>

                  <div className="flex flex-col w-full ">
                    <Label className="my-2">Company Type</Label>
                    <Select
                      value={edit.companyType}
                      onValueChange={(v) =>
                        handleSelectChange("companyType", v)
                      }
                    >
                      <SelectTrigger className="w-full my-2">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">Private</SelectItem>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="startup">Startup</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex  flex-col w-full">
                    <Label className="my-2">Sector</Label>
                    <Select
                      value={edit.sector}
                      onValueChange={(v) => handleSelectChange("sector", v)}
                    >
                      <SelectTrigger className="my-2 w-full">
                        <SelectValue placeholder="Select sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">IT</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col w-full">
                    <Label className="my-2">Upload File</Label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="my-2"
                    />
                    {file && (
                      <p className="text-green-600">Selected: {file.name}</p>
                    )}
                    {errors.file && (
                      <p className="text-red-500">{errors.file}</p>
                    )}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          {/* ADDRESS */}
          <Card>
            <CardHeader>
              <CardDescription>
                <h1 className="text-xl">Address</h1>
              </CardDescription>
              <Separator />
              <CardTitle>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="my-2 mx-1">Address Line1</Label>
                    <Input
                      placeholder="Address Line 1"
                      name="addressLine1"
                      value={edit.addressLine1}
                      onChange={handleChange}
                      className="my-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="my-2 mx-1">Address Line2</Label>
                    <Input
                      placeholder="Address Line 2"
                      name="addressLine2"
                      value={edit.addressLine2}
                      onChange={handleChange}
                      className="my-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="my-2 mx-1">City</Label>
                    <Input
                      placeholder="City"
                      name="city"
                      value={edit.city}
                      onChange={handleChange}
                      className="my-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="my-2 mx-1">State</Label>
                    <Input
                      placeholder="State"
                      name="state"
                      value={edit.state}
                      onChange={handleChange}
                      className="my-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="my-2 mx-1">State</Label>
                    <Input
                      placeholder="Country"
                      name="country"
                      value={edit.country}
                      onChange={handleChange}
                      className="my-2"
                    />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          {/* CONTACT */}
          <Card>
            <CardHeader>
              <CardDescription>
                <h1 className="text-xl">Contact</h1>
              </CardDescription>
              <Separator />
              <CardTitle>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col" >
                    <Label className="my-2 mx-1">PrimaryNumber</Label>
                      <Input
                    placeholder="Primary Phone"
                    name="primaryPhone"
                    value={edit.primaryPhone}
                    onChange={handleChange}
                className="my-2"  />
                  </div>
                    <div className="flex flex-col">
                      <Label className="my-2 mx-1">SecondaryNumber</Label>
                       <Input
                    placeholder="Secondary Phone"
                    name="secondaryPhone"
                    value={edit.secondaryPhone}
                    onChange={handleChange}
                    className="my-2"
                  />
                    </div>
                    <div className="flex flex-col">
                       <Label className="my-2 mx-1">SecondaryNumber</Label>
                       <Input
                    placeholder="Email"
                    name="email"
                    value={edit.email}
                    onChange={handleChange}
                    className="my-2"
                  />
                    </div>
                 <div className="flex flex-col">
                  <Label className="my-2 mx-1">Secondary Number</Label>
                   <Input
                    placeholder="Website"
                    name="website"
                    value={edit.website}
                    onChange={handleChange}
                    className="my-2"
                  />
                 </div>
                  
                 
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          {/* PASSWORD */}
          <Card>
            <CardHeader>
              <CardDescription>
                <h1 className="text-xl">Password</h1>
              </CardDescription>
              <Separator />
              <CardTitle>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="my-2 mx-1">Password</Label>
                      <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={edit.password}
                    onChange={handleChange}
                    className="my-2"
                  />
                  </div>
                    <div className="flex flex-col">
                       <Label className="my-2 mx-1">Confirm Password</Label>
                         <Input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={edit.confirmPassword}
                    onChange={handleChange}
                    className="my-2"
                  />
                    </div>
                
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className="flex justify-end gap-3 px-4 mb-5">
          <Button type="submit" className="btns">Submit</Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </div>
      </form>
    </Sidebar>
  );
};
