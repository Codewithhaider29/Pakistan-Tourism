import React, { useState } from "react";
import TourCard from "./TourCard";

const tours = [
  { image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800", title: "Hunza Valley Explorer", location: "Hunza, Gilgit-Baltistan", duration: "7 Days", price: "PKR 95,000", rating: 4.8, season: "Summer" },
  { image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800", title: "Skardu Adventure", location: "Skardu, Gilgit-Baltistan", duration: "5 Days", price: "PKR 75,000", rating: 4.7, season: "Summer" },
  { image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800", title: "Lahore Heritage Tour", location: "Lahore, Punjab", duration: "3 Days", price: "PKR 35,000", rating: 4.9, season: "Spring" },
  { image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800", title: "Islamabad & Murree Getaway", location: "Islamabad & Murree", duration: "4 Days", price: "PKR 50,000", rating: 4.6, season: "Winter" },
  { image: "https://images.unsplash.com/photo-1564507592333-f2b28cd22177?auto=format&fit=crop&w=800", title: "Karachi Coastal Adventure", location: "Karachi, Sindh", duration: "3 Days", price: "PKR 40,000", rating: 4.5, season: "Autumn" },
  { image: "https://images.unsplash.com/photo-1600184463651-6e81cfdd4b7a?auto=format&fit=crop&w=800", title: "Fairy Meadows Trek", location: "Fairy Meadows, Gilgit-Baltistan", duration: "6 Days", price: "PKR 110,000", rating: 4.9, season: "Summer" },
  { image: "https://images.unsplash.com/photo-1575571199238-956337aeb844?auto=format&fit=crop&w=800", title: "Swat Valley Escape", location: "Swat, Khyber Pakhtunkhwa", duration: "5 Days", price: "PKR 65,000", rating: 4.7, season: "Spring" },
  { image: "https://images.unsplash.com/photo-1584267351713-5b30b41c0b52?auto=format&fit=crop&w=800", title: "Ranikot Fort Adventure", location: "Ranikot Fort, Sindh", duration: "2 Days", price: "PKR 25,000", rating: 4.4, season: "Winter" },
  { image: "https://images.unsplash.com/photo-1620120632734-bd3cf5bbbc80?auto=format&fit=crop&w=800", title: "Neelum Valley Retreat", location: "Neelum Valley, Azad Kashmir", duration: "5 Days", price: "PKR 80,000", rating: 4.8, season: "Summer" },
  { image: "https://images.unsplash.com/photo-1618005182384-8b3af8b66cfb?auto=format&fit=crop&w=800", title: "Gorakh Hill Station", location: "Gorakh Hill, Sindh", duration: "3 Days", price: "PKR 30,000", rating: 4.6, season: "Winter" },
  { image: "https://images.unsplash.com/photo-1628821958825-0449c3669e0c?auto=format&fit=crop&w=800", title: "Chitral & Kalash Valley Tour", location: "Chitral, Khyber Pakhtunkhwa", duration: "6 Days", price: "PKR 90,000", rating: 4.9, season: "Spring" },
  { image: "https://images.unsplash.com/photo-1600166867215-772f05f04e0f?auto=format&fit=crop&w=800", title: "Makran Coastal Highway Adventure", location: "Gwadar & Ormara, Balochistan", duration: "4 Days", price: "PKR 60,000", rating: 4.5, season: "Autumn" },
];

const TourList = () => {
  const [visibleTours, setVisibleTours] = useState(9);

  const handleLoadMore = () => {
    setVisibleTours(tours.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Popular Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of tours that showcase the best of Pakistan's natural beauty and cultural heritage.
          </p>
        </div>

        {/* Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.slice(0, visibleTours).map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleTours < tours.length && (
          <div className="text-center mt-12">
            <button 
              onClick={handleLoadMore}
              className="bg-[#FFD700] hover:bg-yellow-600 text-primary font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TourList;
