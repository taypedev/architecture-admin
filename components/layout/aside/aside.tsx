import { pathMenu, pathToRoute } from "@/herlpers/route.helper";
import { headers } from "next/headers";
import DashboardAside from "./dashboard-aside";

const asideRoutes = [
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

export default function Aside() {
  const headersList = headers();
  const pathname = headersList.get("x-url") || "";

  const PAGE = asideRoutes.find((key) => {
    return key.path.endsWith("/*")
      ? pathname.startsWith(key.path.slice(0, -2))
      : key.path === pathToRoute(pathname);
  });

  return PAGE?.element ?? null;
}
