import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-7xl text-gradient-gold"
      >
        404
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 font-display text-2xl sm:text-3xl text-ivory"
      >
        This page wandered off for a touch-up
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-3 max-w-md text-sm text-ivory/60"
      >
        The page you're looking for doesn't exist. Let's get you back to something beautiful.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8"
      >
        <Button as="a" href="/" variant="gold">
          Back to Home
        </Button>
      </motion.div>
    </section>
  );
}
