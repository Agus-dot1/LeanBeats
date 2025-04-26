import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface SidebarLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

export const SidebarLink = ({ to, icon: Icon, label, isActive }: SidebarLinkProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-1 rounded-lg text-white transition-colors ${
        isActive ? 'bg-white/10' : 'hover:bg-white/5'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
};