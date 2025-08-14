import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Destination {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
  bestTime: string;
  activities: string[];
  rating: number;
}

const destinations: Destination[] = [
  {
    id: 'hunza-valley',
    name: 'Hunza Valley',
    region: 'Gilgit-Baltistan',
    description: 'A mountainous valley known for its stunning natural beauty, ancient settlements, and the famous Attabad Lake.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800',
    bestTime: 'May to October',
    activities: ['Trekking', 'Photography', 'Cultural Tours', 'Camping'],
    rating: 4.9
  },
  {
    id: 'skardu',
    name: 'Skardu',
    region: 'Gilgit-Baltistan',
    description: 'Home to the mighty Deosai Plains and crystal-clear lakes, Skardu is a paradise for nature lovers.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800',
    bestTime: 'June to September',
    activities: ['Mountain Climbing', 'Desert Safari', 'Lake Visits', 'Rock Climbing'],
    rating: 4.8
  },
  {
    id: 'lahore',
    name: 'Lahore',
    region: 'Punjab',
    description: 'The cultural heart of Pakistan, featuring historic Mughal architecture and vibrant food scenes.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800',
    bestTime: 'October to March',
    activities: ['Heritage Tours', 'Food Tours', 'Shopping', 'Museum Visits'],
    rating: 4.7
  }
];

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="pt-16 pb-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mt-8">
            Explore Pakistan's Finest Destinations
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl">
            Discover breathtaking landscapes, rich cultural heritage, and unforgettable experiences across Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-primary font-semibold text-sm">
                  {destination.rating} / 5
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold mb-2">
                  {destination.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{destination.region}</span>
                </div>

                <p className="text-gray-600 mb-4">
                  {destination.description}
                </p>

                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Best Time: {destination.bestTime}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Popular Activities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.activities.map((activity, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-6 w-full bg-primary hover:bg-forest text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Explore More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationsPage;