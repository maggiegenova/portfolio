"use client";
import React from 'react'
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation";
import AloneMode from "@/sections/alone-mode/alone-mode-logo"
import SeeCaseButton from "@/sections/see-case-button"

const ProjectThreeCard = () => {
  const router = useRouter();
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <div className="flex flex-col lg:flex-row items-start justify-between rounded-lg p-6 md:p-8 lg:p-10 gap-10 md:gap-16 lg:gap-20">
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <p className="text-sm font-medium text-[#4B5161]">
            <span className="YellowShine">DTU</span>
          </p>

          <h2 className="text-lg font-medium">
            Alone Mode - Breaking the cycle of addiction by design
          </h2>

          <p className="text-sm text-[#4B5161]">
            UX/UI Design | Wireframes &amp; Prototyping | Master thesis | CHI Paper
          </p>

          <div className="mt-8">
          <button onClick={() => router.push("/projects/alone-mode")}>
              <SeeCaseButton />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          {/* Add shape */}
          <div>
            <AloneMode />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProjectThreeCard
