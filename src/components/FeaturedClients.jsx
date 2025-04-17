import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const FeaturedClients = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      id: 1,
      name: 'TechCorp',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRo-6fSJPIl790XBjyiDdOyKuseXXQ6COTNYQDPtKzQ94bnmnAqJ_p8HcsCmWGhcvlgM&usqp=CAU',
      projects: [
        {
          title: 'Cloud Migration',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRo-6fSJPIl790XBjyiDdOyKuseXXQ6COTNYQDPtKzQ94bnmnAqJ_p8HcsCmWGhcvlgM&usqp=CAU',
          description: 'Successfully migrated their entire infrastructure to AWS with zero downtime.'
        },
        {
          title: 'DevOps Implementation',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWVXYspKCec8Mx1EKVBCHpfVeNKAMrPxNRgcF2U0e0yNbCOxbiKI5fkFrCiEq8rqxe00&usqp=CAU',
          description: 'Implemented CI/CD pipelines and automated testing processes.'
        }
      ]
    },
    {
      id: 2,
      name: 'FinTech Solutions',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZLlytG4J0JsftyMGaioZdcvT5mU-K0RkLQ&s',
      projects: [
        {
          title: 'AI-Powered Analytics',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZLlytG4J0JsftyMGaioZdcvT5mU-K0RkLQ&s',
          description: 'Developed machine learning models for financial predictions.'
        }
      ]
    },
    {
      id: 3,
      name: 'HealthPlus',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQROPHqy80kXGa-tiJ00pXZQbECrj_oxgUw&s',
      projects: [
        {
          title: 'Healthcare Portal',
          image: 'https://healthplusnigeria.com/cdn/shop/files/logo_512x154_1681493c-cee3-43d6-84fc-b65239e168d1_265x@2x.png?v=1685574035',
          description: 'Created a secure patient portal with HIPAA compliance.'
        }
      ]
    },
    {
      id: 4,
      name: 'RetailChain',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiWKgsauufUmFPNniXwJM-8cs89NeaDWiEA&s',
      projects: [
        {
          title: 'E-commerce Platform',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiWKgsauufUmFPNniXwJM-8cs89NeaDWiEA&s',
          description: 'Built a scalable e-commerce solution with real-time inventory.'
        }
      ]
    },
    {
      id: 5,
      name: 'GlobalBank',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmjmFMti6GkvYG1t76-XNWQmc64l4fbQNmw&s',
      projects: [
        {
          title: 'Mobile Banking App',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9fRAWwZIYuqEuKrAmZL_dgEicp9WruCR4Cw&s',
          description: 'Developed a secure mobile banking application with biometric authentication.'
        }
      ]
    }
  ];

  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured Clients
        </motion.h2>

        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-gray-900 to-transparent w-24" />
          <div className="absolute inset-0 bg-gradient-to-l from-white dark:from-gray-900 to-transparent w-24 right-0" />

          <motion.div
            className="flex space-x-12 py-8"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client) => (
              <motion.div
                key={`${client.id}-${Math.random()}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <button
                  onClick={() => setSelectedClient(client)}
                  className="group relative"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedClient(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FiX size={24} />
              </button>

              <div className="flex items-center mb-6">
                <img
                  src={selectedClient.logo}
                  alt={selectedClient.name}
                  className="h-12 w-auto mr-4"
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {selectedClient.name}
                </h3>
              </div>

              <div className="grid gap-6">
                {selectedClient.projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedClients; 