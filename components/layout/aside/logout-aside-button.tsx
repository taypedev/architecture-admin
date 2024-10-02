import { logout } from "@/actions/auth/logout.action";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import React from "react";

interface ILogoutAsideButtonProps {
  isMinimized: boolean;
}

const LogoutAsideButton: React.FC<ILogoutAsideButtonProps> = ({
  isMinimized,
}) => {
  return (
    <Button
      variant="ghost"
      className="w-full justify-center md:justify-start gap-2 items-center bg-red-600 text-white hover:text-red-600 hover:bg-red-200 font-grotesk text-sm uppercase font-bold"
      onClick={() => {
        logout();
      }}
    >
      <LogOut className="h-4 w-4" />
      {!isMinimized && <span>Logout</span>}
    </Button>
  );
};

export default LogoutAsideButton;
