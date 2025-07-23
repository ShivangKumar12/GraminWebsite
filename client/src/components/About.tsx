import { motion } from 'framer-motion';
import { FiZap, FiShield, FiUsers } from 'react-icons/fi';

export default function About() {
  const features = [
    {
      icon: FiZap,
      title: 'Fast Innovation',
      description: 'Rapid prototyping and deployment of AI solutions'
    },
    {
      icon: FiShield,
      title: 'Proven Track Record',
      description: 'Strong rural and urban deployment experience'
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Specialized in AI/ML and cloud technologies'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            About GraminIO Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 lg:p-12 shadow-xl"
          >
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 dark:text-slate-300 text-center mb-8">
              Founded in 2024, GraminIO helps startups and enterprises build intelligent applications using AI and cloud technologies. We are a passionate team with a mission to innovate for impact.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 ${
                    index === 0 ? 'bg-blue-100 dark:bg-blue-900/20' :
                    index === 1 ? 'bg-emerald-100 dark:bg-emerald-900/20' :
                    'bg-purple-100 dark:bg-purple-900/20'
                  } rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className={`w-8 h-8 ${
                      index === 0 ? 'text-blue-600' :
                      index === 1 ? 'text-emerald-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
