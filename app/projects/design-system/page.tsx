"use client";
import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/navigation";
import * as React from "react";
import { motion, Variants } from "framer-motion";
import Footer from "@/sections/footer";
import DesignSystem from "@/sections/design-system";
import ComponentsBefore from "@/sections/design-system/components-before";
import VariantsGallery from "@/sections/design-system/variant-gallery";
import MobileWebImageComponent from "@/sections/design-system/mobile-web-components";
import ActionButtonImageComponent from "@/sections/design-system/button-properties";


const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

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

function AnimatedHeading({ text }: { text: string }) {
  return (
    <span className="relative inline-block text-lg font-medium pb-[1em] w-max">
      {text}

      <svg
        className="absolute left-0 bottom-0 w-full h-[1.9em] z-[-1]"
        viewBox="0 -25 500 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0 12.8202 C74.9562 8.97548 459.937 4.23467 492.5 12.8202"
          stroke="#EBB459"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </svg>
    </span>
  );
}

export default function ProjectFourCard() {
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
            <span className="shapeSun">Maggie G.</span>
          </div>
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
                Melatech ApS
              </motion.p>

              <motion.h2 variants={paragraphVariants} className="text-lg font-medium text-[#4B5161]">
              Design System: Building and maintaining Dermloop&apos;s design system
              </motion.h2>

              <motion.p variants={paragraphVariants} className="text-[#4B5161]">
                How I moved Dermloop from manual UI guesswork to a scalable system of variables and smart components, bridging our custom app and web platforms.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-sm font-medium pt-8">
                My Role
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-sm text-[#4B5161]">
                Solo Product Designer (End-to-end architecture & governance)
              </motion.p>

            </motion.div>
            

            <motion.div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
              variants={paragraphVariants}
            >
              <DesignSystem />
            </motion.div>
          </motion.div>
        </div>

        {/* Problem */}
        <div className="flex flex-col lg:flex-row items-start justify-between rounded-lg p-6 md:p-8 lg:p-10 gap-4 md:gap-16 lg:gap-20">
          <div className="grid p-8 gap-12 font-[family-name:var(--font-geist-sans)]">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              <AnimatedHeading text="The Problem: A world without rules" />

              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
              When I joined the team, I did&apos;t just find a lack of components - I found &quot;invisible friction.&quot; Because the platform was built by engineers without a design touch, every new feature was a guessing game.
              I found ten different shades of gray, buttons with different rounded corners, and no rules for spacing. This wasn&apos;t just a visual mess - it was a speed problem. Developers were spending time debating hex codes instead of solving medical challenges. We were reinventing the wheel with every single task.
              </motion.p>

              <motion.div variants={paragraphVariants} className="text-base text-[#4B5161]">
                <ComponentsBefore/>
              </motion.div>

            </motion.div>

            {/* Technical Foundation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
             
              <AnimatedHeading text="Technical Foundation: Basics aren’t basic" />
 
              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
              I knew that for a system to last, the foundations had to be bulletproof. I started by defining the <i>&quot;Atomic&quot;</i> level: colors, typography, and spacing.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
              Smart naming and logic 
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        Naming the variables was a process of trial and error. I didn&apos;t just name a color &quot;blue-500&quot; - I ended up creating semantic variables like <i>action-primary</i>. This means the name describes what the color does, not just how it looks.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
              Designing for context 
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        I also built <i>&quot;Modes&quot;</i> directly into these variables. Since some of our main components are used on different backgrounds based on the context, I created <i>Light</i> and <i>Dark</i> versions of them. By setting this up in Figma, a component now &quot;knows&quot; to switch its contrast automatically when moved from a white background to a dark sidebar. This removed the guesswork for the developers and kept our accessibility standards high.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
              Continuous evolution 
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        As Figma released new functionalities, I updated the system to take advantage of them. While the foundation and visual style stayed the same, the way the system worked under the hood became more advanced. This allowed me to keep the system modern and efficient without breaking the existing designs.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
                <VariantsGallery/>
             {/* <   BordersAndShadowsGallery /> */}
              </motion.p>{/**/}
            </motion.div> 

            {/* Hybrid Challenge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              <AnimatedHeading text="The Hybrid Challenge: Bridging app & web" />

              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
              When I started, we didn&apos;t have a component library. I began by building every component from scratch to fit our specific needs. However, as the team grew, we realized we needed a more efficient way to build for the web.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
              Choosing flexibility
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        We made the strategic decision to shift our web platform to shadcn. We chose this library because it is flexible enough to let us apply our unique styling to their pre-built structures. This allowed us to move faster without losing our brand identity.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
              Managing two systems
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        As of now, due to technical restrictions, we use these new components for the web while still supporting my original custom components for the mobile app. To keep these two worlds from drifting apart, I acted as the bridge between them.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
              By using the same variable tokens - like padding, corners, and brand colors - I ensured that both systems stay aligned. Whether a doctor uses their phone or a laptop, the interface feels like one single, reliable tool.
              </motion.p>


              <motion.div variants={paragraphVariants} className="text-base text-[#4B5161]">
                <MobileWebImageComponent/>
              </motion.div>{/**/}
            </motion.div> 

            {/* Intuitive Components */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              <AnimatedHeading text="Intuitive Components: Logic over pixels" />

              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
              I moved away from  &quot;static drawings&quot; and started building Smart Components. For every element - from a simple button to a complex  card - I defined every possible state: Default, Hover, Active, Disabled, and Loading.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
              I used Figma&apos;s boolean properties and variants so the components were &quot;defensive.&quot; This means they were built to be hard to break. If a developer needed a button with an icon, they didn&apos;t have to move pixels; they just toggled a switch in the properties panel.
              </motion.p>

              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
                <ActionButtonImageComponent/>
              </motion.p>{/**/}
            </motion.div> 

            {/* Governance */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              <AnimatedHeading text="Governance: Maintaining the truth" />

              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
              A design system is only as good as its last update. To prevent &quot;system bloat,&quot; I became the filter for every new request. I established a strict workflow:
              </motion.p>
            <motion.div
        className="w-full flex justify-left items-center"
        variants={paragraphVariants} 
      >
        <ul className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                The audit:
              </code> If we need a new element, can an existing component be adapted first?
            </li>
            <li className="mb-2 tracking-[-.01em]">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                The global test: 
              </code> Is this a one-time fix or a pattern we can reuse elsewhere?
            </li>
            <li className="mb-2 tracking-[-.01em]">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                The brainstorm:
              </code> I align with the dev team to ensure the new component is technically feasible before I finalize it.
            </li>
        </ul> 

      </motion.div>
 
      <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
      By acting as the guardian of the system, I ensured that our Figma files stayed lean and help our codebase stay clean.
              </motion.p> {/**/}
            </motion.div> 

            {/* Reflection */}
           <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              <AnimatedHeading text="Reflection: The result of order" />

              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
              The shift was profound. We moved from &quot;building screens&quot; to &quot;assembling experiences.&quot;
              </motion.p>

              <motion.div
        className="w-full flex justify-left items-center"
        variants={paragraphVariants} 
      >
        <ul className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                Speed:
              </code> We no longer spend hours arguing over spacing or hex codes. We focus on the users clinical journey.
            </li>
            <li className="mb-2 tracking-[-.01em]">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                Consistency: 
              </code> 100% of our new features now use the same core variables, ensuring a professional, trustworthy medical experience.
            </li>
            <li className="mb-2 tracking-[-.01em]">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                Language matters:
              </code> Changing how we talked about UI - from &quot;that blue box&quot; to &quot;the primary action component&quot; - changed how the whole team approached building the product.
            </li>
        </ul> 

      </motion.div> 

              <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
              Designing a product is more than just making pages. It is about building the foundation that helps the entire team work better.
              </motion.p>{/* */}
            </motion.div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}