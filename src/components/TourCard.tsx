import React from 'react';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TourCardProps {
  image: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  season: string;
}

const TourCard: React.FC<TourCardProps> = ({
  image,
  title,
  location,
  duration,
  price,
  rating,
  season,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-golden text-primary px-3 py-1 rounded-full font-semibold">
          ${price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-playfair font-bold mb-2">{title}</h3>
        
        <div className="flex items-center mb-4">
          <MapPin className="h-4 w-4 text-primary mr-2" />
          <span className="text-gray-600">{location}</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-primary mr-2" />
            <span className="text-gray-600">{duration}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-primary mr-2" />
            <span className="text-gray-600">{season}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-golden mr-1" />
            <span className="font-semibold">{rating}</span>
            <span className="text-gray-600 ml-1">/ 5.0</span>
          </div>
          <button className="bg-primary hover:bg-forest text-white px-4 py-2 rounded-full transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;