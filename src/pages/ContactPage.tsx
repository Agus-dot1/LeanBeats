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
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-bg-100">
      <Helmet>
        <title>Contacto | Lea in the Mix</title>
        <meta name="description" content="Contáctanos para producción musical, reservas de estudio o cualquier consulta." />
      </Helmet>

      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <MessageSquare size={16} className="animate-pulse" />
            <span>Contáctanos</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl font-bold md:text-6xl text-text-100"
          >
            Hagamos <span className="text-primary-200">Música</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-text-200"
          >
            Ya sea que estés buscando reservar tiempo de estudio, comprar beats o colaborar en un proyecto,
            estamos aquí para ayudarte a hacer realidad tu visión.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="p-6 rounded-2xl bg-bg-200">
                <Phone className="mb-4 w-6 h-6 text-primary-200" />
                <h3 className="mb-2 text-lg font-semibold text-text-100">Teléfono</h3>
                <p className="text-text-200">+54 11 1234-5678</p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-200">
                <Mail className="mb-4 w-6 h-6 text-primary-200" />
                <h3 className="mb-2 text-lg font-semibold text-text-100">Correo</h3>
                <p className="text-text-200">contacto@leainthemix.com</p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-200">
                <MapPin className="mb-4 w-6 h-6 text-primary-200" />
                <h3 className="mb-2 text-lg font-semibold text-text-100">Ubicación</h3>
                <p className="text-text-200">Buenos Aires, Argentina</p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-200">
                <Clock className="mb-4 w-6 h-6 text-primary-200" />
                <h3 className="mb-2 text-lg font-semibold text-text-100">Horarios</h3>
                <p className="text-text-200">24/7 con cita previa</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-bg-200">
              <h3 className="mb-4 text-xl font-semibold text-text-100">Enlaces Rápidos</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-3 items-center p-4 rounded-xl bg-bg-300/50 text-text-100"
                >
                  <Music2 size={20} />
                  <span>Explorar Beats</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-3 items-center p-4 rounded-xl bg-bg-300/50 text-text-100"
                >
                  <Calendar size={20} />
                  <span>Reservar Estudio</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-text-200">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-3 w-full rounded-xl bg-bg-200 text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-text-200">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 w-full rounded-xl bg-bg-200 text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-text-200">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-4 py-3 w-full rounded-xl bg-bg-200 text-text-100 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="studio">Reserva de Estudio</option>
                  <option value="beats">Compra de Beat</option>
                  <option value="collaboration">Colaboración</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-text-200">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="px-4 py-3 w-full rounded-xl bg-bg-200 text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex gap-2 justify-center items-center px-8 py-4 w-full font-medium text-white rounded-xl bg-primary-200"
              >
                <Send size={20} />
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;