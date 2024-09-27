"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { ControllerRenderProps } from "react-hook-form";
import { InputIcons } from "./input-icons.types";
import { cn } from "@/lib/utils";

interface IFormInputPrimaryProps {
  icon?: keyof typeof InputIcons;
  classNameContainer?: string;
  classNameInput?: string;
  classNameIcon?: string;
  field: React.InputHTMLAttributes<HTMLInputElement> &
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ControllerRenderProps<Record<string, any>>;
}

const FormInputPrimary: React.FC<IFormInputPrimaryProps> = ({
  icon,
  classNameContainer = "",
  classNameIcon = "",
  classNameInput = "",
  field,
}) => {
  const Icon = icon ? InputIcons[icon] : null;

  return (
    <div
      className={cn(
        classNameContainer,
        "relative overflow-hidden rounded-[11px]"
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            classNameIcon,
            `absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground `
          )}
        />
      )}

      <Input className={cn(classNameInput, `pl-10 rounded-xl`)} {...field} />
    </div>
  );
};

export default FormInputPrimary;
