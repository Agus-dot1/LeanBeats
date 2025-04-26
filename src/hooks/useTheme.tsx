import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = create<ThemeStore>((set) => {
  // Set initial theme to dark and update HTML attribute
  document.documentElement.setAttribute('data-theme', 'dark');
  
  return {
    theme: 'dark',
    toggleTheme: () => 
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        return { theme: newTheme };
      }),
  };
});