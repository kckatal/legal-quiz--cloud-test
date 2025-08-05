import Quiz from '@/components/Quiz';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">LegalMatch Pro</h1>
              <p className="text-sm text-gray-600">Find the right legal help for your situation</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Need immediate help?</p>
              <a href="tel:(555) 000-0000" className="text-blue-600 font-medium hover:text-blue-800">
                (555) 000-0000
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center justify-center">
          <Quiz />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LegalMatch Pro</h3>
              <p className="text-gray-300">
                Connecting clients with the right legal expertise for over 20 years.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Family Law</li>
                <li>Personal Injury</li>
                <li>Criminal Defense</li>
                <li>Business Law</li>
                <li>Real Estate</li>
                <li>Estate Planning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="text-gray-300 space-y-2">
                <p>123 Legal Street</p>
                <p>Law City, LC 12345</p>
                <p>(555) 000-0000</p>
                <p>info@legalmatchpro.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LegalMatch Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
