import TestimonialCard from './TestimonialCard';

const trustPoints = [
  {
    title: 'Clinical-Grade Equipment',
    description: 'Medical-grade metabolic analyzers used in research and professional sports.',
  },
  {
    title: 'Expert Interpretation',
    description: 'Your results come with actionable insights, not just raw numbers.',
  },
  {
    title: 'Privacy & Repeatability',
    description: 'Your data stays yours. Track progress with consistent testing protocols.',
  },
];

const testimonials = [
  {
    quote: 'I wasted 6 months training in the wrong heart rate zones. This test fixed that in one hour.',
    author: 'Sarah M.',
    context: 'Marathon Runner',
  },
  {
    quote: 'Finally understood why I wasn\'t losing weight. My metabolism was 300 calories lower than calculators predicted.',
    author: 'James T.',
    context: 'Fat Loss Goal',
  },
  {
    quote: 'Thought I was aerobic. Turned out I was training anaerobically every run. Game changer.',
    author: 'Marcus L.',
    context: 'Triathlete',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            What People Discover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

