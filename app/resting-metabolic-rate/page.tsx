import CTAButton from '@/components/CTAButton';
import TrustSection from '@/components/TrustSection';
import { FITEVALS_URLS } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.rmr;

export default function RMRPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Resting Metabolic Rate Testing
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            Stop guessing your calorie needs. Know your exact metabolism for fat loss, maintenance, or performance fueling.
          </p>
          <CTAButton
            href={FITEVALS_URLS.BOOKING_RMR}
            variant="primary"
            trackingLabel="RMR Hero CTA"
          >
            Book RMR Test
          </CTAButton>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            What are you guessing about?
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              <strong>Are you eating too much?</strong> You might be exceeding your actual calorie needs without realizing it.
            </p>
            <p>
              <strong>Are you eating too little?</strong> Undereating can stall progress and tank your energy levels.
            </p>
            <p>
              <strong>Is your metabolism actually "slow"?</strong> Online calculators give you an estimate—not your real metabolic rate.
            </p>
            <p>
              <strong>Why aren't you losing weight?</strong> If you've hit a plateau, you need data, not more guesswork.
            </p>
            <p className="text-xl font-semibold text-gray-900 mt-8">
              Generic calculators can be off by 300-500 calories per day. That's the difference between progress and frustration.
            </p>
          </div>
        </div>
      </section>

      {/* So What - What This Test Reveals */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            What RMR testing reveals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Exact Calorie Burn</h3>
              <p className="text-gray-700">
                Know how many calories your body burns at complete rest—no guessing, no formulas, just your actual metabolic rate.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fuel Utilization</h3>
              <p className="text-gray-700">
                See what percentage of your resting energy comes from carbs vs fat. This matters for fueling strategy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Metabolic Efficiency</h3>
              <p className="text-gray-700">
                Understand if your metabolism is higher or lower than expected for your age, weight, and body composition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Total Daily Energy Expenditure</h3>
              <p className="text-gray-700">
                Get recommendations for your total calorie needs when factoring in your activity level and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            What you walk away with
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>Your exact RMR</strong> in calories per day—no more guessing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>Substrate utilization breakdown</strong> (how much fat vs carbs you burn at rest)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>Comparison to predicted values</strong> so you know if your metabolism is faster or slower than calculators estimate</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>Calorie targets for your goals</strong> (fat loss, maintenance, performance fueling)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>Detailed report</strong> with graphs, data, and interpretation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>Actionable next steps</strong> for nutrition and fueling strategy</span>
            </li>
          </ul>
          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <p className="text-gray-700 italic">
              <strong>The test takes 15-20 minutes.</strong> You'll lie down or sit comfortably while breathing into a mask. It measures the oxygen you consume and carbon dioxide you produce at complete rest.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Who should get tested?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect if you:</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Are trying to lose fat but hit a plateau
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Have tried "eating less" but it's not working
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Want to recomp (lose fat, gain muscle) and need precise targets
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Suspect your metabolism is slower than calculators predict
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Need to know how much to eat for performance fueling without gaining fat
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Want a baseline to track metabolic changes over time
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Also useful for:</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Athletes who need precise fueling for training and competition
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Anyone coming off a long diet who wants to know their current metabolic state
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  People with thyroid concerns or metabolic conditions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Anyone who wants data-driven nutrition instead of generic advice
                </li>
              </ul>
              <p className="mt-4 text-gray-600 italic">
                Not sure if RMR or VO₂ Max is right for you? <a href="/which-test" className="text-blue-600 hover:underline">See our test chooser</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Final CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop guessing your calorie needs.
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get your metabolism tested and know exactly how to fuel for your goals.
          </p>
          <CTAButton
            href={FITEVALS_URLS.BOOKING_RMR}
            variant="primary"
            className="!bg-white !text-green-600 hover:!bg-gray-100"
            trackingLabel="RMR Final CTA"
          >
            Book RMR Test
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
