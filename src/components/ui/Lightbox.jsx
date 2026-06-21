import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

export default function Lightbox({ images, activeIndex, onClose, onNext, onPrev }) {
  useLockBodyScroll(activeIndex !== null);

  if (activeIndex === null) return null;
  const image = images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/92 backdrop-blur-md px-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery viewer"
      >
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute top-5 right-5 sm:top-8 sm:right-8 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-gold hover:text-ink transition-colors"
        >
          <X size={22} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          className="absolute left-3 sm:left-8 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-gold hover:text-ink transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[80vh] max-w-3xl"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[80vh] w-full rounded-2xl object-contain shadow-luxury"
          />
          <p className="mt-4 text-center text-sm text-ivory/70">{image.alt}</p>
        </motion.div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          className="absolute right-3 sm:right-8 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-gold hover:text-ink transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
