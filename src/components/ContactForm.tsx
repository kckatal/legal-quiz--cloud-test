'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PracticeArea } from '@/types/quiz';
import { ArrowLeft, Send } from 'lucide-react';

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Please provide more details about your situation'),
  preferredContact: z.enum(['email', 'phone'], {
    required_error: 'Please select a preferred contact method'
  })
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  practiceArea: PracticeArea;
  onBack: () => void;
}

export default function ContactForm({ practiceArea, onBack }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission (in a real app, this would send to your API)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', { ...data, practiceArea: practiceArea.id });
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Thank You!
          </h2>
          <p className="text-gray-600">
            Your message has been sent to {practiceArea.attorney.name}. 
            You can expect to hear back within 24 hours.
          </p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>Next Steps:</strong> {practiceArea.attorney.name} will review your case 
            and contact you to discuss your legal options. Please keep your phone handy 
            for their call.
          </p>
        </div>

        <button
          onClick={onBack}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Back to Results
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Results
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Contact {practiceArea.attorney.name}
        </h2>
        <p className="text-gray-600">
          {practiceArea.name} • {practiceArea.attorney.title}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              {...register('firstName')}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              {...register('lastName')}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              {...register('phone')}
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Contact Method *
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                {...register('preferredContact')}
                type="radio"
                value="email"
                className="mr-2"
              />
              Email
            </label>
            <label className="flex items-center">
              <input
                {...register('preferredContact')}
                type="radio"
                value="phone"
                className="mr-2"
              />
              Phone
            </label>
          </div>
          {errors.preferredContact && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredContact.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Tell us about your situation *
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Please provide details about your legal matter, including any relevant dates, circumstances, and what outcome you're seeking..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>

      {/* Legal Notice */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          By submitting this form, you acknowledge that contacting our firm does not create an attorney-client relationship. 
          Please do not include confidential or sensitive information in your message.
        </p>
      </div>
    </div>
  );
}