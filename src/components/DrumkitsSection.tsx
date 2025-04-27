import { motion } from 'framer-motion';
import { Package, Download, FileAudio, AudioWaveform as Waveform } from 'lucide-react';
import toast from 'react-hot-toast';
import React from 'react';

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

const drumkits = [
    {
        id: '1',
        title: 'Trap Essentials Vol. 1',
        description: 'Essential drum sounds for modern trap production',
        price: 49.99,
        samples: 150,
        coverUrl: 'https://images.pexels.com/photos/1010518/pexels-photo-1010518.jpeg',
        demoUrl: 'https://example.com/demo.mp3'
    },
    {
        id: '2',
        title: 'Lo-Fi Dreams',
        description: 'Vintage drums with character and warmth',
        price: 39.99,
        samples: 120,
        coverUrl: 'https://images.pexels.com/photos/1436141/pexels-photo-1436141.jpeg',
        demoUrl: 'https://example.com/demo.mp3'
    },
    {
        id: '3',
        title: 'Future Bass Kit',
        description: 'Cutting-edge sounds for electronic music',
        price: 59.99,
        samples: 200,
        coverUrl: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg',
        demoUrl: 'https://example.com/demo.mp3'
    }
];

export const DrumkitsSection: React.FC = () => {
    return (
        <section className="py-24 bg-bg-100">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="flex flex-col gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full w-fit bg-primary-200/10 text-primary-200"
                    >
                        <Package size={16} className="animate-pulse" />
                        <span>Drum Kits</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-text-100"
                    >
                        Professional <span className="text-primary-200">Sound Kits</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {drumkits.map((kit) => (
                        <motion.div
                            key={kit.id}
                            variants={item}
                            className="overflow-hidden rounded-2xl bg-bg-200 group"
                        >
                            <div className="relative h-48">
                                <img
                                    src={kit.coverUrl}
                                    alt={kit.title}
                                    className="object-cover w-full h-full transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold text-text-100">{kit.title}</h3>
                                        <p className="text-text-200">{kit.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <div className="flex gap-2 items-center p-3 rounded-xl bg-bg-300/50">
                                        <FileAudio className="w-5 h-5 text-primary-200" />
                                        <div>
                                            <div className="text-sm font-medium text-text-100">{kit.samples}</div>
                                            <div className="text-xs text-text-200">Samples</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center p-3 rounded-xl bg-bg-300/50">
                                        <Waveform className="w-5 h-5 text-primary-200" />
                                        <div>
                                            <div className="text-sm font-medium text-text-100">24bit</div>
                                            <div className="text-xs text-text-200">Quality</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="text-2xl font-bold text-text-100">
                                        ${kit.price}
                                    </div>
                                    <div className="flex gap-2">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => toast.success('Demo downloading...')}
                                            className="p-2 rounded-full text-text-100 bg-bg-300"
                                        >
                                            <Download size={20} />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => toast.success('Added to cart!')}
                                            className="px-6 py-2 text-sm font-medium text-white rounded-full bg-primary-200"
                                        >
                                            Add to Cart
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
