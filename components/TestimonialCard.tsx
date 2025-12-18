interface TestimonialCardProps {
  quote: string;
  author: string;
  context: string;
}

export default function TestimonialCard({ quote, author, context }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <p className="text-gray-700 italic mb-4">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">{context}</p>
      </div>
    </div>
  );
}

