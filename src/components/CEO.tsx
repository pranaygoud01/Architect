import { motion } from 'framer-motion';
import { Award, BookOpen, Users2 } from 'lucide-react';
import Ceo from "../assets/Ceo.png"
export function CEO() {
  return (
    <section className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-8 max-w-[2000px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={Ceo}
                alt="Mahender Goud Sunkari"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex gap-4">
                {[
                  { icon: Award, label: 'Award Winning Architect' },
                  { icon: BookOpen, label: '15+ Years Experience' },
                  { icon: Users2, label: 'Industry Leader' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-2 text-white/90 text-sm"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                Mahender Goud Sunkari
              </h2>
              <p className="text-xl text-white/70">
                Founder & Principal Architect
              </p>
            </div>

            <div className="space-y-4 text-white/80">
              <p>
                With over 15 years of experience in architectural design and urban planning,
                Mahender has established himself as a visionary leader in the industry.
                His unique approach combines traditional architectural principles with
                cutting-edge sustainable practices.
              </p>
              <p>
                Under his leadership, Studio M has completed over 150 projects across
                residential, commercial, and public sectors, earning numerous accolades
                for innovative design and environmental consciousness.
              </p>
              <blockquote className="border-l-4 border-white/20 pl-4 my-6 italic">
                "Architecture is not just about buildings; it's about creating spaces
                that enhance lives and foster communities."
              </blockquote>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Read Full Bio
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}