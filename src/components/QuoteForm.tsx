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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-[#00f5d4] focus:border-[#00f5d4] ${
            validationErrors.fullName ? 'border-red-300' : 'border-gray-300'
          }`}
        />
        {validationErrors.fullName && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.fullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-[#00f5d4] focus:border-[#00f5d4] ${
            validationErrors.email ? 'border-red-300' : 'border-gray-300'
          }`}
        />
        {validationErrors.email && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
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
          placeholder="(123) 456-7890"
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-[#00f5d4] focus:border-[#00f5d4] ${
            validationErrors.phone ? 'border-red-300' : 'border-gray-300'
          }`}
        />
        {validationErrors.phone && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
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
          placeholder="12345"
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-[#00f5d4] focus:border-[#00f5d4] ${
            validationErrors.zipCode ? 'border-red-300' : 'border-gray-300'
          }`}
        />
        {validationErrors.zipCode && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.zipCode}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn-primary w-full transition-all duration-200 ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          'Get My Quote'
        )}
      </button>
    </form>
  );
} 