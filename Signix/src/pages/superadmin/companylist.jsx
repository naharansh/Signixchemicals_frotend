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
import { Card, CardHeader } from "../../components/ui/card";
const CompanyList = () => {
  const [data, setData] = useState([
    {
      id: "inv_001",
      amount: 1250.0,
      status: "success",
      email: "emma.wilson@example.com",
    },
    {
      id: "inv_002",
      amount: 850.5,
      status: "pending",
      email: "liam.brown@example.com",
    },
    {
      id: "inv_003",
      amount: 2100.75,
      status: "success",
      email: "olivia.jones@example.com",
    },
    {
      id: "inv_004",
      amount: 450.0,
      status: "failed",
      email: "noah.smith@example.com",
    },
    {
      id: "inv_005",
      amount: 3200.25,
      status: "processing",
      email: "ava.davis@example.com",
    },
    {
      id: "inv_006",
      amount: 675.8,
      status: "success",
      email: "sophia.martinez@example.com",
    },
    {
      id: "inv_007",
      amount: 1999.99,
      status: "pending",
      email: "jackson.garcia@example.com",
    },
    {
      id: "inv_008",
      amount: 120.5,
      status: "success",
      email: "isabella.lee@example.com",
    },
    {
      id: "inv_009",
      amount: 5500.0,
      status: "success",
      email: "lucas.hernandez@example.com",
    },
    {
      id: "inv_010",
      amount: 325.75,
      status: "failed",
      email: "mia.clark@example.com",
    },
    {
      id: "inv_011",
      amount: 1800.0,
      status: "processing",
      email: "ethan.lewis@example.com",
    },
    {
      id: "inv_012",
      amount: 950.3,
      status: "success",
      email: "amelia.walker@example.com",
    },
    {
      id: "inv_013",
      amount: 2750.6,
      status: "pending",
      email: "alexander.hall@example.com",
    },
    {
      id: "inv_014",
      amount: 400.0,
      status: "success",
      email: "charlotte.allen@example.com",
    },
    {
      id: "inv_015",
      amount: 890.25,
      status: "failed",
      email: "daniel.young@example.com",
    },
    {
      id: "inv_016",
      amount: 1550.5,
      status: "success",
      email: "harper.king@example.com",
    },
    {
      id: "inv_017",
      amount: 7200.0,
      status: "processing",
      email: "evelyn.wright@example.com",
    },
    {
      id: "inv_018",
      amount: 310.8,
      status: "success",
      email: "benjamin.scott@example.com",
    },
    {
      id: "inv_019",
      amount: 1400.45,
      status: "pending",
      email: "abigail.green@example.com",
    },
    {
      id: "inv_020",
      amount: 650.0,
      status: "success",
      email: "logan.adams@example.com",
    },
  ]);

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Company Name",
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

  return (
    <Sidebar>
      <Card>
        <CardHeader>
          <h4>All Companines</h4>
        </CardHeader>
        <div className="w-full bg-gray-100">
          <Table>
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
                    <TableCell key={cell.id}>
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
      </Card>
    </Sidebar>
  );
};

export default CompanyList;
