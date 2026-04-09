import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Map, Compass, Globe, Instagram, Twitter } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500">
      
      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
        <div className="glass border border-white/10 rounded-2xl px-8 py-4 flex justify-between items-center backdrop-blur-xl bg-black/20">
          <span className="font-black tracking-tighter text-2xl">GHUMO_DUNIYA</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Experience</a>
            <a href="#" className="hover:text-white transition-colors">Work</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Animated Background Blur */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8">
            EXPLORE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
              BEYOND.
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl font-light">
            Crafting immersive digital journeys for travelers. Based in the world, building for the future.
          </p>
        </motion.div>
      </section>

      {/* Modern Grid (Bento Box Design) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          
          {/* Main Card */}
          <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-2 md:row-span-2 bg-[#111] rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden group">
            <div className="z-10 relative h-full flex flex-col justify-between">
              <Compass size={40} className="text-blue-500" />
              <div>
                <h2 className="text-4xl font-bold mb-2">Ghumo Duniya App</h2>
                <p className="text-gray-400">The next-gen travel companion app.</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={32} />
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-8 flex flex-col justify-end">
            <Globe size={32} className="mb-4" />
            <h3 className="text-xl font-bold">Global Reach</h3>
          </div>

          {/* Small Card 2 */}
          <div className="bg-[#111] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-center items-center">
            <Map size={32} className="text-emerald-500 mb-4" />
            <span className="text-4xl font-black">120+</span>
            <p className="text-gray-500 text-sm">Routes Designed</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 flex justify-between items-center max-w-7xl mx-auto">
        <p className="text-gray-500 text-sm">© 2026 GHUMO_DUNIYA STUDIO</p>
        <div className="flex gap-6">
          <Instagram size={20} className="text-gray-500 hover:text-white cursor-pointer" />
          <Twitter size={20} className="text-gray-500 hover:text-white cursor-pointer" />
        </div>
      </footer>

    </div>
  );
};

export default App;