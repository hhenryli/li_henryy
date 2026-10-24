import { motion } from 'framer-motion';
import one from "../assets/Process/1.webp"
import two from "../assets/Process/2.webp"
import three from "../assets/Process/3.webp"

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function HowIWork() {
  return (
    <div className="padding text-[var(--text-secondary)] bg-[var(--primary)]">
      <div className="pt-24 lg:pt-32 pb-32 lg:pb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

        {/* LEFT: text */}
        <motion.div
          {...fade}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 lg:sticky lg:top-32 self-start flex flex-col"
        >
          {/* Label */}
          <span className="meta self-start py-2">
            Why me
          </span>

          {/* Headline */}
          <h2
            className="display max-w-xl"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)' }}
          >
           Design, code, and creation
          </h2>

          {/* Subheader */}
          <div
            className="display mt-12 lg:mt-16 max-w-xs"
            style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)', lineHeight: 1.1 }}
          >
            Thinking technically makes me a better designer.
          </div>

          {/* Body */}
          <p
            className="mt-3 max-w-xs opacity-60"
            style={{ fontSize: '18px', fontWeight: 400, letterSpacing: 0, lineHeight: 1.55 }}
          >
          I think in both design and engineering, so I'm weighing what something
            should be and how it gets built at the same time. Ideas don't get lost
            in handoff, because I'm already considering how they'll work.
          </p>
        </motion.div>

        {/* RIGHT: three images stacked */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {[one, two, three].map((src, i) => (
            <motion.img
              key={i}
              {...fade}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src={src}
              alt=""
              className="w-full aspect-[4/3] object-cover"
            />
          ))}
        </div>

      </div>
    </div>
  );
}