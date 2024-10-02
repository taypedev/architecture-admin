export function pathToRoute(path: string): string {
  if (path === "/") return "/";
  return path.startsWith("/") ? path.slice(1) : path;
}

export const pathMenu = {
  home: {
    path: "/",
  },

  dashboard: {
    path: "dashboard",
  },
  tabs: {
    path: "dashboard/tabs",
  },
  modals: {
    path: "dashboard/modals",
  },
  analytics: {
    path: "analytics",
  },
  settings: {
    path: "settings",
  },

  blog: {
    path: "blog",
  },
};
