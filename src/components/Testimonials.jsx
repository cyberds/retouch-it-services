import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      rating: 5,
      image: 'http://facedepot.s3.amazonaws.com/19050802-52-71533153-1.jpg',
      quote: 'Retouch IT Services transformed our digital infrastructure. Their expertise in DevOps and cloud solutions helped us achieve 99.9% uptime.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO, FinTech Solutions',
      rating: 5,
      image: 'http://facedepot.s3.amazonaws.com/19050527-16-19361264-1.jpg',
      quote: 'The AI solutions implemented by Retouch IT have revolutionized our customer service operations. Their team is truly exceptional.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, HealthPlus',
      rating: 5,
      image: 'https://images.generated.photos/8EhCw9jPgaPGZTXjx42RLO7LBsqpx11M1Hl5HLdtQjo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU4MzMxLmpwZw.jpg',
      quote: 'Their digital marketing strategies increased our online presence by 300%. The results speak for themselves.'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'IT Manager, RetailChain',
      rating: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wcirPFgTZTYe9deNIB8OhsVdiBWVt6y_oA&s',
      quote: 'The custom CRM system they developed has streamlined our operations and improved customer satisfaction significantly.'
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <FiStar
              className={`w-5 h-5 ${
                index < rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          What Our Clients Say
        </motion.h2>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg h-full"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials; 