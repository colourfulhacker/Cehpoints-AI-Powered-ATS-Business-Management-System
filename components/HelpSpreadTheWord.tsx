interface HelpSpreadTheWordProps {
  url?: string;
}

export default function HelpSpreadTheWord({ 
  url = typeof window !== 'undefined' ? window.location.href : 'https://offer.cehpoint.co.in'
}: HelpSpreadTheWordProps) {
  
  const encodedUrl = encodeURIComponent(url);
  
  const shareMessage = encodeURIComponent(
    "I found something that could really help your business - Cehpoint automates hiring, project management & client tracking. Just ₹15,000 one-time, lifetime hosting. Check it out:"
  );

  const handleShare = (platform: string) => {
    const urls = {
      whatsapp: `https://wa.me/?text=${shareMessage}%20${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${shareMessage}&url=${encodedUrl}`,
      email: `mailto:?subject=${encodeURIComponent("This could help your business - Cehpoint")}&body=${shareMessage}%0A%0A${encodedUrl}`
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      const button = document.getElementById('copy-btn');
      if (button) {
        button.textContent = '✓ Copied!';
        setTimeout(() => {
          button.textContent = '📋 Copy Link';
        }, 2000);
      }
    } else {
      window.open(urls[platform as keyof typeof urls], '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-12 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-4">
              💡 Make a Real Difference
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Know Someone Struggling With Hiring or Project Management?
            </h2>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
              Help us reach businesses that need this solution. Your recommendation could save them thousands of rupees and hundreds of hours.
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-bold text-darkgrey mb-2">Solo Entrepreneurs</h3>
                <p className="text-sm text-gray-600">Running everything alone? Share this with founders who need a virtual team</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="font-bold text-darkgrey mb-2">IT Companies</h3>
                <p className="text-sm text-gray-600">Know agencies spending 20+ hours on hiring? This could change their business</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-darkgrey mb-2">Startups</h3>
                <p className="text-sm text-gray-600">Help startups save lakhs on expensive SaaS subscriptions each year</p>
              </div>
            </div>

            {/* Why Share Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8 mb-10">
              <h3 className="text-2xl font-bold text-darkgrey mb-4 text-center">
                Why This Matters
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="text-3xl">💰</div>
                  <div>
                    <h4 className="font-semibold text-darkgrey mb-1">Save Real Money</h4>
                    <p className="text-sm text-gray-700">Most businesses pay ₹60,000-₹2,40,000 yearly for similar tools. This is ₹15,000 once.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h4 className="font-semibold text-darkgrey mb-1">Reclaim Time</h4>
                    <p className="text-sm text-gray-700">HR teams save 15-20 hours monthly. Founders get time back for actual growth.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🇮🇳</div>
                  <div>
                    <h4 className="font-semibold text-darkgrey mb-1">Built for India</h4>
                    <p className="text-sm text-gray-700">Affordable pricing, WhatsApp integration, GST billing - made for Indian businesses.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <h4 className="font-semibold text-darkgrey mb-1">Support Innovation</h4>
                    <p className="text-sm text-gray-700">Help us reach 1,000+ businesses in 2025 and make business automation accessible to everyone.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-darkgrey mb-6">
                Share With Your Network
              </h3>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Share on WhatsApp
                </button>

                <button
                  onClick={() => handleShare('linkedin')}
                  className="group flex items-center gap-3 bg-[#0077B5] hover:bg-[#006399] text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Post on LinkedIn
                </button>

                <button
                  onClick={() => handleShare('twitter')}
                  className="group flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Tweet About This
                </button>

                <button
                  onClick={() => handleShare('email')}
                  className="group flex items-center gap-3 bg-gray-700 hover:bg-gray-800 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send via Email
                </button>

                <button
                  id="copy-btn"
                  onClick={() => handleShare('copy')}
                  className="group flex items-center gap-3 bg-primary hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  📋 Copy Link
                </button>
              </div>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Every share helps a business owner discover a solution that could transform their operations. Thank you for spreading the word! 🙏
              </p>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="bg-gradient-to-r from-secondary to-green-600 text-white p-6 text-center">
            <p className="text-lg font-semibold">
              🎯 Goal: Help 1,000+ Indian Businesses Automate & Grow in 2025
            </p>
            <p className="text-sm opacity-90 mt-2">
              380+ businesses already using Cehpoint • Your referral could be next
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
