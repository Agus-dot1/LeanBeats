import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, Star, DivideIcon as LucideIcon } from 'lucide-react';

interface Feature {
    icon: typeof LucideIcon;
    text: string;
}

interface ProductCardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: string | { min: number; max: number };
    features?: Feature[];
    rating?: number;
    sales?: number;
    featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    title,
    description,
    imageUrl,
    price,
    features,
    rating,
    sales,
    featured = false,
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`bg-bg-100 rounded-2xl overflow-hidden border-2 ${
                featured ? 'border-primary-200' : 'border-transparent'
            }`}
        >
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-[300px] object-cover"
                />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute p-2 transition-colors rounded-full top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                >
                    <Heart className="w-5 h-5 text-white" />
                </motion.button>
                {featured && (
                    <div className="absolute px-3 py-1 text-sm font-medium text-white rounded-full top-4 left-4 bg-primary-200">
                        Featured
                    </div>
                )}
            </div>
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="mb-2 text-2xl font-bold text-text-100">{title}</h3>
                        <p className="text-sm text-text-200">{description}</p>
                    </div>
                </div>

                {features && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-bg-200 text-text-200"
                            >
                                <feature.icon size={14} />
                                <span>{feature.text}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                    {rating && (
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-current text-primary-200" />
                            <span className="text-sm font-medium text-text-100">{rating}</span>
                        </div>
                    )}
                    {sales && (
                        <div className="text-sm text-text-200">
                            {sales} ventas
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <div className="font-semibold text-text-100">
                        {typeof price === 'string' ? price : `$${price.min} – $${price.max}`}
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-white rounded-full bg-primary-200"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};
