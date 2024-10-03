import { pathMenu, pathToRoute } from "@/herlpers/route.helper";
import { headers } from "next/headers";
import DashboardAside from "./dashboard-aside";
import { User } from "next-auth";
import { TAuthRoles } from "@/common/types/auth/auth.types";

interface IAsideProps {
  user: User | null;
}

const adminRoutes = [
  {
    path: "dashboard",
    element: <DashboardAside />,
  },
  {
    path: "/dashboard/*",
    element: <DashboardAside />,
  },
  {
    path: pathMenu.home.path,
    element: null,
  },
  {
    path: "/*",
    element: null,
  },
];

const clientRoutes = [
  {
    path: "dashboard",
    element: <DashboardAside />,
  },
  {
    path: "dashboard/test",
    element: null,
  },
  {
    path: "/dashboard/*",
    element: null,
  },
];

export default function Aside({ user }: IAsideProps) {
  let asideRoutes: {
    path: string;
    element: React.ReactNode | null;
  }[] = [
    {
      path: "/*",
      element: null,
    },
  ];

  if (user?.role === TAuthRoles.admin) {
    asideRoutes = adminRoutes;
  }

  if (user?.role === TAuthRoles.user) {
    asideRoutes = clientRoutes;
  }

  const headersList = headers();
  const pathname = headersList.get("x-url") || "";

  const PAGE = asideRoutes.find((key) => {
    return key.path.endsWith("/*")
      ? pathname.startsWith(key.path.slice(0, -2))
      : key.path === pathToRoute(pathname);
  });

  return PAGE?.element ?? null;
}
