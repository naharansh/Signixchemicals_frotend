// components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
// validation hook
import { useForm } from "react-hook-form";
// assets and styles
import firstimage from "../../assets/firstimage.svg";
import secondimage from "../../assets/secondimage.svg";
import logo from "../../assets/icons/logo.svg";
import "../../styles/global.css";
import axios from "axios";
import google from '../../assets/icons/google-color.svg'
import facebook from '../../assets/icons/facebook-1.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import  X from '../../assets/icons/twitterx--v1.png'
import  apple from '../../assets/icons/apple-color.svg'
import  microsoft from '../../assets/icons/microsoft.svg'
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const usenav=useNavigate()
const role='superadmin'
  const onSubmit = async (data) => {


  try {
    const res = await axios.post(
      "http://localhost:8080/api/login",
      data,
      {
    headers: { "Content-Type": "application/json" },
    withCredentials: true, // ✅ crucial to send cookies
  }
    );

    
    if(res.data)
    {
      alert("logged in")
      usenav('/verify_otp')
    }

  } catch (error) {
    if (error.response) {
      const status = error.response.status;

      if (status === 404) {
        
        alert(error.response.data.message)
      } else if (status === 500) {
        
        alert(error.response.data.message)
      } else if (status === 505) {
        
        alert(error.response.data.message)
      } else {
        alert("Error:", error.response.data);
      }
    } else {
      alert("Network Error:", error.message);
    }
  }
};
  const changegingFunction=()=>{
    if(role === 'admin')
    {
      console.log(role)
        usenav('/admin/forget_password')
        window.location.reload();
    }
    else
    {
      usenav('/superadmin/forget_password')
      
    }
  }

  return (
    <>
      <div className="bg-gray-100 py-5 justify-center flex items-center  min-h-screen">
        <Card className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 overflow-hidden rounded-lg shadow-xl  @lg:w-91">
          <div>
            <CardHeader className="py-5">
              <img src={logo} alt="" srcset="" className="w-20 " />
              <CardTitle className="headers">SignIn</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="email">Email</Label>
                    </div>
                    <Input
                      placeholder="Enter the email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  {/* Strong#9Pass */}
                  {/* At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char */}
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="email">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter the password"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,

                          message: "Invalid password",
                        },
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters long",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <button
                   type="button"
                    onClick={changegingFunction}
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline my-3 cursor-pointer"
                  >
                    Forgot your password?
                  </button>
                </div>
                <Button type="submit" className="w-full btns">
                  Login
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <div className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Sign up
                </a>
              </div>
              <div className="flex justify-center gap-3">
                {/* Google */}
                <button className="baseBtn bg-[#ffffff]">
                  <img
                    src={google}
                    alt="Google"
                    className="w-5 h-5"
                  />
                </button>

                {/* Facebook */}
                <button className="baseBtn bg-[#1877F2]">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </button>

                {/* LinkedIn */}
                <button className="baseBtn bg-[#0A66C2]">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                </button>

                {/* X (Twitter) */}
                <button className="baseBtn bg-black">
                  <img
                    src={X}
                    alt="X"
                    className="w-5 h-5 invert"
                  />
                </button>

                {/* Apple */}
                <button className="baseBtn bg-black">
                  <img
                    src={apple}
                    alt="Apple"
                    className="w-5 h-5 invert"
                  />
                </button>

                {/* Microsoft */}
                <button className="baseBtn bg-[#F3F3F3] border">
                  <img
                    src={microsoft}
                    alt="Microsoft"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </CardFooter>
          </div>
          <div className="hidden md:flex items-center justify-center bg-gray-50 p-10">
            <Carousel
              className="w-full max-w-md"
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                <CarouselItem className="flex items-center justify-center">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img src={firstimage} alt="Login" className="w-42" />

                    <h3 className="text-lg font-semibold">
                      Passwordless sign-in
                    </h3>

                    <p className="text-sm text-muted-foreground max-w-xs">
                      Secure access with one-tap authentication
                    </p>

                    <Button variant="outline" className="rounded-full px-6">
                      Learn more
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex items-center justify-center">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img src={secondimage} alt="Login" className="w-42" />

                    <h3 className="text-lg font-semibold">
                      Passwordless sign-in
                    </h3>

                    <p className="text-sm text-muted-foreground max-w-xs">
                      Secure access with one-tap authentication
                    </p>

                    <Button variant="outline" className="rounded-full px-6">
                      Learn more
                    </Button>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Card>
      </div>
    </>
  );
};
