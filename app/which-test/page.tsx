import CTAButton from '@/components/CTAButton';
import { FITEVALS_URLS } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.whichTest;

const testOptions = [
  {
    name: 'Resting Metabolic Rate (RMR)',
    goal: 'Fat Loss / Plateaus / Weight Management',
    description: 'Find out exactly how many calories your body burns at rest. Stop guessing your calorie needs.',
    measures: [
      'Your exact daily calorie burn',
      'Carb vs fat utilization at rest',
      'Metabolic efficiency',
    ],
    forWho: [
      'You\'ve hit a weight loss plateau',
      'Calculators aren\'t working for you',
      'You want to recomp or cut without guessing',
      'You suspect your metabolism is "slow"',
    ],
    cta: FITEVALS_URLS.BOOKING_RMR,
    color: 'green',
  },
  {
    name: 'VO₂ Max Testing',
    goal: 'Endurance / Performance / Training Optimization',
    description: 'Measure your aerobic capacity and find your precise training zones. Train smarter, not just harder.',
    measures: [
      'VO₂ Max (aerobic capacity)',
      'Lactate threshold / ventilatory threshold',
      'Heart rate training zones',
      'Fat-burning vs carb-burning zones',
    ],
    forWho: [
      'You train for endurance events',
      'You don\'t know if you\'re training too easy or too hard',
      'You want to improve running/cycling economy',
      'You need personalized zones (not generic formulas)',
    ],
    cta: FITEVALS_URLS.BOOKING_VO2,
    color: 'blue',
  },
  {
    name: 'Not Sure?',
    goal: 'Let\'s figure it out together',
    description: 'Book a consultation and we\'ll help you determine which test makes the most sense for your goals.',
    measures: [
      'Discuss your training goals',
      'Review your current challenges',
      'Get expert recommendations',
    ],
    forWho: [
      'You have multiple goals',
      'You\'re new to metabolic testing',
      'You want to combine tests',
    ],
    cta: FITEVALS_URLS.BOOKING_WHICH_TEST,
    color: 'gray',
  },
];

export default function WhichTest() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Which test do you need?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose based on your primary goal. Both tests give you actionable data—not just numbers.
          </p>
        </div>

        {/* Test Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testOptions.map((test, index) => {
            const colorClasses = {
              green: 'border-green-500 bg-green-50',
              blue: 'border-blue-500 bg-blue-50',
              gray: 'border-gray-400 bg-gray-50',
            };

            return (
              <div
                key={index}
                className={`border-2 rounded-lg p-8 ${colorClasses[test.color as keyof typeof colorClasses]}`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{test.name}</h2>
                <p className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                  {test.goal}
                </p>
                <p className="text-gray-700 mb-6">{test.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">What you measure:</h3>
                  <ul className="space-y-2">
                    {test.measures.map((measure, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        {measure}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Best for you if:</h3>
                  <ul className="space-y-2">
                    {test.forWho.map((who, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        {who}
                      </li>
                    ))}
                  </ul>
                </div>

                <CTAButton
                  href={test.cta}
                  variant="primary"
                  className="w-full text-center"
                  trackingLabel={`Which Test - ${test.name}`}
                >
                  Book This Test
                </CTAButton>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Want both? Many people combine RMR + VO₂ Max testing for complete metabolic insight.
          </p>
          <CTAButton
            href={FITEVALS_URLS.BOOKING_WHICH_TEST}
            variant="secondary"
            trackingLabel="Which Test - Combo CTA"
          >
            Ask About Combo Testing
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

