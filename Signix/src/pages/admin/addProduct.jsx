import { Sidebar } from "../../components/sidebar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Separator } from "../../components/ui/separator";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Badge } from "../../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
export const AddProducts = () => {
  return (
    <>
      <Sidebar>
        <div className="w-full  px-4">
          <div className="grid grid-cols-12 gap-6">
           
            <div className="col-span-12 lg:col-span-8">
           
              <Card className="border rounded-xl shadow-sm">
                <CardContent className="p-6 space-y-6">
                
                  <div className="border-b pb-3">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Product Details
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Enter basic information about your product
                    </p>
                  </div>

                  <form className="space-y-6">
                
                    <div className="space-y-2">
                      <Label htmlFor="product_name">Product Name</Label>
                      <Input
                        id="product_name"
                        type="text"
                        placeholder="e.g. Premium Subscription"
                        className="w-full"
                      />
                    </div>

                 
                    <div className="space-y-2">
                      <Label>Product Usage</Label>
                      <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                          <Checkbox id="sales" />
                          <Label htmlFor="sales">Sales</Label>
                        </div>

                        <div className="flex items-center gap-2">
                          <Checkbox id="expenses" defaultChecked />
                          <Label htmlFor="expenses">Expenses</Label>
                        </div>

                        <div className="flex items-center gap-2">
                          <Checkbox id="purchase" />
                          <Label htmlFor="purchase">Purchase</Label>
                        </div>
                      </div>
                    </div>

                    <Tabs defaultValue="general" className="w-full">
                      <TabsList className="bg-muted p-1 rounded-lg">
                        <TabsTrigger value="general">
                          General Information
                        </TabsTrigger>
                        <TabsTrigger value="sales">Sales</TabsTrigger>
                      </TabsList>

                      <Separator className="my-4" />

                 
                      <TabsContent value="general" className="space-y-5">
                     
                        <div className="space-y-2">
                          <Label>Product Type</Label>
                          <RadioGroup
                            defaultValue="option-one"
                            className="flex flex-wrap gap-6"
                          >
                            <div className="flex items-center gap-2">
                              <RadioGroupItem
                                value="option-one"
                                id="option-one"
                              />
                              <Label htmlFor="option-one">Option One</Label>
                            </div>

                            <div className="flex items-center gap-2">
                              <RadioGroupItem
                                value="option-two"
                                id="option-two"
                              />
                              <Label htmlFor="option-two">Option Two</Label>
                            </div>

                            <div className="flex items-center gap-2">
                              <RadioGroupItem
                                value="option-three"
                                id="option-three"
                              />
                              <Label htmlFor="option-three">Option Three</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center w-full">
                          <Label className="sm:col-span-1">Sales Price</Label>
                          <Input
                            type="text"
                            placeholder="0.00"
                            className="sm:col-span-2"
                          />
                          <Label className="sm:col-span-1">SalesTax</Label>
                          <Badge className=" justify-center mx-5">tax</Badge>
                          <br />
                          <Label className="sm:col-span-1">Cost</Label>
                          <Input
                            type="text"
                            placeholder="0.00"
                            className="sm:col-span-2"
                          />
                          <Label className="sm:col-span-1">
                            Purchases Taxes
                          </Label>
                          <Badge className=" justify-center mx-5">tax</Badge>
                          <br />
                          <Label className="sm:col-span-1">Category</Label>
                          <div className="w-full">
                            <Select>
                              <SelectTrigger className=" border border-red-100">
                                <SelectValue placeholder="Select source" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Website">Website</SelectItem>
                                <SelectItem value="Call">Call</SelectItem>
                                <SelectItem value="Excel">Excel</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex justify-end gap-3 pt-4">
                          <Button className="bg-red-700 hover:bg-red-800">
                            Cancel
                          </Button>
                          <Button
                            className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                            type="Submit"
                          >
                            Submit
                          </Button>
                        </div>
                      </TabsContent>

                      <TabsContent value="sales">
                        <div className="text-sm text-muted-foreground">
                          Sales-related settings will appear here.
                        </div>
                      </TabsContent>
                    </Tabs>
                  </form>
                </CardContent>
              </Card>
            </div>
   <div className="col-span-12 lg:col-span-4">
     
    </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};
