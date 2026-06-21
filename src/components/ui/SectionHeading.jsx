import { motion } from 'framer-motion';
import GoldStroke from './GoldStroke';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`flex flex-col ${alignClass} gap-4`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`eyebrow ${light ? 'text-gold-light' : 'text-gold-dark'}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight ${
          light ? 'text-ivory' : 'text-ink'
        }`}
      >
        {title}
      </motion.h2>
      <GoldStroke />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`max-w-2xl text-base sm:text-lg ${light ? 'text-ivory/75' : 'text-charcoal/70'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
