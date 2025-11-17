import * as React from "react";
import { cn } from "@/lib/utils"; // optional, if you have shadcn's cn helper; otherwise remove and use className directly
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export type TopNavTab = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
};

export type TopNavBarProps = {
  label: React.ReactNode;
  tabs: TopNavTab[];
  value: string;
  onValueChange?: (value: string) => void;
  className?: string;
  sticky?: boolean;
};

export default function TopNavBar({
  label,
  tabs,
  value,
  className,
  sticky = false,
}: TopNavBarProps) {
  return (
    <div
      className={cn(
        "w-full border-b bg-background",
        sticky && "sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center gap-3 px-4 sm:px-4">
        {/* Left: Label */}
        <div className="truncate text-base font-semobold sm:text-lg">
          {label}
        </div>

        {/* Right: Tabs */}
        <Tabs
           value={value}
        //    onValueChange={onValueChange}
          className="ml-auto "
        >
            
          <TabsList>
            {tabs.map((t) => (
              <TabsTrigger key={t.value} value={t.value} disabled={t.disabled}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
