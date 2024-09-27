"use client";
import { HomeItemsNav } from "@/common/data/layout/home.data";
import { useSidebarMobile } from "@/hooks/use-sidebar-mobile";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { HomeNav } from "../header/mobile/home-nav";

type SidebarProps = {
  className?: string;
};

export const AsideHome = ({ className }: SidebarProps) => {
  const { isMinimized, toggle } = useSidebarMobile();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `hidden h-screen flex-none border-r bg-background transition-[width] duration-500 md:block sticky inset-x-0 top-0 w-full z-20 `,
        !isMinimized ? "w-72" : "w-[72px]",
        className
      )}
    >
      <div className="hidden p-5 pt-10 lg:block">
        <Link
          href={"https://github.com/Kiranism/next-shadcn-dashboard-starter"}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
        </Link>
      </div>
      <ChevronLeft
        className={cn(
          "absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          isMinimized && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <HomeNav items={HomeItemsNav} />
          </div>
        </div>
      </div>
    </aside>
  );
};
