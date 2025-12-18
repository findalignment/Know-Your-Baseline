import { FITEVALS_URLS } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.thankYou;

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg
              className="w-20 h-20 mx-auto text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            You're all set!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            You're being directed to FitEvals to complete your booking.
          </p>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What happens next?
            </h2>
            <div className="text-left space-y-4 text-lg text-gray-700">
              <div className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">1.</span>
                <span>Complete your booking on FitEvals and select your preferred location and time</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">2.</span>
                <span>You'll receive confirmation and preparation instructions via email</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">3.</span>
                <span>Attend your test (it's quick and easy!)</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">4.</span>
                <span>Get your detailed results with interpretation and recommendations</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <a
              href={FITEVALS_URLS.BOOKING_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Continue to FitEvals →
            </a>
          </div>

          <div className="text-gray-600">
            <p className="mb-2">Questions before your test?</p>
            <p>
              Check our <a href="/faq" className="text-blue-600 hover:underline">FAQ page</a> or contact FitEvals directly.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Thanks for choosing to get your baseline.</strong>
            </p>
            <p className="text-gray-600">
              You're about to stop guessing and start training or fueling with real data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
