"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  View,
} from "lucide-react";
import { Sidebar } from "../../components/sidebar";
import { Card } from "../../components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// --------------------
// Sample Data (30+)
// --------------------

// --------------------
// Columns
// --------------------
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


export const ViewEmployee = () => {
  const navigate=useNavigate()
  const columns = [
  {
    accessorKey: "id",
    header: "emp_id",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
     const colors = {
  Active: "bg-green-100 text-green-800 border-green-300",
  inactive: "bg-red-100 text-red-800 border-red-300",
};

      return (
        <Badge className={colors[status]} variant="outline">
          {status}
        </Badge>
      );
    },
  },

  {
    accessorKey: "email",
    header: "Emails",
  },
  {
    // accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    accessorKey:"name",
    header: "Employee_name",
  },
  {
    accessorKey: "department",
    header:"Department"
    
  },
   {
    id: "actions",
    header: "Actions",
    cell: ({row})=>{
      console.log(row)
      return (
       <Button
        
       className="cursor-pointer"
      
         onClick={()=>{navigate(`/admin/viewEmployee/${row.original
.id}`)}}
      ><View/>View/Edit</Button>
      )
    },
  },
  
];
  // const [data, setdata] = useState([] );
  const [globalFilter, setGlobalFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
 
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    globalFilterFn: "includesString",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Status Filter Logic
  useEffect(() => {
    if (statusFilter === "all") {
      table.getColumn("status")?.setFilterValue(undefined);
    } else {
      table.getColumn("status")?.setFilterValue(statusFilter);
    }
  }, [statusFilter]);

  return (

      <Card className="mx-3">
        <div className="p-3 space-y-4 w-full">
          {/* Filters */}
          <div className="flex gap-4">
            <Input
              placeholder="Search email..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="w-64"
            />

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((hg) => (
                  <TableRow key={hg.id}>
                    {hg.headers.map((header) => (
                      <TableHead key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>

            <div className="flex items-center justify-between px-2">
              <div className="flex-1 text-sm text-muted-foreground">
                {table.getFilteredRowModel().rows.length > 0 ? (
                  <>
                    Showing{" "}
                    {table.getState().pagination.pageIndex *
                      table.getState().pagination.pageSize +
                      1}{" "}
                    to{" "}
                    {Math.min(
                      (table.getState().pagination.pageIndex + 1) *
                        table.getState().pagination.pageSize,
                      table.getFilteredRowModel().rows.length
                    )}{" "}
                    of {table.getFilteredRowModel().rows.length} results
                  </>
                ) : (
                  "No results"
                )}
              </div>

              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">Rows per page</p>
                  <Select
                    value={`${table.getState().pagination.pageSize}`}
                    onValueChange={(value) => {
                      table.setPageSize(Number(value));
                    }}
                  >
                    <SelectTrigger className="h-8 w-[70px]">
                      <SelectValue
                        placeholder={table.getState().pagination.pageSize}
                      />
                    </SelectTrigger>
                    <SelectContent side="top">
                      {[10, 20, 30, 40, 50].map((pageSize) => (
                        <SelectItem key={pageSize} value={`${pageSize}`}>
                          {pageSize}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                  Page {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount()}
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    className="hidden h-8 w-8 p-0 lg:flex"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <span className="sr-only">Go to first page</span>
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <span className="sr-only">Go to previous page</span>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    <span className="sr-only">Go to next page</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="hidden h-8 w-8 p-0 lg:flex"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                  >
                    <span className="sr-only">Go to last page</span>
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
  
  );
};
