import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Cookie, ChevronRight, ChevronUp, FileText, Scale } from 'lucide-react';

type LegalTab = 'terms' | 'privacy' | 'cookies';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LegalTab>('terms');
  const [activeSection, setActiveSection] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const termsSections: Section[] = [
    {
      id: 'introduccion',
      title: 'Introducción',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Bienvenido a Lea in the Mix, su plataforma de producción musical.</li>
          <li>Al usar este sitio, acepta cumplir con estos términos y condiciones.</li>
          <li>Si no está de acuerdo, por favor absténgase de usar nuestros servicios.</li>
        </ul>
      )
    },
    {
      id: 'copyright',
      title: 'Derechos de Autor',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Todo el contenido musical, incluyendo beats y samples, está protegido por derechos de autor © {new Date().getFullYear()} Lea in the Mix.</li>
          <li>La compra de beats otorga una licencia específica de uso, no la propiedad de los derechos de autor.</li>
          <li>No está permitida la redistribución, reventa o modificación no autorizada de nuestros productos.</li>
        </ul>
      )
    },
    {
      id: 'licencia',
      title: 'Licencia de Uso',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Al adquirir un pack de sonidos, se otorga una licencia no exclusiva, intransferible y revocable para usar el contenido en proyectos personales o comerciales.</li>
          <li>No se permite revender, sublicenciar o distribuir los archivos tal como fueron adquiridos, ni modificados con fines de reventa.</li>
          <li>El cliente conserva la titularidad de sus creaciones que usen estos sonidos, pero no de los sonidos originales.</li>
          <li>La licencia no implica cesión de derechos de autor.</li>
        </ul>
      )
    }
  ];

  const privacySections: Section[] = [
    {
      id: 'datos-personales',
      title: 'Uso de Datos Personales',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>No compartimos ni vendemos datos personales a terceros.</li>
          <li>Usamos los datos solo para procesar pedidos, brindar soporte y mejorar el sitio.</li>
          <li>No recolectamos intencionalmente datos de menores de 13 años. Si se detecta tal caso, se eliminarán inmediatamente.</li>
        </ul>
      )
    },
    {
      id: 'cookies',
      title: 'Política de Cookies',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Cookies esenciales: Necesarias para el funcionamiento del sitio.</li>
          <li>Cookies analíticas: Análisis de uso y mejora del servicio.</li>
          <li>Cookies de preferencias: Almacenan sus preferencias de usuario.</li>
          <li>Cookies de marketing: Personalización de anuncios (opcional).</li>
        </ul>
      )
    }
  ];

  // Cookie Consent Component
  const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(true);

    const acceptCookies = () => {
      localStorage.setItem('cookieConsent', 'accepted');
      setShowConsent(false);
    };

    const declineCookies = () => {
      localStorage.setItem('cookieConsent', 'declined');
      setShowConsent(false);
    };

    useEffect(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (consent) {
        setShowConsent(false);
      }
    }, []);

    if (!showConsent) return null;

    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed right-0 bottom-0 left-0 z-50 p-4 border-t bg-bg-200 border-bg-300"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
            <div className="text-sm text-text-200">
              <p>Utilizamos cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política de cookies.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-bg-300 text-text-200 hover:bg-bg-400"
              >
                Rechazar
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-200 hover:bg-primary-300"
              >
                Aceptar
              </button>
            </div>
          </div>  
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative pt-28 pb-20 min-h-screen bg-bg-100">
      <Helmet>
        <title>Legal | Lea in the Mix</title>
        <meta name="description" content="Términos y condiciones, política de privacidad y política de cookies de Lea in the Mix" />
      </Helmet>

      <div className="container px-4 mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200">
            <Shield size={16} className="animate-pulse" />
            <span>Legal</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-text-100">
            Información Legal
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { id: 'terms', icon: Shield, text: 'Términos y Condiciones' },
              { id: 'privacy', icon: Lock, text: 'Política de Privacidad' },
            ].map(({ id, icon: Icon, text }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as LegalTab)}
                className={`px-6 py-3 rounded-full transition-colors ${
                  activeTab === id
                    ? 'bg-primary-200 text-white'
                    : 'bg-bg-200 text-text-200 hover:bg-bg-300'
                }`}
              >
                <Icon className="inline-block mr-2 w-4 h-4" />
                {text}
              </button>
            ))}
          </div>

          <div className="p-4 mb-8 text-sm rounded-xl bg-bg-200">
            <p className="text-text-200">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-4"
        >
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 p-4 rounded-xl bg-bg-200">
              <h3 className="mb-4 text-lg font-semibold text-text-100">Contenido</h3>
              <nav className="space-y-2">
                {(activeTab === 'terms' ? termsSections : privacySections).map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex gap-2 items-center p-2 w-full text-sm text-left rounded transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-200/10 text-primary-200'
                        : 'text-text-200 hover:text-text-100 hover:bg-bg-300'
                    }`}
                  >
                    <ChevronRight 
                      size={16} 
                      className={activeSection === section.id ? 'text-primary-200' : ''} 
                    />
                    <span>{index + 1}. {section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="space-y-12">
              {(activeTab === 'terms' ? termsSections : privacySections).map((section) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <h2 className="mb-6 text-2xl font-bold text-text-100">{section.title}</h2>
                  {section.content}
                </motion.section>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed right-8 bottom-8 p-3 text-white rounded-full shadow-lg transition-colors bg-primary-200 hover:bg-primary-300"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      <CookieConsent />
    </div>
  );
};

export default LegalPage;