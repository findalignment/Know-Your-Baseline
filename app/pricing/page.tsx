import CTAButton from '@/components/CTAButton';
import { FITEVALS_URLS } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = pageMetadata.pricing;

const testComparison = [
  {
    name: 'VO₂ Max Testing',
    price: 'Contact FitEvals',
    duration: '30-45 minutes',
    bestFor: 'Endurance athletes, runners, cyclists, triathletes',
    includes: [
      'VO₂ Max measurement',
      'Lactate/ventilatory threshold',
      'Heart rate training zones (5 zones)',
      'Fat vs carb utilization data',
      'Detailed report with graphs',
      'Training recommendations',
      'Baseline for tracking progress',
    ],
    color: 'blue',
    cta: FITEVALS_URLS.BOOKING_VO2,
  },
  {
    name: 'Resting Metabolic Rate (RMR)',
    price: 'Contact FitEvals',
    duration: '15-20 minutes',
    bestFor: 'Fat loss, weight management, metabolism insight',
    includes: [
      'Exact resting calorie burn',
      'Substrate utilization (fat vs carb)',
      'Metabolic efficiency analysis',
      'Comparison to predicted values',
      'Calorie targets for your goals',
      'Detailed report with data',
      'Nutrition recommendations',
    ],
    color: 'green',
    cta: FITEVALS_URLS.BOOKING_RMR,
  },
];

export default function PricingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What it costs. What you get.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Transparent pricing for metabolic and fitness testing.
          </p>
          <p className="text-lg text-gray-600">
            Testing is provided by FitEvals. Pricing varies by location and package.
          </p>
        </div>
      </section>

      {/* Test Comparison Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {testComparison.map((test, index) => {
              const colorClasses = {
                blue: 'border-blue-500 bg-blue-50',
                green: 'border-green-500 bg-green-50',
              };

              return (
                <div
                  key={index}
                  className={`border-2 rounded-lg p-8 ${colorClasses[test.color as keyof typeof colorClasses]}`}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{test.name}</h2>
                  <p className="text-2xl font-bold text-gray-700 mb-4">{test.price}</p>
                  <p className="text-gray-600 mb-2">
                    <strong>Duration:</strong> {test.duration}
                  </p>
                  <p className="text-gray-600 mb-6">
                    <strong>Best for:</strong> {test.bestFor}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">What's included:</h3>
                    <ul className="space-y-2">
                      {test.includes.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CTAButton
                    href={test.cta}
                    variant="primary"
                    className="w-full text-center"
                    trackingLabel={`Pricing - ${test.name}`}
                  >
                    Book This Test
                  </CTAButton>
                </div>
              );
            })}
          </div>

          {/* Combo Testing Note */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 text-center border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want both tests?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Many athletes combine VO₂ Max + RMR testing for complete metabolic insight. Ask about combo pricing.
            </p>
            <CTAButton
              href={FITEVALS_URLS.BOOKING_PRICING}
              variant="primary"
              trackingLabel="Pricing - Combo"
            >
              Ask About Combo Testing
            </CTAButton>
          </div>
        </div>
      </section>

      {/* What Makes It Worth It */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            What makes testing worth it?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You stop wasting time</h3>
              <p className="text-gray-700">
                No more guessing if you're training too hard, too easy, or eating the wrong amount. You get clarity in one session.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You get personalized data</h3>
              <p className="text-gray-700">
                Generic formulas don't work for everyone. This is your physiology—not an estimate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You make faster progress</h3>
              <p className="text-gray-700">
                Train and fuel with precision. See results faster because you're doing what actually works for your body.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You track changes over time</h3>
              <p className="text-gray-700">
                Establish a baseline and retest to see how your training, nutrition, or lifestyle changes affect your physiology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do I need to prepare for the test?
              </h3>
              <p className="text-gray-700">
                Yes. For RMR: fast for 4-5 hours, avoid caffeine and exercise that day. For VO₂ Max: avoid heavy meals 2-3 hours before, but don't test fasted. You'll get detailed prep instructions when you book.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How often should I retest?
              </h3>
              <p className="text-gray-700">
                Most people retest every 3-6 months to track progress, especially if training for an event or making nutrition changes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What if I'm not in great shape?
              </h3>
              <p className="text-gray-700">
                Testing is for everyone, not just elite athletes. In fact, testing is most valuable when you're starting out or trying to improve—because that's when you need clarity the most.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-blue-600 hover:underline font-semibold text-lg"
            >
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get your baseline?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your test on FitEvals and stop guessing about your training or nutrition.
          </p>
          <CTAButton
            href={FITEVALS_URLS.BOOKING_PRICING}
            variant="primary"
            className="!bg-white !text-blue-600 hover:!bg-gray-100"
            trackingLabel="Pricing Final CTA"
          >
            Book on FitEvals
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
