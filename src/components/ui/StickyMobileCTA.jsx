import { Phone, CalendarCheck } from 'lucide-react';
import { business } from '../../data/siteData';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden border-t border-gold/20 bg-ink/95 backdrop-blur-md">
      <a
        href={`tel:${business.phoneRaw}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-medium text-ivory border-r border-gold/20"
      >
        <Phone size={16} className="text-gold" />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-ink bg-gold"
      >
        <CalendarCheck size={16} />
        Book Appointment
      </a>
    </div>
  );
}
