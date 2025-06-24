import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import EmailJs from '@emailjs/browser';
import { useToast } from '../context/ToastContext';
import { Footer } from '../components/Footer';


const ContactPage: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim() || formData.name.length < 2) {
      showToast('El nombre debe tener al menos 2 caracteres', 'error');
      return false;
    }

    if (!validateEmail(formData.email)) {
      showToast('Por favor, ingresa un email válido', 'error');
      return false;
    }

    if (!formData.subject) {
      showToast('Por favor, selecciona un asunto', 'error');
      return false;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      showToast('El mensaje debe tener al menos 10 caracteres', 'error');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmissionTime < 60000) {
      showToast('Por favor, espera un minuto antes de enviar otro mensaje', 'warning');
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject,
      message: formData.message.trim()
    };
  
    try {
      const result = await EmailJs.send(
        'service_59v2mzb',
        'template_fwetx9s',
        templateParams,
        'cTt3_QbBja6cW0sk3'
      );
  
      console.log('SUCCESS:', result.text);
      setLastSubmissionTime(now);
      showToast('Mensaje enviado correctamente', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      showToast('Hubo un problema al enviar el mensaje', 'info');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pb-20 pt-28 bg-gradient-to-b from-bg-300 via-bg-100 to-bg-100">
      <Helmet>
        <title>CONTACTO | LEA IN THE MIX</title>
        <meta name="description" content="Contáctanos para producción musical, reservas de estudio o cualquier consulta." />
      </Helmet>

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <MessageSquare size={16} className="animate-pulse" />
            <span>Contáctanos</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-bold md:text-6xl text-text-100"
          >
            Atención <span className="text-primary-200">al Cliente</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-lg text-text-200"
          >
            Para cualquier consulta o asistencia, nuestro equipo de atención al cliente está disponible para garantizar que cada interacción sea satisfactoria. Si encuentras algún problema, estamos aquí para ayudarte a resolverlo.
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
                <Phone className="w-6 h-6 mb-4 text-primary-200" />
                <h3 className="mb-2 text-lg font-semibold text-text-100">Teléfono</h3>
                <p className="text-sm text-text-200">+54 11 7060-7158</p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-200">
                <Mail className="w-6 h-6 mb-4 text-primary-200" />
                <h3 className="mb-2 text-lg font-semibold text-text-100">Correo</h3>
                <p className="text-sm text-text-200">leainthemix.c@hotmail.com</p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-200">
                <MapPin className="w-6 h-6 mb-4 text-primary-200" />
                <h3 className="mb-2 text-lg font-semibold text-text-100">Ubicación</h3>
                <p className="text-sm text-text-200">Buenos Aires, Argentina</p>
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
                    className="w-full px-4 py-3 rounded-xl bg-bg-200 text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-primary-200"
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
                    className="w-full px-4 py-3 rounded-xl bg-bg-200 text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-primary-200"
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
                  className="w-full px-4 py-3 rounded-xl bg-bg-200 text-text-100 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="beats">Compra de Beat</option>
                  <option value="atention">Atencion al cliente</option>
                  <option value="website">Error en la página</option>
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
                  className="w-full px-4 py-3 rounded-xl bg-bg-200 text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder="Cuéntanos sobre tu problema..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full gap-2 px-8 py-4 font-medium text-white rounded-xl bg-primary-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
