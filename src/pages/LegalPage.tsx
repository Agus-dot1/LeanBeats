import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, ChevronRight, ChevronUp, Cookie} from 'lucide-react';

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


  const getCurrentSections = (): Section[] => {
    switch (activeTab) {
      case 'terms':
        return termsSections;
      case 'privacy':
        return privacySections;
      case 'cookies':
        return cookiesSections;
      default:
        return [];
    }
  };

  const termsSections: Section[] = [
    {
      id: 'introduccion',
      title: 'Introducción',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Bienvenido al sitio oficial de Lea in the Mix. Al acceder o utilizar esta plataforma, usted acepta los presentes Términos y Condiciones.</li>
          <li>Si no está de acuerdo con alguno de estos términos, le solicitamos abstenerse de utilizar nuestros servicios.</li>
          <li>Estos términos podrán ser actualizados sin previo aviso. Se recomienda revisar esta sección periódicamente.</li>
        </ul>
      )
    },
    {
      id: 'uso-del-sitio',
      title: 'Uso del Sitio',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Este sitio está destinado exclusivamente a la comercialización de contenido musical, incluyendo librerías de sonido y beats originales producidos por Lea in the Mix.</li>
          <li>Queda prohibido el uso indebido del sitio, como intentos de acceso no autorizado, distribución automatizada de contenido o alteración del mismo.</li>
          <li>Las transacciones y comunicación comercial se realizan mediante WhatsApp. El sitio web funciona como catálogo informativo.</li>
          <li>El contacto comercial oficial es únicamente a través del WhatsApp autorizado. Desconfíe de otros números que se hagan pasar por Lea in the Mix.</li>
        </ul>
      )
    },
    {
      id: 'derechos-de-autor',
      title: 'Derechos de Autor',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Todo el contenido disponible en esta plataforma está protegido por derechos de autor © {new Date().getFullYear()} Lea in the Mix.</li>
          <li>La adquisición de productos no implica la cesión de los derechos de propiedad intelectual sobre los mismos.</li>
          <li>Está estrictamente prohibida la redistribución, reventa, copia o modificación no autorizada del material ofrecido.</li>
        </ul>
      )
    },
    {
      id: 'licencia-de-uso',
      title: 'Licencia de Uso',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Con cada compra, el usuario obtiene una licencia no exclusiva, intransferible y revocable para utilizar el contenido en proyectos personales o comerciales.</li>
          <li>La licencia no autoriza la reventa, sublicenciamiento ni distribución directa de los archivos, ya sea en su forma original o modificada.</li>
          <li>El comprador conserva los derechos sobre las obras que cree utilizando los productos, pero no adquiere derechos sobre los archivos originales.</li>
        </ul>
      )
    },
    {
      id: 'responsabilidad',
      title: 'Limitación de Responsabilidad',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Lea in the Mix no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso del contenido adquirido.</li>
          <li>El sitio se proporciona "tal cual", sin garantías explícitas o implícitas de funcionamiento ininterrumpido o libre de errores.</li>
        </ul>
      )
    },
    {
      id: 'pagos',
      title: 'Pagos y Transacciones',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Los pagos se procesan mediante WhatsApp a través de transferencias bancarias, servicios de pago digital (PayPal, Mercado Pago, etc.) según disponibilidad en su región.</li>
          <li>Proceso de compra: Contactar vía WhatsApp → Confirmar productos → Realizar pago → Recibir comprobante → Entrega del contenido.</li>
          <li>Es responsabilidad del comprador enviar el comprobante de pago válido para procesar la entrega.</li>
          <li>Los archivos serán entregados únicamente después de la confirmación del pago.</li>
        </ul>
      )
    },
    {
      id: 'reembolsos',
      title: 'Política de Reembolsos',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li><strong>TODAS LAS VENTAS SON FINALES</strong>. No se ofrecen reembolsos, devoluciones, ni intercambios bajo ninguna circunstancia.</li>
          <li>Debido a la naturaleza digital del contenido (beats, samples, loops) y la imposibilidad de "devolver" archivos digitales una vez descargados, no procesamos solicitudes de reembolso.</li>
          <li>Esta política se aplica independientemente del método de pago utilizado.</li>
          <li>Al realizar la compra, usted acepta expresamente esta política de "sin reembolsos".</li>
        </ul>
      )
    }
  ];

  const privacySections: Section[] = [
    {
      id: 'datos-personales',
      title: 'Recolección y Uso de Datos Personales',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Actualmente, este sitio no recolecta datos personales de forma automática ni mediante formularios.</li>
          <li>En caso de que en el futuro se incorporen formularios de contacto, suscripción u otros mecanismos de recopilación, los datos serán utilizados exclusivamente para brindar servicios, procesar pedidos o mantener contacto comercial.</li>
          <li>En ningún caso se venderán ni compartirán datos personales con terceros sin consentimiento explícito.</li>
        </ul>
      )
    },
    {
      id: 'proteccion',
      title: 'Medidas de Seguridad',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Se aplicarán medidas de seguridad administrativas y técnicas razonables para proteger la información eventualmente recopilada, conforme a la Ley 25.326 de Protección de Datos Personales (Argentina).</li>
        </ul>
      )
    },
    {
      id: 'menores',
      title: 'Datos de Menores',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>No se recopilan intencionalmente datos de menores de 13 años. Si se detecta dicha situación, los datos serán eliminados de forma inmediata.</li>
        </ul>
      )
    }
  ];

  const cookiesSections: Section[] = [
    {
      id: 'uso-de-cookies',
      title: 'Uso de Cookies',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Este sitio utiliza cookies para mejorar la experiencia del usuario y facilitar el funcionamiento técnico de la plataforma.</li>
          <li>Al navegar por el sitio, usted acepta el uso de cookies conforme a esta política.</li>
        </ul>
      )
    },
    {
      id: 'tipos-de-cookies',
      title: 'Tipos de Cookies Utilizadas',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li><strong>Cookies esenciales:</strong> Permiten el funcionamiento básico del sitio.</li>
          <li><strong>Cookies de análisis:</strong> Permiten evaluar métricas de uso para mejorar el servicio.</li>
          <li><strong>Cookies de preferencias:</strong> Almacenan configuraciones seleccionadas por el usuario.</li>
          <li><strong>Cookies de terceros:</strong> Si se incorporan servicios como reproductores externos o botones sociales, podrían usar cookies propias.</li>
        </ul>
      )
    },
    {
      id: 'control-de-cookies',
      title: 'Gestión y Control',
      content: (
        <ul className="pl-6 space-y-3 list-disc text-text-200">
          <li>Usted puede aceptar o rechazar cookies mediante el banner de consentimiento al ingresar al sitio.</li>
          <li>También puede administrar cookies desde la configuración de su navegador.</li>
        </ul>
      )
    }
  ];
  

  return (
    <div className="relative min-h-screen pb-20 pt-28 bg-gradient-to-b from-bg-300 via-bg-300 to-bg-100">
      <Helmet>
        <title>TERMINOS Y CONDICIONES | LEA IN THE MIX</title>
        <meta name="description" content="Términos y condiciones, política de privacidad y política de cookies de Lea in the Mix" />
      </Helmet>

      <div className="container max-w-4xl px-4 mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200">
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
              { id: 'cookies', icon: Cookie, text: 'Política de Cookies' }
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
                <Icon className="inline-block w-4 h-4 mr-2" />
                {text}
              </button>
            ))}
          </div>

          <div className="p-4 mb-8 text-sm rounded-xl bg-bg-200">
            <p className="text-text-200">
              Última actualización: 19/06/2025
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
            <div className="sticky p-4 top-28 rounded-xl bg-bg-200">
              <h3 className="mb-4 text-lg font-semibold text-text-100">Contenido</h3>
              <nav className="space-y-2">
                {getCurrentSections().map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex gap-2 items-center p-2 w-full text-sm text-left rounded transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-200/10 text-primary-200'
                        : 'text-text-200 hover:text-text-100 hover:bg-bg-300'
                    }`}
                  >
                    <ChevronRight size={16} className={activeSection === section.id ? 'text-primary-200' : ''} />
                    <span>{index + 1}. {section.title}</span>
                  </button>
                ))}
              </nav>

            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
          <div className="space-y-12">
              {getCurrentSections().map((section) => (
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
            className="fixed p-3 text-white transition-colors rounded-full shadow-lg right-8 bottom-8 bg-primary-200 hover:bg-primary-300"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LegalPage;