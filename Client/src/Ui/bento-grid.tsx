// BentoGrid.tsx
import React from "react";
import { cn } from "../Utils/cn.ts";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-row flex-wrap justify-center items-center w-full space-x-4 space-y-5"
        // "grid grid-cols-1 bg-white md:grid-cols-3 gap-4 max-w-full ",
        // className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border border-transparent flex flex-col items-center justify-center space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col items-center">
        {icon}
        <div className="font-sans font-bold text-neutral-600 mb-2 mt-2 text-center">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs text-center">
          {description}
        </div>
      </div>
    </div>
  );
};
