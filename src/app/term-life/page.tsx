import QuoteForm from '@/components/QuoteForm';
import Image from 'next/image';
import Link from 'next/link';

export default function TermLifeInsurance() {
  return (
    <main className="min-h-screen">
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

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1">
                Protect Your Loved Ones with Term Life Insurance
              </h1>
              <p className="subheading">
                Get peace of mind knowing your family is protected. Compare quotes from top providers and find the right coverage for your needs.
              </p>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#00f5d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Flexible Coverage Options</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#00f5d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Affordable Premiums</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/term-life-insurance.jpg"
                alt="Term Life Insurance"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-center">Get Your Term Life Insurance Quote</h2>
              <QuoteForm quoteType="Term Life" />
            </div>
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