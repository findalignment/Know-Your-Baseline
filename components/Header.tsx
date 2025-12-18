'use client';

import Link from 'next/link';
import { useState } from 'react';
import CTAButton from './CTAButton';
import { FITEVALS_URLS } from '@/lib/links';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            Know Your Baseline
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/which-test" className="text-gray-700 hover:text-blue-600 transition">
              Which Test?
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition">
              FAQ
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <CTAButton
              href={FITEVALS_URLS.BOOKING_GENERAL}
              variant="primary"
              className="!px-6 !py-2 !text-base"
              trackingLabel="Header CTA"
            >
              Book on FitEvals
            </CTAButton>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/which-test"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Which Test?
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <CTAButton
              href={FITEVALS_URLS.BOOKING_GENERAL}
              variant="primary"
              className="!w-full !text-center"
              trackingLabel="Mobile Header CTA"
            >
              Book on FitEvals
            </CTAButton>
          </div>
        )}
      </nav>
    </header>
  );
}

