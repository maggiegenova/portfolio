"use client";
import React from 'react'
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation";
import MelatechLogo from "@/sections/melatech-logo"
import SeeCaseButton from "@/sections/see-case-button"

const ProjectOneCard = () => {
  const router = useRouter();
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <div className="flex flex-col lg:flex-row items-start justify-between rounded-lg p-6 md:p-8 lg:p-10 gap-10 md:gap-16 lg:gap-20">
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <p className="text-sm font-medium text-[#4B5161]">
            <span className="blueStar">Melatech ApS</span>
          </p>

          <h2 className="text-lg font-medium">
          Improving evaluation accuracy by solving duplicate record challenges in Dermloop
          </h2>

          <p className="text-sm text-[#4B5161]">
           Mobile | User research | Wireframes &amp; Prototyping | Project management
          </p>

          <div className="mt-8">
            <button onClick={() => router.push("/projects/melatech-mobile")}>
              <SeeCaseButton/>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <div className="w-full">
             {/* Add shape */}
            <MelatechLogo />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProjectOneCard
