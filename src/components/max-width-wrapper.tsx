import { cn } from "@/lib/utils";
import React, { ReactNode, HTMLAttributes } from "react";

interface MaxWidthWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string; // Optional className
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <main className={cn("max-w-screen-2xl m-auto", className)} {...props}>
      {children}
    </main>
  );
};

export default MaxWidthWrapper;
