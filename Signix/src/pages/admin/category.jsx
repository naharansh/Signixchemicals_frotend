import { useMemo, useState } from "react";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
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
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";

export const Category = () => {
  const [filters, setFilter] = useState("");

  const invoices = [
    {
      category_id: 101,
      category_name: "Electronics",
    },
    {
      category_id: 102,
      category_name: "Home Appliances",
    },
    {
      category_id: 103,
      category_name: "Fashion",
    },
    {
      category_id: 104,
      category_name: "Groceries",
    },
    {
      category_id: 105,
      category_name: "Books",
    },
    {
      category_id: 106,
      category_name: "Sports",
    },
    {
      category_id: 107,
      category_name: "Toys",
    },
  ];
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const searchFilter = useMemo(() => {
    if (!filters.trim()) return invoices;

    return invoices.filter((cate) =>
      cate.category_name.toLowerCase().includes(filters.toLowerCase())
    );
  }, [filters, invoices]);

  return (
    <Sidebar>
      <div className="w-full px-4 my-4">
        {/* 🔹 Header */}
        <div className="flex justify-between items-center mb-4">
          <Input
            type="search"
            placeholder="Search category..."
            value={filters}
            onChange={(e) => setFilter(e.target.value)}
            className="w-72"
          />
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  + Add Sub Category
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Category</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <Label className="mt-3">Category</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="__empty__" className="text-gray-400">
                        No categories found
                      </SelectItem>

                      <div className="border-t my-2" />

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full">
                            + Create Category
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <form className="space-y-2">
                            <Label>Name</Label>
                            <Input name="department_name" required />
                            <Label>Description</Label>
                            <Input name="description" />
                            <Button className="w-full mt-2">Save</Button>
                          </form>
                        </PopoverContent>
                      </Popover>
                    </SelectContent>
                  </Select>

                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Name</Label>
                    <Input id="name-1" name="name" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Username</Label>
                    <Input
                      id="username-1"
                      name="username"
                      defaultValue="@peduarte"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>

        {/* 🔹 Table Card */}
        <Card className="rounded-none shadow-none">
          <CardContent>
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead>Category ID</TableHead>
                  <TableHead>Category Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {searchFilter.length > 0 ? (
                  searchFilter.map((data) => (
                    <TableRow key={data.category_id}>
                      <TableCell className="font-medium">
                        {data.category_id}
                      </TableCell>
                      <TableCell>{data.category_name}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                          Active
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center">
                          <Button
                            size="sm"
                            variant="outline"
                            className="mx-4"
                            onClick={() => {
                              setEditDialogOpen(true);
                            }}
                          >
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setEditDialogOpen(true);
                            }}
                          >
                            Edit
                          </Button> 
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-gray-500 py-6"
                    >
                      No categories found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>All Products</DialogTitle>
            <DialogDescription>List of all Products</DialogDescription>
          </DialogHeader>

          {/* {subCategories.length > 0 ? (
            <div className="space-y-2">
              {subCategories.map((item) => (
                <div
                  key={item._id}
                  className="border rounded-md p-3 flex justify-between items-center"
                >
                  <div className="flex justify-between w-full ">
                    <p className="font-medium mx-2">{item.role_name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                   
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No sub-categories found</p>
          )} */}

          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sidebar>
  );
};
