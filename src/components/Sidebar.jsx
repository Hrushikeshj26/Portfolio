import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layers, User, MessageSquare, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'My Projects', path: '/projects', icon: Layers },
    { name: 'About me', path: '/about', icon: User },
    { name: 'Contact me', path: '/contact', icon: MessageSquare },
  ];

  return (
    <>
      {/* --- Mobile Top Header --- */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-second border-b border-gray-800 flex items-center justify-between px-6 z-40">
        <div className="font-spacemono">
          <h1 className="text-xl font-semibold text-white flex items-baseline">
            hrushij<span className="text-violet-500">.dev</span>
          </h1>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-300 hover:text-white transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- Mobile Overlay Backdrop --- */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* --- Sidebar Drawer (Desktop & Mobile) --- */}
      <div 
        className={`
          fixed md:relative top-0 left-0 w-64 min-h-full bg-second border-r-2 border-gray-800 flex flex-col justify-between py-8 z-50 
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0
        `}
      >
        <div>
          {/* Logo (Centered on desktop, left-aligned in mobile drawer) */}
          <div className="mb-11 font-spacemono px-8">
            <h1 className="text-xl md:text-2xl font-semibold text-white flex items-baseline md:justify-center">
              hrushij<span className="text-violet-500 text-2xl">.dev</span>
            </h1>
          </div>
          
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)} // Auto-close drawer on mobile when link is clicked
                className={({ isActive }) =>
                  `flex items-center space-x-4 px-8 py-3 transition-colors ${
                    isActive
                      ? 'text-white bg-linear-to-r from-violet-500 to-transparent border-r-5 border-violet-400'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`
                }
              >
                <item.icon size={20} strokeWidth={3}/>
                <span className="font-medium text-lg">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        
        {/* Optional Close Button inside Drawer for Mobile */}
        <button 
          className="md:hidden absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
      </div>
    </>
  );
};

export default Sidebar;