import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Sidebar } from "../../components/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { useEffect } from "react";
import axios from "axios";
const CompanyList = () => {
  const [data, setData] = useState([
    
  ]);

  const columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: ({ row }) => (
    <div className="max-w-[220px] ">
      <p class="break-all">{row.original._id}</p>
    </div>
  ),
    },
    {
      accessorKey: "companyName",
      header: "Company Name",
    },
    {
      accessorKey:"password",
      header:'Password'
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
useEffect(()=>{
  axios.get('http://localhost:8080/company/getAllEmployees').then((res)=>{
      console.log(res.data)
      if(res)
      {
        setData(res.data.employees)
      }
  })
},[])
  return (
    <Sidebar>
    <Card className="w-full">
  <CardHeader>
    <h4 className="text-lg font-semibold">All Companies</h4>
  </CardHeader>

  <CardContent className="p-0">
    <div className=" relative w-full overflow-x-auto">
      <Table  className="min-w-[1000px]">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
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
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="break-all whitespace-normal">
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

    {/* Pagination */}
    <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
      <div className="text-sm text-muted-foreground">
        {table.getFilteredRowModel().rows.length > 0
          ? `Showing ${
              table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
              1
            } to ${Math.min(
              (table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )} of ${table.getFilteredRowModel().rows.length} results`
          : "No results"}
      </div>

      {/* pagination buttons unchanged */}
    </div>
  </CardContent>
</Card>

    </Sidebar>
  );
};

export default CompanyList;
