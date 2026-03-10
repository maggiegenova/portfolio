"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import DermloopDesktop from "@/sections/dermloop-desktop";

const ProjectTwoCard = () => {
  const router = useRouter();

  return (
      <Card
        onClick={() => router.push("/projects/melatech-desktop")}
        className="w-full cursor-pointer border border-gray-200 rounded-lg p-5 flex flex-col gap-4 shadow-md
    bg-[#F5F1EE] transition-all duration-300 overflow-hidden
    hover:bg-gradient-to-b from-[#EBB459]/40 to-gray-50
  "
        // cursor-pointer border border-gray-200 rounded-lg p-5 flex flex-col gap-4 shadow-sm bg-[#F9F4F2]/1 h-full"
      >
        {/* Thumbnail */}
        <div className="w-full rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
  <DermloopDesktop className="w-fill h-fill object-contain" />
</div>

        {/* Text content */}
        <div className="flex flex-col gap-2 flex-grow">
          <p className="text-sm font-normal mt-2 text-gray-500">
            <span className="greenCrown">Melatech ApS</span>
          </p>

          <h2 className="text-lg font-medium ">
            Dermloop - Closing the communication gap: Redesigning follow-ups in teledermatology
          </h2>

          <p className="text-base mt-1.5 text-gray-500">
            Desktop • User research • Wireframes & Prototyping
          </p>
        </div>

        {/* <div className="pt-2">
          <SeeCaseButton/>
        </div> */}
      </Card>
  );
};

export default ProjectTwoCard;