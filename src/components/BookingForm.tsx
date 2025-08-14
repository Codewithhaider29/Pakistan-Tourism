import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Users, MapPin } from 'lucide-react';
import { toast } from 'sonner';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  startDate: string;
  duration: string;
  guests: number;
  specialRequirements: string;
}

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
    toast.success('Booking request submitted successfully!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-playfair font-bold mb-6">Book Your Tour</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              {...register('fullName', { required: 'Full name is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline-block w-4 h-4 mr-1" />
              Destination
            </label>
            <select
              {...register('destination', { required: 'Destination is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select destination</option>
              <option value="hunza">Hunza Valley</option>
              <option value="skardu">Skardu</option>
              <option value="swat">Swat Valley</option>
              <option value="lahore">Lahore</option>
            </select>
            {errors.destination && (
              <p className="mt-1 text-sm text-red-600">{errors.destination.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline-block w-4 h-4 mr-1" />
              Start Date
            </label>
            <input
              {...register('startDate', { required: 'Start date is required' })}
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline-block w-4 h-4 mr-1" />
              Number of Guests
            </label>
            <input
              {...register('guests', {
                required: 'Number of guests is required',
                min: { value: 1, message: 'Minimum 1 guest required' },
              })}
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              min="1"
            />
            {errors.guests && (
              <p className="mt-1 text-sm text-red-600">{errors.guests.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Requirements
          </label>
          <textarea
            {...register('specialRequirements')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            rows={4}
            placeholder="Any special requirements or preferences?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-forest text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;