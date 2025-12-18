'use client';

import { trackOutboundClick } from '@/lib/analytics';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  trackingLabel?: string;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  trackingLabel = 'CTA Click',
}: CTAButtonProps) {
  const handleClick = () => {
    trackOutboundClick(href, trackingLabel);
  };

  const baseStyles = 'inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

