import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  included: string[];
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  season: string;
  rating: number;
}

const tourPackages: TourPackage[] = [
  {
    id: 'hunza-explorer',
    title: 'Hunza Valley Explorer',
    location: 'Hunza, Gilgit-Baltistan',
    duration: '7 Days',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800',
    description: 'Experience the breathtaking beauty of Hunza Valley with this comprehensive tour package.',
    included: ['Accommodation', 'Transportation', 'Meals', 'Guide'],
    groupSize: '4-12 people',
    difficulty: 'Moderate',
    season: 'Summer',
    rating: 4.8
  },
  {
    id: 'cultural-lahore',
    title: 'Cultural Lahore Tour',
    location: 'Lahore, Punjab',
    duration: '4 Days',
    price: 799,
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800',
    description: 'Discover the rich cultural heritage of Lahore, from Mughal architecture to local cuisine.',
    included: ['Hotel', 'Local Transport', 'Breakfast', 'Guide'],
    groupSize: '2-8 people',
    difficulty: 'Easy',
    season: 'Winter',
    rating: 4.9
  }
];

const TourPackagesPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  const filteredTours = tourPackages.filter(tour => {
    const difficultyMatch = selectedDifficulty === 'all' || tour.difficulty.toLowerCase() === selectedDifficulty;
    const seasonMatch = selectedSeason === 'all' || tour.season.toLowerCase() === selectedSeason;
    const priceMatch = tour.price >= priceRange[0] && tour.price <= priceRange[1];
    return difficultyMatch && seasonMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="pt-16 pb-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mt-8">
            Tour Packages
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl">
            Choose from our carefully curated selection of tour packages designed to give you the best of Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-primary mr-2" />
            <h2 className="text-xl font-semibold">Filters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="all">All Levels</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="challenging">Challenging</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Season
              </label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="all">All Seasons</option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
                <option value="autumn">Autumn</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <span className="text-sm text-gray-600">
                  Up to ${priceRange[1]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-golden text-primary px-3 py-1 rounded-full font-semibold">
                  ${tour.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-2">
                  {tour.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{tour.location}</span>
                </div>

                <p className="text-gray-600 mb-4">
                  {tour.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{tour.duration}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{tour.groupSize}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{tour.season}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Included:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.included.map((item, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-6 w-full bg-primary hover:bg-forest text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Book Now
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

export default TourPackagesPage;