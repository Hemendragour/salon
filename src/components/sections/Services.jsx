import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import LazyImage from '../ui/LazyImage';
import { services } from '../../data/siteData';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-5 sm:px-8">
        <SectionHeading
          light
          eyebrow="Our Signature Services"
          title="Crafted Rituals for Every Kind of Beauty"
          subtitle="From everyday grooming to once-in-a-lifetime bridal looks, every service is tailored around you."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-ivory/[0.03] shadow-luxury"
            >
              <div className="relative h-56 overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              </div>

              <div className="relative p-6">
                <h3 className="font-display text-xl sm:text-2xl text-ivory">{service.title}</h3>
                <p className="mt-3 text-sm text-ivory/65 leading-relaxed">{service.description}</p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-light group-hover:gap-3 transition-all"
                >
                  Book this service
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/40" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
