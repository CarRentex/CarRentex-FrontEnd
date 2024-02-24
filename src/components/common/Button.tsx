"use client";
import { twMerge } from "tailwind-merge";
import Spinner from "@/public/icons/spinner.svg";

import * as React from "react";
import clsx from "clsx";

enum ButtonVariant {
  "secondary",
  "secondary-outline",
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading = false,
      variant = "secondary",
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={twMerge(
          "flex cursor-pointer items-center justify-center gap-3 rounded-full px-4 py-2.5 text-sm",
          "focus:outline-none focus-visible:ring focus-visible:ring-offset-1",
          "shadow-sm",
          "transition-colors duration-75",
          //#region  //*=========== Variants ===========
          [
            variant === "secondary" && [
              "bg-red-600 text-black",
              "shadow-none",
              "hover:enabled:black/50 hover:enabled:bg-yellow500/90",
              "disabled:bg-black100",
            ],
            variant === "secondary-outline" && [
              "border border-yellow500 bg-zinc-500 text-black",
              "shadow-none",
              "hover:text-black hover:enabled:bg-orange-300",
              "disabled:bg-black100",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed disabled:text-black300 disabled:opacity-50",
          isLoading &&
            "relative text-transparent transition-none disabled:cursor-wait disabled:text-transparent [&>*:not(.loading)]:invisible",
          className,
        )}
        {...rest}
      >
       
        {children}
      </button>
    );
  },
);

// @ts-ignore
Button.displayName = "Button";

export default Button;
