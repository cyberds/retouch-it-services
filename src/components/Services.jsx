import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiCode, FiCpu, FiTrendingUp, FiDatabase, FiGlobe, FiServer, FiSmartphone, FiLayers, FiTool, FiHeart, FiShoppingCart, FiDollarSign } from 'react-icons/fi';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'UX Design',
      icon: <FiLayers />,
      category: 'design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      details: 'Our UX design services focus on creating seamless user journeys through research, prototyping, and testing.'
    },
    {
      id: 2,
      title: 'AI Solutions',
      icon: <FiCpu />,
      category: 'ai',
      description: 'Cutting-edge AI and machine learning solutions to transform your business operations.',
      details: 'From predictive analytics to natural language processing, we implement AI solutions that drive innovation.'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      icon: <FiTrendingUp />,
      category: 'marketing',
      description: 'Data-driven marketing strategies to boost your online presence and engagement.',
      details: 'Comprehensive digital marketing services including SEO, PPC, social media, and content marketing.'
    },
    {
      id: 4,
      title: 'CRM Development',
      icon: <FiDatabase />,
      category: 'development',
      description: 'Custom CRM solutions to streamline customer relationships and business processes.',
      details: 'Tailored CRM systems that integrate with your existing infrastructure and scale with your growth.'
    },
    {
      id: 5,
      title: 'Web & Java Dev',
      icon: <FiCode />,
      category: 'development',
      description: 'Robust web applications and Java solutions for enterprise-grade performance.',
      details: 'Full-stack development services using modern Java frameworks and cloud-native architectures.'
    },
    {
      id: 6,
      title: '.NET Development',
      icon: <FiCode />,
      category: 'development',
      description: 'Enterprise-grade .NET applications and services for Windows and cloud platforms.',
      details: 'Custom .NET solutions leveraging the latest Microsoft technologies and best practices.'
    },
    {
      id: 7,
      title: 'DevOps',
      icon: <FiServer />,
      category: 'devops',
      description: 'Streamlined development and operations through automation and continuous integration.',
      details: 'End-to-end DevOps implementation including CI/CD, containerization, and infrastructure as code.'
    },
    {
      id: 8,
      title: 'Android Development',
      icon: <FiSmartphone />,
      category: 'development',
      description: 'Native Android applications with modern design and optimal performance.',
      details: 'Custom Android apps built with Kotlin and Jetpack components for superior user experience.'
    },
    {
      id: 9,
      title: 'AngularJS',
      icon: <FiGlobe />,
      category: 'development',
      description: 'Dynamic web applications built with Angular for scalable and maintainable code.',
      details: 'Enterprise-grade Angular applications with TypeScript and modern development practices.'
    },
    {
      id: 10,
      title: 'Technical Consulting',
      icon: <FiTool />,
      category: 'consulting',
      description: 'Expert guidance on technology strategy, architecture, and implementation.',
      details: 'Strategic technology consulting to align your IT initiatives with business objectives.'
    },
    {
      id: 11,
      title: 'Healthcare IT',
      icon: <FiHeart />,
      category: 'healthcare',
      description: 'Specialized IT solutions for healthcare providers and medical institutions.',
      details: 'HIPAA-compliant systems and applications for healthcare management and patient care.'
    },
    {
      id: 12,
      title: 'Procurement Solutions',
      icon: <FiShoppingCart />,
      category: 'business',
      description: 'Efficient procurement and supply chain management systems.',
      details: 'Custom procurement solutions that optimize purchasing processes and vendor management.'
    },
    {
      id: 13,
      title: 'Financial & Banking',
      icon: <FiDollarSign />,
      category: 'finance',
      description: 'Secure and compliant financial technology solutions.',
      details: 'Banking and financial services applications with robust security and regulatory compliance.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'ai', name: 'AI & Data' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'devops', name: 'DevOps' },
    { id: 'consulting', name: 'Consulting' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'business', name: 'Business' }
  ];

  const filteredServices = services.filter(
    service => activeFilter === 'all' || service.category === activeFilter
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Our Services
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <Tilt
              key={service.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={2000}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 ${
                  hoveredCard === service.id ? 'transform -translate-y-2' : ''
                }`}
              >
                <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredCard === service.id ? 'auto' : 0,
                    opacity: hoveredCard === service.id ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {service.details}
                  </p>
                  <button className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    Learn More →
                  </button>
                </motion.div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 