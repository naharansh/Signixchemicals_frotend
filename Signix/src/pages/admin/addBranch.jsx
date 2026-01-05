import { useState } from "react";
import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";

export const AddBranch = () => {
  const [branch, setBranch] = useState({
    Branch_Head: "",
    email: "",
    phone_no: "",
    address: "",
    branch_number: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setBranch((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(branch);

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    setBranch({
      Branch_Head: "",
      email: "",
      phone_no: "",
      address: "",
      branch_number: "",
    });
  };

  return (
    <Sidebar>
      <div className="w-full px-4">
        <Card className="max-w-5xl mx-auto rounded-none shadow-md border border-none py-6">
          <CardDescription>
            <div className="px-6">
              <h1 className="text-xl font-semibold tracking-tight">Add Branch</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Fill in the details to add New Branch
              </p>
            </div>
            <Separator className="my-4" />
          </CardDescription>
          <CardContent>
      
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Branch Head */}
                <div className="space-y-2">
                  <Label>Branch Head</Label>
                  <Input
                    placeholder="John Doe"
                    name="Branch_Head"
                    value={branch.Branch_Head}
                    required
                    onChange={handleChanges}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    name="email"
                    value={branch.email}
                    required
                    onChange={handleChanges}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input
                    placeholder="9876543210"
                    name="phone_no"
                    value={branch.phone_no}
                    required
                    onChange={handleChanges}
                    maxLength={10}
                    minLength={10}
                    pattern="[0-9]{10}"
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input
                    type="text"
                    name="address"
                    value={branch.address}
                    required
                    onChange={handleChanges}
                  />
                </div>

                {/* Branch Number */}
                <div className="space-y-2">
                  <Label>Branch Number</Label>
                  <Input
                    type="text"
                    name="branch_number"
                    value={branch.branch_number}
                    required
                    onChange={handleChanges}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  className="bg-red-700 hover:bg-red-800"
                  onClick={() =>
                    setBranch({
                      Branch_Head: "",
                      email: "",
                      phone_no: "",
                      address: "",
                      branch_number: "",
                    })
                  }
                >
                  Cancel
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Sidebar>
  );
};