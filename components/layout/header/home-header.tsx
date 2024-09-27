import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <header className="bg-background h-[65px] md:h-[75px] w-full sticky top-0 z-10 shadow-md flex items-center w-f">
      <nav className="w-full flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href={"/dashboard"} className="font-roboto">
              Go to dashboard
            </Link>
          </Button>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
