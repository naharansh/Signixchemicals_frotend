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
export const ListEmployees = () => {
  const data = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0147",
      department: "Human Resources",
    },
    {
      name: "Brian Smith",
      email: "brian.smith@example.com",
      phone: "+1-202-555-0193",
      department: "Finance",
    },
    {
      name: "Catherine Lee",
      email: "catherine.lee@example.com",
      phone: "+1-202-555-0112",
      department: "Engineering",
    },
    {
      name: "David Patel",
      email: "david.patel@example.com",
      phone: "+1-202-555-0178",
      department: "Marketing",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+1-202-555-0134",
      department: "Sales",
    },
    {
      name: "Frank Miller",
      email: "frank.miller@example.com",
      phone: "+1-202-555-0156",
      department: "IT Support",
    },
    {
      name: "Grace Wilson",
      email: "grace.wilson@example.com",
      phone: "+1-202-555-0189",
      department: "Legal",
    },
    {
      name: "Henry Brown",
      email: "henry.brown@example.com",
      phone: "+1-202-555-0167",
      department: "Operations",
    },
    {
      name: "Isabella Martinez",
      email: "isabella.martinez@example.com",
      phone: "+1-202-555-0123",
      department: "Product Management",
    },
    {
      name: "Jack Thompson",
      email: "jack.thompson@example.com",
      phone: "+1-202-555-0199",
      department: "Research & Development",
    },
  ];
  const [search, setsearch] = useState();
  const searching = (e) => {
    const { value } = e.target;
    setsearch(value);
  };
  const findEmployee = useMemo(() => {
  if (!search) return data;

  const query = search.toLowerCase();

  return data.filter((emp) =>
    emp.department?.toLowerCase().includes(query)
  );
}, [data, search]);
  return (
    <>
      <Sidebar>
        <div className="justify-between  flex mx-4 px-4 my-2  ">
          <h4 className="text-xl items-center">Employees</h4>
          <Input
            type="search"
            className="w-1/3 border border-2    "
            placeholder="Search by Department"
            onChange={searching}
          />
        </div>
      <div className="w-full my-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    {findEmployee.map((item, key) => (
      <Card
        key={key}
        className="w-full rounded-sm hover:shadow-md transition"
      >
        <CardContent className="p-4">
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

              <div className="flex justify-end mt-3">
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
};
