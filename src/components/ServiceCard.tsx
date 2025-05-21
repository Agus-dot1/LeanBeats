import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="overflow-hidden relative p-5 rounded-3xl border backdrop-blur-sm transition-all duration-200 transform select-none group bg-gray-800/50 border-gray-700/50 hover:bg-[#1D1F21] hover:-translate-y-1 hover:shadow-lg">

      <div className={`absolute -top-24 -right-24 w-40 h-40 bg-gradient-to-br rounded-full opacity-0 blur-xl transition-opacity duration-500 ${color} group-hover:opacity-40`}></div>
      
      <div className="relative z-10">
        <div className={`flex justify-center items-center mb-4 w-12 h-12 text-white bg-gradient-to-br rounded-xl ${color}`}>
          {icon}
        </div>
        
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/90">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;