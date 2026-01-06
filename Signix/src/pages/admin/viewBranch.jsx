import { useState } from "react";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { Switch } from "../../components/ui/switch";

export const ViewBranch = () => {
  const [edit, setEdit] = useState(true);
  return (
    <>
      <Sidebar>
        <div className="w-full px-5  p-3">
          <Card className="rounded-none  border border-none">
            <CardDescription className="flex justify-between items-center px-4">
              <h1 className="text-xl font-semibold text-gray-800 ">
                Branch Profile
              </h1>
              <div className="flex items-center gap-2">
                <Switch checked={edit} onCheckedChange={() => setEdit(!edit)} />
              </div>
            </CardDescription>
            <Separator />
            <CardContent>
              <form className="space-y-6">
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Branch_id</Label>
                    <Input
                      placeholder="John Doe"
                      name="Branch_Head"
                      disabled={true}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Branch Head</Label>
                    <Input placeholder="John Doe" name="Branch_Head" required disabled={edit} />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      name="email"
                      disabled={edit}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input
                      placeholder="9876543210"
                      name="phone_no"
                      required
                      maxLength={10}
                      minLength={10}
                      pattern="[0-9]{10}"
                      disabled={edit}
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label>Address</Label>
                    <Input type="text" name="address" required  disabled={edit}/>
                  </div>

                  {/* Branch Number */}
                  <div className="space-y-2">
                    <Label>Branch Number</Label>
                    <Input type="text" name="branch_number" required disabled={edit} /> 
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4">
                  <Button type="button" className="bg-red-700 hover:bg-red-800">
                    Cancel
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                    type="submit"
                    disabled={edit}
                  >
                    Submit
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
