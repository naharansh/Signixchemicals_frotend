import { Sidebar } from "../../components/sidebar";
import { Card, CardContent } from "../../components/ui/card";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
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
import { useState, useMemo } from "react";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { ChevronLeft, ChevronRight, EyeIcon } from "lucide-react";

export const OrderList = () => {
  /* -------------------- STATE -------------------- */
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const [globalFilter, setGlobalFilter] = useState("");

  /* -------------------- DATA (MEMOIZED) -------------------- */
  const data = useMemo(
    () => [
      {
        id: "ORD-001",
        lead_id: "LEAD-101",
        order_number: "ORD2025-0001",
        order_status: "Pending",
        total_amount: 12000,
        payment_status: "Pending",
        created_by: "EMP-01",
        created_at: "2025-01-01 10:15:00",
      },
      {
        id: "ORD-002",
        lead_id: "LEAD-102",
        order_number: "ORD2025-0002",
        order_status: "Processing",
        total_amount: 18500,
        payment_status: "Paid",
        created_by: "EMP-02",
        created_at: "2025-01-02 11:30:00",
      },
      {
        id: "ORD-003",
        lead_id: "LEAD-103",
        order_number: "ORD2025-0003",
        order_status: "Dispatched",
        total_amount: 7600,
        payment_status: "Paid",
        created_by: "EMP-03",
        created_at: "2025-01-03 09:45:00",
      },
      {
        id: "ORD-004",
        lead_id: "LEAD-104",
        order_number: "ORD2025-0004",
        order_status: "Delivered",
        total_amount: 24300,
        payment_status: "Paid",
        created_by: "EMP-01",
        created_at: "2025-01-04 16:20:00",
      },
      {
        id: "ORD-005",
        lead_id: "LEAD-105",
        order_number: "ORD2025-0005",
        order_status: "Pending",
        total_amount: 9800,
        payment_status: "Partial",
        created_by: "EMP-02",
        created_at: "2025-01-05 13:10:00",
      },
        {
        id: "ORD-001",
        lead_id: "LEAD-101",
        order_number: "ORD2025-0001",
        order_status: "Pending",
        total_amount: 12000,
        payment_status: "Pending",
        created_by: "EMP-01",
        created_at: "2025-01-01 10:15:00",
      },
      {
        id: "ORD-002",
        lead_id: "LEAD-102",
        order_number: "ORD2025-0002",
        order_status: "Processing",
        total_amount: 18500,
        payment_status: "Paid",
        created_by: "EMP-02",
        created_at: "2025-01-02 11:30:00",
      },
      {
        id: "ORD-003",
        lead_id: "LEAD-103",
        order_number: "ORD2025-0003",
        order_status: "Dispatched",
        total_amount: 7600,
        payment_status: "Paid",
        created_by: "EMP-03",
        created_at: "2025-01-03 09:45:00",
      },
      {
        id: "ORD-004",
        lead_id: "LEAD-104",
        order_number: "ORD2025-0004",
        order_status: "Delivered",
        total_amount: 24300,
        payment_status: "Paid",
        created_by: "EMP-01",
        created_at: "2025-01-04 16:20:00",
      },
      {
        id: "ORD-005",
        lead_id: "LEAD-105",
        order_number: "ORD2025-0005",
        order_status: "Pending",
        total_amount: 9800,
        payment_status: "Partial",
        created_by: "EMP-02",
        created_at: "2025-01-05 13:10:00",
      },
        {
        id: "ORD-001",
        lead_id: "LEAD-101",
        order_number: "ORD2025-0001",
        order_status: "Pending",
        total_amount: 12000,
        payment_status: "Pending",
        created_by: "EMP-01",
        created_at: "2025-01-01 10:15:00",
      },
      {
        id: "ORD-002",
        lead_id: "LEAD-102",
        order_number: "ORD2025-0002",
        order_status: "Processing",
        total_amount: 18500,
        payment_status: "Paid",
        created_by: "EMP-02",
        created_at: "2025-01-02 11:30:00",
      },
      {
        id: "ORD-003",
        lead_id: "LEAD-103",
        order_number: "ORD2025-0003",
        order_status: "Dispatched",
        total_amount: 7600,
        payment_status: "Paid",
        created_by: "EMP-03",
        created_at: "2025-01-03 09:45:00",
      },
      {
        id: "ORD-004",
        lead_id: "LEAD-104",
        order_number: "ORD2025-0004",
        order_status: "Delivered",
        total_amount: 24300,
        payment_status: "Paid",
        created_by: "EMP-01",
        created_at: "2025-01-04 16:20:00",
      },
      {
        id: "ORD-005",
        lead_id: "LEAD-105",
        order_number: "ORD2025-0005",
        order_status: "Pending",
        total_amount: 9800,
        payment_status: "Partial",
        created_by: "EMP-02",
        created_at: "2025-01-05 13:10:00",
      },
    ],
    []
  );

  /* -------------------- COLUMNS (MEMOIZED) -------------------- */
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "order_number",
        header: "Order Number",
      },
      {
        accessorKey: "lead_id",
        header: "Lead By",
      },
      {
        accessorKey: "total_amount",
        header: "Total Amount",
        enableGlobalFilter: false,
        cell: ({ row }) => `₹${row.getValue("total_amount")}`,
      },
      {
        accessorKey: "payment_status",
        header: "Status",
        cell: ({ row }) => {
          const status = row.getValue("payment_status");

          const statusStyles = {
            Paid: "bg-green-100 text-green-700 border border-green-300",
            Pending: "bg-yellow-100 text-yellow-700 border border-yellow-300",
            Partial: "bg-blue-100 text-blue-700 border border-blue-300",
          };

          return (
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                statusStyles[status] || ""
              }`}
            >
              {status}
            </span>
          );
        },
      },
      {
        accessorKey: "created_by",
        header: "Created By",
      },
      {
        header: "Action",
        enableGlobalFilter: false,
        cell: () => (
         <Button
  variant="ghost"
  size="icon"
  className="
    h-8 w-8
    text-gray-500
    hover:text-blue-600
    hover:bg-blue-50
    transition
  "
>
  <EyeIcon className="h-4 w-4 transition-transform hover:scale-110" />
</Button>

        ),
      },
    ],
    []
  );

  /* -------------------- TABLE -------------------- */
  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      globalFilter,
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  
  return (
    <Sidebar>
      <Card className="rounded-none border border-none  shadow-none  px-1">
        <CardContent className="py-4">
          {/* SEARCH */}
          <input
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search orders..."
            className="mb-4 h-9 w-64 rounded border px-3 text-sm"
          />

          {/* TABLE */}
          <Table className="min-w-[1000px]">
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
                    className="text-center py-6"
                  >
                    No results found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* PAGINATION */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>

            <div className="flex items-center space-x-2">
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) =>
                  table.setPageSize(Number(value))
                }
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[10, 20, 30, 40, 50].map((size) => (
                    <SelectItem key={size} value={`${size}`}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Sidebar>
  );
};
