import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarGroupContent,
} from "../../components/ui/sidebar";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

import { useSidebar } from "../../components/ui/sidebar";

import {
  IconChartBar,
  IconCirclePlusFilled,
  IconDashboard,
  IconDots,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconMail,
  IconShare3,
  IconTrash,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreditCard } from "lucide-react";

export const Navbars = ({ items, passrole }) => {
  const { isMobile } = useSidebar();
  

  console.log(passrole);

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, key) => {
          const actions = item.actions; // ✅ SAFE DEFAULT
          const [open, setOpen] = useState(false);

          return (
            <SidebarMenuItem key={key} className="group">
              {/* MAIN NAVIGATION */}
              <SidebarMenuButton asChild>
                <Link
                  to={item.url}
                  className={({ isActive }) =>
                    `flex items-center gap-2 w-full
                 hover:bg-muted
                 ${isActive ? "bg-muted font-medium" : ""}`
                  }
                  onClick={() => {
                    if (actions.length > 0) {
                      setOpen((prev) => !prev); // toggle submenu
                    }
                  }}
                >
                  {item.icon && <item.icon className="size-4" />}
                  <span>{item.title}</span>
                  {actions.length > 0 && (
                    <span className="ml-auto">
                      {open ? "▾" : "▸"} {/* arrow indicator */}
                    </span>
                  )}
                </Link>
              </SidebarMenuButton>

              {/* COLLAPSIBLE SUBMENU */}
              {open && actions.length > 0 && (
                <div className="ml-6 mt-1 flex flex-col gap-1">
                  {actions.map((action, index) => (
                    <Link
                      key={index}
                      to={action.url}
                      className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted text-sm"
                    >
                      {action.icon && <action.icon className="size-3" />}
                      <span>{action.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export const Navmain = ({ items = [] }) => {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {/* QUICK CREATE */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="bg-primary text-primary-foreground">
              <IconCirclePlusFilled />
              <span>Quick Create</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* MAIN NAV */}
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `flex items-center gap-2 w-full ${
                      isActive
                        ? "bg-muted text-primary font-medium"
                        : "text-muted-foreground"
                    }`
                  }
                >
                  {item.icon && <item.icon className="size-4" />}
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
