import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-gray-200 hover:bg-gray-300' 
          : 'bg-gray-700 hover:bg-gray-600'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg ${
            theme === 'light' 
              ? 'bg-yellow-300 text-yellow-700' 
              : 'bg-blue-900 text-blue-100'
          }`}
          layout
          transition={spring}
          initial={{ x: theme === 'light' ? 0 : 32, opacity: 0 }}
          animate={{ 
            x: theme === 'light' ? 0 : 32, 
            opacity: 1,
            rotate: theme === 'light' ? 0 : 360
          }}
          exit={{ x: theme === 'light' ? -32 : 64, opacity: 0 }}
        >
          {theme === 'light' ? (
            <FiSun className="w-4 h-4" />
          ) : (
            <FiMoon className="w-3.5 h-3.5" />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <FiSun className={`w-3.5 h-3.5 ${
          theme === 'light' ? 'text-yellow-500' : 'text-gray-500'
        }`} />
        <FiMoon className={`w-3 h-3 ${
          theme === 'dark' ? 'text-blue-300' : 'text-gray-500'
        }`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
