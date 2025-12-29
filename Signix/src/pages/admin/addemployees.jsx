import { useEffect, useState } from "react";
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
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const AddEmployees = () => {
  const [emp, setemp] = useState({
    first_name: "",
    last_name: "",
    employee_code: "",
    email: "",
    phone: "",
    date_of_joining: "",
    employment_type: "",
    status: "",
    password: "",
    role_id: "",
    department: "",
    manager: "",
    logo:null
  });
  const [errors, seterrors] = useState({});
  const [emp_id, setId] = useState();
  const [roles,setroles]=useState([])
  const [depart,setdepart]=useState([])
  useEffect(() => {
    const newId = `EMP-${uuidv4().slice(0, 8).toUpperCase()}`;
    setemp((prev) => ({ ...prev, employee_code: newId }));
  }, []);
useEffect(() => {
  axios
    .get("http://localhost:8080/role/showroles")
    .then((res) => {
      setroles(res.data.result);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
useEffect(()=>{
  axios
    .get("http://localhost:8080/department/getdepartments")
    .then((res) => {
      setdepart(res.data.result);
    })
    .catch((error) => {
      console.log(error);
    });
},[])

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
  const validate = () => {
    let newErrors = {};
    Object.entries(emp).forEach(([key, values]) => {
      if (!values) {
        newErrors[key] = "Required";
      }
    });
    seterrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const SubmitForm = async (e) => {
    e.preventDefault();
    // formData.append("employee_code", emp_id);

    if (!validate()) {
      console.log(errors);
    }
    console.log(emp);
    try {
      const res = await axios.post("http://localhost:8080/api/user", emp, {
        withCredentials: true,
      });
      console.log(res.data);
      if (res) {
        alert("Employee is add Successfully");
      }
    } catch (error) {
      const stautss = error.status;
      if (stautss === 404) {
        alert(error.response.data.message);
      } else if (stautss === 505) {
        alert(error.response.data.message);
      } else {
        alert("Network Error:", error.message);
      } 
    }
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
                      placeholder="Enter the Employee code"
                      name="employee_code"
                      value={emp.employee_code}
                      onChange={handleChange}
                    />
                    {errors.employee_code && (
                      <span className="text-red-500">
                        {errors.employee_code}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Employee first_name</Label>
                    <Input
                      placeholder="Enter company name"
                      name="first_name"
                      type="text"
                      onChange={handleChange}
                    />
                    {errors.first_name && (
                      <span className="text-red-500">{errors.first_name}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Employee last_name</Label>
                    <Input
                      placeholder="Enter company name"
                      name="last_name"
                      type="text"
                      onChange={handleChange}
                    />
                    {errors.last_name && (
                      <span className="text-red-500">{errors.last_name}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Employee email</Label>
                    <Input
                      placeholder="Enter company name"
                      name="email"
                      type="email"
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="text-red-500">{errors.email}</span>
                    )}
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
                      name="phone"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Date employee joined</Label>
                    <Input
                      placeholder="Enter company name"
                      name="date_of_joining"
                      type="date"
                      onChange={handleChange}
                    />
                    {errors.date_of_joining && (
                      <span className="text-red-500">
                        {errors.date_of_joining}
                      </span>
                    )}
                  </div>
                  {/* </div> use datepicker */}
                  <div className="flex flex-col">
                    <Label className="mb-2">Employment_type</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("employment_type", value)
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
                    {/* {errors.employment_type && (
                      <span className="text-red-500">{errors.employment_type}</span>
                    )} */}
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
                    {/* {errors.status && (
                      <span className="text-red-500">{errors.status}</span>
                    )} */}
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
                    {errors.password && (
                      <span className="text-red-500">{errors.password}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">role</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("role_id", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select the role" />
                      </SelectTrigger>
                      <SelectContent>
                          {
                            roles.map((key,index)=>(
                            <SelectItem key={index} value={key._id}>{key.role_name}</SelectItem>
                          ))
                          }
                      </SelectContent>
                    </Select>
                    {errors.role_id && (
                      <span className="text-red-500">{errors.role_id}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">department</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("department", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        {
                          depart.map((depart,index)=>(
                             <SelectItem key={index} value={depart._id}>{depart.department_name}</SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                    {/* {errors.department && (
                      <span className="text-red-500">{errors.date_of_joining}</span>
                    )} */}
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
