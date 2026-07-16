import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-main text-white"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100vh", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
    >
      {/* Animated H Logo SVG */}
      <div className="mb-6 flex items-center justify-center h-48 w-48">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl overflow-visible">
          <defs>
            <linearGradient id="hPurpleGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" /> 
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>

          {/* Left Pillar (Purple Gradient) */}
          <motion.path
            d="M 25 78 L 25 28 L 40 18 L 40 43 L 58 43 L 40 53 L 40 68 Z"
            fill="url(#hPurpleGradient)"
            initial={{ x: -25, y: 15, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          />

          {/* Right Pillar (White) */}
          <motion.path
            d="M 75 22 L 75 72 L 60 82 L 60 57 L 42 57 L 60 47 L 60 32 Z"
            fill="#ffffff"
            initial={{ x: 25, y: -15, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          />
        </svg>
      </div>

      {/* Text Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        className="font-spacemono text-3xl font-bold tracking-tight mb-8"
      >
        hrushij<span className="text-violet-500">.dev</span>
      </motion.div>

      {/* Loading Progress Bar */}
      <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-violet-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;