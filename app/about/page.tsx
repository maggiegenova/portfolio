"use client";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image"; 
import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/navigation";
import * as React from "react";
import FunFactsGrid from "./fun-facts";
import AboutDescription from "./about-description"
import ProfilePicture from "@/sections/profile-image"
import Footer from "@/sections/footer";

const introVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};


const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function AboutMe() {
  const router = useRouter();
  return (
    <div>

      {/* Navbar */}
      <div className="w-full border-b bg-background sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center gap-3 px-8">
          {/* Left: Label */}
          <div className="text-base font-semobold sm:text-lg">
            <span className="shapeSun">Maggie G.</span>
          </div>

          {/* Right: Tabs */}
          <div className="flex items-center gap-3 ml-auto">
            <Button
              variant="ghost"
              size="sm"
              className="nav-button"
              onClick={() => router.push("/")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="nav-button"
              onClick={() => router.push("/about")}
            >
              About me
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="background-color">

<div className="flex flex-col lg:flex-row items-start justify-between rounded-lg p-6 md:p-8 lg:p-10 gap-10 md:gap-16 lg:gap-20">

<motion.div
      className="flex flex-col lg:flex-row items-center justify-between rounded-lg p-8 gap-10 md:gap-16 lg:gap-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={introVariants}
    >
      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-4"
        variants={introVariants}
      >
        <motion.p variants={paragraphVariants} className="text-sm font-medium text-[#4B5161]">
          Hi there and thank you for stopping by!
        </motion.p>

        <motion.h2 variants={paragraphVariants} className="text-[#4B5161]">
          My name is Margarita (Maggie) and I&apos;m an end-to-end designer based in Copenhagen, Denmark. 
        </motion.h2>

        <motion.p variants={paragraphVariants} className="text-[#4B5161]">
          Currently, I&apos;m a designer at Melatech where we create software that helps clinicians to register and follow up on skin cancer.
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-[#4B5161]">
          I&apos;m curious by nature and love diving into complex problems, figuring out how people interact with technology and turning that into simple, intuitive solutions. Seeing an idea move from concept to something people actually use - and working with a team to get there - is what makes design exciting for me.
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-[#4B5161]">
          In design, I care about accessibility, clean interfaces and products that feel human. I like collaborating with diverse teams, testing assumptions and iterating until everything flows naturally.
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-[#4B5161]">
          When I&apos;m not designing, I&apos;m probably baking something sweet, playing board games with friends or getting hooked on true crime docs on Netflix.
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center"
        variants={paragraphVariants} 
      >
        <ProfilePicture />
      </motion.div>
    </motion.div>
    </div>

        {/* Additional sections */}
        <div className="flex flex-col lg:flex-row items-start justify-between rounded-lg p-6 md:p-8 lg:p-10 gap-4 md:gap-16 lg:gap-20">
        <div className="grid p-8 gap-12 font-[family-name:var(--font-geist-sans)]">

          {/* How would I describe myselft?  */}
          {/* z-[-1] */}


          <div className="overflow-visible">
  <AboutDescription/>
</div>


          {/* Random facts about me */}
          <div>
          <FunFactsGrid/>
          </div>

          </div>
          </div>
       
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
