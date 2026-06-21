import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-5xl tracking-wide text-ivory"
            >
              Unique <span className="text-gradient-gold">Creations</span>
            </motion.div>
            <div className="relative h-px w-48 overflow-hidden bg-ivory/15">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gold-sheen animate-shimmer"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                style={{ backgroundSize: '200% auto' }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="eyebrow text-gold-light"
            >
              Family Salon &amp; Beauty Studio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
