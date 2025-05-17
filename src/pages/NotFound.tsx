import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-bg-300 via-bg-300 to-bg-100">
      <div className="px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary-200">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-white">Página no encontrada</h2>
        <p className="mb-8 text-gray-400">Lo sentimos, la página que buscas no existe.</p>
        <div className="space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 text-white rounded-lg transition-colors bg-primary-200 hover:bg-primary-200"
          >
            Volver al inicio
          </button>
          <button 
            onClick={() => navigate(-1)}
            className="px-6 py-2 text-white rounded-lg border transition-colors border-white/20 hover:bg-white/10"
          >
            Volver atrás
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;