import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/Q_L.jpeg"
                alt="QuoteLinker Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="ml-3 text-2xl font-bold text-gray-900">QuoteLinker</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1">
            Find the Right Insurance Coverage for You
          </h1>
          <p className="subheading max-w-3xl mx-auto">
            Compare quotes from top insurance providers and find the perfect coverage for your needs.
          </p>
        </div>
      </section>

      {/* Insurance Types Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Auto Insurance */}
            <Link href="/auto" className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#00f5d4] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#00f5d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-2">Auto Insurance</h2>
                <p className="text-gray-600">Get comprehensive coverage for your vehicle with competitive rates.</p>
              </div>
            </Link>

            {/* Term Life Insurance */}
            <Link href="/term-life" className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#00f5d4] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#00f5d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-2">Term Life Insurance</h2>
                <p className="text-gray-600">Protect your loved ones with affordable term life coverage.</p>
              </div>
            </Link>

            {/* Short-Term Disability */}
            <Link href="/short-term-disability" className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#00f5d4] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#00f5d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-2">Short-Term Disability</h2>
                <p className="text-gray-600">Secure your income with short-term disability coverage.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
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