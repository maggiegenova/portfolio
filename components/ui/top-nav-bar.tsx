import * as React from "react";
import { cn } from "@/lib/utils"; // optional, if you have shadcn's cn helper; otherwise remove and use className directly
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

/**
 * TopNavBar
 * - Left: label/title
 * - Right: two (or more) tabs aligned to the right
 *
 * Usage:
 * <TopNavBar
 *   label="Dashboard"
 *   tabs={[
 *     { value: "overview", label: "Overview" },
 *     { value: "analytics", label: "Analytics" },
 *   ]}
 *   value={tab}
 *   onValueChange={setTab}
 * />
 */

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
  /**
   * When true, the bar is fixed to the top with a subtle shadow.
   */
  sticky?: boolean;
};

export default function TopNavBar({
  label,
  tabs,
  value,
  onValueChange,
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

// --- Optional demo component ---
// export function TopNavBarDemo() {
//   const [tab, setTab] = React.useState("tab1");

//   return (
//     <div className="min-h-[40vh]">
//       <TopNavBar
//         label={<span className="select-none">My App</span>}
//         tabs={[
//           { value: "tab1", label: "Tab One" },
//           { value: "tab2", label: "Tab Two" },
//         ]}
//         value={tab}
//         onValueChange={setTab}
//         sticky
//       />

//       <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6">
//         {tab === "tab1" ? (
//           <div className="text-sm text-muted-foreground">
//             Content for Tab One
//           </div>
//         ) : (
//           <div className="text-sm text-muted-foreground">
//             Content for Tab Two
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// <div className="flex items-center gap-3 ml-auto sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="text-sm font-medium hover:bg-accent hover:text-accent-foreground"
//             >
//               Home
//             </Button>
//             <Button
//               size="sm"
//               className="text-sm font-medium px-4 h-9 rounded-md shadow-sm"
//             >
//               About me
//             </Button>
//           </div>