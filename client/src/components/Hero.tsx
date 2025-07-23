import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'for Real-World Impact';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-slate-900 dark:text-white">AI-Powered Solutions</span>
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-extrabold">{displayText}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Custom software, analytics & cloud services built to transform service companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:shadow-2xl"
              >
                Explore Platform
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2024</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">AI/ML</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">₹2k-4k</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Per Hour</div>
              </div>
            </div>
          </motion.div>

          {/* Right side illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg h-96 lg:h-[500px]">
              {/* Central circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse-slow"></div>
              
              {/* Floating cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 left-8 w-24 h-16 glass rounded-lg p-3"
              >
                <div className="w-full h-2 bg-blue-400 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-slate-300 dark:bg-slate-600 rounded"></div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-12 right-4 w-20 h-20 glass rounded-xl p-3"
              >
                <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg"></div>
              </motion.div>
              
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-12 left-12 w-28 h-20 glass rounded-lg p-3"
              >
                <div className="grid grid-cols-3 gap-1 h-full">
                  <div className="bg-blue-400 rounded"></div>
                  <div className="bg-purple-400 rounded"></div>
                  <div className="bg-emerald-400 rounded"></div>
                  <div className="bg-slate-300 dark:bg-slate-600 rounded"></div>
                  <div className="bg-blue-400 rounded"></div>
                  <div className="bg-purple-400 rounded"></div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [15, -5, 15] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-8 right-8 w-24 h-24 glass rounded-full p-4"
              >
                <div className="w-full h-full bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
