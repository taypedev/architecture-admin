"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoutAsideButton from "../../aside/logout-aside-button";
import { asideMenuData } from "@/common/data/layout/menu/aside-menu.data";
import { CollapsibleMenuItem } from "../../aside/collapsible-menu";
import { MenuItemAside } from "../../aside/menu-item-aside";

export function DashboardNavMobile() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon className="h-6 w-6 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="!px-0 flex flex-col gap-2">
        {/* header */}
        <article className="flex items-center justify-center w-full p-2">
          {/* LOGO or TITLE */}

          <Link href={"/dashboard"}>
            <Image src={"/logos/logo.svg"} alt="logo" width={100} height={50} />
          </Link>
        </article>

        {/* body */}

        <ScrollArea className="flex-1 gap-2  overflow-x-hidden p-2 flex flex-col">
          {asideMenuData.map((item, index) =>
            item?.items ? (
              <CollapsibleMenuItem
                key={index}
                icon={item.icon}
                isMinimized={false}
                label={item.label}
                items={item.items}
              />
            ) : (
              <MenuItemAside
                key={index}
                icon={item.icon}
                isMinimized={false}
                label={item.label}
                url={item.url}
              />
            )
          )}
        </ScrollArea>

        {/* footer */}
        <div className="p-2">
          <LogoutAsideButton isMinimized={false} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
