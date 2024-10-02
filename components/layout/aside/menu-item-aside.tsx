"use client";

import { Icons } from "@/common/types/layout/icons.types";
import Link from "next/link";
import React from "react";

export interface IMenuItemAsideProps {
  icon: keyof typeof Icons;
  label: string;
  url: string;
  isMinimized: boolean;
}

export const MenuItemAside: React.FC<IMenuItemAsideProps> = ({
  icon,
  label,
  url,
  isMinimized,
}) => {
  const Icon = Icons[icon as keyof typeof Icons] || Icons["arrowRight"];

  return (
    <Link
      className="flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground p-4 py-2 font-roboto capitalize"
      title={label}
      href={url}
    >
      <Icon className="w-5 h-5 " />

      {!isMinimized && <span className="ml-2">{label}</span>}
    </Link>
  );
};
