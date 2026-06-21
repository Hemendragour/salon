import { motion } from 'framer-motion';

const base =
  'inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-all duration-300 focus-visible:outline-none whitespace-nowrap';

const variants = {
  primary:
    'bg-ink text-ivory hover:bg-gold hover:text-ink shadow-luxury px-7 py-3.5 text-sm sm:text-base',
  gold:
    'bg-gold text-ink hover:bg-gold-dark hover:text-ivory shadow-gold px-7 py-3.5 text-sm sm:text-base',
  outline:
    'border border-ink/20 text-ink hover:border-gold hover:text-gold-dark px-7 py-3.5 text-sm sm:text-base',
  outlineLight:
    'border border-ivory/40 text-ivory hover:border-gold hover:bg-gold/10 px-7 py-3.5 text-sm sm:text-base',
  ghost: 'text-ink hover:text-gold-dark px-4 py-2 text-sm',
};

export default function Button({
  as = 'a',
  href = '#',
  onClick,
  variant = 'primary',
  className = '',
  children,
  type,
  ...props
}) {
  const Component = motion[as] || motion.a;
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  return (
    <Component
      href={as === 'a' ? href : undefined}
      onClick={onClick}
      type={as === 'button' ? type || 'button' : undefined}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={classes}
      {...props}
    >
      {children}
    </Component>
  );
}
