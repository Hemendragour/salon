import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/siteData';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number';
    else if (!/^[0-9+\s-]{7,15}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number';
    if (!form.service) next.service = 'Please select a service';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl bg-white px-8 py-16 text-center shadow-luxury"
      >
        <CheckCircle2 size={48} className="text-gold-dark" />
        <h3 className="font-display text-2xl text-ink">Request Received</h3>
        <p className="max-w-sm text-sm text-charcoal/65">
          Thank you, {form.name.split(' ')[0]}. Our team will call you shortly at {form.phone} to confirm your
          appointment.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-white px-7 sm:px-10 py-9 sm:py-10 shadow-luxury">
      <h3 className="font-display text-2xl text-ink">Book Your Appointment</h3>
      <p className="mt-2 text-sm text-charcoal/60">Fill in your details and we'll confirm by phone shortly.</p>

      <div className="mt-7 flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal/80">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full rounded-xl border bg-ivory/60 px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none ${
              errors.name ? 'border-red-400' : 'border-ink/10'
            }`}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal/80">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            className={`w-full rounded-xl border bg-ivory/60 px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none ${
              errors.phone ? 'border-red-400' : 'border-ink/10'
            }`}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-charcoal/80">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`w-full rounded-xl border bg-ivory/60 px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none ${
              errors.service ? 'border-red-400' : 'border-ink/10'
            }`}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1.5 text-xs text-red-500">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal/80">
            Message <span className="text-charcoal/40">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="Preferred date, time, or any special request"
            className="w-full rounded-xl border border-ink/10 bg-ivory/60 px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none resize-none"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-medium text-ivory shadow-luxury hover:bg-gold hover:text-ink transition-colors"
        >
          <Send size={16} />
          Request Appointment
        </motion.button>
      </div>
    </form>
  );
}
