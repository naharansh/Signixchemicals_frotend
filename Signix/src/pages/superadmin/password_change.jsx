import { useState } from "react";
import { Sidebar } from "../../components/sidebar.jsx";
import { Button } from "../../components/ui/button.jsx";
import { Card, CardContent, CardHeader } from "../../components/ui/card.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Label } from "../../components/ui/label.jsx";
import { Separator } from "../../components/ui/separator.jsx";

export const Password_Change = () => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!password.oldPassword) {
      errors.oldPassword = "Current password is required";
    }

    if (!password.newPassword) {
      errors.newPassword = "New password is required";
    } else if (password.newPassword.length < 8) {
      errors.newPassword = "Password must be at least 8 characters";
    } else if (password.newPassword === password.oldPassword) {
      errors.newPassword = "New password must be different";
    }

    if (!password.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password.newPassword !== password.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }


    console.log("Password Changed:", password);


    setPassword({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <Sidebar>
      <div className="w-full flex justify-center my-6">
        <Card className="w-[380px] rounded-xl shadow-md border">
          <CardHeader>
            <h2 className="text-lg font-semibold">Change Password</h2>
            <p className="text-sm text-muted-foreground">
              Enter your current password to continue
            </p>
            <Separator />
          </CardHeader>

          <CardContent className="px-3 py-1">
            <form className="space-y-4" onSubmit={handleSubmit}>
              
          
              <div className="space-y-1">
                <Label>Current Password</Label>
                <Input
                  type="password"
                  className="h-11"
                  name="oldPassword"
                  value={password.oldPassword}
                  onChange={handleChange}
                />
                {error.oldPassword && (
                  <p className="text-sm text-red-500">{error.oldPassword}</p>
                )}
              </div>

             
              <div className="space-y-1">
                <Label>New Password</Label>
                <Input
                  type="password"
                  className="h-11"
                  name="newPassword"
                  value={password.newPassword}
                  onChange={handleChange}
                />
                {error.newPassword && (
                  <p className="text-sm text-red-500">{error.newPassword}</p>
                )}
              </div>

             
              <div className="space-y-1">
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  className="h-11"
                  name="confirmPassword"
                  value={password.confirmPassword}
                  onChange={handleChange}
                />
                {error.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {error.confirmPassword}
                  </p>
                )}
              </div>

              <Button className="w-full h-11 mt-4">
                Verify Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Sidebar>
  );
};
