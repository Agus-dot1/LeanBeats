import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/admin');
    } catch (error) {
      toast.error('Credenciales inválidas');
    }
  };

  return (
    <div className="min-h-screen bg-bg-100 flex items-center justify-center">
      <div className="bg-[#1E1E1E] p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">Panel Administrativo</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white/60 mb-1">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 bg-[#2c2c2c] border border-white/10 rounded-md text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/60 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-[#2c2c2c] border border-white/10 rounded-md text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-200 text-white py-2 rounded-md hover:bg-primary-300 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;