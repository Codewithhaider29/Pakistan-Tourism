import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  location,
  rating,
  review,
  image,
  date,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-start mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
        <div className="ml-auto flex items-center">
          <Star className="w-5 h-5 text-golden" />
          <span className="ml-1 font-semibold">{rating}</span>
        </div>
      </div>

      <div className="relative">
        <Quote className="absolute top-0 left-0 w-8 h-8 text-gray-200 transform -translate-x-2 -translate-y-2" />
        <p className="text-gray-700 pl-6">{review}</p>
      </div>

      <div className="mt-4 text-right">
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;