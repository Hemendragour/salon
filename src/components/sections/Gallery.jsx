import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import LazyImage from '../ui/LazyImage';
import Lightbox from '../ui/Lightbox';
import { galleryImages } from '../../data/siteData';

const categories = ['All', 'Interiors', 'Hair', 'Bridal', 'Treatments'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === filter)),
    [filter]
  );

  const openAt = (img) => setActiveIndex(filtered.findIndex((i) => i.id === img.id));
  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((idx) => (idx + 1) % filtered.length);
  const prev = () => setActiveIndex((idx) => (idx - 1 + filtered.length) % filtered.length);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-ivory">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Gallery"
          title="Moments of Transformation"
          subtitle="A glimpse into our salon, our craft, and the smiles we get to create every day."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-ink text-gold shadow-luxury'
                  : 'bg-white text-charcoal/70 border border-ink/10 hover:border-gold/40 hover:text-gold-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 [grid-auto-flow:dense]">
          {filtered.map((img, i) => (
            <motion.button
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              onClick={() => openAt(img)}
              className={`group relative overflow-hidden rounded-2xl shadow-sm focus-visible:outline-none ${
                i % 5 === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
              aria-label={`Open image: ${img.alt}`}
            >
              <LazyImage
                src={img.src}
                alt={img.alt}
                className="h-full w-full"
                imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                <Expand size={26} className="text-ivory" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox images={filtered} activeIndex={activeIndex} onClose={close} onNext={next} onPrev={prev} />
    </section>
  );
}
