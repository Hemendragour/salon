import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { navLinks } from '../../data/siteData';
import Button from '../ui/Button';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLockBodyScroll(menuOpen);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-auto max-w-screen-2xl px-5 sm:px-8 transition-all duration-500 ${
            scrolled ? 'glass rounded-b-2xl shadow-luxury sm:mx-4' : ''
          }`}
        >
          <nav className="flex items-center justify-between">
            <a href="#home" className="font-display text-xl sm:text-2xl tracking-wide text-ink">
              Unique <span className="text-gold-dark">Creations</span>
            </a>

            <ul className="hidden lg:flex items-center gap-8 font-body text-sm font-medium text-charcoal">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative py-2 transition-colors hover:text-gold-dark group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button href="#contact" variant="primary" className="!px-6 !py-2.5 !text-sm">
                <CalendarCheck size={16} />
                Book Appointment
              </Button>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-ink/5"
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-ivory px-8 py-8 shadow-luxury flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display text-xl text-ink">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-ink/5"
                >
                  <X size={22} />
                </button>
              </div>

              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="block py-3 font-display text-2xl text-ink hover:text-gold-dark border-b border-ink/5"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button href="#contact" variant="gold" onClick={handleNavClick} className="w-full">
                  <CalendarCheck size={18} />
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
