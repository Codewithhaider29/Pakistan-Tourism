import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0',
    title: 'Hunza Valley',
    description: 'Stunning view of Hunza Valley during summer',
  },
  {
    url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0',
    title: 'Badshahi Mosque',
    description: 'Historic Badshahi Mosque in Lahore',
  },
  {
    url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0',
    title: 'Deosai Plains',
    description: 'Beautiful Deosai Plains in summer',
  },
];

const GallerySlider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[600px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-playfair font-bold mb-2">
                  {image.title}
                </h3>
                <p className="text-lg">{image.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;