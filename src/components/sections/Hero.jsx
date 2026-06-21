import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, Sparkles, Award, CalendarCheck, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { business } from '../../data/siteData';

const badges = [
  { icon: Star, label: `${business.rating.toFixed(1)}★ Customer Rating`, delay: 0.9 },
  { icon: Sparkles, label: 'Premium Beauty Services', delay: 1.05 },
  { icon: Award, label: 'Expert Stylists', delay: 1.2 },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-ink pt-32 pb-16 sm:pt-36"
    >
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-rose/20 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8"
      >
        {/* Text content */}
        <motion.div style={{ y: contentY }} className="lg:col-span-7 order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="eyebrow inline-flex items-center gap-2 text-gold-light"
          >
            <span className="h-px w-8 bg-gold" />
            Family Salon &amp; Beauty Studio · Bhopal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-semibold leading-[1.08] text-ivory"
          >
            Reveal Your Beauty.
            <br />
            <span className="text-gradient-gold animate-shimmer inline-block" style={{ backgroundSize: '200% auto' }}>
              Elevate Your Confidence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-lg text-base sm:text-lg text-ivory/70"
          >
            Experience premium beauty, hair, skincare, and grooming services in the heart of Bhopal — crafted for every member of your family.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" variant="gold">
              <CalendarCheck size={18} />
              Book Appointment
            </Button>
            <Button href="#services" variant="outlineLight">
              View Services
              <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* Animated badges */}
          <div className="mt-12 flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay }}
                whileHover={{ y: -3 }}
                className="glass-dark flex items-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-sm font-medium text-ivory"
              >
                <Icon size={15} className="text-gold" />
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image card */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/40" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1200&auto=format&fit=crop"
                alt="Luxurious interior of Unique Creations Family Salon"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-rose/20" />
            </div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 -bottom-6 glass rounded-2xl px-5 py-4 shadow-luxury"
            >
              <p className="font-display text-2xl text-ink">{business.rating.toFixed(1)}/5</p>
              <p className="text-xs text-charcoal/60">{business.reviewCount}+ happy clients</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-5 top-8 hidden sm:flex glass-dark rounded-2xl px-4 py-3 shadow-luxury items-center gap-2"
            >
              <Sparkles size={16} className="text-gold" />
              <span className="text-xs font-medium text-ivory">Premium Care</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="eyebrow text-ivory/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-px bg-gold/60"
        />
      </motion.div>
    </section>
  );
}
