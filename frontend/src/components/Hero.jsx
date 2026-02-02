import { motion } from 'framer-motion';

const Hero = ({ profile }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{profile.title}</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
          {profile.role}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-2">
          {profile.headline}
        </p>
         <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-8">
          {profile.sub_headline}
        </p>
        
        <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-800 transition-colors">
                Projects
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                GitHub
            </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
