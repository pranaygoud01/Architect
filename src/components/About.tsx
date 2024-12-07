import { motion } from 'framer-motion';
import { Building2, Users, Trophy, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Building2, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '1000+', label: 'Happy Clients' },
  { icon: Trophy, value: '10+', label: 'Awards Won' },
  { icon: Lightbulb, value: '20+', label: 'Years Experience' }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-8 max-w-[2000px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Crafting Spaces That Inspire
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Led by visionary architect Mahender Goud Sunkari, Studio M has been at the forefront 
              of architectural innovation for over a decade. We believe in creating spaces that not 
              only meet functional requirements but also inspire and elevate the human experience.
            </p>
            <p className="text-gray-300 text-lg">
              Our approach combines cutting-edge technology with sustainable practices, ensuring 
              each project contributes positively to both the environment and the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-800 p-6 rounded-lg text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-white" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}