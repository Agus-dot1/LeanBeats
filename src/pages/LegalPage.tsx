import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock } from 'lucide-react';

const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  return (
    <div className="pt-28 pb-20 min-h-screen bg-bg-100">
      <Helmet>
        <title>Legal | Lea in the Mix</title>
        <meta name="description" content="Términos y condiciones y política de privacidad de Lea in the Mix" />
      </Helmet>

      <div className="container px-4 mx-auto max-w-4xl">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Shield size={16} className="animate-pulse" />
            <span>Legal</span>
          </motion.div>
          
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === 'terms'
                  ? 'bg-primary-200 text-white'
                  : 'bg-bg-200 text-text-200 hover:bg-bg-300'
              }`}
            >
              Términos y Condiciones
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === 'privacy'
                  ? 'bg-primary-200 text-white'
                  : 'bg-bg-200 text-text-200 hover:bg-bg-300'
              }`}
            >
              Política de Privacidad
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert max-w-none"
        >
          {activeTab === 'terms' ? (
            <div className="space-y-8">
              <section>
                <h2>1. Introducción</h2>
                <p>
                  Bienvenido a Lea in the Mix ("nosotros", "nuestro", "el sitio"). Al acceder y utilizar este sitio web,
                  usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con estos términos,
                  por favor no utilice este sitio.
                </p>
              </section>

              <section>
                <h2>2. Uso del Sitio</h2>
                <h3>2.1 Licencia de Uso</h3>
                <p>
                  Se le otorga una licencia limitada, no exclusiva y no transferible para acceder y utilizar este sitio
                  de acuerdo con estos términos.
                </p>

                <h3>2.2 Restricciones de Uso</h3>
                <p>Usted se compromete a no:</p>
                <ul>
                  <li>Utilizar el sitio de manera ilegal o fraudulenta</li>
                  <li>Copiar, modificar o distribuir el contenido sin autorización</li>
                  <li>Intentar acceder a áreas restringidas del sitio</li>
                  <li>Utilizar bots o métodos automatizados para acceder al sitio</li>
                  <li>Realizar actividades que puedan dañar o sobrecargar nuestros sistemas</li>
                </ul>
              </section>

              <section>
                <h2>3. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido presente en este sitio (incluyendo pero no limitado a beats, samples, drumkits,
                  logotipos, textos e imágenes) está protegido por derechos de autor y es propiedad de Lea in the Mix.
                </p>
              </section>

              <section>
                <h2>4. Condiciones de Compra</h2>
                <p>
                  Los precios se muestran en dólares estadounidenses. El pago se procesa a través de plataformas seguras.
                  La entrega es inmediata mediante descarga digital. No se realizan reembolsos en productos digitales una
                  vez descargados.
                </p>
              </section>

              <section>
                <h2>5. Limitación de Responsabilidad</h2>
                <p>No nos hacemos responsables por:</p>
                <ul>
                  <li>Interrupciones temporales del servicio</li>
                  <li>Pérdidas indirectas derivadas del uso del sitio</li>
                  <li>Contenido generado por usuarios</li>
                  <li>Problemas técnicos fuera de nuestro control</li>
                </ul>
              </section>

              <section>
                <h2>6. Modificaciones</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                  vigor inmediatamente después de su publicación en el sitio.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-8">
              <section>
                <h2>1. Recopilación de Datos</h2>
                <p>Recopilamos:</p>
                <ul>
                  <li>Información de contacto (nombre, email)</li>
                  <li>Datos de facturación</li>
                  <li>Historial de compras</li>
                  <li>Información técnica (IP, dispositivo)</li>
                  <li>Preferencias musicales y de uso</li>
                </ul>
              </section>

              <section>
                <h2>2. Uso de la Información</h2>
                <p>Utilizamos sus datos para:</p>
                <ul>
                  <li>Procesar pedidos y pagos</li>
                  <li>Enviar actualizaciones de productos</li>
                  <li>Mejorar nuestros servicios</li>
                  <li>Personalizar su experiencia</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2>3. Compartición de Datos</h2>
                <p>Compartimos datos con:</p>
                <ul>
                  <li>Procesadores de pago</li>
                  <li>Servicios de análisis web</li>
                  <li>Proveedores de servicios técnicos</li>
                  <li>Autoridades (cuando sea legalmente requerido)</li>
                </ul>
              </section>

              <section>
                <h2>4. Protección de Datos</h2>
                <p>Implementamos medidas de seguridad como:</p>
                <ul>
                  <li>Encriptación de datos sensibles</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Monitoreo regular de seguridad</li>
                  <li>Copias de seguridad periódicas</li>
                </ul>
              </section>

              <section>
                <h2>5. Derechos del Usuario</h2>
                <p>Usted tiene derecho a:</p>
                <ul>
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar información incorrecta</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento</li>
                  <li>Portar sus datos a otro servicio</li>
                </ul>
              </section>

              <section>
                <h2>6. Contacto</h2>
                <p>
                  Para ejercer sus derechos o realizar consultas, contáctenos en privacidad@leainthemix.com o utilice
                  nuestro formulario de contacto.
                </p>
              </section>

              <section>
                <h2>7. Actualizaciones</h2>
                <p>
                  Esta política puede actualizarse periódicamente. La fecha de última actualización se mostrará al inicio
                  del documento.
                </p>
              </section>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;