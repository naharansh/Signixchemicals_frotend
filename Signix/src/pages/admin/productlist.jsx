import { PlusCircleIcon, SearchCheckIcon } from "lucide-react";
import { Sidebar } from "../../components/sidebar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { useEffect, useMemo, useState } from "react";

export const ProductList = () => {
  const data = [
    {
      id: 1,
      category_id: 1,
      product_name: "Laptop Dell Inspiron 15",
      price: 55000.0,
      gst: 18.0,
      stock: 25,
      status: "Active",
      created_at: "2026-01-06T10:30:00",
    },
    {
      id: 2,
      category_id: 1,
      product_name: "HP Wireless Mouse",
      price: 799.0,
      gst: 18.0,
      stock: 120,
      status: "Active",
      created_at: "2026-01-06T10:35:00",
    },
    {
      id: 3,
      category_id: 2,
      product_name: "Samsung Galaxy S23",
      price: 74999.0,
      gst: 18.0,
      stock: 15,
      status: "Active",
      created_at: "2026-01-06T10:40:00",
    },
    {
      id: 4,
      category_id: 2,
      product_name: "Apple AirPods Pro",
      price: 24999.0,
      gst: 18.0,
      stock: 30,
      status: "Inactive",
      created_at: "2026-01-06T10:45:00",
    },
    {
      id: 5,
      category_id: 3,
      product_name: "Wooden Office Chair",
      price: 8999.0,
      gst: 12.0,
      stock: 10,
      status: "Active",
      created_at: "2026-01-06T10:50:00",
    },
  ];
  const [filter, setFilter] = useState("");

  const filteredData = useMemo(() => {
    const result = data.filter((product) =>
      product.product_name.toLowerCase().includes(filter.toLowerCase())
    );
    if (result.length === 0) {
      return (
        <>
          <div>product not found</div>
        </>
      );
    }

    return result;
  }, [filter, data]);

  return (
    <>
      <Sidebar>
        <div className="w-full px-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 my-5 px-4 py-3 rounded-lg  bg-background">
            <div className="relative w-full sm:w-1/3">
              <SearchCheckIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10"
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>

            <Button className="flex items-center gap-2 self-end sm:self-auto">
              <PlusCircleIcon className="h-4 w-4" />
              Add New Product
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
            {(filteredData.length ? filteredData : data).map(
              (product, index) => (
                <Card
                  key={index}
                  className="
          group
          rounded-none
          border border-none
          bg-background
          hover:shadow-lg
          transition
          cursor-pointer
          my-3
          py-4
        "
                >
                  <CardContent className="p-2 ">
                    {/* HEADER */}
                    <div className="flex justify-between items-start">
                      <h2 className="text-base font-semibold leading-tight ">
                        {product.product_name}
                      </h2>

                      <span className="text-sm font-bold text-gray-900">
                        ${product.price}
                      </span>
                    </div>

                    {/* META */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-muted-foreground">
                        Stock: {product.stock}
                      </span>

                      <Badge
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          product.status === "Active"
                            ? "bg-green-100 text-green-700 border border-green-300"
                            : "bg-red-100 text-red-700 border border-red-300"
                        }`}
                      >
                        {product.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </Sidebar>
    </>
  );
};
