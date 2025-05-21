import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Music, Send } from 'lucide-react';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { useToast } from '../context/ToastContext';
import { sendEmailNotification } from '../services/emailService';

const BeatsUnavailablePage: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmailNotification({
        email: email,
        subject: 'Notificación de Beats',
        message: 'Solicitud de notificación cuando los beats estén disponibles'
      });

      showToast('¡Te notificaremos cuando los beats estén disponibles!', 'success');
      setEmail('');
    } catch (error) {
      showToast('Hubo un error al registrar tu email. Por favor, intenta nuevamente.', 'error');
      console.error('Error sending notification:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pt-24 pb-20 min-h-screen bg-gradient-to-b from-bg-300 via-bg-100 to-bg-100">
      <Helmet>
        <title>Beats | Lea in the Mix</title>
        <meta name="description" content="Próximamente, beats de alta calidad para tu próximo proyecto musical." />
      </Helmet>

      <div className="container min-h-screen px-4 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center py-20"
        >
          <Music size={64} className="mb-6 text-primary-200 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-text-100 mb-4">
            Próximamente
          </h1>
          <p className="text-lg text-text-200 max-w-2xl mb-8">
            Estamos preparando una increíble colección de beats para vos. 
            Volvé pronto para descubrir nuestro catálogo completo.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default BeatsUnavailablePage;