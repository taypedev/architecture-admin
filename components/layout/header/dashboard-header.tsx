"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Bell } from "lucide-react";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { DashboardNavMobile } from "./mobile/dashboard-nav";

const DashboardHeader = () => {
  return (
    <header className="bg-background shadow-xl h-[65px] md:h-[75px] w-full sticky top-0 z-10 flex items-center">
      <nav className="w-full flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn("block lg:!hidden")}>
          <DashboardNavMobile />
        </div>
        <div className="flex items-center gap-2 w-full justify-end">
          <div className="flex items-center justify-between px-4 py-3">
            <h2 className="text-2xl font-semibold hidden md:inline">
              Dashboard
            </h2>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        John Doe
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        john@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
