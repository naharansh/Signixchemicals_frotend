import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

import {
  IconDashboard,
  IconUsers,
  IconListDetails,
  IconChartBar,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconUsersGroup,
  IconSettings,
} from "@tabler/icons-react";

import { CreditCard } from "lucide-react";
import { Navbars } from "./navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const AppSidebar = ({ passrole }) => {
  console.log(passrole)
  
  const data = (() => {
    if (passrole === "superadmin") {
      return {
        navMain: [
          {
            title: "Dashboard",
            url: "/superadmin/dasboard",
            icon: IconDashboard,
            actions: [],
          },
          {
            title: "Company Details",
            url: "#",
            icon: IconUsers,
            actions: [
              { title: "Company Add", url: "/superadmin/addCompany" },
              { title: "Company List", url: "/superadmin/listcompanies" },
            ],
          },
          {
            title: "Help Desk",
            url: "/superadmin/helpdesk",
            icon: IconHelp,
            actions: [],
          },
          {
            title: "Subscription",
            url: "#",
            icon: CreditCard,
            actions: [
              {
                title: "Subscriber User List",
                url: "/superadmin/subscription",
              },
            ],
          },
        ],
      };
    }

    if (passrole === "admin") {
      return {
        navMain: [
          {
            title: "Dashboard",
            url: "/admin/dashboard",
            icon: IconDashboard,
            actions: [
              { title: "Sales", url: "#" },
              { title: "Finale", url: "#" },
              { title: "Project", url: "#" },
            ],
          },
          {
            title: "HR",
            url: "/admin/hr",
            icon: IconListDetails,
            actions: [
              { title: "Employee", url: "/admin/employeeslist" },
              { title: "Leave", url: "/admin/leaveapply" },
              { title: "Attendance", url: "/admin/attendence" },
              { title: "Document", url: "/admin/uploads" },
            ],
          },
          {
            title: "REPORTING & ANALYTICS",
            url: "#",
            icon: IconChartBar,
            actions: [
              { title: "Sales", url: "/admin/sales/dashboard" },
              { title: "HR Report", url: "/admin/hr/dashboard" },
              {
                title: "Distributor",
                url: "/admin/distributor/dashboard",
              },
            ],
          },
          {
            title: "Finance & Accounts",
            url: "#",
            icon: IconFolder,
            actions: [{ title: "Accounts", url: "#" }],
          },
          {
            title: "Help Desk",
            url: "#",
            icon: IconHelp,
            actions: [],
          },
          {
            title: "CRM",
            url: "#",
            actions: [
              {
                title: "Lead",
                url: "/admin/lead",
              },
              {
                title: "Orders",
                url: "/admin/Ordermanagmentlist",
              },
              {
                title: "Products",
                url: "/admin/productList",
              },
            ],
            icon: IconUsersGroup,
          },
        ],
      };
    }

    // ✅ FALLBACK (prevents navMain undefined)
    return {
      user: null,
      navMain: [],
    };
  })();

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <IconInnerShadowTop className="size-5" />
                <span className="text-base font-semibold">KEM</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <Navbars items={data.navMain}  role={passrole}/>
      </SidebarContent>

      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger>
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer">
  <IconSettings className="h-4 w-4" />
  <h1 className="leading-none">Settings</h1>
</div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/admin/thirdParty">SMS Config</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <Link to="/admin/EmailTemplate">Email Config</Link>
            </DropdownMenuItem>
               <DropdownMenuItem>
               <Link to="/admin/Category">Category</Link>
            </DropdownMenuItem>
          
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
