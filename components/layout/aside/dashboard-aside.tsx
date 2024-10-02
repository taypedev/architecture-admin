"use client";

import { asideMenuData } from "@/common/data/layout/menu/aside-menu.data";
import { Button } from "@/components/ui/button";
import { useSidebarMobile } from "@/hooks/use-sidebar-mobile";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CollapsibleMenuItem } from "./collapsible-menu";
import LogoutAsideButton from "./logout-aside-button";
import { MenuItemAside } from "./menu-item-aside";

const DashboardAside = () => {
  const { isMinimized, toggle } = useSidebarMobile();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `hidden h-screen flex-none border-r bg-background transition-all duration-300 ease-in-out lg:block sticky inset-x-0 top-0 w-full z-20 `,
        !isMinimized ? "w-72" : "w-[72px]"
      )}
    >
      <section className="flex flex-col h-full">
        {/* header aside */}
        <article className="flex items-center justify-between w-full p-2">
          {/* LOGO or TITLE */}
          <section
            className={`w-full flex items-center justify-center text-xl font-bold ${
              !isMinimized ? "block" : "hidden"
            }`}
          >
            <Link href={"/dashboard"}>
              <Image
                src={"/logos/logo.svg"}
                alt="logo"
                width={100}
                height={50}
              />
            </Link>
          </section>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            className={`${isMinimized ? "w-full" : ""}`}
          >
            <ChevronDown
              className={`h-6 w-6 transition-transform ${
                !isMinimized ? "rotate-0" : "rotate-180"
              }`}
            />
          </Button>
        </article>

        {/* body-aside */}
        <ScrollArea className="flex-1 gap-2  overflow-x-hidden p-2 flex flex-col">
          {asideMenuData.map((item, index) =>
            item?.items ? (
              <CollapsibleMenuItem
                key={index}
                icon={item.icon}
                isMinimized={isMinimized}
                label={item.label}
                items={item.items}
              />
            ) : (
              <MenuItemAside
                key={index}
                icon={item.icon}
                isMinimized={isMinimized}
                label={item.label}
                url={item.url}
              />
            )
          )}
        </ScrollArea>

        {/* Footer */}
        <div className="p-2">
          <LogoutAsideButton isMinimized={isMinimized} />
        </div>
      </section>
    </aside>
  );
};

export default DashboardAside;
