"use client";
import Image from "next/image"; 
import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/navigation";
import * as React from "react";
import AloneMode from "@/sections/alone-mode/alone-mode-logo";
import AloneModeTimeline from "@/sections/alone-mode/alone-mode-timeline";
import AloneModeGallery from "@/sections/alone-mode/alone-mode-phase-three-gallery";
import AloneModePhaseFour from "@/sections/alone-mode/alone-mode-phase-four-gallery";
import IntroGallery from "@/sections/alone-mode/alone-mode-intro-gallery";
import AloneModeHomePageGallery from "@/sections/alone-mode/alone-mode-home-page-gallery";
import AloneModeImage from "@/sections/alone-mode/alone-mode-image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
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
    <p className="relative inline-block text-lg font-medium pb-[1em] w-max">
      {text}
      <svg
        className="absolute left-0 bottom-0 w-full h-[1.4em] z-[-1]"
        viewBox="0 -20 500 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M8 12.8202 C74.9562 8.97548 459.937 4.23467 492.5 12.8202"
          stroke="#EBB459"
          strokeWidth="15"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </svg>
    </p>
  );
}

export default function AloneModePage() {
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
        DTU
        </motion.p>

        <motion.h2 variants={paragraphVariants} className="text-lg font-medium text-[#4B5161]">
        Alone Mode - Breaking the cycle of addiction by design 
        </motion.h2>

        <motion.p variants={paragraphVariants} className="text-[#4B5161]">
        Research-based feature that helps students manage smartphone use by balancing disconnection with meaningful connection. Developed through a five-phase design process, it’s customizable, easy to use, and grounded in real student needs.
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-sm font-medium pt-8">
        My contribution
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-sm text-[#4B5161]">
        Think-Aloud Interviews | Online Survey | Usability and A/B Testing | Paper and Video sketches and mockups | Wireframes &amp; Prototyping in Figma
        </motion.p>

      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
        variants={paragraphVariants} 
      >
        <AloneMode />
      </motion.div>
    </motion.div>
    </div>


    {/* Additional sections */}
    <div className="flex flex-col lg:flex-row items-start justify-between rounded-lg p-6 md:p-8 lg:p-10 gap-4 md:gap-16 lg:gap-20">
        <div className="grid p-8 gap-12 font-[family-name:var(--font-geist-sans)]">


{/* starts from here */}

{/* Problem */}
<motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex flex-col gap-6"
    >
      <AnimatedHeading text="The problem" />

      <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
      Modern technology is built to keep us hooked. Interfaces use endless content loops, social triggers, and bright visuals to hold our attention. While this works for keeping us engaged, it also fuels excessive smartphone use, making it harder for people to disconnect.
        </motion.p>

    </motion.div>

     {/* Project timeline */}
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex flex-col gap-6"
    >
      <AnimatedHeading text="Project timeline" />

      <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
      Carried out over 6 months (Feb–Aug 2020) as part of my master’s thesis at DTU Compute.
        </motion.p>

    </motion.div>

     {/* Team and my role */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex flex-col gap-6"
    >
      <AnimatedHeading text="The team & my role" />

      <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
      2 UX/UI designers
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        From uncovering user habits to shaping a focused experience, I led the full design journey. I ran <span className="font-medium">think-aloud interviews</span>, <span className="font-medium">surveys</span>, and <span className="font-medium">A/B tests</span> to learn how students interact with their phones, turned insights into ideas through <span className="font-medium">sketches and mockups</span>, and brought the concept to life with interactive <span className="font-medium">Figma prototypes</span>.
        </motion.p>

    </motion.div>

   {/* The opportunity */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex flex-col gap-6"
    >
      <AnimatedHeading text="The opportunity" />

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        We saw a chance to better understand how students use their phones - <span className="font-medium">the habits, motivations, and moments that keep them engaged</span> - and to spot the patterns that can lead to overuse. These insights could inspire healthier, alternative design solutions.

        </motion.p>

    </motion.div>

    {/* The solutions */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex flex-col gap-6"
    >
      <AnimatedHeading text="The solution" />

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        To design something meaningful, we first had to understand the problem from the inside out. We explored how students <span className="font-medium">connect with their smartphones</span> — what draws them in and what makes that engagement feel unhealthy. Together, we shaped the research, asked the right questions, and <span className="font-medium">tested early ideas</span> directly with users.

        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        Each round of feedback refined our thinking. <span className="font-medium">Sketches became wireframes</span>, and wireframes evolved into <span className="font-medium">solutions</span> shaped by real student experiences. The result was a design grounded in empathy, aimed at helping users stay connected <span className="font-medium">without feeling controlled</span> by their devices.
          
        </motion.p>

    </motion.div>

    {/* Research process */}
    <motion.div
       initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="flex flex-col gap-6"
    >
      <AnimatedHeading text="Research process" />

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        We conducted a <span className="font-medium">five-phase</span>, mixed-methods study to explore how university students use their smartphones, <span className="font-medium">identify</span> problematic patterns, and shape solutions for healthier digital habits. In total, <span className="font-medium">43 students</span> were interviewed and <span className="font-medium">114 participated</span> in an online survey.

        </motion.p>

         <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
        Phase 1 - In-depth Interviews
        </motion.p>

       <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        To gain a deep understanding of students’ daily phone habits, we used <span className="font-medium">timeline-based</span> interviews. Participants mapped out a typical day, then highlighted moments when their smartphone <span className="font-medium">played a central role</span>. This helped us uncover personal narratives, routines, and triggers that could lead to addictive patterns.
            
        </motion.p>

         <motion.div
  className="flex justify-center items-center"
  variants={paragraphVariants}
  >
  <AloneModeTimeline />
  </motion.div>  

      {/* Phase 2 */}
      <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
        Phase 2 - Online Survey
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        Building on these insights, we launched a survey to a larger sample. Our goal was to better <span className="font-medium">understand daily situations</span> and <span className="font-medium">personal motivations</span> driving smartphone use, with emphasis on moments students found problematic.
  
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base font-medium text-[#4B5161] pt-4">Key findings
        </motion.p>

        <motion.div
        className="w-full flex justify-left items-center"
        variants={paragraphVariants} 
      >
        <ul className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                57%
              </code> felt it was important to stay constantly updated on messaging and email apps.
            </li>
            <li className="mb-2 tracking-[-.01em]">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                96.5%
              </code> used their phones to stay in touch with friends and family.
            </li>
            <li className="mb-2 tracking-[-.01em]">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                58.8%
              </code> used their phones to relax; <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                65.8%
              </code> to fight boredom.
            </li>
            <li className="mb-2 tracking-[-.01em]">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                57%
              </code> described smartphone activities as addictive, but <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              39.5%
              </code> did not believe they were personally addicted.
            </li>
        </ul> 

      </motion.div>

      <motion.p variants={paragraphVariants} className="text-base text-[#4B5161] pt-2">From these findings, we identified three key usage scenarios that often promoted overuse: <span className="font-medium">Phone Breaks</span>, <span className="font-medium">Fear of Missing Out (FOMO)</span>, and <span className="font-medium">Loneliness</span>.

        </motion.p> 

        {/* Phase 3 */}
        <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
        Phase 3 - Concept ideation & focus groups
        </motion.p>

         <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        Using our research insights, we developed <span className="font-medium">six early concept ideas</span> to encourage healthier relationships with smartphones. Through <span className="font-medium">focus group interviews</span>, we explored how these ideas might fit into students’ daily lives, what they would change, and whether they would use them personally or recommend them to others.
             
        </motion.p>

      <motion.div variants={paragraphVariants} className="text-base text-[#4B5161]">
      <AloneModeGallery />
        </motion.div> 

        {/* Phase 4 */}
        <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
        Phase 4 - Concept refinement & prototype feedback
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        Feedback from Phase 3 narrowed our focus to <span className="font-medium">three</span> solution concepts:
             
        </motion.p>

        <motion.div
        className="w-full lg:w-1/2 flex justify-left items-center"
        variants={paragraphVariants} 
      >
        <ul className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
            Ring Limiter
            </li>
            <li className="mb-2 tracking-[-.01em]">
            Content Digest
            </li>
            <li className="mb-2 tracking-[-.01em]">
            Digital Friend (combining “Alone Mode” and “Challenge App”)
            </li>
            
        </ul> 


      </motion.div>

      <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
      We created video mockups of each and tested them with participants to understand which would be most useful, who might use them, and how they could be improved.
             
        </motion.p>
        <motion.div variants={paragraphVariants} className="text-base text-[#4B5161]">
        <AloneModePhaseFour/>
        </motion.div> 

         {/* Phase 5 */}
        <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
        Phase 5 - Final prototype testing
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        Based on participant preference and feedback, we developed <span className="font-medium">Alone Mode </span>— a feature aimed at helping users disconnect without fully isolating themselves. Usability testing uncovered interaction flow issues, gathered unbiased feedback, and highlighted opportunities to refine the overall experience.
             
        </motion.p>

        <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true}}
      variants={containerVariants}
      className="flex flex-col"
    >
      <AnimatedHeading text="How does it work?" />

      {/* Step 1 */}


<motion.div
  className="w-full flex flex-col md:flex-row gap-8 pt-4"
  variants={paragraphVariants}
>
  {/* Left side — bullet points */}
  <ul className="list-inside list-decimal text-sm/6 font-[family-name:var(--font-geist-mono)] md:w-1/2">
    <li className="mb-2 tracking-[-.01em]">
      Name their personalized Alone Mode
    </li>
    <li className="mb-2 tracking-[-.01em]">
      Choose who can contact them while disconnected
    </li>
    <li className="mb-2 tracking-[-.01em]">
      Customize motivational messages and auto-replies for anyone trying to reach them during Alone Mode
    </li>
  </ul>

  {/* Right side — image gallery */}
  <motion.div
    variants={paragraphVariants}
    className="md:w-1/2 flex justify-center"
  >
    <IntroGallery />
  </motion.div>
</motion.div>



      {/* Step 2 */}
      <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
      2. Quick mode activation
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161] pt-4">
        After onboarding, users land on the Alone Mode home screen, where all created modes are visible. Any mode without a set schedule can be turned on or off instantly.
             
        </motion.p>

         {/* Step 3 */}


        {/* Section 3 Title */}
<motion.p
  variants={paragraphVariants}
  className="text-lg font-medium text-[#4B5161] pt-4"
>
  3. Distraction-free home screen
</motion.p>

{/* Section 3 + Gallery side-by-side */}
<motion.div
  variants={paragraphVariants}
  className="w-full flex flex-col md:flex-row gap-8 pt-4"
>
  {/* Left Side — Paragraph */}
  <p className="text-base text-[#4B5161] md:w-1/2"> When Alone Mode is active, all disabled apps appear greyed out. Attempting to open one triggers a motivational reminder — either a custom message or a default one.
    Users can also opt for a{" "} <span className="font-medium">“5-minute break”</span>{" "} to temporarily access a blocked app.
  </p>

  {/* Right side — Gallery */}
  <div className="md:w-1/2 flex justify-center">
    <AloneModeHomePageGallery />
  </div>
</motion.div>


         {/* Step 4 */}
         {/* Step 4 Title */}
<motion.p
  variants={paragraphVariants}
  className="text-lg font-medium text-[#4B5161] pt-4"
>
  4. Emergency access with keywords
</motion.p>

{/* Step 4 layout (text left, image right) */}
<motion.div
  variants={paragraphVariants}
  className="w-full flex flex-col md:flex-row gap-8 pt-4"
>
  {/* Left side — text */}
  <p className="text-base text-[#4B5161] md:w-1/2">
    If someone contacts the user using a{" "}
    <span className="font-medium">pre-set emergency keyword</span>,
    a pop-up notification displays the part of the message containing that keyword.
    The user can then decide whether to view the full message or stay in Alone Mode.
  </p>

  {/* Right side — image */}
  <div className="md:w-1/2 flex justify-center">
    <AloneModeImage />
  </div>
</motion.div>


      </motion.div> {/* How does it work ends here */}

        
    </motion.div> {/* Research provess ends here */}

    {/* Outcmome */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex flex-col gap-6"
    >
      <AnimatedHeading text="Outcome" />
      <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
      Our five-phase research process gave us a deep understanding of the <span className="font-medium">challenges smartphones present for students</span> — from constant connectivity <span className="font-medium">pressures</span> to <span className="font-medium">addictive content loops</span>. Through <span className="font-medium">iterative testing</span> and <span className="font-medium">user feedback</span>, we developed Alone Mode, a solution that stood out for its scalability, <span className="font-medium">ease of access</span>, and potential to <span className="font-medium">foster meaningful digital interactions</span>.
          
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        The project demonstrates how <span className="font-medium">research-driven design</span> can move beyond problem diagnosis to actionable solutions. Alone Mode represents a small but significant step toward more <span className="font-medium">mindful smartphone use</span> — one that gives users greater <span className="font-medium">control without sacrificing connection.</span>
          
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        Looking ahead, the responsibility for shaping healthier digital habits must extend beyond individual designers. While major tech companies like Google, Apple, Facebook, and TikTok have introduced digital wellbeing tools, these features often remain hidden or underused. Solutions like Alone Mode — and the mindset behind them — need to become more visible and easily accessible to establish meaningful smartphone habits and routines.
                    
        </motion.p> 

    </motion.div>{/* Outcome ends here */}

     {/* Retrospective */}
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex flex-col gap-6"
    >
      <AnimatedHeading text="Retrospective" />

      <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
         Challenges
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        The biggest challenge came during the design research process, as all user interviews had to be conducted during COVID-19 lockdowns. Many planned group activities had to be reimagined for online execution, resulting in fewer participants and less interaction. Conducting interviews remotely also made it harder to observe participants’ subtle reactions and emotions — insights that are far easier to capture face-to-face.
                      
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
        What could be improved?
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        When creating the wireframes, I relied solely on pre-made illustrations and adapted them to our content. In future iterations, designing custom illustrations — for example, in Photoshop — could make the onboarding experience more unique, cohesive, and visually memorable.
                      
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
        What’s next?
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        Future steps could include conducting additional user interviews and exploring the technical development of the prototype. This would enable a long-term study of how participants interact with Alone Mode in their daily lives, allowing us to better understand its real-world impact and refine the solution further.
                                
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-lg font-medium text-[#4B5161] pt-4">
        Reflection
        </motion.p>

        <motion.p variants={paragraphVariants} className="text-base text-[#4B5161]">
        This project not only deepened my understanding of user-centered design but also strengthened my ability to adapt under challenging circumstances. Working within the constraints of a global lockdown taught me to be resourceful, rethinking research methods and finding creative ways to maintain participant engagement. Most importantly, it reinforced the value of empathy — both in understanding users’ needs and in designing solutions that truly support healthier digital habits. 
                            
        </motion.p>



      </motion.div>



{/* ends here */}

          </div>
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

            <div className="flex items-center justify-center">
              <a className="socialMediaTabsContainer" href="mailto:maggiegenova@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image aria-hidden src="/email.svg" alt="Email logo" width={40} height={40} /> 
              </a>
            </div>

            <a className="socialMediaTabsContainer" href="https://github.com/maggiegenova" target="_blank" rel="noopener noreferrer">
              <Image aria-hidden src="/github.svg" alt="GitHub logo" width={35} height={35} /> 
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
