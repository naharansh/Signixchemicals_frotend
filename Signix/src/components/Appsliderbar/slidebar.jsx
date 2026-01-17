import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupLabel,
} from "../ui/sidebar";

import {
  IconDashboard,
  IconUsers,
  IconListDetails,
  IconChartBar,
  IconHelp,
  IconInnerShadowTop,
  IconUsersGroup,
  IconSettings,
} from "@tabler/icons-react";

import { CreditCard, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useMemo } from "react";

import { useRole } from "../../context/rolecontex"; // 👈 import context

export const AppSidebar = () => {
  const { role } = useRole(); // 👈 get role from context

  /* ================= ROLE BASED DATA ================= */
  const data = useMemo(() => {
    if (role === "superadmin") {
      return {
        navMain: [
          { title: "Dashboard", url: "/superadmin/dasboard", icon: IconDashboard, actions: [] },
          {
            title: "Company Details",
            url: "#",
            icon: IconUsers,
            actions: [
              { title: "Company Add", url: "/superadmin/addCompany" },
              { title: "Company List", url: "/superadmin/listcompanies" },
            ],
          },
          { title: "Help Desk", url: "/superadmin/helpdesk", icon: IconHelp, actions: [] },
          {
            title: "Subscription",
            url: "#",
            icon: CreditCard,
            actions: [
              { title: "Subscriber User List", url: "/superadmin/subscription" },
            ],
          },
        ],
      };
    }

    if (role === "admin") {
      return {
        navMain: [
          { title: "Dashboard", url: "/admin/dashboard", icon: IconDashboard, actions: [] },
          {
            title: "HR",
            url: "#",
            icon: IconListDetails,
            actions: [
              { title: "Employee", url: "/admin/employeeslist" },
              { title: "Leave", url: "/admin/leaveapply" },
              { title: "Attendance", url: "/admin/attendence" },
              { title: "Document", url: "/admin/uploads" },
            ],
          },
          {
            title: "Reporting & Analytics",
            url: "#",
            icon: IconChartBar,
            actions: [
              { title: "Sales", url: "/admin/sales/dashboard" },
              { title: "HR Report", url: "/admin/hr/dashboard" },
              { title: "Distributor", url: "/admin/distributor/dashboard" },
            ],
          },
          {
            title: "CRM",
            url: "#",
            icon: IconUsersGroup,
            actions: [
              { title: "Lead", url: "/admin/lead" },
              { title: "Orders", url: "/admin/Ordermanagmentlist" },
              { title: "Products", url: "/admin/productList" },
            ],
          },
        ],
      };
    }

    return { navMain: [] };
  }, [role]); 
  /* ================= COMPONENT ================= */
  return (
    <Sidebar collapsible="offcanvas">
      {/* ================= HEADER ================= */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <IconInnerShadowTop className="size-5" />
                <span className="text-base font-semibold">KEM</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* ================= CONTENT ================= */}
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>

          <SidebarMenu>
            {data.navMain.map((item, index) => {
              const hasChildren = item.actions?.length > 0;

              return hasChildren ? (
                /* ===== COLLAPSIBLE ITEM ===== */
                <Collapsible key={index} asChild className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        {item.icon && <item.icon className="size-4" />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenu>
                        {item.actions.map((sub, subIndex) => (
                          <SidebarMenuSubItem key={subIndex}>
                            <SidebarMenuButton asChild>
                              <Link to={sub.url}>
                                <span>{sub.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenu>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                /* ===== SINGLE LINK ITEM ===== */
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      {item.icon && <item.icon className="size-4" />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* ================= FOOTER ================= */}
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
              <IconSettings className="h-4 w-4" />
              <span>Settings</span>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/admin/thirdParty">SMS Config</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/admin/EmailTemplate">Email Config</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/admin/Category">Category</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
