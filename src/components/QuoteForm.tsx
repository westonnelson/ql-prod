'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// More descriptive type for quote types
export type InsuranceQuoteType = {
  AUTO: 'Auto';
  TERM_LIFE: 'Term Life';
  SHORT_TERM_DISABILITY: 'STDI';
};

const QUOTE_TYPES: InsuranceQuoteType = {
  AUTO: 'Auto',
  TERM_LIFE: 'Term Life',
  SHORT_TERM_DISABILITY: 'STDI',
} as const;

interface QuoteFormProps {
  quoteType: typeof QUOTE_TYPES[keyof typeof QUOTE_TYPES];
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
  quoteType: QuoteFormProps['quoteType'];
}

interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  zipCode?: string;
}

export default function QuoteForm({ quoteType }: QuoteFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    quoteType: quoteType,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};
    
    // Name validation
    if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    // ZIP code validation
    const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (!zipRegex.test(formData.zipCode)) {
      errors.zipCode = 'Please enter a valid ZIP code';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/submitLead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      // Track conversion event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_submission', {
          'quote_type': quoteType,
          'success': true
        });
      }

      router.push('/thank-you');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      
      // Track error event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_submission_error', {
          'quote_type': quoteType,
          'error': err instanceof Error ? err.message : 'Unknown error'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#00f5d4]/10 to-transparent rounded-bl-full -z-10"></div>
      
      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-6 mb-8 pt-2">
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 text-[#00f5d4] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-sm font-medium">SSL Secure</span>
        </div>
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 text-[#00f5d4] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-sm font-medium">100% Safe</span>
        </div>
      </div>

      {/* Form Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote Today</h2>
        <p className="text-gray-600">Compare rates from top insurance providers</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
            {error}
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className={`block w-full px-4 py-3 rounded-lg border ${
                validationErrors.fullName ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-[#00f5d4] focus:border-transparent transition duration-150`}
              placeholder="John Smith"
            />
            {validationErrors.fullName && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`block w-full px-4 py-3 rounded-lg border ${
                validationErrors.email ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-[#00f5d4] focus:border-transparent transition duration-150`}
              placeholder="john@example.com"
            />
            {validationErrors.email && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setFormData(prev => ({ ...prev, phone: formatted }));
              }}
              className={`block w-full px-4 py-3 rounded-lg border ${
                validationErrors.phone ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-[#00f5d4] focus:border-transparent transition duration-150`}
              placeholder="(123) 456-7890"
            />
            {validationErrors.phone && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              required
              maxLength={5}
              value={formData.zipCode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                setFormData(prev => ({ ...prev, zipCode: value }));
              }}
              className={`block w-full px-4 py-3 rounded-lg border ${
                validationErrors.zipCode ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-[#00f5d4] focus:border-transparent transition duration-150`}
              placeholder="12345"
            />
            {validationErrors.zipCode && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.zipCode}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 text-lg font-semibold text-black bg-[#00f5d4] rounded-lg 
            shadow-lg hover:bg-[#00d4b8] focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-[#00f5d4] transform hover:-translate-y-0.5 transition-all duration-150
            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Get My Free Quote →'
          )}
        </button>

        {/* Trust Message */}
        <p className="text-center text-sm text-gray-500 mt-4">
          By clicking "Get My Free Quote", you agree to our{' '}
          <a href="/terms" className="text-[#00f5d4] hover:text-[#00d4b8]">Terms of Service</a>
          {' '}and{' '}
          <a href="/privacy" className="text-[#00f5d4] hover:text-[#00d4b8]">Privacy Policy</a>
        </p>

        {/* Social Proof */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">10k+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.8/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
} 