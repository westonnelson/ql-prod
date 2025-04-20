import Image from 'next/image';
import Link from 'next/link';

export default function Privacy() {
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

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-1 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-600 mb-6">
                QuoteLinker is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our insurance quote services.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>ZIP code</li>
                <li>Insurance preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Provide insurance quotes and related services</li>
                <li>Communicate with you about your requests</li>
                <li>Send you relevant insurance information</li>
                <li>Improve our services</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We may share your information with insurance providers and partners to help provide you with quotes and services. We do not sell your personal information to third parties.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at privacy@quotelinker.com
              </p>
            </div>
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
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 