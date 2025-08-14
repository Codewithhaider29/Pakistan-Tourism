import 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TourList from './components/TourList';
import GallerySlider from './components/GallerySlider';
import BookingForm from './components/BookingForm';
import ReviewCard from './components/ReviewCard';
import Testimonial from './components/Testimonial';
import FAQAccordion from './components/FAQAccordion';
import AuthForm from './components/AuthForm';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  const sampleReview = {
    name: "Sarah Johnson",
    location: "United Kingdom",
    rating: 5,
    review: "An incredible experience exploring the beautiful landscapes of Pakistan. The tour was well-organized and our guide was extremely knowledgeable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
    date: "March 15, 2024"
  };

  const sampleTestimonial = {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    testimonial: "The Hunza Valley tour exceeded all my expectations. The natural beauty was breathtaking, and the local hospitality was amazing. Highly recommended!",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800",
    tourName: "Hunza Valley Explorer"
  };

  const handleAuthSubmit = (data: any) => {
    console.log('Auth data:', data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <TourList />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GallerySlider />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BookingForm />
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-6">What Our Travelers Say</h3>
                <ReviewCard {...sampleReview} />
              </div>
              <Testimonial {...sampleTestimonial} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <AuthForm mode="login" onSubmit={handleAuthSubmit} />
        </div>
      </section>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;