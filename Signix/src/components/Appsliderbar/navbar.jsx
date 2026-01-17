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
  IconCirclePlusFilled,
  IconDots,
  IconFolder,
  IconMail,
  IconShare3,
  IconTrash,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbars = ({ items, role }) => {
  const { isMobile } = useSidebar();
  
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, key) => {
          const actions = item.actions ?? []; // ✅ SAFE DEFAULT

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
                >
                  {item.icon && <item.icon className="size-4" />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>

              {/* ACTION DROPDOWN */}
              {actions.length > 0 && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction
                      showOnHover
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                    >
                      <IconDots className="size-4" />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                    className="w-32"
                  >
                    {actions.map((action, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <Link to={action.url}>{action.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
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
