'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiGithub, FiLinkedin } from 'react-icons/fi';
import { contactInfo } from '../data';
import TiltCard from './TiltCard';
import Magnetic from './Magnetic';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        // Handle error states here
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute bottom-0 right-0 glow-element bg-purple-500/10 dark:bg-purple-500/5 translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-glow"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[4px] rounded-full bg-gradient-to-r from-brand-start to-brand-end"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl text-center"
          >
            Have a project in mind, a job opportunity, or just want to say hello? Drop me a message below!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Details & Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            <TiltCard>
              <div className="glass hype-card p-8 rounded-3xl border border-card-border h-full w-full">
                <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <Magnetic className="w-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-badge-bg text-accent-primary border border-badge-border">
                        <FiMail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Email Me</span>
                        <a href={`mailto:${contactInfo.email}`} className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-accent-primary transition-colors duration-300">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </Magnetic>

                  {/* Phone */}
                  <Magnetic className="w-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-badge-bg text-accent-primary border border-badge-border">
                        <FiPhone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Call Me</span>
                        <a href={`tel:${contactInfo.phone}`} className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-accent-primary transition-colors duration-300">
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                  </Magnetic>

                  {/* Location */}
                  <Magnetic className="w-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-badge-bg text-accent-primary border border-badge-border">
                        <FiMapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Location</span>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {contactInfo.location}
                        </span>
                      </div>
                    </div>
                  </Magnetic>
                </div>

                {/* Social shortcuts */}
                <div className="mt-8 pt-8 border-t border-card-border font-normal">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider mb-4">Connect Socially</span>
                  <div className="flex gap-4">
                    <Magnetic>
                      <a
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl border border-btn-sec-border bg-btn-sec text-slate-600 dark:text-slate-400 hover:border-accent-primary hover:text-accent-primary transition-all duration-300 cursor-pointer"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl border border-btn-sec-border bg-btn-sec text-slate-600 dark:text-slate-400 hover:border-accent-primary hover:text-accent-primary transition-all duration-300 cursor-pointer"
                      >
                        <FiLinkedin className="w-5 h-5" />
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="lg:col-span-7 w-full"
          >
            <TiltCard>
              <div className="glass hype-card p-8 rounded-3xl border border-card-border h-full w-full">
                <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`h-11 px-4 rounded-xl border bg-input-bg text-sm transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-input-focus-ring ${errors.name
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-input-border focus:border-input-focus-border'
                        }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="text-xs font-semibold text-rose-500">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`h-11 px-4 rounded-xl border bg-input-bg text-sm transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-input-focus-ring ${errors.email
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-input-border focus:border-input-focus-border'
                        }`}
                      placeholder="johndoe@example.com"
                    />
                    {errors.email && (
                      <span className="text-xs font-semibold text-rose-500">{errors.email}</span>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`h-11 px-4 rounded-xl border bg-input-bg text-sm transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-input-focus-ring ${errors.subject
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-input-border focus:border-input-focus-border'
                        }`}
                      placeholder="Subject"
                    />
                    {errors.subject && (
                      <span className="text-xs font-semibold text-rose-500">{errors.subject}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`min-h-[140px] px-4 py-3 rounded-xl border bg-input-bg text-sm transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-input-focus-ring ${errors.message
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-input-border focus:border-input-focus-border'
                        }`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <span className="text-xs font-semibold text-rose-500">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Magnetic className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 h-12 w-full rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-brand-start via-brand-mid to-brand-end hover:opacity-95 text-white dark:text-slate-950 font-bold shadow-lg shadow-accent-primary/10 hover:shadow-accent-pink/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex h-5 w-5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-5 w-5 border-2 border-white border-t-transparent animate-spin"></span>
                        </span>
                      ) : (
                        <>
                          Send Message
                          <FiSend className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </Magnetic>

                  {/* Success Banner */}
                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30"
                      >
                        <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-semibold">
                          Thank you! Your message has been sent successfully. I will get back to you soon.
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </form>
              </div>
            </TiltCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
