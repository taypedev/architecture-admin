"use client";

import { TAuthRoles } from "@/common/types/auth/auth.types";
import { pathToRoute } from "@/herlpers/route.helper";
import { User } from "next-auth";
// import { headers } from "next/headers";
import { usePathname } from "next/navigation";
import DashboardHeader from "./dashboard-header";

const adminRoutes = [
  {
    path: "dashboard",
    element: <DashboardHeader />,
  },
  {
    path: "/dashboard/*",
    element: <DashboardHeader />,
  },
  {
    path: "/*",
    element: null,
  },
];

const clientRoutes = [
  {
    path: "dashboard",
    element: <DashboardHeader />,
  },
  {
    path: "/dashboard/*",
    element: null,
  },
  {
    path: "/*",
    element: null,
  },
];

export default function Header({ user }: { user: User | null }) {
  let headerRoutes: {
    path: string;
    element: React.ReactNode | null;
  }[] = [
    {
      path: "/*",
      element: null,
    },
  ];

  if (user?.role === TAuthRoles.admin) {
    headerRoutes = adminRoutes;
  }
  if (user?.role === TAuthRoles.user) {
    headerRoutes = clientRoutes;
  }

  // const headersList = headers();
  // const pathname = headersList.get("x-url") || "";
  const pathname = usePathname();

  const PAGE = headerRoutes.find((route) => {
    if (route.path.endsWith("/*")) {
      const basePath = route.path.slice(0, -2);
      return pathname === basePath || pathname.startsWith(basePath + "/");
    } else {
      return route.path === pathToRoute(pathname);
    }
  });

  return PAGE?.element ?? null;
}
