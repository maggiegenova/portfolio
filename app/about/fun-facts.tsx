"use client";

import { motion, Variants } from "framer-motion";
import TeaIcon from "@/sections/tea-icon";
import HogwardsIcon from "@/sections/hogwards-icon";
import CleanIcon from "@/sections/clean-icon";
import WalksIcon from "@/sections/walks-icon";
import TicketIcon from "@/sections/ticket-icon";
import FridgeIcon from "@/sections/fridge-icon";

const cards = [
  { icon: TeaIcon, title: "Tea Lover", desc: "Tea is my daily ritual - there’s always a cup nearby." },
  { icon: HogwardsIcon, title: "Dreamer", desc: "I’m still hoping my Hogwarts letter simply got lost in the mail." },
  { icon: CleanIcon, title: "Tidy Soul", desc: "I find peace in keeping things neat and organized." },
  { icon: WalksIcon, title: "Explorer", desc: "I’ll never say no to a long walk in nature - it’s where I reset and recharge." },
  { icon: TicketIcon, title: "Board Gamer", desc: "Ticket to Ride nights bring out my competitive side." },
  { icon: FridgeIcon, title: "Tiny Souvenirs", desc: "Each magnet on my fridge holds a memory from a place I’ve explored - tiny souvenirs with big stories." },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
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

export default function FunFactsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex flex-col gap-6"
    >
      <AnimatedHeading text="Random facts about me" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 p-8">
        {cards.map((card, i) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group rounded-2xl p-6 flex flex-col items-center text-center 
                hover:scale-105 transition-all duration-300 ease-out cursor-default"
            >
              <div className="w-16 h-16 mb-4">
                <IconComponent />
              </div>

              <p className="text-lg font-medium mb-3">{card.title}</p>
              <p className="text-sm text-[#4B5161]">{card.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
