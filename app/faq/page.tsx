import CTAButton from '@/components/CTAButton';
import { FITEVALS_URLS } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.faq;

const faqSections = [
  {
    category: 'About Testing',
    questions: [
      {
        q: 'What\'s the difference between VO₂ Max and RMR testing?',
        a: 'VO₂ Max measures your aerobic capacity during exercise—it tells you how to train for endurance. RMR measures your calorie burn at rest—it tells you how to fuel for fat loss, maintenance, or performance. Different goals, different tests.',
      },
      {
        q: 'Which test do I need?',
        a: 'If your goal is endurance performance or training optimization, get VO₂ Max. If your goal is fat loss, weight management, or figuring out your calorie needs, get RMR. Many people get both for complete insight.',
      },
      {
        q: 'How accurate is metabolic testing?',
        a: 'Medical-grade metabolic analyzers are the gold standard for measuring metabolism. They\'re far more accurate than calculators, fitness trackers, or generic formulas. When done properly, the margin of error is minimal.',
      },
      {
        q: 'Is this just for elite athletes?',
        a: 'Absolutely not. Testing is valuable for anyone who wants to stop guessing. Whether you\'re a beginner trying to lose weight, a weekend warrior training for your first race, or an experienced athlete chasing performance, you\'ll benefit from knowing your actual physiology.',
      },
    ],
  },
  {
    category: 'Booking & Preparation',
    questions: [
      {
        q: 'Where do I get tested?',
        a: 'Testing is provided by FitEvals. When you book through this site, you\'ll be directed to FitEvals.com to select a location and schedule your appointment.',
      },
      {
        q: 'How do I prepare for VO₂ Max testing?',
        a: 'Avoid heavy meals 2-3 hours before testing. Don\'t test completely fasted—have a light snack if needed. Avoid intense exercise the day before. Wear comfortable athletic clothing and bring running/cycling shoes. You\'ll get detailed instructions when you book.',
      },
      {
        q: 'How do I prepare for RMR testing?',
        a: 'Fast for 4-5 hours before (water is fine). No caffeine or exercise on test day. No intense exercise the night before. Arrive relaxed—stress can affect results. Wear comfortable clothing. Full prep details are provided when you book.',
      },
      {
        q: 'How long does testing take?',
        a: 'VO₂ Max takes 30-45 minutes (including setup and cool-down). RMR takes 15-20 minutes. Plan to spend about an hour at the facility for either test.',
      },
    ],
  },
  {
    category: 'Results & Follow-Up',
    questions: [
      {
        q: 'When do I get my results?',
        a: 'Most results are available within 24-48 hours. You\'ll receive a detailed report with data, graphs, and interpretation—not just raw numbers.',
      },
      {
        q: 'Will someone explain my results?',
        a: 'Yes. Your report includes expert interpretation and actionable recommendations. You\'re not just handed data—you get guidance on what it means and what to do with it.',
      },
      {
        q: 'What if my results are "bad"?',
        a: 'There are no bad results—only data. If your VO₂ Max is lower than you hoped or your metabolism is slower than expected, that\'s valuable information. Now you know what to work with and can adjust your training or nutrition accordingly.',
      },
      {
        q: 'How often should I retest?',
        a: 'Most people retest every 3-6 months to track progress, especially if training for an event or making significant lifestyle changes. Some athletes retest annually to monitor trends.',
      },
    ],
  },
  {
    category: 'Cost & Logistics',
    questions: [
      {
        q: 'How much does testing cost?',
        a: 'Pricing varies by location and package. Contact FitEvals directly for current pricing in your area. Many people find the investment worth it for the clarity and progress it provides.',
      },
      {
        q: 'Is testing covered by insurance?',
        a: 'Typically not, unless ordered by a physician for medical reasons. Most people pay out-of-pocket. Check with FitEvals for payment options.',
      },
      {
        q: 'Can I get both tests done in one session?',
        a: 'Yes, many facilities offer combo testing. RMR is done first (since it requires you to be at rest), followed by VO₂ Max. Ask FitEvals about combo pricing.',
      },
      {
        q: 'What if I need to reschedule?',
        a: 'Contact FitEvals directly to reschedule. They\'ll work with you to find a new time that fits your schedule.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Everything you need to know about metabolic and fitness testing.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-200">
                {section.category}
              </h2>
              <div className="space-y-8">
                {section.questions.map((faq, faqIndex) => (
                  <div key={faqIndex}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA after each section */}
              {sectionIndex === 0 && (
                <div className="mt-10 p-6 bg-blue-50 rounded-lg text-center">
                  <p className="text-gray-900 font-semibold mb-4">
                    Still not sure which test you need?
                  </p>
                  <a
                    href="/which-test"
                    className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
                  >
                    Use Our Test Chooser
                  </a>
                </div>
              )}

              {sectionIndex === 2 && (
                <div className="mt-10 p-6 bg-green-50 rounded-lg text-center">
                  <p className="text-gray-900 font-semibold mb-4">
                    Ready to stop guessing and get your baseline?
                  </p>
                  <CTAButton
                    href={FITEVALS_URLS.BOOKING_FAQ}
                    variant="primary"
                    trackingLabel="FAQ Section CTA"
                  >
                    Book Your Test
                  </CTAButton>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact FitEvals directly when you book. They'll answer any specific questions about your situation, location, or testing needs.
          </p>
          <CTAButton
            href={FITEVALS_URLS.BOOKING_FAQ}
            variant="secondary"
            trackingLabel="FAQ Bottom CTA"
          >
            Contact FitEvals
          </CTAButton>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get your baseline?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop guessing. Start training and fueling with data.
          </p>
          <CTAButton
            href={FITEVALS_URLS.BOOKING_FAQ}
            variant="primary"
            className="!bg-white !text-blue-600 hover:!bg-gray-100"
            trackingLabel="FAQ Final CTA"
          >
            Book on FitEvals
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
