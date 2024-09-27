"use client";

import { logout } from "@/actions/auth/logout.action";
import { Button } from "@/components/ui/button";
import { useSidebarMobile } from "@/hooks/use-sidebar-mobile";
import { cn } from "@/lib/utils";
import {
  BarChart,
  ChevronDown,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";

const DashboardAside = () => {
  const { isMinimized, toggle } = useSidebarMobile();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `hidden h-screen flex-none border-r bg-background transition-all duration-300 ease-in-out md:block sticky inset-x-0 top-0 w-full z-20 `,
        !isMinimized ? "w-72" : "w-[72px]"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <h2
            className={`text-xl font-bold ${!isMinimized ? "block" : "hidden"}`}
          >
            Admin Panel
          </h2>
          <Button variant="ghost" size="icon" onClick={handleToggle}>
            <ChevronDown
              className={`h-6 w-6 transition-transform ${
                !isMinimized ? "rotate-0" : "rotate-180"
              }`}
            />
          </Button>
        </div>
        <nav className="flex-1 space-y-2 p-2">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            {!isMinimized && <span>Home</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            {!isMinimized && <span>Dashboard</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            {!isMinimized && <span>Users</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <BarChart className="mr-2 h-4 w-4" />
            {!isMinimized && <span>Analytics</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            {!isMinimized && <span>Settings</span>}
          </Button>
        </nav>
        <div className="p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900"
            onClick={() => {
              logout();
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {!isMinimized && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardAside;
