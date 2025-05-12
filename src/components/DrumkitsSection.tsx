import { motion } from 'framer-motion';
import { Package, FileAudio, Music2, Play, Folder, HardDrive, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

const drumkits = [
    {
        id: '1',
        title: 'Trap Essentials Vol. 1',
        description: 'Essential drum sounds for modern trap production',
        price: 49.99,
        coverUrl: 'https://images.pexels.com/photos/1010518/pexels-photo-1010518.jpeg',
        category: 'trap',
        features: {
            samples: 150,
            formats: ['WAV', 'MIDI'],
            size: '1.2 GB',
            bpm: '80-160'
        }
    }
];

export const DrumkitsSection: React.FC = () => {
    return (
        <section className="py-12 sm:py-24 bg-bg-100">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
                    >
                        <Package size={16} className="animate-pulse" />
                        <span>Librerías</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-4xl font-bold text-text-100"
                    >
                        <span className="text-primary-200">Profesionales</span> Librerías
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl text-lg text-text-200"
                    >
                        Descubre nuestra colección de kits de samples profesionales. Desde drums hasta melodías, 
                        todo lo que necesitas para tu próxima producción.
                    </motion.p>
                </div>

                {drumkits.map((kit) => (
                    <motion.div
                        key={kit.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-hidden mb-12 rounded-3xl transition-shadow duration-300 bg-bg-200 hover:shadow-xl"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-[300px] lg:h-full min-h-[400px]">
                                <img
                                    src={kit.coverUrl}
                                    alt={kit.title}
                                    className="object-cover absolute inset-0 w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                                <div className="flex absolute inset-0 flex-col justify-between p-8">
                                    <div className="space-y-4">
                                        <span className="inline-flex gap-2 items-center px-3 py-1 text-sm text-white rounded-full backdrop-blur-sm bg-white/10">
                                            <Package size={14} />
                                            {kit.category}
                                        </span>
                                        <h2 className="text-3xl font-bold text-white">{kit.title}</h2>
                                        <p className="text-white/80">{kit.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 space-y-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-bg-300/50">
                                        <FileAudio className="mb-2 w-6 h-6 text-primary-200" />
                                        <div className="text-2xl font-bold text-text-100">{kit.features.samples}</div>
                                        <div className="text-sm text-text-200">Samples Totales</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-bg-300/50">
                                        <Folder className="mb-2 w-6 h-6 text-primary-200" />
                                        <div className="text-2xl font-bold text-text-100">{kit.features.formats.join(', ')}</div>
                                        <div className="text-sm text-text-200">Formatos</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-bg-300/50">
                                        <HardDrive className="mb-2 w-6 h-6 text-primary-200" />
                                        <div className="text-2xl font-bold text-text-100">{kit.features.size}</div>
                                        <div className="text-sm text-text-200">Tamaño Total</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-bg-300/50">
                                        <Music2 className="mb-2 w-6 h-6 text-primary-200" />
                                        <div className="text-2xl font-bold text-text-100">{kit.features.bpm}</div>
                                        <div className="text-sm text-text-200">Rango BPM</div>
                                    </div>
                                </div>

                                <Link to="/packs" className="block">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex gap-2 justify-center items-center px-8 py-4 w-full font-semibold text-white rounded-full transition-all bg-primary-200 hover:shadow-lg hover:shadow-primary-200/20"
                                    >
                                        <span>Ver Todas las Librerías</span>
                                        <ArrowRight size={20} />
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
