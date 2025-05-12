interface LoadingStateProps {
  type?: 'full' | 'component';
}

export const LoadingState: React.FC<LoadingStateProps> = ({ type = 'component' }) => {
  if (type === 'full') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-white/60">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-10 h-10 border-3 border-primary-200 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};