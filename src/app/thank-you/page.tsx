import Image from 'next/image';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/Q_L.jpeg"
                alt="QuoteLinker Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="ml-3 text-2xl font-bold text-gray-900">QuoteLinker</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Thank You Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#00f5d4] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-[#00f5d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="heading-1 mb-6">
              Thank You for Your Interest!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your request and will be in touch shortly with personalized insurance quotes.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-lg font-semibold mb-4">What's Next?</h2>
              <ul className="text-left space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00f5d4] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Check your email for a confirmation message</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00f5d4] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Our team will review your information</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00f5d4] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">You'll receive personalized quotes within 24 hours</span>
                </li>
              </ul>
            </div>
            <Link href="/" className="btn-primary inline-block">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600">
              © {new Date().getFullYear()} QuoteLinker. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 