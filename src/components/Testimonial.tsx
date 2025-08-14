import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  image: string;
  tourName: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  location,
  rating,
  testimonial,
  image,
  tourName,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={`${name}'s tour`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-medium">{tourName}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-golden' : 'text-gray-400'
                }`}
                fill={i < rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <Quote className="w-8 h-8 text-primary/20" />
        </div>
        <p className="text-gray-700 italic mb-6">{testimonial}</p>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-lg">{name}</h4>
            <p className="text-gray-600 text-sm">{location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;