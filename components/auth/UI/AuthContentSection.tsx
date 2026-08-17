'use client';

import { CONTENT } from '@/constants/content';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(8px)',
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AuthContentSection() {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem(
        (prev) => (prev + 1) % CONTENT.auth.contentSectionSlider.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = CONTENT.auth.contentSectionSlider[currentItem];

  return (
    <div className="flex w-full min-h-[50vh] md:w-[40%] flex-col justify-end rounded-xl bg-neutral-900 px-6 py-8 shadow-md overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col gap-6 min-h-[50%]"
        >
          <div>
            {currentSlide.headers.map((header, index) => (
              <motion.h1
                key={header}
                variants={itemVariants}
                className={`text-2xl font-medium md:text-3xl lg:text-4xl ${
                  index === 2 ? 'text-lime-300' : 'text-white'
                }`}
              >
                {header}
              </motion.h1>
            ))}
          </div>

          <motion.p
            variants={itemVariants}
            className="
              md:max-w-[70%]
              text-xs
              md:text-sm
              font-light
              text-zinc-300
              min-h-[3.5rem]
            "
          >
            {currentSlide.paragraph}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex gap-3">
        {CONTENT.auth.contentSectionSlider.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentItem(index)}
            aria-label={CONTENT.auth.a11y.go_to_slide(index + 1)}
            className="flex h-4 w-4 items-center justify-center"
          >
            <motion.div
              animate={{
                scale: currentItem === index ? 1.4 : 1,
                opacity: currentItem === index ? 1 : 0.35,
              }}
              transition={{
                type: 'spring',
                stiffness: 450,
                damping: 25,
              }}
              className={`h-2.5 w-2.5 rounded-full ${
                currentItem === index ? 'bg-lime-300' : 'bg-zinc-500'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
