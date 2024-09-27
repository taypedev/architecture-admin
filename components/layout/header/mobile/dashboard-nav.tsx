"use client";

import { logout } from "@/actions/auth/logout.action";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export function DashboardNavMobile() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="!px-0 ">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Paku apps
            </h2>

            <nav className="bg-background grid items-start gap-2">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4">
                  <h2 className={`text-xl font-bold `}>Admin Panel</h2>
                </div>
                <nav className="flex-1 space-y-2 p-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Home</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Users</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <BarChart className="mr-2 h-4 w-4" />
                    <span>Analytics</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
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
                    <span>Logout</span>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
