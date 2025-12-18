import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import TrustSection from '@/components/TrustSection';
import { FITEVALS_URLS } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.home;

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Stop guessing. Get your baseline.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            VO₂ Max + Metabolic testing that tells you exactly how to train and fuel for your body.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/which-test"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Find the right test
            </Link>
            <CTAButton
              href={FITEVALS_URLS.BOOKING_GENERAL}
              variant="secondary"
              trackingLabel="Hero Secondary CTA"
            >
              Book on FitEvals
            </CTAButton>
          </div>
        </div>
      </section>

      {/* So What Translation - 3 Tiles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What are you guessing about?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Training Tile */}
            <Link
              href="/vo2-max"
              className="p-8 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training</h3>
              <p className="text-gray-700 text-lg">
                Are you training too easy or too hard?
              </p>
              <p className="text-blue-600 font-semibold mt-4">Learn more →</p>
            </Link>

            {/* Fat Loss Tile */}
            <Link
              href="/resting-metabolic-rate"
              className="p-8 bg-green-50 rounded-lg border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fat Loss</h3>
              <p className="text-gray-700 text-lg">
                Are you eating the wrong amount for your metabolism?
              </p>
              <p className="text-green-600 font-semibold mt-4">Learn more →</p>
            </Link>

            {/* Endurance Tile */}
            <Link
              href="/vo2-max"
              className="p-8 bg-purple-50 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endurance</h3>
              <p className="text-gray-700 text-lg">
                Is your engine actually improving?
              </p>
              <p className="text-purple-600 font-semibold mt-4">Learn more →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Which Test Mini Version */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Which test do I need?
          </h2>
          <div className="space-y-4 text-lg text-gray-700 mb-8">
            <p>
              <span className="font-semibold">If your goal is fat loss / plateaus</span> → <Link href="/resting-metabolic-rate" className="text-blue-600 hover:underline">RMR</Link>
            </p>
            <p>
              <span className="font-semibold">If your goal is endurance / performance</span> → <Link href="/vo2-max" className="text-blue-600 hover:underline">VO₂ max</Link>
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/which-test"
              className="inline-block px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
            >
              See the full guide
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            What you get
          </h2>
          <p className="text-2xl text-center text-gray-600 mb-12 italic">
            Numbers are useless without interpretation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span><strong>Detailed report</strong> with your metabolic data</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span><strong>Training zones</strong> personalized to your physiology</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span><strong>Calorie targets</strong> based on your actual metabolism</span>
              </li>
            </ul>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span><strong>Next steps</strong> with actionable recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span><strong>Expert interpretation</strong> of what your numbers mean</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span><strong>Baseline data</strong> to track progress over time</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 italic">Sample report visualization coming soon</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get your baseline this week.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop guessing. Start knowing how to train and fuel for your body.
          </p>
          <CTAButton
            href={FITEVALS_URLS.BOOKING_GENERAL}
            variant="primary"
            className="!bg-white !text-blue-600 hover:!bg-gray-100"
            trackingLabel="Final CTA"
          >
            Book on FitEvals
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
