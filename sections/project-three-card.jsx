"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import AloneMode from "@/sections/alone-mode/alone-mode-logo";

const ProjectThreeCard = () => {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push("/projects/alone-mode")}
      className="
        w-full cursor-pointer border border-gray-200 rounded-lg p-5 flex flex-col gap-4 shadow-md
        bg-[#F5F1EE] transition-all duration-300 overflow-hidden
        hover:bg-gradient-to-b from-[#EBB459]/40 to-gray-50
      "
    >
      {/* Thumbnail */}
      <div className="w-full rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
        <AloneMode className="max-w-[85%] h-auto object-contain" />
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-normal mt-2 text-gray-500">
          <span className="YellowShine">DTU</span>
        </p>

        <h2 className="text-lg font-medium">
          Alone Mode - Breaking the cycle of addiction by design
        </h2>

        <p className="text-base mt-1.5 text-gray-500">
          UX/UI Design • Wireframes & Prototyping • Master thesis • CHI Paper
        </p>
      </div>
    </Card>
  );
};

export default ProjectThreeCard;