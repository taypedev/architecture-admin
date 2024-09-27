import { pathMenu, pathToRoute } from "@/herlpers/route.helper";
import { headers } from "next/headers";
import HomeHeader from "./home-header";
import DashboardHeader from "./dashboard-header";

const headerRoutes = [
  {
    path: "dashboard",
    element: <DashboardHeader />,
  },

  {
    path: pathMenu.home.path,
    element: <HomeHeader />,
  },
  {
    path: "/*",
    element: null,
  },
];

export default function Header() {
  const headersList = headers();
  const pathname = headersList.get("x-url") || "";

  const PAGE = headerRoutes.find((key) => {
    return key.path.endsWith("/*")
      ? pathname.startsWith(key.path.slice(0, -2))
      : key.path === pathToRoute(pathname);
  });

  return PAGE?.element ?? null;
}
