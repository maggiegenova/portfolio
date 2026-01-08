"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import * as React from "react";
import PageLocked from "@/sections/page-locked";
import SeeCaseButton from "@/sections/see-case-button"
import Footer from "@/sections/footer";

const floatVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function MelatechMobile() {
  const router = useRouter();

  return (
    <div>
      {/* Navbar */}
      <div className="w-full border-b bg-background sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center gap-3 px-8">
        <div 
        className="text-base font-semobold sm:text-lg cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => router.push("/")}
        >
        {/* truncate */}
            <span className="shapeSun">Maggie G.</span>
        </div>
          <div className="flex items-center gap-3 ml-auto">
            <Button variant="ghost" size="sm" className="nav-button" onClick={() => router.push("/")}>
              Home
            </Button>
            <Button variant="ghost" size="sm" className="nav-button" onClick={() => router.push("/about")}>
              About me
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="background-color flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          
          {/* Animated icon */}
          <motion.div
            className="w-20 h-20 mb-4"
            variants={floatVariants}
            animate="animate"
          >
            <PageLocked />
          </motion.div>

          {/* Animated text */}
          <motion.h1
            className="text-2xl font-semibold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Hold up! This one is a secret. 🔐
          </motion.h1>

          <motion.p
            className="text-gray-500 max-w-md"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            This case study is locked and intended for a specific audience. If I’ve already shared the password with you, click the button below to dive in! 👀
          </motion.p>
          {/* Updated Button Container */}
<motion.div
  variants={textVariants}
  initial="hidden"
  animate="visible"
  custom={2}
  className="w-full flex justify-center pt-4" // This centers the child
>
  <a
    href="https://crypto.hypermatic.com/prototype/mk4f2pwe7406z/0PkPywwW8VH9EzQAZho9"
    target="_blank"
    rel="noopener noreferrer"
    className="display-contents" 
    style={{ display: 'contents' }} 
  >
    <div className="flex flex-col items-center w-fit">
      <SeeCaseButton />
    </div>
  </a>
</motion.div>


        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
