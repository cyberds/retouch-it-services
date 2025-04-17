import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  const socialLinks = [
    { icon: <FiFacebook />, url: 'https://facebook.com/retouchit' },
    { icon: <FiTwitter />, url: 'https://twitter.com/retouchit' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/company/retouchit' },
    { icon: <FiInstagram />, url: 'https://instagram.com/retouchit' },
    { icon: <FiGithub />, url: 'https://github.com/retouchit' },
  ];

  const offices = [
    {
      city: 'Bengaluru',
      address: 'No.74, 3rd Cross, EPIP Zone, Export Promotion Industrial Park, whitefield, Bengaluru, Karnataka 560066',
      phone: '+91 98450 00000',
    },
    {
      city: 'Ibadan',
      address: 'No 22 Apapa Road, Ojoo express way, Ibadan, Oyo State, Nigeria 200221',
      phone: '+234 (0) 908 150 5800',
    },
    {
      city: 'Cebu',
      address: '3/F Don Gil Garcia Street, Cebu City, Cebu, Philippines,6000',
      phone: '+63 917 123 4567',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="src/assets/retouch logo.png"
              alt="Retouch IT Services"
              className="h-8 mb-4"
            />
            <p className="text-gray-400 mb-4">
              Global digital solutions with local expertise. Transforming businesses through innovative technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Our Offices</h3>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <div key={index} className="flex items-start">
                  <FiMapPin className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">{office.city}</p>
                    <p className="text-sm text-gray-400">{office.address}</p>
                    <a
                      href={`tel:${office.phone.replace(/\D/g, '')}`}
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center mt-1"
                    >
                      <FiPhone className="mr-1" />
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Retouch IT Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 