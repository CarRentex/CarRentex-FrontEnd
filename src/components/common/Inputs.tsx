import React, {
  ComponentPropsWithRef,
  useEffect,
  useRef,
  useState,
} from "react";
import EyeOffSVG from "../../assets/icons/eye-off.svg"
import EyeOnSVG from "../../assets/icons/eye-on.svg";
import { twMerge } from "tailwind-merge";
import {
  NumericFormat,
  NumericFormatProps,
  PatternFormat,
  PatternFormatProps,
} from "react-number-format";

export type InputValidationProps = {
  error?: string;
  maxCharacter?: number;
};

export const TextInput = React.forwardRef<
  HTMLInputElement,
  ComponentPropsWithRef<"input"> & InputValidationProps
>(({ className, onClick, error, ...rest }, ref) => {
  // Solution to input not being editable after chrome autocomplete
  function focusAndClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.currentTarget.value = e.currentTarget.value + "";
    onClick?.(e);
  }

  return (
    <input
      ref={ref}
      onClick={focusAndClick}
      className={twMerge(
        "w-full rounded-full py-2.5 pl-4 text-sm max-md:text-xs",
        "text-base placeholder:text-black200",
        "outline outline-1 outline-black focus-visible:outline-yellow500",

        error && "text-red-500 outline-red-500 focus-visible:outline-red-500",
        className,
      )}
      {...rest}
    />
  );
});

// @ts-ignore
TextInput.displayName = "TextInput";

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  ComponentPropsWithRef<"input"> & InputValidationProps
>(({ className, onClick, error, ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Solution to input not being editable after chrome autocomplete
  function focusAndClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.currentTarget.value = e.currentTarget.value + "";
    onClick?.(e);
  }

  return (
    <div className={twMerge("relative w-full", className)}>
      <input
        ref={ref}
        onClick={focusAndClick}
        type={showPassword ? "text" : "password"}
        className={twMerge(
          "w-full rounded-full py-2.5 pl-4 text-sm max-md:text-xs",
          "text-base placeholder:text-black200",
          "outline outline-1 outline-black focus-visible:outline-yellow500",
          error && "text-red-500 outline-red-500 focus-visible:outline-red-500",
          className,
        )}
        {...rest}
      />
      
    </div>
  );
});

// @ts-ignore
PasswordInput.displayName = "PasswordInput";

export const NumericFormatInput = React.forwardRef<
  HTMLInputElement,
  NumericFormatProps & InputValidationProps
>(({ className, onClick, error, ...rest }, ref) => {
  // Solution to input not being editable after chrome autocomplete
  function focusAndClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.currentTarget.value = e.currentTarget.value + "";
    onClick?.(e);
  }

  return (
    <NumericFormat
      getInputRef={ref}
      onClick={focusAndClick}
      // onValueChange={(values, sourceInfo) => {
      //   const { formattedValue, value } = values;
      //   setValue(Number(value));
      // }}
      className={twMerge(
        "bg-blue100 w-full rounded-full py-2.5 pl-4",
        "disabled:cursor-not-allowed",
        "text-blue500 text-base placeholder:text-black200",
        "focus-visible:outline-blue200 outline outline-1 outline-black200/50",
        error && "text-red400 outline-red400 focus-visible:outline-red400",
        className,
      )}
      {...rest}
    />
  );
});

// @ts-ignore
NumericFormatInput.displayName = "NumericFormatInput";