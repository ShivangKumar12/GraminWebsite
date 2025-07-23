import { motion } from 'framer-motion';
import { 
  FiCpu, 
  FiEye, 
  FiCloud, 
  FiBarChart, 
  FiSmartphone, 
  FiServer 
} from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: FiCpu,
      title: 'AI & ML Development',
      description: 'Custom machine learning models and artificial intelligence solutions tailored to your business needs.',
      color: 'blue',
      featured: false
    },
    {
      icon: FiEye,
      title: 'Computer Vision & NLP',
      description: 'Advanced image processing, natural language understanding, and intelligent data extraction systems.',
      color: 'emerald',
      featured: false
    },
    {
      icon: FiCloud,
      title: 'Cloud Services (AWS, Azure)',
      description: 'Scalable cloud infrastructure, migration services, and cloud-native application development.',
      color: 'purple',
      featured: false
    },
    {
      icon: FiBarChart,
      title: 'Predictive Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and predictive modeling.',
      color: 'orange',
      featured: false
    },
    {
      icon: FiSmartphone,
      title: 'Custom Web & Mobile Apps',
      description: 'Full-stack development of responsive web applications and native mobile solutions.',
      color: 'pink',
      featured: false
    },
    {
      icon: FiServer,
      title: 'The 360° OS Platform',
      description: 'Our flagship integrated platform that brings together AI, analytics, and cloud services in one solution.',
      color: 'gradient',
      featured: true
    }
  ];

  const getColorClasses = (color: string, featured: boolean) => {
    if (featured) {
      return {
        card: 'bg-gradient-to-br from-blue-600 to-purple-700 text-white',
        icon: 'bg-white/20 text-white',
        link: 'text-white'
      };
    }

    const colorMap = {
      blue: {
        card: 'bg-white dark:bg-slate-900',
        icon: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600',
        link: 'text-blue-600'
      },
      emerald: {
        card: 'bg-white dark:bg-slate-900',
        icon: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600',
        link: 'text-emerald-600'
      },
      purple: {
        card: 'bg-white dark:bg-slate-900',
        icon: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600',
        link: 'text-purple-600'
      },
      orange: {
        card: 'bg-white dark:bg-slate-900',
        icon: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600',
        link: 'text-orange-600'
      },
      pink: {
        card: 'bg-white dark:bg-slate-900',
        icon: 'bg-pink-100 dark:bg-pink-900/20 text-pink-600',
        link: 'text-pink-600'
      }
    };

    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions tailored for modern businesses
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color, service.featured);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`${colors.card} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6 transition-transform`}
                >
                  <service.icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className={`text-xl font-bold mb-4 ${service.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {service.title}
                </h3>
                
                <p className={`mb-6 ${service.featured ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>
                  {service.description}
                </p>
                
                <div className={`flex items-center ${colors.link} font-semibold`}>
                  {service.featured ? 'Explore Platform' : 'Learn more'}
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
