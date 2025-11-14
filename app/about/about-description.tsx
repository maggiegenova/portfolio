import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } // cast here
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

function AnimatedHeading({ text }: { text: string }) {
  return (
    <p className="relative inline-block text-lg font-medium pb-[1em] w-max">
      {text}
      <svg
        className="absolute left-0 bottom-0 w-full h-[1.4em] "
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </svg>
    </p>
  );
}

export default function AboutDescription() {
  const paragraphs = [
    "I love exploring how people connect with the things around them - apps, tools, small everyday things. I get curious about why people do what they do, what makes them stay and especially what makes them leave.",
    "I like solving problems and bringing structure to ideas that feel messy at first. I’m detail-oriented, sometimes a bit too much, but that’s where good design usually hides.",
    "I really believe empathy isn’t just another design term - it’s how you build trust between people and technology. When products feel human, people tend to trust them more and that’s when good interactions happen.",
  ];

  return (
    <motion.div
      className="overflow-visible flex flex-col gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Heading with animated underline */}
      <AnimatedHeading text="How do I describe myself" />

      {/* Staggered paragraphs */}
      {paragraphs.map((text, i) => (
        <motion.p
          key={i}
          variants={paragraphVariants}
          className="text-[#4B5161] pt-4"
        >
          {text}
        </motion.p>
      ))}
    </motion.div>
  );
}
