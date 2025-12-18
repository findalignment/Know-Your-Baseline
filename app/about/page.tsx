import CTAButton from '@/components/CTAButton';
import { FITEVALS_URLS } from '@/lib/links';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            About Know Your Baseline
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center">
            Why we exist and how we help you stop guessing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The problem we solve
              </h2>
              <p>
                Most people train and fuel based on guesswork. They use generic calculators, outdated formulas, and advice that wasn't designed for their body. They wonder why progress is slow—or why it stops altogether.
              </p>
              <p className="mt-4">
                The truth is, everyone's physiology is different. Your heart rate zones aren't the same as someone else's. Your metabolism might be 300 calories different than what a calculator predicts. And without data, you're flying blind.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why we created this
              </h2>
              <p>
                <strong>Know Your Baseline</strong> exists to make metabolic and fitness testing accessible and understandable. We're here to help you find the right test, understand what it measures, and connect you with professional testing through <a href="https://www.fitevals.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FitEvals</a>.
              </p>
              <p className="mt-4">
                We believe that data beats guesswork. Whether you're an athlete chasing performance or someone trying to lose weight and finally make progress, testing gives you clarity. It shows you exactly what's happening in your body—so you can stop wondering and start making informed decisions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How it works
              </h2>
              <ol className="space-y-3 ml-6 list-decimal">
                <li>
                  <strong>Learn about testing.</strong> We explain what VO₂ Max and RMR testing are, what they measure, and who they're for. No jargon, no fluff.
                </li>
                <li>
                  <strong>Choose your test.</strong> Use our test chooser to figure out which test matches your goals—or book both for complete insight.
                </li>
                <li>
                  <strong>Book on FitEvals.</strong> We direct you to FitEvals, where you'll schedule your test, get prep instructions, and complete your appointment.
                </li>
                <li>
                  <strong>Get your results.</strong> You'll receive a detailed report with your data, interpretation, and actionable recommendations.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Who provides the testing?
              </h2>
              <p>
                Testing is provided by <strong>FitEvals</strong>, a professional metabolic testing service. They use medical-grade equipment, follow consistent protocols, and deliver detailed reports with expert interpretation.
              </p>
              <p className="mt-4">
                Know Your Baseline is an educational resource that helps you understand testing and connects you to FitEvals. We're here to make the process clear, transparent, and accessible.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why trust us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Clinical-Grade Equipment</h3>
                  <p className="text-gray-700">
                    FitEvals uses medical-grade metabolic analyzers trusted by researchers and professional sports teams.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Expert Interpretation</h3>
                  <p className="text-gray-700">
                    You don't just get numbers—you get context, insights, and recommendations you can actually use.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Your Data, Your Privacy</h3>
                  <p className="text-gray-700">
                    Your results are yours. Use them to track progress, share with coaches, or keep private.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our philosophy
              </h2>
              <p>
                We believe everyone deserves access to the same data that elite athletes use. You shouldn't have to guess about your body. Testing gives you clarity, confidence, and a real baseline to work from.
              </p>
              <p className="mt-4">
                Whether you're training for a race, trying to lose weight, or just want to optimize your health, knowing your baseline changes everything. It's the difference between hoping you're doing it right and knowing you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What people discover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-700 italic mb-4">
                "I was training way too hard. My 'easy' runs were actually threshold efforts. No wonder I was burned out."
              </p>
              <p className="font-semibold text-gray-900">Alex R.</p>
              <p className="text-sm text-gray-600">Marathoner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-700 italic mb-4">
                "My metabolism is 400 calories lower than calculators said. That's why I wasn't losing weight."
              </p>
              <p className="font-semibold text-gray-900">Jordan T.</p>
              <p className="text-sm text-gray-600">Fat Loss Goal</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-700 italic mb-4">
                "Finally have personalized zones. My training is more focused and I'm seeing real improvements."
              </p>
              <p className="font-semibold text-gray-900">Casey M.</p>
              <p className="text-sm text-gray-600">Cyclist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to know instead of guess?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get your baseline and start training or fueling with real data.
          </p>
          <CTAButton
            href={FITEVALS_URLS.BOOKING_ABOUT}
            variant="primary"
            className="!bg-white !text-blue-600 hover:!bg-gray-100"
            trackingLabel="About Final CTA"
          >
            Book on FitEvals
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
