import React from 'react';
import { Star } from 'lucide-react';

const items = [
  {
    quote:
      'SImpliCollect cut our receivables cycle by 40%. The automated reminders and reconciliation are a lifesaver.',
    author: 'Aarav Mehta',
    role: 'Finance Head, Edutech Co.',
  },
  {
    quote:
      'MyDigiCard helped our sales team present a unified brand — the analytics show exactly where leads come from.',
    author: 'Riya Kapoor',
    role: 'VP Growth, Saasify',
  },
  {
    quote:
      'MyOrgNet brought our scattered workflows into one place. Adoption was fast because everything feels simple.',
    author: 'Kabir Shah',
    role: 'CTO, HealthOps',
  },
  {
    quote:
      'MyDukandar is a game-changer for our franchise partners — billing to inventory just works.',
    author: 'Neha Gupta',
    role: 'Retail Director, FreshMart',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F5F5F5] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">What our customers say</h2>
        <p className="mt-2 text-[#666666]">Real stories from teams simplifying with Simplium.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t, idx) => (
            <div key={idx} className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-[#F26522]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F26522]" />
                ))}
              </div>
              <p className="mt-3 text-[#333333]">“{t.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-black">{t.author}</div>
              <div className="text-xs text-[#666666]">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
