import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../components/ui/field";
import { InputOTP, InputOTPSlot, InputOTPGroup } from "../../components/ui/input-otp";
import axios from "axios";
import { Link } from "react-router-dom";

export const GenerateOTP = () => {
  const [otp, setOtp] = useState(""); // single string

  const OTPSubmit =async (e) => {
    e.preventDefault();
  
    try {
   const res= await axios.post(
  "http://localhost:8080/api/verifyOTP",
  { otp },
  {
    headers: { "Content-Type": "application/json" },
    withCredentials: true, // ✅ crucial to send cookies
  }
);
if(res)
{
    alert("Otp is verified")
}


    } catch (error) {
        console.log(error.message)
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center">
      <div className="w-full max-w-xs">
        <Card>
          <CardHeader>
            <CardTitle>Enter the Verification Code</CardTitle>
            <CardDescription>
              We sent the 6-digit code to your email
            </CardDescription>
            <CardContent className="!p-0">
              <form onSubmit={OTPSubmit}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="otp">Verification code</FieldLabel>
                    <InputOTP
                      id="otp"
                      maxLength={6}
                      onChange={(value) => setOtp(value)}
                      required
                    >
                      <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <FieldDescription>
                      Enter the 6-digit code sent to your email.
                    </FieldDescription>
                  </Field>
                  <FieldGroup>
                    <Button type="submit">Verify</Button>
                    <FieldDescription className="text-center">
                      Didn&apos;t receive the code?<Link to='/login'>Resend</Link>
                    </FieldDescription>
                  </FieldGroup>
                </FieldGroup>
              </form>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};
