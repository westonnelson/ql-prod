import Link from 'next/link';
import Image from 'next/image';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gray-50">
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
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#00f5d4]/10 to-transparent rounded-bl-full -z-10"></div>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00f5d4]/10 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-[#00f5d4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Thank You for Choosing QuoteLinker!
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your request has been received. Our expert team will review your information and find the best insurance options for you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">What Happens Next?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00f5d4]/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-[#00f5d4] font-semibold">1</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Email Confirmation</h3>
                      <p className="text-gray-600">Check your inbox for a confirmation email with your quote details</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00f5d4]/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-[#00f5d4] font-semibold">2</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Agent Review</h3>
                      <p className="text-gray-600">A licensed agent will review your information within 1 business day</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00f5d4]/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-[#00f5d4] font-semibold">3</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Personalized Options</h3>
                      <p className="text-gray-600">We'll present you with the best coverage options for your needs</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Choose QuoteLinker?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#00f5d4] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="font-medium text-gray-900">Top-Rated Providers</h3>
                      <p className="text-gray-600">Access to the best insurance companies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#00f5d4] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="font-medium text-gray-900">Expert Guidance</h3>
                      <p className="text-gray-600">Licensed agents to help you decide</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#00f5d4] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="font-medium text-gray-900">Best Rates</h3>
                      <p className="text-gray-600">Competitive pricing from multiple carriers</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#00f5d4] hover:bg-[#00d4b8] md:py-4 md:text-lg md:px-10 transition-all duration-150 transform hover:-translate-y-0.5"
              >
                Return to Homepage
              </Link>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.8/5</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 