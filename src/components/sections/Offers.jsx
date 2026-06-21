import { motion } from 'framer-motion';
import { Gift, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { offers } from '../../data/siteData';

export default function Offers() {
  return (
    <section className="relative py-24 sm:py-32 bg-ivory">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Special Offers"
          title="Packages Designed Around You"
          subtitle="Thoughtfully bundled experiences for brides, families, and seasonal celebrations."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-charcoal px-8 py-10 shadow-luxury"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />

              <span className="inline-flex items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold-light eyebrow">
                {offer.badge}
              </span>

              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 border border-gold/30">
                <Gift size={26} className="text-gold" />
              </div>

              <h3 className="mt-6 font-display text-2xl text-ivory">{offer.title}</h3>
              <p className="mt-3 text-sm text-ivory/65 leading-relaxed">{offer.description}</p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-gold-light hover:gap-3 transition-all"
              >
                Enquire Now
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="#contact" variant="primary">
            Talk to Us About a Package
          </Button>
        </div>
      </div>
    </section>
  );
}
