import { Instagram, MessageCircle, Phone, MapPin } from 'lucide-react';
import { business, footerLinks } from '../../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink pt-20 pb-28 sm:pb-10">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="font-display text-2xl text-ivory">
              Unique <span className="text-gold-light">Creations</span>
            </a>
            <p className="mt-4 text-sm text-ivory/55 leading-relaxed">
              A family salon &amp; beauty studio in Bhopal, dedicated to premium hair, skin, and beauty care for
              everyone you love.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold hover:bg-gold hover:text-ink transition-colors"
              >
                <Instagram size={17} />
              </a>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold hover:bg-gold hover:text-ink transition-colors"
              >
                <MessageCircle size={17} />
              </a>
              <a
                href={`tel:${business.phoneRaw}`}
                aria-label="Call"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold hover:bg-gold hover:text-ink transition-colors"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="eyebrow text-gold-light">Quick Links</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ivory/65 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="eyebrow text-gold-light">Business Hours</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {business.hours.map((h) => (
                <li key={h.day} className="text-sm text-ivory/65">
                  <span className="text-ivory/85">{h.day}</span>
                  <br />
                  {h.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="eyebrow text-gold-light">Visit Us</h4>
            <p className="mt-5 flex items-start gap-2 text-sm text-ivory/65 leading-relaxed">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              {business.address}
            </p>
            <p className="mt-3 text-sm text-ivory/65">{business.phone}</p>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ivory/45 text-center sm:text-left">
            &copy; {year} Unique Creations Family Salon. All rights reserved.
          </p>
          <p className="text-xs text-ivory/35">{business.category}</p>
        </div>
      </div>
    </footer>
  );
}
