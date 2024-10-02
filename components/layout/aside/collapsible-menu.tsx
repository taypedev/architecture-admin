"use client";

import { Icons } from "@/common/types/layout/icons.types";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { IMenuItemAsideProps, MenuItemAside } from "./menu-item-aside";

interface ICollapsibleMenuProps {
  icon: React.ReactNode;
  label: string;
  isMinimized: boolean;
  items: Omit<IMenuItemAsideProps, "items" | "isMinimized">[];
}

export const CollapsibleMenuItem: React.FC<ICollapsibleMenuProps> = ({
  icon,
  label,
  isMinimized,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = Icons[icon as keyof typeof Icons] || Icons["arrowRight"];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-start" title={label}>
          <Icon className="w-5 h-5" />
          {!isMinimized && (
            <span className="ml-2 flex-1 text-left">{label}</span>
          )}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className={`${isMinimized ? "" : "pl-6"}`}>
        {items.map((item, index) => (
          <MenuItemAside
            key={index}
            icon={item.icon}
            label={item.label}
            url={item.url}
            isMinimized={isMinimized}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
