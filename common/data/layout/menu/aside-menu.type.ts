import { Icons } from "@/common/types/layout/icons.types";
import { IMenuItemAsideProps } from "@/components/layout/aside/menu-item-aside";

export type TAsideMenuItem = {
  icon: keyof typeof Icons;
  url: string;
  label: string;
  items?: Omit<IMenuItemAsideProps, "items" | "isMinimized">[];
};
