"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/navigation";
import HeyText from "@/sections/hey-text";
import ProjectOneCard from "@/sections/project-one-card";
import ProjectTwoCard from "@/sections/project-two-card";
import ProjectThreeCard from "@/sections/project-three-card";
import * as React from "react";
import Footer from "@/sections/footer";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Home() { 
  const projects = [
    { component: ProjectOneCard, href: "/projects/melatech-mobile" },
    { component: ProjectTwoCard, href: "/projects/melatech-desktop" },
    { component: ProjectThreeCard, href: "/projects/alone-mode" },
    // { component: ProjectFourCard, href: "/projects/alone-mode" },
  ];
  const router = useRouter();
  return (

<div>

<div
      className={
        "w-full border-b bg-background sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80"}
    >
      <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center gap-3 px-4 sm:px-6">
        {/* Left: Label */}
        <div className="text-base font-semobold sm:text-lg">
        {/* truncate */}
            <span className="shapeSun">Maggie G.</span>
        </div>

        {/* Right: Tabs */}
        
         <div className="flex items-center gap-3 ml-auto sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80">
             <Button
               variant="ghost"
               size="sm"
               className="nav-button"
               onClick={()=>router.push("/")}
            >Home
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

     <main className="background-color">
     
     {/* flex flex-col gap-[32px] row-start-2 items-center sm:items-start */}
     {/* <span className="shapeBrownOval justify-items-right"> */}
     {/* <span className="shapeGreenOval justify-items-right"> */}
     {/* <span className="shapeYellowOval justify-items-left"> */}

<motion.div
  className="shapeBlueOval"
  animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  className="shapeBrownOval"
  animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  className="shapeGreenOval"
  animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  className="shapeYellowOval"
  animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
/>



{/* Hey section */}
<motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.01 }}
    variants={containerVariants}
    className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]"
  >
    {/* Hey section */}
    <motion.div variants={sectionVariants} className="pt-125 mx-auto">
      <HeyText />
    </motion.div>
    </motion.div>
      
        {/* </span> */}
        {/* </span> */}
        {/* </span> */}


        <motion.div variants={containerVariants} className="grid p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
        {projects.map(({ component: ProjectComponent, href }, i) => (
            <motion.div
              key={i}
              variants={containerVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="cursor-pointer"
              onClick={() => router.push(href)}
            >
              <ProjectComponent />
            </motion.div>
          ))}
        </motion.div>



        </main> 
    
    <Footer/>
</div>
 ); }
