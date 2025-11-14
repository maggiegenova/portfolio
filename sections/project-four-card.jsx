"use client";
import React from 'react'
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation";
import PlutoLogo from "@/sections/pluto-logo"
import SeeCaseButton from "@/sections/see-case-button"

const ProjectFourCard = () => {
  const router = useRouter();
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <div className="flex flex-col lg:flex-row items-start justify-between rounded-lg p-6 md:p-8 lg:p-10 gap-10 md:gap-16 lg:gap-20">
        
        {/* Image - left on large screens */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
          <div className=" w-full">
             {/* Add shape */}
            <PlutoLogo />
          </div>
        </div>

        {/* Text - right on large screens */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <p className="text-sm font-medium text-[#4B5161]">
            <span className="BlueStarPlaceholder">Pluto Technologies ApS</span>
          </p>

          <h2 className="text-lg font-medium">
            Road List View - A clearer way to see and prioritize road damage
          </h2>

          <p className="text-sm text-[#4B5161]">
            UI | Wireframes &amp; Prototyping
          </p>

          <div className="mt-8">
          <button onClick={() => router.push("/projects/pluto")}>
              <SeeCaseButton />
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProjectFourCard
