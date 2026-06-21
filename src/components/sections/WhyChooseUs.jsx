import { motion } from 'framer-motion';
import { Scissors, Sparkles, Gem, HeartHandshake, ShieldCheck, BadgePercent } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { whyChooseUs } from '../../data/siteData';

const iconMap = { Scissors, Sparkles, Gem, HeartHandshake, ShieldCheck, BadgePercent };

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-ivory">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Families Choose Us"
          title="The Unique Creations Difference"
          subtitle="Six promises that shape every appointment, from your very first visit."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 60px -15px rgba(212,175,55,0.35)' }}
                className="rounded-2xl bg-white px-7 py-9 shadow-sm border border-gold/10 transition-shadow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-fade">
                  <Icon size={26} className="text-ink" />
                </div>
                <h3 className="mt-6 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
