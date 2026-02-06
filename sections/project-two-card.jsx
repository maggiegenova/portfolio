"use client";
import React from 'react'
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation";
import MelatechLogo from "@/sections/melatech-logo"
import SeeCaseButton from "@/sections/see-case-button"

const ProjectTwoCard = () => {
  const router = useRouter();
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <div className="flex flex-col lg:flex-row items-start justify-between rounded-lg p-6 md:p-8 lg:p-10 gap-10 md:gap-16 lg:gap-20">
        
        {/* Image - left on large screens */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
          <div className="w-full">
             {/* Add shape */}
            <MelatechLogo />
          </div>
        </div>

        {/* Text - right on large screens */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <p className="text-sm font-medium text-[#4B5161]">
            <span className="greenCrown">Melatech ApS</span>
          </p>

          <h2 className="text-lg font-medium">
            Dermloop - Closing the communication gap: Redesigning follow-ups in teledermatology
          </h2>

          <p className="text-sm text-[#4B5161]">
           Desktop | User research | Wireframes &amp; Prototyping
          </p>

          <div className="mt-8">
          <button onClick={() => router.push("/projects/melatech-desktop")}>
              <SeeCaseButton />
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProjectTwoCard
