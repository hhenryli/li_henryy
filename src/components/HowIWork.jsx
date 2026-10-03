import { motion } from 'framer-motion';
import one from "../assets/Process/1.webp"
import two from "../assets/Process/2.webp"
import three from "../assets/Process/3.webp"

function ProcessCard({ index, label, description, placeholder }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative w-full aspect-[4/3] min-h-[340px] overflow-hidden border border-white/20 text-[var(--text-secondary)]"
    >

      {/* Text, all inside the card */}
      <div className="h-full p-5 flex flex-col justify-between">
        <div className="flex items-start justify-between">

          <span className="display text-5xl lg:text-[4vw] leading-none">
            0{index}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3>{label}</h3>
          <p>{description}</p>
        </div>
      </div>

      {/* Image wipes up from the bottom and covers the text on hover */}
      <img
        src={placeholder}
        alt=""
        className="absolute inset-0 w-full h-full object-cover
                   scale-110 [clip-path:inset(100%_0_0_0)]
                   transition-all duration-500 ease-out
                   group-hover:scale-100 group-hover:[clip-path:inset(0)]
                   [@media(hover:none)]:hidden"
      />
    </motion.div>
  );
}

export default function HowIWork() {
  return (
    <div className="padding text-[var(--text-secondary)] bg-[var(--primary)]">

      {/* INTRO: fills the screen, centered */}
      <div className="py-32 flex flex-col items-center justify-center text-center gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className=""
        >
          How I Work
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          Welcome to my portfolio! I try to balance creativity and functionality in every project, focusing on basics like typography, color, and layout. I also prioritize accessibility and usability, ensuring that my work is inclusive and user-friendly.
        </motion.h4>
      </div>

      {/* PROCESS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">
      <ProcessCard
        index={1}
        label="Research"
        description="I define the goals, audience, and context of each project before touching a single pixel."
        placeholder={one}
      />
      <ProcessCard
        index={2}
        label="Iterations"
        description="I develop concepts through research and iteration, testing directions before committing."
        placeholder={two}
      />
      <ProcessCard
        index={3}
        label="System → Detail"
        description="From broader visual systems to individual interactions, cohesive and purposeful throughout."
        placeholder={three}
      />
      </div>

    </div>
  );
}