import { useMemo, useState } from "react";
import { Sidebar } from "../../components/sidebar";
import { Card, CardContent, CardFooter } from "../../components/ui/card";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {    
  Select,
  SelectContent,
 
  SelectItem,

  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

export const AddOrder = () => {
    const [handle,sethandle]=useState({
        Expiration:'',
        Quotation_Template:'',
        Recurring_Plan:'',
        Price_List:'',
        Payment_Terms:'',
        Customer:'',
        quantity:'',
        unitprice:'',
        discountPct:'',
        product:''


    })
  const PRODUCTS = [
    {
      id: "prod_web_dev",
      name: "Website Development Customize",
      unitPrice: 10000,
      taxRate: 0.18,
    },
    {
      id: "prod_3d_course",
      name: "3D Animation Course",
      unitPrice: 15000,
      taxRate: 0.18,
    },
    {
      id: "prod_3d_blender",
      name: "3D Animation Course (Blender Software)",
      unitPrice: 18000,
      taxRate: 0.18,
    },
    {
      id: "prod_3d_cgi",
      name: "3D CGI Sample",
      unitPrice: 5000,
      taxRate: 0.18,
    },
    {
      id: "prod_3d_model",
      name: "3D Product Model Customize",
      unitPrice: 12000,
      taxRate: 0.18,
    },
    {
      id: "prod_3d_customize",
      name: "3D Animation Customize",
      unitPrice: 22000,
      taxRate: 0.18,
    },
    {
      id: "prod_a_plus",
      name: "A+ Content Creation",
      unitPrice: 8000,
      taxRate: 0.18,
    },
    { id: "prod_amc", name: "AMC Customize", unitPrice: 7000, taxRate: 0.18 },
    {
      id: "prod_airtel",
      name: "Airtel BlackPlan - 10101018310274",
      unitPrice: 1010,
      taxRate: 0.18,
    },
  ];

  const INR = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  function computeLine(line) {
    const qty = Number(line.qty) || 0;
    const price = Number(line.unitPrice) || 0;
    const discountPct = Number(line.discountPct) || 0;
    const subtotal = qty * price;
    const discountAmount = subtotal * (discountPct / 100);
    const taxable = subtotal - discountAmount;
    const tax = taxable * (line.taxRate || 0);
    const total = taxable + tax;
    const margin = taxable;
    return { subtotal, discountAmount, taxable, tax, total, margin };
  }
  const [lines, setLines] = useState([
    {
      id: crypto.randomUUID(),
      productId: "prod_web_dev",
      name: "Website Development Customize",
      qty: 1,
      unitPrice: 10000,
      discountPct: 0,
      taxRate: 0.18,
    },
  ]);
const handleForms=(name,value)=>{
    sethandle((prev)=>({...prev,[name]:value}))
}
  const updateLine = (id, patch,e) =>
{   
    

        setLines((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
}

  const addLine = () =>
    setLines((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        productId: "",
        name: "",
        qty: 1,
        unitPrice: 0,
        discountPct: 0,
        taxRate: 0.18,
      },
    ]);

  const removeLine = (id) =>
    setLines((prev) => prev.filter((l) => l.id !== id));

  const onSelectProduct = (lineId,name, productId) => {
    console.log(productId)
       handleForms(name,productId)

    const prod = PRODUCTS.find((p) => p.id === productId);
    if (!prod) return;
    updateLine(lineId, {
      productId,
      name: prod.name,
      unitPrice: prod.unitPrice,
      taxRate: prod.taxRate ?? 0,
    });
  };

  const totals = useMemo(() => {
    const computed = lines.map((l) => computeLine(l));
    const untaxed = computed.reduce((s, c) => s + c.taxable, 0);
    const igst = computed.reduce((s, c) => s + c.tax, 0);
    const total = computed.reduce((s, c) => s + c.total, 0);
    const margin = computed.reduce((s, c) => s + c.margin, 0);
    const marginPct = untaxed ? (margin / untaxed) * 100 : 0;
    return { untaxed, igst, total, margin, marginPct };
  }, [lines]);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    console.log(value)
    sethandle((prev)=>({...prev,[name]:value}))
  }
  const Submita=(e)=>{
    e.preventDefault()
    console.log(handle)
  }
  const  handleSelectChange=(name,value)=>{
    sethandle((prev)=>({...prev,[name]:value}))
  }
  return (
    <>
      <Sidebar>
        <div className="w-full p-6 relative">
          <div className="sticky top-0 z-50 bg-white border-b">
            <div className="flex items-center justify-between px-6 py-4">
              
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Add Order
                </h1>
                <p className="text-sm text-muted-foreground">
                  Create a new customer order
                </p>
              </div>

           
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 shadow-sm"
                  onClick={Submita}
                >
                  Submit Order
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6"> 
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <form >
         
                <Card className="rounded-none  shadow-sm py-1 mb-3">
                  <CardContent className="p-6 space-y-6 ">
                    <div className="border-b pb-4">
                      <h2 className="text-lg font-semibold">Order Details</h2>
                      <p className="text-sm text-muted-foreground">
                        Enter customer and pricing information
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        "Customer",
                        "Expiration",
                        "Quotation_Template",
                        "Recurring_Plan",
                        "Price_List",
                        "Payment_Terms",
                      ].map((label, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <Label className="w-40 text-sm text-muted-foreground">
                            {label}
                          </Label>
                          {label === "Customer" ? (
                            <Select  onValueChange={(value) =>
                        handleSelectChange("Customer", value)
                      }>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select customer" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="c1">Apple</SelectItem>
                                <SelectItem value="c2">Banana</SelectItem>
                              </SelectContent>
                            </Select>
                          ) : (
                            <Input
                              type={label === "Expiration" ? "date" : "text"}
                              className="h-10"
                              name={label}
                              onChange={handleChange}
                          
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="rounded-none  shadow-sm py-2 ">
                  <div className="px-4 py-3 flex justify-between items-center border-b">
                    <h3 className="text-sm font-semibold">Order Lines</h3>
                    <Button size="sm" onClick={addLine}>
                      + Add Line
                    </Button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead className="bg-muted text-muted-foreground">
                        <tr>
                          <th className="px-4 py-2 text-left">Product</th>
                          <th className="px-4 py-2 text-right">Qty</th>
                          <th className="px-4 py-2 text-right">Unit Price</th>
                          <th className="px-4 py-2 text-center">Tax</th>
                          <th className="px-4 py-2 text-right">Disc %</th>
                          <th className="px-4 py-2 text-right">Amount</th>
                          <th className="px-4 py-2"></th>
                        </tr>
                      </thead>

                      <tbody>
                        {lines.map((line) => {
                          const calc = computeLine(line);
                          return (
                            <tr
                              key={line.id}
                              className="border-t hover:bg-muted/30 transition"
                            >
                              <td className="px-4 py-2">
                                <select
                                  className="w-full h-9 rounded-md border px-2"
                                  value={line.productId}
                                  onChange={(e) =>
                                    onSelectProduct(line.id,e.target.name, e.target.value)
                                  }
                                  name="product"
                                >
                                  <option value="">Search product…</option>
                                  {PRODUCTS.map((p) => (
                                    <option key={p.id} value={p.id}>
                                      {p.name}
                                    </option>
                                  ))}
                                </select>
                              </td>

                              <td className="px-4 py-2 text-right">
                                <Input
                                  type="number"
                                  value={line.qty}
                                  className="w-20 h-9 text-right"
                                  name="quantity"
                                  onChange={(e) =>
                                    updateLine(line.id, {
                                      qty: Number(e.target.value),
                                    },e)
                                  }
                                />
                              </td>

                              <td className="px-4 py-2 text-right">
                                <Input
                                  type="number"
                                  value={line.unitPrice}
                                  className="w-24 h-9 text-right"
                                  name="unitprice"
                                  onChange={(e) =>
                                    updateLine(line.id, {
                                      unitPrice: Number(e.target.value),
                                    },e)
                                  }
                                />
                              </td>

                              <td className="px-4 py-2 text-center text-xs">
                                {Math.round(line.taxRate * 100)}%
                              </td>

                              <td className="px-4 py-2 text-right">
                                <Input
                                  type="number"
                                  value={line.discountPct}
                                  className="w-16 h-9 text-right"
                                  name="discountPct"
                                  onChange={(e) =>
                                    updateLine(line.id, {
                                      discountPct: Number(e.target.value),
                                    },e)
                                  }
                                />
                              </td>

                              <td className="px-4 py-2 text-right font-medium">
                                {INR.format(calc.total)}
                              </td>

                              <td className="px-4 py-2 text-right">
                                <button
                                  onClick={() => removeLine(line.id)}
                                  className="text-xs text-red-600 hover:underline"
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <CardFooter className="mt-4 flex flex-col items-end">
                      <div className="w-full max-w-xs space-y-2 text-sm">
                        <div className="flex justify-between items-center text-muted-foreground">
                          <span>Untaxed Amount</span>
                          <span className="font-medium text-gray-900">
                            ₹10,000
                          </span>
                        </div>

                        <div className="flex justify-between items-center text-muted-foreground">
                          <span>IGST (18%)</span>
                          <span className="font-medium text-gray-900">
                            ₹1,800
                          </span>
                        </div>

                        <Separator className="my-2" />

                        <div className="flex justify-between items-center text-base font-semibold">
                          <span>Total</span>
                          <span className="text-lg text-gray-900">₹11,800</span>
                        </div>
                      </div>
                    </CardFooter>
                  </div>
                </Card>
              </form>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};
