import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = create<ThemeStore>((set) => {
  // Get initial theme from localStorage or default to dark
  const savedTheme = localStorage.getItem('theme') as Theme || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  return {
    theme: savedTheme,
    toggleTheme: () => 
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        return { theme: newTheme };
      }),
  };
});