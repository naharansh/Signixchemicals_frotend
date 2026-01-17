import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "./Appsliderbar/slidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Separator } from "./ui/separator";
import {
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { IconLogout, IconSettings, IconUser } from "@tabler/icons-react";

export const Sidebar = ({ children }) => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);
     const user = {
    name: "shadcn",
  };
    
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
             <header className="flex h-16 w-full shrink-0 items-center justify-between px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex min-w-0 items-center gap-2">
            <SidebarTrigger className="-ml-1" />

            <Separator
              orientation="vertical"
              className="hidden sm:block mr-2 data-[orientation=vertical]:h-4"
            />

            <Breadcrumb className="min-w-0">
              <BreadcrumbList className="flex items-center gap-2 truncate">
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator className="hidden md:block" />

                <BreadcrumbItem className="truncate">
                  <BreadcrumbPage className="truncate">
                    Dashboard
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Navuser user={user} />
          </div>
        </header>
          <main className="my-3 mx-2">
           {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};
export const Navuser = ({ user }) => {
  const id = 3;
  return (
    <>
    
      <SidebarMenu>
  <SidebarMenuItem>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full bg-black text-sm font-semibold text-white
            hover:bg-black/80 focus:outline-none
            focus:ring-2 focus:ring-ring focus:ring-offset-2
            text-xl  items-center
          "
        >
          {user.name.split('')[0]}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="right"
        align="start"
        className="w-44"
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          My Account
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-center gap-2">
          <IconUser className="h-4 w-4" />
            <NavLink to='/admin/ViewCompany/:id'>Profile</NavLink>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <IconSettings className="h-4 w-4" />
          {/*  */}
          <NavLink to='/admin/ViewCompany/:id'>Branch</NavLink>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="flex items-center gap-2 text-red-600 focus:text-red-600"
        >
          <IconLogout className="h-4 w-4" />
          <NavLink to="/login">Logout</NavLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </SidebarMenuItem>
</SidebarMenu>

    </>
  );
};
