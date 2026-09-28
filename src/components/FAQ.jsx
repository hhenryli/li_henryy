import { useState } from "react";
import pointing from "../assets/animations/pointing.gif";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are you looking for?",
    answer:
      "I'm interested in product roles where I can bring together design, engineering, and user thinking to build things people actually want to use.",
  },
  {
    question: "Why product?",
    answer:
      "I like solving problems! Working out a problem, figuring out who it's hurting and why, and coming up with something to solve it is the most fun.",
  },
  {
    question: "What are you working on?",
    answer:
      "Besides this website, I've been making a retro website with all sorts of 90's applications.",
  },
  {
    question: "What's something you're currently obsessed with?",
    answer:
      "Stop motion and shadows have been at the top of my experiment list!",
  },
  {
    question: "Why should YOU hire ME?",
    answer:
      "Because I care about the whole product, not just my piece of it. I can move between design, engineering, and product thinking, and I'm curious enough to keep learning. I enjoy fast paced environments, honest feedback, and working with people who push me to think differently.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <>
      {/* GIF BUTTON */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-24 cursor-pointer bg-transparent p-0"
      >
        <img
          src={pointing}
          alt="Open FAQ"
          className="block w-full"
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Click outside to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* FAQ CARD */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                transformOrigin: "bottom right",
              }}
              className="fixed bottom-32 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5"
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <span className="font-['Schoolbell'] text-2xl">
                  Henry's Q&A
                </span>

                {/* Bigger close hit box */}
                <button
                  onClick={() => setOpen(false)}
                  className="-mr-2 -mt-2 flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-gray-400 transition hover:bg-gray-100 hover:text-black"
                  aria-label="Close FAQ"
                >
                  ×
                </button>
              </div>

              {/* Questions */}
              <div>
                {faqs.map((faq, index) => {
                  const isActive = activeQuestion === index;

                  return (
                    <div
                      key={faq.question}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <button
                        onClick={() =>
                          setActiveQuestion(isActive ? null : index)
                        }
                        className="flex w-full items-center justify-between py-4 text-left"
                      >
                        <h4>{faq.question}</h4>

                        <motion.span
                          animate={{ rotate: isActive ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0 text-lg text-gray-400"
                        >
                          +
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: {
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1],
                              },
                              opacity: {
                                duration: 0.2,
                              },
                            }}
                            className="overflow-hidden"
                          >
                            <p className="pb-4 text-sm leading-5 text-gray-500">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}