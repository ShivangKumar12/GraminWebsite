import { motion } from 'framer-motion';
import { FiZap, FiCpu, FiDollarSign, FiAward } from 'react-icons/fi';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: FiZap,
      title: 'Small, Agile Team',
      description: 'Faster delivery with streamlined communication and quick decision-making processes.',
      color: 'blue'
    },
    {
      icon: FiCpu,
      title: 'Domain Expertise in AI/ML',
      description: 'Deep knowledge in artificial intelligence and machine learning technologies with proven implementations.',
      color: 'emerald'
    },
    {
      icon: FiDollarSign,
      title: 'Cost-Effective',
      description: 'Competitive rates at ₹2k–₹4k/hr without compromising on quality or expertise.',
      color: 'purple'
    },
    {
      icon: FiAward,
      title: 'Strong Track Record',
      description: 'Proven success in rural and urban deployments across diverse industry verticals.',
      color: 'orange'
    }
  ];

  const stats = [
    { value: '100%', label: 'Client Satisfaction', color: 'blue' },
    { value: '24/7', label: 'Support Available', color: 'emerald' },
    { value: '50+', label: 'Projects Delivered', color: 'purple' },
    { value: '2024', label: 'Founded & Growing', color: 'orange' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600',
      purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600',
      orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getStatColor = (color: string) => {
    const colorMap = {
      blue: 'text-blue-600',
      emerald: 'text-emerald-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

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
            Why Choose GraminIO
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver results that matter
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-20 h-20 ${getColorClasses(reason.color)} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300`}
              >
                <reason.icon className="w-10 h-10" />
              </motion.div>
              <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">
                {reason.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-3xl font-bold ${getStatColor(stat.color)} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
