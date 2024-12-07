import { ProjectCarousel } from './ProjectCarousel';
import { motion } from 'framer-motion';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-8 max-w-[2000px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative architectural designs that push the boundaries
            of form and function while maintaining sustainability and elegance.
          </p>
        </motion.div>
        
        <ProjectCarousel />
      </div>
    </section>
  );
}