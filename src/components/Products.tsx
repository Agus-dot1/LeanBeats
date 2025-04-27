import { motion } from "framer-motion";
import { Wand2, Music2, Play, Tag, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
};

const beats = [
    {
        id: '1',
        title: 'Noche de Verano',
        producer: 'Lea in the Mix',
        genre: 'Trap',
        bpm: 140,
        price: 29.99,
        coverUrl: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
        audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1745398664/BEAT_REGGAETON_013_oeze7x.wav',
    },
    {
        id: '2',
        title: 'Luna Llena',
        producer: 'Lea in the Mix',
        genre: 'R&B',
        bpm: 95,
        price: 34.99,
        coverUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg',
        audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1745398664/BEAT_REGGAETON_013_oeze7x.wav',
    },
    {
        id: '3',
        title: 'Amanecer',
        producer: 'Lea in the Mix',
        genre: 'Pop',
        bpm: 128,
        price: 39.99,
        coverUrl: 'https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg',
        audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1745398664/BEAT_REGGAETON_013_oeze7x.wav',
    }
];

export const Products: React.FC = () => {
    return (
        <section className="py-24 bg-bg-200">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="flex flex-col gap-8 mb-16 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
                        >
                            <Wand2 size={16} className="animate-pulse" />
                            <span>Beats Exclusivos</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-4 text-6xl font-bold tracking-tight md:text-8xl text-text-100"
                        >
                            Innecesariamente
                            <br />
                            <span className="text-primary-200">Buenos Beat(s)</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-lg leading-relaxed md:text-xl text-text-200"
                        >
                            Producción de alta calidad para artistas que buscan destacar.
                            Beats únicos que elevarán tu música al siguiente nivel.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex gap-4 items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex gap-2 items-center px-8 py-4 font-semibold text-white rounded-full transition-colors bg-primary-200"
                        >
                            <Music2 size={20} />
                            <span>Ver Catálogo</span>
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {beats.map((beat) => (
                        <motion.div
                            key={beat.id}
                            variants={item}
                            className="flex gap-6 items-center p-4 rounded-xl bg-bg-100"
                        >
                            <div className="overflow-hidden relative flex-shrink-0 w-20 h-20 rounded-lg">
                                <img
                                    src={beat.coverUrl}
                                    alt={beat.title}
                                    className="object-cover w-full h-full"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => toast.success('Playing: ' + beat.title)}
                                    className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity bg-black/50 hover:opacity-100"
                                >
                                    <div className="p-2 rounded-full bg-primary-200">
                                        <Play className="w-4 h-4 text-white" />
                                    </div>
                                </motion.button>
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-semibold truncate text-text-100">{beat.title}</h3>
                                        <p className="text-sm text-text-200">{beat.producer}</p>
                                    </div>
                                    <div className="text-lg font-bold text-text-100">
                                        ${beat.price}
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <span className="flex gap-1 items-center text-sm text-text-200">
                                        <Tag size={14} />
                                        {beat.genre}
                                    </span>
                                    <span className="flex gap-1 items-center text-sm text-text-200">
                                        <Clock size={14} />
                                        {beat.bpm} BPM
                                    </span>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => toast.success('Added to cart!')}
                                className="px-6 py-2 text-sm font-medium text-white rounded-full bg-primary-200"
                            >
                                Add to Cart
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};