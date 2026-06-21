import { motion } from 'framer-motion';

/**
 * The page's signature element: a hand-drawn gold "ribbon stroke"
 * that traces itself in on scroll, echoing a hairstrand / ribbon flourish.
 * Used sparingly — only under section eyebrows and the hero headline.
 */
export default function GoldStroke({ className = '', width = 140 }) {
  return (
    <svg
      viewBox="0 0 140 14"
      width={width}
      height={(width / 140) * 14}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M2 9.5C20 3 35 11 52 6.5C69 2 85 12 102 7C112 4 122 8.5 138 4"
        stroke="#D4AF37"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
      />
    </svg>
  );
}
