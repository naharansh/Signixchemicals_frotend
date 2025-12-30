import { Sidebar } from "../../components/sidebar";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export default function MasterCategoryPage() {
  /* -------------------- STATES -------------------- */
  const [globalFilter, setGlobalFilter] = useState("");
  const [departments, setDepartments] = useState([]);
  const [openPopoverId, setOpenPopoverId] = useState(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState({ role_name: "",
    description: ""});
    const [editpopever,seteditpopover]=useState(false)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [edit, setedit] = useState(false);
  const [departmentData, setDepartmentData] = useState({
    department_name: "",
    description: "",
  });

  const [roleData, setRoleData] = useState({
    role_name: "",
    description: "",
    parentCategory: "",
  });
  const [editpopover,editpopovers]=useState(false)

  /* -------------------- API CALLS -------------------- */
  const fetchDepartments = async () => {
    const res = await axios.get(
      "http://localhost:8080/department/getdepartments"
    );

    setDepartments(res.data.result);
  };

  /* -------------------- HANDLERS -------------------- */
  const handleDepartmentChange = (e) => {
    const { name, value } = e.target;
    setDepartmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (e) => {
    const { name, value } = e.target;
    setRoleData((prev) => ({ ...prev, [name]: value }));
  };

  /* Create Category */
  const handleAddDepartment = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:8080/department/createdepartememt",
      departmentData
    );
    seteditpopover(false);
    setDepartmentData({ department_name: "", description: "" });
    fetchDepartments();
  };

  /* Create Sub-Category (Role) */
  const handleRoleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/roleapi/createrole", roleData);
    setAddDialogOpen(false);
    setRoleData({ role_name: "", description: "", parentCategory: "" });
  };
  const handleChanges=(e)=>{
    const {name,value}=e.target
     setDepartmentData((prev)=>({...prev,[name]:value}))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(departmentData)
    try{
    const res=await  axios.patch(`http://localhost:8080/department/updateDepartment/${departmentData._id}`,departmentData)
    console.log(res)
    setedit(false)
    fetchDepartments()
    }
  catch(err){
      console.log(err)
  }
  }
  const handleEditClick = async (id) => {
   
    const res = await axios.get(
      `http://localhost:8080/department/getDepartment/${id._id}`
    );
    setDepartmentData(res.data.result);
    setedit(true);

    // setEditDialogOpen(true);
  };
  const handleView = async (data) => {
   
    // setActiveCategory(data);

    const res = await axios.get(
      `http://localhost:8080/roleapi/role/${data._id}`
    );

    setSubCategories(res.data.role);
    setEditDialogOpen(true);
  };
  const getSubcategories=async (data) => {
      try{
        editpopovers(true)
        console.log("Dfs")
        const res=await axios.get(`http://localhost:8080/roleapi/allroles/${data}`)
        console.log(res)
        setActiveCategory(res.data.result)
      }catch{
        console.log("error")
      }
    
  }
  const handleSucategoriesss=async(e)=>{
    const{name,value}=e.target
    setActiveCategory((prev)=>({...prev,[name]:value}))
  }
  const HandleSubcategories=async (e) => {
    e.preventDefault()
   
    try
    {
      const res=await axios.patch(`http://localhost:8080/roleapi/roles/${activeCategory._id}`,activeCategory)
      console.log(res)
    }
    catch(err){
      console.log(err)
    }
    
  }
  /* -------------------- EFFECTS -------------------- */
  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    if (departments.length && !selectedCategory) {
      setSelectedCategory(departments[0]._id);
      setRoleData((prev) => ({
        ...prev,
        parentCategory: departments[0]._id,
      }));
    }
  }, [departments]);

  /* -------------------- TABLE -------------------- */
const statusColors = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Suspended: "bg-gray-100 text-gray-700",
};

