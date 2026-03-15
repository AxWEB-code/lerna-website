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
    <section className="relative bg-gradient-to-br from-white via-white to-blue-50/30 min-h-screen py-24 overflow-hidden -mt-px">

      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-40 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-[#3B71E8]/5 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-l from-[#F28C28]/5 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#3B71E8]/3 via-transparent to-[#F28C28]/3 rounded-full blur-[150px]"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0z" fill="none"/%3E%3Cpath d="M0 0h60M0 60h60M0 0v60M60 0v60" stroke="%233B71E8" stroke-width="0.5" stroke-opacity="0.03"/%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>

      {/* Floating icons with brand gradient */}
      <div className="floating-icon text-4xl top-20 left-20 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">💬</div>
      <div className="floating-icon text-3xl bottom-20 right-32 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📧</div>
      <div className="floating-icon text-3xl top-1/3 left-10 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📞</div>
      <div className="floating-icon text-3xl bottom-16 right-10 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📍</div>
      
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B71E8]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3B71E8]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
            <span className="text-sm font-semibold bg-gradient-to-r from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            <span className="text-[#1F1F1F]">Contact</span>
            <br />
            <span className="bg-gradient-to-r from-[#3B71E8] via-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              Lerna Team
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-lg">
              
              {/* Success Overlay */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#3B71E8] to-[#F28C28] rounded-2xl flex items-center justify-center z-10"
                >
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-[#3B71E8] text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-white/80">Redirecting to WhatsApp...</p>
                  </div>
                </motion.div>
              )}

              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#3B71E8] to-[#F28C28] rounded-full" />
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">
                    Full Name <span className="text-[#3B71E8]">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B71E8]/30 transition-colors text-[#1F1F1F] placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 mb-1 block">
                    Email Address <span className="text-[#3B71E8]">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@school.edu.ng"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B71E8]/30 transition-colors text-[#1F1F1F] placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 mb-1 block">
                    School Name
                  </label>
                  <input
                    name="school"
                    value={form.school}
                    onChange={handleChange}
                    placeholder="Your School Name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B71E8]/30 transition-colors text-[#1F1F1F] placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 mb-1 block">
                    Message <span className="text-[#3B71E8]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your school and how we can help..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B71E8]/30 transition-colors text-[#1F1F1F] placeholder-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-[#3B71E8] to-[#3B71E8] hover:from-[#3B71E8] hover:to-[#F28C28] text-white font-bold rounded-xl transition-all duration-500 shadow-lg shadow-[#3B71E8]/25 hover:shadow-xl hover:shadow-[#F28C28]/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We'll respond within 2 hours via WhatsApp
                </p>
              </form>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#3B71E8]/10 to-transparent rounded-tr-2xl"></div>
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
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:border-[#3B71E8]/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <item.icon className="text-[#3B71E8] text-xl mb-2" />
                  <p className="text-xs text-gray-400">{item.title}</p>
                  <p className="text-sm font-bold text-[#1F1F1F]">{item.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 rounded-2xl p-6 border border-[#3B71E8]/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#3B71E8] to-[#F28C28] rounded-xl flex items-center justify-center">
                  <FaWhatsapp className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F1F1F]">Quick WhatsApp Chat</h3>
                  <p className="text-sm text-gray-500">Get immediate assistance</p>
                </div>
              </div>
              <a
                href="https://wa.me/+2349023419897"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-[#3B71E8]/20 to-[#F28C28]/20 rounded-xl hover:from-[#3B71E8]/30 hover:to-[#F28C28]/30 transition-all duration-300 text-[#1F1F1F] font-medium"
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
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm"
            >
              <h3 className="font-bold text-[#1F1F1F] mb-4">Common Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center justify-between text-sm text-gray-500 hover:text-[#3B71E8] transition-colors py-2 border-b border-gray-200 last:border-0 group"
                  >
                    {faq}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-center gap-3 text-xs text-gray-400 pt-4"
            >
              <span className="flex items-center gap-1">
                <span className="text-[#3B71E8]">✓</span> 24/7 Support
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#F28C28]">✓</span> Free Consultation
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#3B71E8]">✓</span> No Commitment
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}