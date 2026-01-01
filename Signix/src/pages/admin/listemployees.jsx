import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import first from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone-svgrepo-com.svg";
import { Input } from "../../components/ui/input";
import { useMemo, useState } from "react";
import { PlusCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import { ViewEmployee } from "./viewemployees";
export const ListEmployees = () => {
  const data = [
    {
      id:1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0147",
      department: "Human Resources",
    },
    {
      id:2,
      name: "Brian Smith",
      email: "brian.smith@example.com",
      phone: "+1-202-555-0193",
      department: "Finance",
    },
    {
      id:3,
      name: "Catherine Lee",
      email: "catherine.lee@example.com",
      phone: "+1-202-555-0112",
      department: "Engineering",
    },
    {
      id:4,
      name: "David Patel",
      email: "david.patel@example.com",
      phone: "+1-202-555-0178",
      department: "Marketing",
    },
    {
      id:5,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+1-202-555-0134",
      department: "Sales",
    },
    {
      id:6,
      name: "Frank Miller",
      email: "frank.miller@example.com",
      phone: "+1-202-555-0156",
      department: "IT Support",
    },
    {
      id:7,
      name: "Grace Wilson",
      email: "grace.wilson@example.com",
      phone: "+1-202-555-0189",
      department: "Legal",
    },
    {
      id:8,
      name: "Henry Brown",
      email: "henry.brown@example.com",
      phone: "+1-202-555-0167",
      department: "Operations",
    },
    {
      id:9,
      name: "Isabella Martinez",
      email: "isabella.martinez@example.com",
      phone: "+1-202-555-0123",
      department: "Product Management",
    },
    {
      id:10,
      name: "Jack Thompson",
      email: "jack.thompson@example.com",
      phone: "+1-202-555-0199",
      department: "Research & Development",
    },
  ];
  const navigate=useNavigate()
  const [search, setsearch] = useState();
  const [edit, setEdit] = useState(true);
  const searching = (e) => {
    const { value } = e.target;
    setsearch(value);
  };
  const findEmployee = useMemo(() => {
    if (!search) return data;

    const query = search.toLowerCase();

    return data.filter((emp) => emp.department?.toLowerCase().includes(query));
  }, [data, search]);
  if (edit) {
    return (
      <>
        <Sidebar>
          <div className="justify-between  flex mx-4 px-4 my-2  ">
            <div className="flex items-center space-x-2">
              <Switch
                id="airplane-mode"
                checked={!edit}
                onCheckedChange={() => setEdit(!edit)}
              />
            </div>
            <Input
              type="search"
              className="w-1/3 border border-2    "
              placeholder="Search by Department"
              onChange={searching}
            />
            <Button
              asChild
              className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-medium shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              <Link to="/admin/addEmployee">
                <PlusCircle className="h-5 w-5" />
                Add Employee
              </Link>
            </Button>
          </div>
          <div className="w-full my-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {findEmployee.map((item, key) => (
                <Card
                  key={key}
                  className="w-full rounded-sm hover:shadow-md transition cursor-pointer"
                  onClick={()=>navigate(`/admin/viewEmployee/${item.id}`)}
                >
                  <CardContent>
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <div className="bg-green-500 w-20 h-20 rounded-md flex items-center justify-center">
                        <h1 className="text-4xl text-white font-semibold">
                          {item.name?.[0]}
                        </h1>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h1 className="text-lg font-semibold text-gray-800">
                              {item.name}
                            </h1>
                            <p className="text-sm text-gray-500">
                              {item.department}
                            </p>
                          </div>
                          <span className="w-3 h-3 bg-green-500 rounded-full mt-1" />
                        </div>

                        <div className="mt-2 space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <img src={first} className="h-4 w-4" />
                            {item.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <img src={phone} className="h-4 w-4" />
                            {item.phone}
                          </div>
                        </div>

                        <div className="flex justify-end ">
                          <div className="w-8 h-8 bg-green-500 text-white rounded-md flex items-center justify-center">
                            {item.name?.[0]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Sidebar>
      </>
    );
  } else {
    return (
      <>
        <Sidebar>
           <div className="justify-between  flex mx-4 px-4 my-2  ">
          <div className="flex items-center space-x-2">
            <Switch
              id="airplane-mode"
              checked={!edit}
              onCheckedChange={() => setEdit(!edit)}
            />
          </div>
          <Input
            type="search"
            className="w-1/3 border border-2    "
            placeholder="Search by Department"
            onChange={searching}
          />
          <Button
            asChild
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-medium shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            <Link to="/admin/addEmployee">
              <PlusCircle className="h-5 w-5" />
              Add Employee
            </Link>
          </Button>
        </div>
        <ViewEmployee />

        </Sidebar>
      </>
    );
  }
};
