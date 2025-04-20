import Link from 'next/link';
import Image from 'next/image';

export default function ThankYou() {
  return (
    <main className="min-h-screen">
      <header className="bg-black shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    className="h-10 w-auto"
                    src="/logo.png"
                    alt="QuoteLinker"
                    width={40}
                    height={40}
                  />
                  <span className="ml-3 text-xl font-semibold text-white">QuoteLinker</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <svg
              className="mx-auto h-16 w-16 text-[#00f5d4]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
            >
              <circle
                className="opacity-25"
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M14 24l8 8 16-16"
              />
            </svg>
          </div>
          
          <h1 className="heading-1 mb-4">Thank You!</h1>
          <p className="subheading mb-8">
            We've received your quote request and will be in touch shortly. One of our licensed agents will review your information and contact you with personalized options.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
            <ul className="text-left space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-[#00f5d4] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>You'll receive a confirmation email shortly</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-[#00f5d4] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>An agent will contact you within 1 business day</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-[#00f5d4] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>We'll help you find the best coverage options</span>
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="inline-flex items-center text-[#00f5d4] hover:text-[#00d4b8] transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
} 