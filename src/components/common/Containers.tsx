import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const PageTopPaddingContainer = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  return <div className={twMerge("pt-20 md:pt-28", className)} {...rest} />;
};

export const PageHorizontalPaddingContainer = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "mx-auto w-full max-w-[1340px] px-5 md:px-10",
        className
      )}
      {...rest}
    />
  );
};

export const DropdownFormContainer = ({
  children,
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={`mx-auto flex flex-row  flex-wrap justify-center md:flex-nowrap  ${
      className ? className : ""
    }`}
    {...rest}
  >
    {children}
  </div>
);

export const FormGroupContainer = ({
  children,
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`flex w-full flex-col items-start justify-start gap-2 text-[#5c5c5c] ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};