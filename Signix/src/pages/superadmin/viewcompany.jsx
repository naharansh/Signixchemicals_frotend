import { useState, useEffect } from "react";
import { Upload } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Sidebar } from "../../components/sidebar";
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
import { Switch } from "../../components/ui/switch";

export const ViewCompany = () => {
  const { id } = useParams();

  const [edit, setEdit] = useState(true);

  const [data, setData] = useState({
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
    website: "",
    password: "",
  
    file_path: "",
  });

  const [logoPreview, setLogoPreview] = useState("");

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    axios
      .get(`http://localhost:8080/company/getEmployee/${id}`)
      .then((res) => {
        setData(res.data.result);
        setLogoPreview(
          `http://localhost:8080/uploads/${res.data.result.file_path}`
        );
      })
      .catch(console.error);
  }, [id]);

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLogoPreview(URL.createObjectURL(file));

    setData((prev) => ({
      ...prev,
      file_path: file, // IMPORTANT
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });

      await axios.patch(
        `http://localhost:8080/company/updateEmployee/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Company profile updated successfully");
      setEdit(true);
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <Sidebar>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 my-4  px-2 sm:px-0 items-start w-full">
          {/* PROFILE CARD */}
          <Card className="rounded-sm mx-5 sm:mx-4 lg:mx-5">
            <CardHeader>
              <CardTitle className="text-base text-center">
                Profile
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 justify-center flex-col">
                <img
                  src={logoPreview}
                  alt="Company Logo"
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
                        ? "opacity-50 cursor-not-allowed pointer-events-none"
                        : "cursor-pointer"
                    }`}
                  >
                    <Upload className="mb-2 text-blue-600" />
                    <p className="text-sm text-blue-600 font-medium">
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
                      accept="image/*"
                      onChange={handleLogoChange}
                    />
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DETAILS CARD */}
          <Card className="rounded-sm col-span-1 ms-[90px] lg:col-span-2 lg:ms-[-40px] me-2">
            <CardHeader>
              <CardTitle className="text-base">
                <div className="flex justify-between">
                  <h4>Profile Information</h4>
                  <Switch checked={!edit} onCheckedChange={() => setEdit(!edit)} />
                </div>
              </CardTitle>
            </CardHeader>

            <Separator className="-my-5" />

            <CardDescription className="my-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                {[
                  ["Company Name", "companyName"],
                  ["Address Line 1", "addressLine1"],
                  ["Address Line 2", "addressLine2"],
                  ["City", "city"],
                  ["State", "state"],
                  ["Country", "country"],
                  ["Email", "email"],
                  ["Website", "website"],
                  ["Password", "password"],
                ].map(([label, name]) => (
                  <div key={name} className="flex flex-col gap-2 mx-5">
                    <Label>{label}</Label>
                    <Input
                      name={name}
                      type={name === "password" ? "password" : "text"}
                      disabled={edit}
                      value={data[name] || ""}
                      onChange={handleChange}
                    />
                  </div>
                ))}

                {/* COMPANY TYPE */}
                <div className="flex flex-col gap-2 mx-5">
                  <Label>Company Type</Label>
                  <Select
                    value={data.companyType}
                    disabled={edit}
                    onValueChange={(value) =>
                      handleChange({
                        target: { name: "companyType", value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="ngo">NGO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* SECTOR */}
                <div className="flex flex-col gap-2 mx-5">
                  <Label>Sector</Label>
                  <Select
                    value={data.sector}
                    disabled={edit}
                    onValueChange={(value) =>
                      handleChange({
                        target: { name: "sector", value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
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
  );
};
