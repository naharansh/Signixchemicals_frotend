import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Field, FieldLabel } from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const ForgotPassword = ({role}) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(role)
     if(role === 'admin')
  {

     navigate("/admin/two_factor");
    
    
  }
  else 
  {
    navigate("/superadmin/two_factor");
    
  };
   
  };
 
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center">
        <div className="w-full max-w-xs ">
          <Card className="rounded-none">
            <CardHeader>
              <CardTitle>Enter the Verification Code</CardTitle>
              <CardDescription>
                We want to sent the 6-digit code to your email
              </CardDescription>
              <CardContent className="!p-0">
                <form onSubmit={handleSubmit}>
                  <Field>
                    <FieldLabel htmlFor="otp">Enter the Email</FieldLabel>
                    <Input type="email" required />
                  </Field>
                  <Button type="Submit" className="my-4 w-full">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
};
export const NewPassword = () => {
    const navigates=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Password is updated")
        navigates('/login')
        window.location.reload()
        
    }
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center">
        <div className="w-full max-w-xs ">
          <Card className="rounded-none">
            <CardHeader>
              <CardTitle>Enter the Verification Code</CardTitle>

                <Separator/>
              <CardContent className="p-0">
                <form className="space-y-4" onSubmit={handleSubmit}>
                 
                  <Field>
                    <FieldLabel htmlFor="new-password">New Password</FieldLabel>

                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Enter new password"
                      autoComplete="new-password"
                     
                    />

                    <p className="mt-1 text-xs text-muted-foreground">
                      Must be at least 8 characters long
                    </p>
                  </Field>

                  {/* Confirm Password */}
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>

                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Re-enter password"
                      autoComplete="new-password"
                    />
                  </Field>

                  {/* Submit */}
                  <Button type="submit" className="w-full mt-2">
                    Update Password
                  </Button>
                </form>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
};
