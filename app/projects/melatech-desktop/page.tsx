"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import * as React from "react";
import PageNotFound from "@/sections/page-not-found-icon";

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

export default function MelatechDesktop() {
  const router = useRouter();

  return (
    <div>
      {/* Navbar */}
      <div className="w-full border-b bg-background sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center gap-3 px-8">
          <div className="text-base font-semobold sm:text-lg">
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
            <PageNotFound />
          </motion.div>

          {/* Animated text */}
          <motion.h1
            className="text-2xl font-semibold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Oops - you caught me mid-build! 🚀
          </motion.h1>

          <motion.p
            className="text-gray-500 max-w-md"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Check out my other projects while I get this one ready. But if you’re too curious, I can still give you a sneak peek on request. 👀
          </motion.p>
        </div>
      </main>

      {/* Footer */}
      <footer className="items-center justify-items-center p-8 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col items-center justify-center gap-4 font-[family-name:var(--font-geist-sans)]">
          <div className="text-base font-semobold sm:text-lg">
            <span className="shapeSun">Maggie G.</span>
          </div>
          <div className="font-medium">Let's connect!</div>
          <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <a className="socialMediaTabsContainer" href="https://www.linkedin.com/in/margarita-genova/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.svg" alt="LinkedIn logo" width={35} height={35} />
            </a>
            <a className="socialMediaTabsContainer" href="mailto:maggiegenova@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image aria-hidden src="/email.svg" alt="Email logo" width={40} height={40} />
            </a>
            <a className="socialMediaTabsContainer" href="https://github.com/maggiegenova" target="_blank" rel="noopener noreferrer">
              <Image aria-hidden src="/github.svg" alt="GitHub logo" width={35} height={35} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
