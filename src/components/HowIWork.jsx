import { motion } from 'framer-motion';
import one from "../assets/Process/1.webp"
import two from "../assets/Process/2.webp"
import three from "../assets/Process/3.webp"

function ProcessCard({ label, description, placeholder }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col gap-3"
    >
      <div className="w-full aspect-[4/3] flex items-center justify-center">
        <img className='' src={placeholder} />
      </div>
      <h3>{label}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default function HowIWork() {
  return (
    <div className="padding py-24 flex flex-col gap-4">
      <h2>How I Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProcessCard
          label="Research"
          description="I define the goals, audience, and context of each project before touching a single pixel."
          placeholder={one}
        />
        <ProcessCard
          label="Iterations"
          description="I develop concepts through research and iteration, testing directions before committing."
          placeholder={two}
        />
        <ProcessCard
          label="System → Detail"
          description="From broader visual systems to individual interactions, cohesive and purposeful throughout."
          placeholder={three}
        />
      </div>
    </div>
  );
}