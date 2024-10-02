import { pathMenu } from "@/herlpers/route.helper";
import { TAsideMenuItem } from "./aside-menu.type";

export const asideMenuData: TAsideMenuItem[] = [
  {
    icon: "dashboard",
    label: "Collapsible",
    url: "/" + pathMenu.dashboard.path,
    items: [
      {
        icon: "home",
        label: "Home",
        url: "/" + pathMenu.dashboard.path,
      },
      {
        icon: "settings",
        label: "Settings",
        url: "/" + pathMenu.settings.path,
      },
      {
        icon: "gitHub",
        label: "Blog",
        url: "/" + pathMenu.blog.path,
      },
    ],
  },
  {
    icon: "kanban",
    label: "Tabs",
    url: "/" + pathMenu.tabs.path,
  },
  {
    icon: "pizza",
    label: "Modals",
    url: "/" + pathMenu.modals.path,
  },
  {
    icon: "employee",
    label: "Analytics",
    url: "/" + pathMenu.analytics.path,
  },
  {
    icon: "settings",
    label: "Settings",
    url: "/" + pathMenu.settings.path,
  },
  {
    icon: "gitHub",
    label: "Blog",
    url: "/" + pathMenu.blog.path,
  },
];
