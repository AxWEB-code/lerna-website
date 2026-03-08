"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheck } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    school: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate slight delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const message = `
Hello Lerna Team,

I'm interested in learning more about Lerna for my school.

Name: ${form.name}
Email: ${form.email}
School: ${form.school || "Not specified"}

Message:
${form.message}

Looking forward to your response.
`;

    const url = `https://wa.me/+2349023419897?text=${encodeURIComponent(message)}`;
    
    setIsSuccess(true);
    setIsSubmitting(false);
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
    
    window.open(url, "_blank");
  };

  const contactInfo = [
    { icon: FaPhone, title: "Phone", value: "+234 902 341 9897", desc: "Mon-Fri 9am-5pm" },
    { icon: FaEnvelope, title: "Email", value: "support@lerna.africa", desc: "24/7 support" },
    { icon: FaMapMarkerAlt, title: "Location", value: "Lagos, Nigeria", desc: "Headquarters" },
    { icon: FaClock, title: "Response Time", value: "< 2 hours", desc: "Average response" }
  ];

  const faqs = [
    "How quickly can we onboard our school?",
    "Do you offer training for teachers?",
    "Is there a free trial available?"
  ];

  return (
    <section className="relative bg-[#0a0e1a] text-white min-h-screen py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.02] via-transparent to-blue-500/[0.02]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-green-400 font-mono text-sm tracking-widest">
              GET IN TOUCH
            </span>
            <div className="h-px w-12 bg-green-500/30" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Lerna Team
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about Lerna? Want to onboard your school? 
            Our team is ready to help you transform your school management.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-2xl border border-white/[0.05] p-8 backdrop-blur-sm">
              
              {/* Success Overlay */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-green-500/90 rounded-2xl flex items-center justify-center z-10 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-green-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-white/80">Redirecting to WhatsApp...</p>
                  </div>
                </motion.div>
              )}

              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-green-500 rounded-full" />
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">
                    Full Name <span className="text-green-400">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-green-500/30 transition-colors text-white placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-1 block">
                    Email Address <span className="text-green-400">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@school.edu.ng"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-green-500/30 transition-colors text-white placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-1 block">
                    School Name
                  </label>
                  <input
                    name="school"
                    value={form.school}
                    onChange={handleChange}
                    placeholder="Your School Name"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-green-500/30 transition-colors text-white placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-1 block">
                    Message <span className="text-green-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your school and how we can help..."
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-green-500/30 transition-colors text-white placeholder-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <span className="text-lg">→</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We'll respond within 2 hours via WhatsApp
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-xl p-4 border border-white/[0.05] hover:border-green-500/30 transition-colors"
                >
                  <item.icon className="text-green-400 text-xl mb-2" />
                  <p className="text-xs text-gray-500">{item.title}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Quick WhatsApp Chat</h3>
                  <p className="text-sm text-gray-400">Get immediate assistance</p>
                </div>
              </div>
              <a
                href="https://wa.me/+2349023419897"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 bg-green-500/20 rounded-xl hover:bg-green-500/30 transition-colors"
              >
                <span className="text-sm">Start conversation</span>
                <span className="text-lg">→</span>
              </a>
            </motion.div>

            {/* FAQ Preview */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-2xl p-6 border border-white/[0.05]"
            >
              <h3 className="font-semibold mb-4">Common Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center justify-between text-sm text-gray-400 hover:text-green-400 transition-colors py-2 border-b border-white/[0.05] last:border-0"
                  >
                    {faq}
                    <span>→</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-center gap-3 text-xs text-gray-500 pt-4"
            >
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> 24/7 Support
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> Free Consultation
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> No Commitment
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}