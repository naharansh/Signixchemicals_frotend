import { useEffect, useState } from "react"
import { Sidebar } from "../../components/sidebar"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Separator } from "../../components/ui/separator"
import axios from "axios"
import { Switch } from "../../components/ui/switch"

export const ViewEmployees=()=>{
  const [edit,setEdit]=useState(true)
    return(
        <>
            <Sidebar>
                <Card>
                    <CardHeader>
                        <CardDescription className="text-xl text-[#464746]">
                           <div className="flex justify-between items-center">
                               <h1>Employee Profile</h1>
                               <Switch checked={edit} onCheckedChange={() => setEdit(!edit)}/>
                           </div>
                        </CardDescription>
                    </CardHeader>
              <Separator />                                  
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2 my-2">employee_code</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_code"
                      className="my-2"
                      disabled={edit}
                    />
                   
                  </div>
                  <div className="flex flex-col ">
                    <Label className="mb-2 my-2">Employee first_name</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_fname"
                      type="text"
                      className="my-2 my-2"
                      disabled={edit}
                    />
                    
                  </div>
                  <div className="flex flex-col my-2">
                    <Label className="mb-2 my-2">Employee last_name</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_lname"
                      type="text"
                      className="my-2"
                      disabled={edit}
                    />
                   
                  </div>
                  <div className="flex flex-col my-2">
                    <Label className="mb-2 my-2">Employee email</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_email"
                      type="email"
                      className="my-2"
                    disabled={edit}
                    />
                    
                  </div>
                </div>
    
            
        
          
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col my-2">
                    <Label className="mb-2 my-2">Contact number</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_number"
                      type="text"
                      className="my-2 "
                       disabled={edit}
                    
                    />
                  </div>
                  <div className="flex flex-col my-2">
                    <Label className="mb-2 my-2">Date employee joined</Label>
                    <Input
                      placeholder="Enter company name"
                      name="emp_date"
                      type="date"
                      className="my-2 my-2"
                 disabled={edit}
                    />
                
                  </div>
                  {/* </div> use datepicker */}
                  <div className="flex flex-col my-2">
                    <Label className="mb-2 my-2">Employment_type</Label>
                    <Select

                      className="my-2"
                      
                    >
                      <SelectTrigger className="w-full" disabled={edit}>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FullTime">Full-time</SelectItem>
                        <SelectItem value="Part_time">Part-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                
                  </div>
                  <div className="flex flex-col my-2" >
                    <Label className="mb-2 my-2">status</Label>
                    <Select

                      className="my-2"
                    >
                      <SelectTrigger className="w-full" disabled={edit}>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Resigned">Resigned</SelectItem>
                      </SelectContent>
                    </Select>
                   
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  <div className="flex flex-col my-2">
                    <Label className="mb-2 my-2">Password</Label>
                    <Input
                      placeholder="Enter company name"
                      name="password"
                      type="password"
                      className="my-2"
                      disabled={edit}
                      
                    />

                  </div>
                  <div className="flex flex-col my-2">
                    <Label className="mb-2 my-2">Role</Label>
                    <Select
                        className="my-2"
                    >
                      <SelectTrigger className="w-full" disabled={edit}> 
                        <SelectValue placeholder="Select the Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FullTimes">Full-time</SelectItem>
                        <SelectItem value="Part_times">Part-time</SelectItem>
                        <SelectItem value="Contracts">Contract</SelectItem>
                      </SelectContent>
                    </Select>
  
                  </div>
                  <div className="flex flex-col my-2">
                    <Label className="mb-2">Department</Label>
                    <Select className="my-2"
  
                    >
                      <SelectTrigger className="w-full" disabled={edit}>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FullTisdfme">Fulla-time</SelectItem>
                        <SelectItem value="PartYime">Part-time</SelectItem>
                        <SelectItem value="Contrdsact">Contract</SelectItem>
                      </SelectContent>
                    </Select>
  
                  </div>
                  <div className="flex flex-col my-2">
                    <Label className="mb-2">Managers</Label>
                    <Select
                            className="my-2"
                    >
                      <SelectTrigger className="w-full" disabled={edit}>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Resigned">Resigned</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
            <div className="flex gap-3 justify-end mx-4 my-2">
              <Button type="submit" className="bg-blue-500 hover:bg-blue-900" disabled={edit}>
                Submit
              </Button>
              <Button type="button">Cancel</Button>
            </div>
          
                    </CardContent>
                </Card>
            </Sidebar>
        </>
    )
}