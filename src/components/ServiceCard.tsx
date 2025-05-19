import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="overflow-hidden relative p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 transform group bg-bg-100 border-gray-700/50 hover:bg-gray-800/50 hover:-translate-y-1 hover:shadow-lg">
      {/* Glowing gradient background that animates on hover */}
      <div className={`absolute -top-24 -right-24 w-40 h-40 bg-gradient-to-br rounded-full opacity-0 blur-xl transition-opacity duration-500 ${color} group-hover:opacity-10`}></div>
      
      <div className="relative z-10">
        <div className={`flex justify-center items-center mb-4 w-12 h-12 bg-gradient-to-br rounded-xl text-text-100 ${color}`}>
          {icon}
        </div>
        
        <h3 className="mb-2 text-lg font-semibold text-text-100">{title}</h3>
        <p className="text-sm text-text-200">{description}</p>
        
        <div className="pt-4 mt-4 border-t border-gray-700/40">
          <a href="#" className="flex items-center text-sm text-primary-100 hover:text-primary-300">
            Saber más
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4 transition-transform transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;