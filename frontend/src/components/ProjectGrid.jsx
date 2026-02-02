import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
      <span className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-full border border-gray-100">
        {project.tag}
      </span>
    </div>
    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tech.map((tech, i) => (
        <span key={i} className="text-xs px-2 py-1 bg-gray-50 text-gray-500 rounded border border-gray-100">
          {tech}
        </span>
      ))}
    </div>
    {project.link && (
        <div className="mt-4">
             <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View Project →
            </a>
        </div>
    )}
  </motion.div>
);

const ProjectGrid = ({ projects }) => {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
