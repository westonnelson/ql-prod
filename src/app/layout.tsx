import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuoteLinker - Insurance Quote Comparison',
  description: 'Compare and get quotes for Auto, Term Life, and Short-Term Disability insurance.',
  icons: {
    icon: '/Q_L.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`
          }}
        />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `
          }}
        />
      </head>
      <body className={`${inter.className} bg-white`}>
        {/* Header */}
        <header className="bg-black shadow-lg">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/Q_L.jpeg"
                  alt="QuoteLinker Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <span className="ml-3 text-2xl font-bold text-white">QuoteLinker</span>
              </div>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
} 