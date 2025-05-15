import { motion } from 'framer-motion';
import { Music2, Trophy, Users, Star } from 'lucide-react';

export const Bio: React.FC = () => {
  const stats = [
    { icon: Music2, value: '500+', label: 'Beats Producidos' },
    { icon: Trophy, value: '10+', label: 'Años de Experiencia' },
    { icon: Users, value: '1000+', label: 'Clientes Satisfechos' },
    { icon: Star, value: '4.9', label: 'Calificación Promedio' }
  ];

  return (
    <section className="py-24 bg-bg-100">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200">
              <Music2 size={16} className="animate-pulse" />
              <span>Sobre Mí</span>
            </div>
            <h2 className="text-4xl font-bold lg:text-5xl text-text-100">
              Produciendo <span className="text-primary-200">Éxitos</span> desde 2014
            </h2>
            <p className="text-lg leading-relaxed text-text-200">
              Soy Lea, un productor musical apasionado por crear sonidos únicos y memorables. 
              Mi viaje en la música comenzó hace más de una década, y desde entonces he tenido 
              el privilegio de trabajar con artistas talentosos y crear beats que inspiran.
            </p>
            <p className="text-lg leading-relaxed text-text-200">
              Mi especialidad es la producción de música urbana, fusionando elementos del trap, 
              reggaeton y música electrónica para crear sonidos innovadores que destacan en la 
              escena musical actual.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -5 }}
                className="p-6 space-y-2 text-center rounded-2xl bg-bg-200"
              >
                <Icon size={24} className="mx-auto mb-4 text-primary-200" />
                <div className="text-3xl font-bold text-text-100">{value}</div>
                <div className="text-sm text-text-200">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};