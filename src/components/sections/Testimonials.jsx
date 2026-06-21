import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/siteData';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-rose/15 blur-3xl" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-5 sm:px-8">
        <SectionHeading
          light
          eyebrow="Client Love"
          title="Rated 5.0/5 by Our Happy Clients"
          subtitle="Real stories from the families and individuals who trust us with their beauty journey."
        />

        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-gold text-gold" />
            ))}
          </div>
        </div>

        <div className="relative mt-14 max-w-3xl mx-auto">
          <Quote size={64} className="absolute -top-6 left-0 text-gold/15" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="glass-dark relative rounded-3xl px-6 sm:px-12 py-10 sm:py-12 text-center"
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-xl sm:text-2xl leading-relaxed text-ivory">
                "{current.review}"
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <img
                  src={current.photo}
                  alt={current.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover border-2 border-gold"
                />
                <span className="font-medium text-ivory">{current.name}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-gold' : 'w-2 bg-ivory/25'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
