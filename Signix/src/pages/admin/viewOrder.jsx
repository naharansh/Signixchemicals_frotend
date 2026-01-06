import { Frown } from "lucide-react";
import { Sidebar } from "../../components/sidebar";
import { Card, CardContent, CardDescription } from "../../components/ui/card";
import { Switch } from "../../components/ui/switch";
import { Separator } from "../../components/ui/separator";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
import { useState } from "react";

export const ViewOrder = () => {
    const[edit,setedit]=useState(true)
  return (
    <>
      <Sidebar>
        <div className="w-full  px-3">
          <Card className="rounded-none border border-none my-2 shadow-sm">
            <CardDescription>
              <div className="flex justify-between items-center mx-4">
                 <div>
    <h1 className="text-xl font-semibold text-gray-800">Order Details</h1>
    <p className="text-sm text-muted-foreground">
      View and manage order information
    </p>
  </div>
                <div className="gap-4">
                  <Switch checked={edit}  onCheckedChange={() => setedit(!edit)} />
                </div>
              </div>
            </CardDescription>
            <Separator />
            <CardContent>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col my-2">
                    <Label>Order_id</Label>
                    <Input type="text" className="my-2"   disabled={true}/>
                  </div>
                  <div className="flex flex-col my-2">
                    <Label>order_number</Label>
                    <Input type="text" className="my-2" disabled={true}  />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col my-2">
                    <Label className="my-2">lead_id</Label>
                    <Select  disabled={edit}>
                      <SelectTrigger className="w-full my-2">
                        <SelectValue placeholder="Select Lead"></SelectValue>
                        <SelectContent>
                          <SelectItem value="first">first</SelectItem>
                          <SelectItem value="second">second</SelectItem>
                          <SelectItem value="third">third</SelectItem>
                          <SelectItem value="fourth">fourth</SelectItem>
                        </SelectContent>
                      </SelectTrigger>
                    </Select>
                  </div>
                  <div className="flex flex-col my-2">
                    <Label className="my-2">Status</Label>

                    <Select  disabled={edit}>
                      <SelectTrigger className="w-full my-2">
                        <SelectValue placeholder="Select Status"></SelectValue>
                        <SelectContent>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Processing">Processing</SelectItem>
                          <SelectItem value="Dispatched">Dispatched</SelectItem>
                          <SelectItem value="Delivered">Delivered</SelectItem>
                        </SelectContent>
                      </SelectTrigger>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col my-2">
                    <Label className="my-2">total_amount</Label>
                    <Input
                      type="text"
                      placeholder="Total order value"
                      className="my-2"
                      disabled={edit}
                    />
                  </div>
                  <div className="flex flex-col my-2">
                    <Label className="my-2">payment_status</Label>

                    <Select  disabled={edit}>
                      <SelectTrigger className="w-full my-2">
                        <SelectValue placeholder="Select Payments"></SelectValue>
                        <SelectContent>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Paid">Paid</SelectItem>
                          <SelectItem value="Partial">Partial</SelectItem>
                        </SelectContent>
                      </SelectTrigger>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col my-2">
                    <Label className="my-2" >created_by</Label>

                    <Select   disabled={edit}>
                      <SelectTrigger className="w-full my-2">
                        <SelectValue placeholder="Created_by"></SelectValue>
                        <SelectContent>
                          <SelectItem value="empone">emp1</SelectItem>
                          <SelectItem value="emptwo">emp2</SelectItem>
                          <SelectItem value="empthree">emp3</SelectItem>
                        </SelectContent>
                      </SelectTrigger>
                    </Select>
                  </div>
                </div>
                 <div className="flex justify-end gap-3 pt-3 ">
                  <Button className="bg-red-600 text-white hover:bg-red-700">
                    Cancel
                  </Button>

                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    type="submit"
                     disabled={edit}
                   
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    
        
    </>
  );
};
