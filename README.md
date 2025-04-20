# QuoteLinker - Insurance Lead Generation MVP

QuoteLinker is a production-grade insurance lead generation platform built with Next.js 14, Tailwind CSS, and integrated with Salesforce and Resend for lead management.

## Features

- Modern, responsive design with Tailwind CSS
- Multiple insurance quote types (Auto, Term Life, Short-Term Disability)
- Lead form with validation and submission handling
- Salesforce integration for lead management
- Email notifications via Resend
- Google Analytics 4 and Tag Manager integration
- Mobile-first, high-converting design

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Resend (Email)
- Salesforce API
- Google Analytics 4
- Google Tag Manager

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quote-linker.git
cd quote-linker
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```env
RESEND_API_KEY=your_resend_api_key
SALESFORCE_API_URL=your_salesforce_api_url
SALESFORCE_API_KEY=your_salesforce_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add the environment variables in Vercel's project settings
4. Deploy!

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auto/              # Auto insurance page
│   ├── term-life/         # Term life insurance page
│   ├── short-term-disability/ # Short-term disability page
│   ├── thank-you/         # Thank you page
│   └── privacy/           # Privacy policy page
├── components/            # Reusable components
└── styles/               # Global styles
```

## Future Enhancements

- Additional insurance types (Home, Umbrella, etc.)
- Educational blog content
- AI-powered quote assistant
- CRM-integrated agent portal

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 