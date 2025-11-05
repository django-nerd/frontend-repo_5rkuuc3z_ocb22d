import React from 'react';

const associates = [
  'Razorpay',
  'Paytm',
  'AWS',
  'Google Cloud',
  'Stripe',
  'Zoho',
];

export default function CompanyInfo() {
  return (
    <section id="about" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">About Us</h2>
            <p className="mt-4 text-[#333333] leading-relaxed">
              Simplium Technologies builds products that are powerful yet intuitive. Our mission is to strip
              away complexity so teams can focus on what matters. From fintech to organizational platforms and
              retail enablement, we blend thoughtful design with robust engineering.
            </p>
            <p className="mt-3 text-[#333333]">
              We operate with a customer-first mindset, ship fast, and measure success by the simplicity our
              users feel every day.
            </p>
          </div>

          <div id="associates">
            <h3 className="text-xl font-bold text-black">Associates & Partners</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {associates.map((a) => (
                <div
                  key={a}
                  className="flex items-center justify-center rounded-lg border border-gray-200 bg-[#F5F5F5] px-4 py-6 text-sm font-semibold text-[#333333]"
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="contact" className="mt-14 rounded-2xl border border-gray-200 bg-[#F5F5F5] p-6 md:p-8">
          <h3 className="text-2xl font-extrabold text-black">Contact Us</h3>
          <p className="mt-2 text-[#666666]">We'd love to hear about your use case.</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-black">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[#333333] placeholder:text-[#666666] focus:border-[#F26522] focus:outline-none"
                required
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-black">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[#333333] placeholder:text-[#666666] focus:border-[#F26522] focus:outline-none"
                required
              />
            </div>
            <div className="md:col-span-2 grid gap-2">
              <label className="text-sm font-medium text-black">Message</label>
              <textarea
                placeholder="Tell us what you're building"
                rows={4}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[#333333] placeholder:text-[#666666] focus:border-[#F26522] focus:outline-none"
                required
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-[#F26522] px-5 py-3 font-semibold text-white shadow hover:bg-[#e45b1d] transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
