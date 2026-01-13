import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {  useState } from "react";

const activitiesData = [
  {
    id: 1,
    date: "2020-05-20",
    time: "1:36 PM",
    type: "comment",
    user: "Grant McNulty",
    role: "Contributor",
    action: "Commented on Jetpack Search for WordPress Sites",
    comment:
      "Hi again, Greg. I have a query about a multilingual site. I will have content in multiple languages...",
    status: "Comment awaiting approval",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    date: "2020-05-20",
    time: "10:48 AM",
    type: "update",
    user: "Nauris Pūķis",
    role: "Administrator",
    action: "8 updates made to WCEU 2020",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    date: "2020-05-20",
    time: "8:56 AM",
    type: "backup",
    user: "Nauris Pūķis",
    role: "Administrator",
    action: "WCEU 2020 – Backup created",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 4,
    date: "2020-05-20",
    time: "8:04 AM",
    type: "feedback",
    user: "Unknown",
    role: null,
    action: "Feedback received from Gregory",
    avatar: null,
  },
];

export default function ActivityLog() {
  const [activityType, setActivityType] = useState("all");
  const [dateRange, setDateRange] = useState("all");

  const filteredActivities = activitiesData.filter((item) => {
    const matchType = activityType === "all" || item.type === activityType;

    const matchDate =
      dateRange === "all"
        ? true
        : dateRange === "today"
        ? item.date === new Date().toISOString().split("T")[0]
        : dateRange === "week"
        ? new Date(item.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        : true;

    return matchType && matchDate;
  });

  return (
    <Sidebar>
      <div className="max-w-7xl mx-auto p-6 lg:max-w-full ">
      
        <h1 className="text-2xl font-semibold ">Activity</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Keep tabs on all your site's activity — plugin updates, user logins,
          setting changes, and more.
        </p>

      
        <div className="flex   gap-4 mb-6 flex-col lg:flex-row lg:items-center">
          <span className="text-sm text-muted-foreground">Filter by:</span>

          <select
            className="border rounded px-3 py-1 text-sm"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="all">All dates</option>
            <option value="today">Today</option>
            <option value="week">Last 7 days</option>
          </select>

          <select
            className="border rounded px-3 py-1 text-sm"
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
          >
            <option value="all">All activity</option>
            <option value="comment">Comments</option>
            <option value="update">Updates</option>
            <option value="backup">Backups</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
        <div className="my-3">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

       
        <h2 className="text-sm font-semibold text-muted-foreground mb-4">
          May 20, 2020 — Today
        </h2>

        <ul className="relative border-l border-muted pl-6">
          {filteredActivities.map((item) => (
            <li key={item.id} className="relative mb-6 flex flex-col gap-4 lg:flex-row">
             
              <div className="w-20 pt-4 text-xs text-muted-foreground">
                {item.time}
              </div>

            
              <div className="flex-1 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4">
                
                  <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        className="h-full w-full object-cover"
                        alt="avatar"
                      />
                    ) : null}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold">{item.user}</span>
                      {item.role && (
                        <span className="text-xs text-muted-foreground">
                          {item.role}
                        </span>
                      )}
                    </div>

                    <p className="text-sm mt-1">{item.action}</p>
                  </div>
                </div>

                {/* Comment */}
                {item.comment && (
                  <div className="mt-3 bg-muted/40 p-3 rounded-md">
                    <blockquote className="border-l-2 pl-3 italic text-sm text-muted-foreground">
                      {item.comment}
                    </blockquote>
                    {item.status && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        {item.status}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

        {filteredActivities.length === 0 && (
          <p className="text-sm text-muted-foreground mt-6">
            No activity found for selected filters.
          </p>
        )}
      </div>
    </Sidebar>
  );
}
