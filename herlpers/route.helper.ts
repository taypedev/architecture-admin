export function pathToRoute(path: string): string {
  if (path === "/") return "/";
  return path.startsWith("/") ? path.slice(1) : path;
}

export const pathMenu = {
  home: {
    path: "/",
  },
};
