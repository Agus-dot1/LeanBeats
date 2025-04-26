import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, LucideIcon } from 'lucide-react';

interface LocationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  schedule?: string;
  isLarge?: boolean;
  features?: Array<{
    icon: LucideIcon;
    text: string;
  }>;
  price?: string;
  comingSoon?: boolean;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  title,
  description,
  imageUrl,
  schedule,
  isLarge = false,
  features = [],
  price,
  comingSoon = false,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-2xl ${isLarge ? 'md:col-span-2' : ''}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      <div className="relative h-full p-6 flex flex-col justify-between min-h-[320px]">
        <div>
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            {price && (
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                {price}
              </span>
            )}
          </div>
          <p className="text-white/80 text-sm max-w-md mb-6">{description}</p>
          {features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm"
                >
                  <feature.icon size={14} />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          {!comingSoon ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium"
            >
              <MapPin size={16} />
              <span>Reservar Ahora</span>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium"
            >
              <MapPin size={16} />
              <span>Pre-reservar</span>
            </motion.button>
          )}
          {schedule && (
            <span className="text-sm text-white/80">{schedule}</span>
          )}
          {!schedule && !comingSoon && (
            <motion.button
              whileHover={{ x: 5 }}
              className="p-2 rounded-full bg-white text-black"
            >
              <ArrowRight size={20} />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};