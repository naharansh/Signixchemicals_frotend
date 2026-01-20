import React, { useState, useEffect, useMemo } from "react";
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
import { EyeIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import axios from "axios";
import { Badge } from "../../components/ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

// Lightweight badge for status
const StatusBadge = React.memo(({ status }) => (
  <Badge
    className={
      status === "Pending"
        ? "bg-yellow-500"
        : status === "Approved"
        ? "bg-green-500"
        : "bg-red-500"
    }
  >
    {status}
  </Badge>
));

const CompanyList = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
const [pageSize, setPageSize] = useState(5); // default 5 rows per page


  // Mock data fallback
  const datas = useMemo(
    () =>[
  { id: 1, companyName: "Alpha Tech Solutions", email: "contact@alphatech.com", phone: "+91-9876543210", country: "India", status: "Pending", createdAt: "2025-12-01" },
  { id: 2, companyName: "BrightWave Systems", email: "info@brightwave.com", phone: "+1-4155552671", country: "USA", status: "Approved", createdAt: "2025-11-21" },
  { id: 3, companyName: "CloudNova Pvt Ltd", email: "support@cloudnova.in", phone: "+91-9123456789", country: "India", status: "Rejected", createdAt: "2025-10-15" },
  { id: 4, companyName: "DeltaCore Labs", email: "hello@deltacore.io", phone: "+44-7123456789", country: "UK", status: "Pending", createdAt: "2025-12-05" },
  { id: 5, companyName: "EcoSphere Ltd", email: "contact@ecosphere.com", phone: "+65-91234567", country: "Singapore", status: "Approved", createdAt: "2025-09-30" },
  { id: 6, companyName: "FinEdge Corp", email: "sales@finedge.com", phone: "+1-6285558923", country: "USA", status: "Pending", createdAt: "2025-12-10" },
  { id: 7, companyName: "GreenByte Technologies", email: "info@greenbyte.in", phone: "+91-9988776655", country: "India", status: "Approved", createdAt: "2025-08-18" },
  { id: 8, companyName: "HyperLoop Digital", email: "team@hyperloop.io", phone: "+44-7345678912", country: "UK", status: "Pending", createdAt: "2025-11-02" },
  { id: 9, companyName: "InnoSpark Solutions", email: "contact@innospark.com", phone: "+1-5105553321", country: "USA", status: "Rejected", createdAt: "2025-07-25" },
  { id: 10, companyName: "JetStream Analytics", email: "hello@jetstream.ai", phone: "+65-81234567", country: "Singapore", status: "Approved", createdAt: "2025-09-12" },
  { id: 11, companyName: "Krypton Networks", email: "support@krypton.net", phone: "+91-9090909090", country: "India", status: "Pending", createdAt: "2025-12-12" },
  { id: 12, companyName: "LuminaSoft", email: "info@luminasoft.com", phone: "+1-2135557788", country: "USA", status: "Approved", createdAt: "2025-06-10" },
  { id: 13, companyName: "MetaWorks Studio", email: "contact@metaworks.io", phone: "+44-7456789012", country: "UK", status: "Pending", createdAt: "2025-11-28" },
  { id: 14, companyName: "NexaGlobal Pvt Ltd", email: "admin@nexaglobal.in", phone: "+91-8899776655", country: "India", status: "Rejected", createdAt: "2025-05-05" },
  { id: 15, companyName: "OptiCore Solutions", email: "hello@opticore.com", phone: "+1-3475556677", country: "USA", status: "Pending", createdAt: "2025-12-03" },
  { id: 16, companyName: "PixelCraft Media", email: "info@pixelcraft.in", phone: "+91-7766554433", country: "India", status: "Approved", createdAt: "2025-07-19" },
  { id: 17, companyName: "QuantumLeap AI", email: "contact@quantumleap.ai", phone: "+65-93456789", country: "Singapore", status: "Pending", createdAt: "2025-11-14" },
  { id: 18, companyName: "RocketScale Ventures", email: "team@rocketscale.com", phone: "+1-6695559900", country: "USA", status: "Approved", createdAt: "2025-04-22" },
  { id: 19, companyName: "SkyNet Innovations", email: "support@skynet.io", phone: "+44-7012345678", country: "UK", status: "Pending", createdAt: "2025-12-08" },
  { id: 20, companyName: "TechOrbit Systems", email: "info@techorbit.com", phone: "+91-9555443322", country: "India", status: "Approved", createdAt: "2025-03-30" },
  { id: 21, companyName: "UltraSoft Labs", email: "contact@ultrasoft.com", phone: "+1-4155557788", country: "USA", status: "Rejected", createdAt: "2025-06-22" }
    ],
    []
  );

  // Memoized columns
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => <p className="break-all">{row.id}</p>,
      },
      { accessorKey: "companyName", header: "Company Name" },
      { accessorKey: "email", header: "Industry" },
      { accessorKey: "phone", header: "HeadQuarters" },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
      },
      {
        header: "Actions",
        cell: ({ row }) => (
          <button
            type="button"
            className="h-8 w-8 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
            title="View"
            onClick={() => {
              setSelectedCompany(row.original);
              setOpen(true);
            }}
          >
            <EyeIcon className="h-4 w-4" />
          </button>
        ),
      },
    ],
    []
  );

  // Memoize table data
  const tableData = useMemo(() => (data.length ? data : datas), [data, datas]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination: { pageIndex, pageSize } },
  onPaginationChange: (updater) => {
    const next = typeof updater === "function" ? updater({ pageIndex, pageSize }) : updater;
    setPageIndex(next.pageIndex);
    setPageSize(next.pageSize);
  },
  });

  // Fetch API data once
  useEffect(() => {
    axios
      .get("http://localhost:8080/company/getAllEmployees")
      .then((res) => {
        if (res?.data?.employees) setData(res.data.employees);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Sidebar>
        <Card className="w-full rounded-none border border-none">
          <CardHeader>
            <h4 className="text-lg font-semibold">All Companies</h4>
          </CardHeader>

          <CardContent className="p-0">
            <div className="relative w-full overflow-x-auto">
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
                  {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="break-all whitespace-normal"
                        >
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

         <div className="flex items-center gap-2 mt-2">
  <Button
    variant="outline"
    size="sm"
    onClick={() => table.previousPage()}
    disabled={!table.getCanPreviousPage()}
  >
    Previous
  </Button>
  <Button
    variant="outline"
    size="sm"
    onClick={() => table.nextPage()}
    disabled={!table.getCanNextPage()}
  >
    Next
  </Button>

  <span className="mx-2 text-sm">
    Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
    <strong>{table.getPageCount()}</strong>
  </span>

  <Select
    value={pageSize.toString()}
    onValueChange={(value) => setPageSize(Number(value))}
  >
    <SelectTrigger className="w-20">
      <SelectValue placeholder="Rows" />
    </SelectTrigger>
    <SelectContent>
      {[5, 10, 20, 30].map((size) => (
        <SelectItem key={size} value={size.toString()}>
          {size}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>

          </CardContent>
        </Card>
      </Sidebar>

      {/* Dialog */}
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {selectedCompany?.companyName || "View Company"}
              </DialogTitle>
              <DialogDescription>
                Details for {selectedCompany?.companyName}
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <div>
                <Label>Email</Label>
                <p>{selectedCompany?.email}</p>
              </div>
              <div>
                <Label>Phone</Label>
                <p>{selectedCompany?.phone}</p>
              </div>
              <div>
                <Label>Country</Label>
                <p>{selectedCompany?.country}</p>
              </div>
              <div>
                <Label>Status</Label>
                <StatusBadge status={selectedCompany?.status} />
              </div>
           
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default CompanyList;
