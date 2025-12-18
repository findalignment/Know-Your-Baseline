import CTAButton from '@/components/CTAButton';
import TrustSection from '@/components/TrustSection';
import { FITEVALS_URLS } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.vo2Max;

export default function VO2MaxPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            VO₂ Max Testing
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            Stop guessing about your training intensity. Know exactly how hard to train for maximum results.
          </p>
          <CTAButton
            href={FITEVALS_URLS.BOOKING_VO2}
            variant="primary"
            trackingLabel="VO2 Hero CTA"
          >
            Book VO₂ Max Test
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
              <strong>Are you training too easy?</strong> You might be wasting time in zones that don't improve your fitness.
            </p>
            <p>
              <strong>Are you training too hard?</strong> You could be going anaerobic when you think you're building aerobic capacity.
            </p>
            <p>
              <strong>Are generic formulas accurate for you?</strong> 220-minus-age and other calculators can be off by 20+ beats per minute.
            </p>
            <p>
              Without testing, you're training blind. You don't know if your "easy" runs are actually easy, or if your intervals are hitting the right intensity.
            </p>
          </div>
        </div>
      </section>

      {/* So What - What This Test Reveals */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            What VO₂ Max testing reveals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Aerobic Ceiling</h3>
              <p className="text-gray-700">
                VO₂ Max is the maximum amount of oxygen your body can use during intense exercise. It's the single best predictor of endurance performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lactate Threshold</h3>
              <p className="text-gray-700">
                The exact point where your body shifts from aerobic to anaerobic. This is the key intensity for most endurance training.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precise Training Zones</h3>
              <p className="text-gray-700">
                Your unique heart rate and power/pace zones—not based on formulas, but on your actual physiology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fat vs Carb Burning</h3>
              <p className="text-gray-700">
                See exactly where your body transitions from burning mostly fat to mostly carbohydrates as intensity increases.
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
              <span><strong>Your VO₂ Max score</strong> with context on what it means for your fitness level and age</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>5 personalized heart rate training zones</strong> (recovery, aerobic base, tempo, threshold, max)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>Your lactate/ventilatory threshold</strong> in heart rate, pace, and power (if applicable)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>Metabolic efficiency data</strong> showing how you burn fat vs carbs at different intensities</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>Detailed report</strong> with graphs, data, and interpretation—not just raw numbers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-2xl">✓</span>
              <span><strong>Actionable recommendations</strong> on how to structure your training for your goals</span>
            </li>
          </ul>
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 italic">
              <strong>The test takes 30-45 minutes.</strong> You'll run or bike on a treadmill/trainer while wearing a mask that measures your oxygen consumption. Intensity gradually increases until you reach max effort.
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
                  <span className="text-blue-600 mr-2">•</span>
                  Train for marathons, triathlons, cycling events, or endurance sports
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Want to know if you're training in the right zones
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Feel stuck at a performance plateau
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Are preparing for a race or competitive season
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Want to maximize your aerobic base building
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Not right if you:</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  Your primary goal is fat loss or weight management (consider RMR instead)
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  You don't do cardiovascular training regularly
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  You're not interested in structured training
                </li>
              </ul>
              <p className="mt-4 text-gray-600 italic">
                Not sure if VO₂ Max or RMR is right for you? <a href="/which-test" className="text-blue-600 hover:underline">See our test chooser</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Final CTA */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop training blind.
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get your VO₂ Max tested and know exactly how to train for maximum results.
          </p>
          <CTAButton
            href={FITEVALS_URLS.BOOKING_VO2}
            variant="primary"
            className="!bg-white !text-purple-600 hover:!bg-gray-100"
            trackingLabel="VO2 Final CTA"
          >
            Book VO₂ Max Test
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
