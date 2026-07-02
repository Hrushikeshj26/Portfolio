import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Home, Layers, User, MessageSquare, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile sidebar automatically when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'My Projects', path: '/projects', icon: Layers },
    { name: 'About me', path: '/about', icon: User },
    { name: 'Contact me', path: '/contact', icon: MessageSquare },
  ];

  // Framer Motion Variants for Staggered Links
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <>
      {/* --- Mobile Top Header (Glassmorphism) --- */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-main/80 backdrop-blur-xl border-b border-subtle flex items-center justify-between px-6 z-40 shadow-sm">
        <div className="font-spacemono">
          <Link to='/' className="text-xl font-bold text-white flex items-baseline tracking-tight">
            hrushij<span className="text-violet-500">.dev</span>
          </Link>
        </div>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-300 hover:text-white transition-colors focus:outline-none"
        >
          {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
        </motion.button>
      </div>

      {/* --- Mobile Overlay Backdrop --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* --- Sidebar Drawer (Desktop & Mobile) --- */}
      <div 
        className={`
          fixed top-0 left-0 w-64 h-screen bg-main border-r border-subtle flex flex-col justify-between py-8 z-50 
          transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)
          ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'} 
          md:translate-x-0 md:shadow-none
        `}
      >
        <div>
          {/* Logo */}
          <div className="mb-12 font-spacemono px-8">
            <Link to='/' className="text-xl md:text-2xl font-bold text-white flex items-baseline md:justify-center tracking-tight">
              hrushij<span className="text-violet-500 text-2xl">.dev</span>
            </Link>
          </div>
          
          {/* Navigation */}
          <motion.nav 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col space-y-1.5 px-3"
          >
            {navItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `group relative flex items-center space-x-4 px-5 py-3.5 rounded-xl transition-all duration-300 overflow-hidden ${
                      isActive
                        ? 'text-white bg-linear-to-r from-[#594ba0]/80 to-transparent font-semibold shadow-sm'
                        : 'text-gray-400 hover:text-white hover:bg-[#594ba0]/20 font-medium'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active Right Border Indicator */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeTabIndicator"
                          className="absolute right-0 top-0 bottom-0 w-1.5 bg-violet-400 rounded-l-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      
                      {/* Icon & Text with Hover Physics */}
                      <span className={`transition-transform duration-300 ${!isActive && 'group-hover:translate-x-1'}`}>
                        <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'text-violet-300' : ''}/>
                      </span>
                      <span className={`text-base transition-transform duration-300 ${!isActive && 'group-hover:translate-x-1'}`}>
                        {item.name}
                      </span>
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        </div>
        
        {/* Mobile Close Button */}
        <button 
          className="md:hidden absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 bg-surface rounded-full"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} strokeWidth={2.5} />
        </button>
      </div>
    </>
  );
};

export default Sidebar;