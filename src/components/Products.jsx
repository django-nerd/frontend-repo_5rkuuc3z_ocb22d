import React from 'react';
import { Rocket, CreditCard, Network, Store } from 'lucide-react';

const products = [
  {
    id: 'simplicollect',
    name: 'SImpliCollect',
    description:
      'A streamlined payment collection suite for businesses and institutions — invoices, reminders, and reconciliations made effortless.',
    icon: CreditCard,
    accent: 'from-[#F26522]/10 to-orange-500/0',
  },
  {
    id: 'mydigicard',
    name: 'MyDigiCard',
    description:
      'Smart, shareable digital identity and business cards with analytics, QR, and seamless updates across platforms.',
    icon: Rocket,
    accent: 'from-blue-500/10 to-blue-500/0',
  },
  {
    id: 'myorgnet',
    name: 'MyOrgNet',
    description:
      'Operate your organization with clarity — directory, workflows, announcements, and role-based access in one place.',
    icon: Network,
    accent: 'from-purple-500/10 to-purple-500/0',
  },
  {
    id: 'mydukandar',
    name: 'MyDukandar',
    description:
      'A retail enablement platform for local shops — inventory, billing, loyalty, and online storefront in minutes.',
    icon: Store,
    accent: 'from-emerald-500/10 to-emerald-500/0',
  },
];

function ProductCard({ id, name, description, icon: Icon, accent }) {
  return (
    <a
      href={`#${id}`}
      className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${accent} opacity-0 transition group-hover:opacity-100`} />
      <div className="relative z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F26522]/10 text-[#F26522]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-black">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#333333]">{description}</p>
        <div className="mt-4 inline-flex items-center text-sm font-semibold text-[#F26522]">
          Learn more
          <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z"/></svg>
        </div>
      </div>
    </a>
  );
}

function ProductDetail({ id, name, tagline, bullets }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black">{name}</h2>
          <p className="mt-2 text-[#333333]">{tagline}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-[#333333]">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 rounded-lg bg-[#F5F5F5] p-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#F26522]" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-[#FFFFFF] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">Our Products</h2>
            <p className="mt-2 text-[#666666]">Four focused platforms, one mission — simplify the way you work and grow.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md bg-[#F26522] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#e45b1d]">Talk to us</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

        {/* Detailed sections for each product */}
        <div className="mt-12 space-y-8">
          <ProductDetail
            id="simplicollect"
            name="SImpliCollect"
            tagline="Collect payments faster with automated invoicing, reminders, and reconciliations."
            bullets={[
              'Multi-mode payments (UPI, cards, net banking)',
              'Auto-reconcile and export to accounting',
              'Payment links and QR for quick collection',
              'Analytics dashboard for cashflow visibility',
              'Smart reminders and dunning flows',
              'Role-based access and audit trails',
            ]}
          />
          <ProductDetail
            id="mydigicard"
            name="MyDigiCard"
            tagline="Your dynamic digital identity and business card — always up to date, shareable anywhere."
            bullets={[
              'Beautiful, branded digital cards with QR',
              'Click-to-call, email, WhatsApp, maps',
              'Micro-site builder with templates',
              'Lead capture and engagement analytics',
              'Multiple profiles for teams and roles',
              'Embed on websites and email signatures',
            ]}
          />
          <ProductDetail
            id="myorgnet"
            name="MyOrgNet"
            tagline="A connected operating system for your organization."
            bullets={[
              'Org directory and role-based permissions',
              'Announcements, tasks and workflow routing',
              'Knowledge base and documents hub',
              'SAML/SSO and granular access controls',
              'API-first and integrations friendly',
              'Mobile-friendly, secure by design',
            ]}
          />
          <ProductDetail
            id="mydukandar"
            name="MyDukandar"
            tagline="Give local retail superpowers with POS, inventory, and loyalty in one."
            bullets={[
              'Easy billing with barcode and GST-ready invoices',
              'Inventory and stock alerts with suppliers',
              'Customer loyalty and offers engine',
              'Online store and home delivery workflows',
              'Reports for sales, margins, and tax',
              'Works offline-first with cloud sync',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
