import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock, MessageCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from './ContactForm';
import { business } from '../../data/siteData';

const contactItems = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: business.address,
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: business.phone,
    href: `tel:${business.phoneRaw}`,
  },
  {
    icon: Instagram,
    label: 'Follow Us',
    value: business.instagram,
    href: business.instagramUrl,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Sat: 10 AM – 8:30 PM',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-ivory">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Plan Your Visit to Unique Creations"
          subtitle="Reach out by phone, Instagram, or the form below — we're delighted to help you book the perfect appointment."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: details + map */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const Wrapper = item.href ? motion.a : motion.div;
                return (
                  <Wrapper
                    key={item.label}
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl bg-white border border-gold/10 px-5 py-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-fade">
                      <Icon size={18} className="text-ink" />
                    </div>
                    <p className="mt-4 eyebrow text-gold-dark">{item.label}</p>
                    <p className="mt-1 text-sm text-charcoal/75 leading-relaxed">{item.value}</p>
                  </Wrapper>
                );
              })}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex-1 min-h-[260px] overflow-hidden rounded-2xl border border-gold/10 shadow-sm"
            >
              <iframe
                title="Unique Creations Family Salon location on Google Maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  business.mapsEmbedQuery
                )}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '260px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </motion.div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-ivory shadow-luxury hover:bg-gold hover:text-ink transition-colors"
              >
                <Phone size={16} />
                Call Salon
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3.5 text-sm font-medium text-ink hover:border-gold hover:text-gold-dark transition-colors"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-medium text-white shadow-luxury hover:brightness-110 transition-all"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
