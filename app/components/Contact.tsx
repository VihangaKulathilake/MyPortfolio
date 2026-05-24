'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiGithub, FiLinkedin } from 'react-icons/fi';
import { contactInfo } from '../data';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
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
    
    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto hide success notice after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
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
            className="h-[4px] rounded-full bg-gradient-to-r from-[#00f2fe] to-[#f355da]"
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
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass hype-card p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#00f2fe]/10 dark:bg-[#00f2fe]/20 text-[#00f2fe]">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Email Me</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#00f2fe] transition-colors duration-300">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#00f2fe]/10 dark:bg-[#00f2fe]/20 text-[#00f2fe]">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Call Me</span>
                    <a href={`tel:${contactInfo.phone}`} className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#00f2fe] transition-colors duration-300">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#00f2fe]/10 dark:bg-[#00f2fe]/20 text-[#00f2fe]">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {contactInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social shortcuts */}
              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider mb-4">Connect Socially</span>
                <div className="flex gap-4">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] transition-all duration-300"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] transition-all duration-300"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="lg:col-span-7"
          >
            <div className="glass hype-card p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
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
                    className={`h-11 px-4 rounded-xl border bg-white/50 dark:bg-slate-950/20 text-sm transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-[#00f2fe]/25 ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-200 dark:border-slate-800 focus:border-[#00f2fe] dark:focus:border-[#00f2fe]'
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
                    className={`h-11 px-4 rounded-xl border bg-white/50 dark:bg-slate-950/20 text-sm transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-[#00f2fe]/25 ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-200 dark:border-slate-800 focus:border-[#00f2fe] dark:focus:border-[#00f2fe]'
                    }`}
                    placeholder="johndoe@example.com"
                  />
                  {errors.email && (
                    <span className="text-xs font-semibold text-rose-500">{errors.email}</span>
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
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`p-4 rounded-xl border bg-white/50 dark:bg-slate-950/20 text-sm transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-[#00f2fe]/25 resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-200 dark:border-slate-800 focus:border-[#00f2fe] dark:focus:border-[#00f2fe]'
                    }`}
                    placeholder="Type your message here..."
                  />
                  {errors.message && (
                    <span className="text-xs font-semibold text-rose-500">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 h-12 w-full rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#f355da] hover:opacity-95 text-slate-950 font-bold shadow-lg shadow-[#00f2fe]/10 hover:shadow-[#f355da]/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer`}
                >
                  {isSubmitting ? (
                    <span className="flex h-5 w-5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 border-2 border-white border-t-transparent animate-spin"></span>
                    </span>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="w-4 h-4" />
                    </>
                  )}
                </button>

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
          </motion.div>

        </div>

      </div>
    </section>
  );
}
