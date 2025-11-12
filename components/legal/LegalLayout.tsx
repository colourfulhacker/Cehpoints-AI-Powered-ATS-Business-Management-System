import Head from 'next/head';
import Link from 'next/link';

interface LegalLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, description, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} - Cehpoint</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">Cehpoint</span>
              </Link>
              
              <div className="flex items-center gap-6">
                <Link href="/" className="text-darkgrey hover:text-primary transition-colors font-medium">
                  Home
                </Link>
                <Link href="/#contact" className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-darkgrey mb-4">{title}</h1>
              <p className="text-gray-600 text-lg mb-2">{description}</p>
              <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              {children}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-darkgrey mb-3">Questions about our policies?</h3>
                <p className="text-gray-700 mb-4">
                  Our team is here to help. Contact us if you have any questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:sales@cehpoint.co.in"
                    className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Email Us
                  </a>
                  <a
                    href="https://wa.me/919091156095"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    WhatsApp Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-darkgrey text-white py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Cehpoint. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
