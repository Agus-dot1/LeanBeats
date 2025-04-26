import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send, Music2, MessageSquare, Calendar } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-bg-100 pt-28 pb-20">
      <Helmet>
        <title>Contact Us | Lea in the Mix</title>
        <meta name="description" content="Get in touch with us for music production, studio bookings, or any inquiries." />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <MessageSquare size={16} className="animate-pulse" />
            <span>Get in Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-text-100 mb-4"
          >
            Let's Make <span className="text-primary-200">Music</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-200 text-lg max-w-2xl"
          >
            Whether you're looking to book studio time, purchase beats, or collaborate on a project,
            we're here to help bring your vision to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-bg-200">
                <Phone className="w-6 h-6 text-primary-200 mb-4" />
                <h3 className="text-lg font-semibold text-text-100 mb-2">Phone</h3>
                <p className="text-text-200">+54 11 1234-5678</p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-200">
                <Mail className="w-6 h-6 text-primary-200 mb-4" />
                <h3 className="text-lg font-semibold text-text-100 mb-2">Email</h3>
                <p className="text-text-200">contacto@leainthemix.com</p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-200">
                <MapPin className="w-6 h-6 text-primary-200 mb-4" />
                <h3 className="text-lg font-semibold text-text-100 mb-2">Location</h3>
                <p className="text-text-200">Buenos Aires, Argentina</p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-200">
                <Clock className="w-6 h-6 text-primary-200 mb-4" />
                <h3 className="text-lg font-semibold text-text-100 mb-2">Hours</h3>
                <p className="text-text-200">24/7 by appointment</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-bg-200">
              <h3 className="text-xl font-semibold text-text-100 mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-bg-300/50 text-text-100"
                >
                  <Music2 size={20} />
                  <span>Browse Beats</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-bg-300/50 text-text-100"
                >
                  <Calendar size={20} />
                  <span>Book Studio</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-bg-200 text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-bg-200 text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-200 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-bg-200 text-text-100 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="studio">Studio Booking</option>
                  <option value="beats">Beat Purchase</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-bg-200 text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-200 text-white font-medium"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;