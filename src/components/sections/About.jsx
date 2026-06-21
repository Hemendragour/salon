import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const highlights = [
  'Experienced beauty professionals',
  'Premium, internationally trusted products',
  'A scrupulously hygienic environment',
  'Personalized one-on-one consultations',
  'A calm, relaxing salon ambience',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-ivory overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1200&auto=format&fit=crop"
              alt="Unique Creations Family Salon interior"
              loading="lazy"
              className="h-full w-full rounded-[1.75rem] object-cover shadow-luxury"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -right-6 -bottom-8 w-40 sm:w-48 aspect-square rounded-2xl overflow-hidden border-4 border-ivory shadow-luxury"
            >
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop"
                alt="Facial treatment at Unique Creations"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-rose/30 blur-2xl" />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="lg:col-span-7">
          <SectionHeading
            align="left"
            eyebrow="About Unique Creations"
            title="Where every visit feels like a celebration of you"
            subtitle="For families across Bhopal, Unique Creations Family Salon has become a trusted home for beauty, hair, and skincare — where international techniques meet warm, personal care."
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 rounded-xl bg-white/60 border border-gold/10 px-4 py-3.5 shadow-sm"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold-dark" />
                <span className="text-sm sm:text-base text-charcoal/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