const columns = useMemo(
  () => [
    { accessorKey: "department_name", header: "Name" },
    { accessorKey: "description", header: "Description" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => {
        const value = getValue();
        return (
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              statusColors[value] || "bg-gray-100 text-gray-700"
            }`}
          >
            {value}
          </span>
        );
      },
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="space-x-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleView(row.original)}
          >
            View
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleEditClick(row.original)}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ],
  []
);
  const table = useReactTable({
    data: departments,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  /* -------------------- UI -------------------- */
  return (
    <Sidebar>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <Input
            placeholder="Search..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-64"
          />

          {/* ADD SUB CATEGORY */}
          <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>+ Add Sub Category</Button>
            </DialogTrigger>

            <DialogContent>
              <form onSubmit={handleRoleSubmit}>
                <DialogHeader>
                  <DialogTitle>Add Sub Category</DialogTitle>
                  <DialogDescription>
                    Create a sub category under category
                  </DialogDescription>
                </DialogHeader>

                {/* CATEGORY SELECT */}
                <Label className="mt-3">Category</Label>
                <Select
                  value={selectedCategory}
                  onValueChange={(v) => {
                    setSelectedCategory(v);
                    setRoleData((p) => ({ ...p, parentCategory: v }));
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>

                  <SelectContent>
                    {departments.length > 0 ? (
                      departments.map((item) => (
                        <SelectItem value={item._id} key={item._id}>
                          {item.department_name}
                        </SelectItem>
                      ))
                    ) : (
                      // IMPORTANT: value must exist & NOT disabled
                      <SelectItem value="__empty__" className="text-gray-400">
                        No categories found
                      </SelectItem>
                    )}
                    <div className="border-t my-2" />

                  
                    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full">
                          + Create Category
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <form
                          onSubmit={handleAddDepartment}
                          className="space-y-2"
                        >
                          <Label>Name</Label>
                          <Input
                            name="department_name"
                            onChange={handleDepartmentChange}
                            required
                          />
                          <Label>Description</Label>
                          <Input
                            name="description"
                            onChange={handleDepartmentChange}
                          />
                          <Button className="w-full mt-2">Save</Button>
                        </form>
                      </PopoverContent>
                    </Popover>
                  </SelectContent>
                </Select>

                {/* SUB CATEGORY */}
                <Label className="mt-3">Sub Category</Label>
                <Input name="role_name" onChange={handleRoleChange} required />

                <Label className="mt-3">Description</Label>
                <Input name="description" onChange={handleRoleChange} />

                <DialogFooter className="mt-4">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        {/* TABLE */}{" "}
        <div className="border rounded-md">
          {" "}
          <table className="w-full">
            {" "}
            <thead className="bg-gray-100">
              {" "}
              {table.getHeaderGroups().map((hg) => (
                <tr key={hg.id}>
                  {" "}
                  {hg.headers.map((h) => (
                    <th key={h.id} className="p-3 text-left">
                      {" "}
                      {flexRender(
                        h.column.columnDef.header,
                        h.getContext()
                      )}{" "}
                    </th>
                  ))}{" "}
                </tr>
              ))}{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-t">
                  {" "}
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-3">
                      {" "}
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}{" "}
                    </td>
                  ))}{" "}
                </tr>
              ))}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>
      </div>
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Sub-Categories</DialogTitle>
            <DialogDescription>List of all sub-categories</DialogDescription>
          </DialogHeader>

          {subCategories.length > 0 ? (
            <div className="space-y-2">
              {subCategories.map((item) => (
                <div
                  key={item._id}
                  className="border rounded-md p-3 flex justify-between items-center"
                >
                  <div className="flex justify-between w-full ">
                    <p className="font-medium mx-2">{item.role_name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <Popover open={editpopever} onOpenChange={seteditpopover}>
                      <PopoverTrigger asChild>
                        <Button onClick={()=>getSubcategories(item._id)}>
                         Edit
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <form
                          onSubmit={handleAddDepartment}
                          className="space-y-2"
                        >
                          <Label>Name</Label>
                          <Input
                            name="department_name"
                            onChange={handleDepartmentChange}
                            required
                        
                          />
                          <Label>Description</Label>
                          <Input
                            name="description"
                            onChange={handleDepartmentChange}
                          />
                          <Button className="w-full mt-2">Save</Button>
                        </form>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No sub-categories found</p>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
       <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Sub-Categories</DialogTitle>
          <DialogDescription>
            List of all sub-categories
          </DialogDescription>
        </DialogHeader>

        {subCategories.length > 0 ? (
          <div className="space-y-2">
            {subCategories.map((item) => (
              <div
                key={item._id}
                className="border rounded-md p-3 flex justify-between items-center"
              >
                <div className="flex justify-between w-full items-center gap-2">
                  <p className="font-medium">{item.role_name}</p>
                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>

                  {/* -------- POPOVER -------- */}
                  <Popover
                    open={openPopoverId === item._id}
                    onOpenChange={(open) =>
                      setOpenPopoverId(open ? item._id : null)
                    }
                  >
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        onClick={() => getSubcategories(item._id)}
                      >
                        Edit
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent
                      className="w-80"
                     
                    >
                      <form
                        onSubmit={HandleSubcategories}
                        className="space-y-2"
                      >
                        <Label>Name</Label>
                        <Input
                          name="role_name"
                          value={activeCategory.role_name }
                          onChange={handleSucategoriesss}
                          required
                        />

                        <Label>Description</Label>
                        <Input
                          name="description"
                          value={activeCategory.description 
}
                        
                          onChange={handleSucategoriesss}
                        />

                        <Button className="w-full mt-2">
                          Save
                        </Button>
                      </form>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No sub-categories found
          </p>
        )}

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setEditDialogOpen(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      <Dialog open={edit} onOpenChange={setedit}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit-Categories</DialogTitle>
            <DialogDescription>List of all sub-categories</DialogDescription>
          </DialogHeader>
          <DialogContent>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <Label>Name</Label>
              <Input
                name="department_name"
                value={departmentData.department_name || ""}
                required
                onChange={handleChanges}
              />
              <Label>Description</Label>
              <Input
                name="description"
                value={departmentData.description || ""}
                onChange={handleChanges}
              />
              <Button className="w-full mt-2">Save</Button>
            </form>
          </DialogContent>

          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sidebar>
  );
}
