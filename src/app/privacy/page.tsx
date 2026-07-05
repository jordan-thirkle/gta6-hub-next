import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GTA 6 Hub',
  description: 'Privacy policy for GTA 6 Hub. How we handle data, cookies, and third-party services.'
};

export default function PrivacyPage() {
  return (
    <div className="py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-secondary text-sm">Last updated: July 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-medium">Information We Collect</h2>
          <p className="mt-2 text-secondary">GTA 6 Hub does not collect personal information beyond what you voluntarily provide (email address via newsletter sign-up). We use standard web analytics to understand aggregate traffic patterns.</p>
        </section>

        <section>
          <h2 className="text-base font-medium">Email Addresses</h2>
          <p className="mt-2 text-secondary">If you subscribe to our newsletter, we store your email address solely for sending periodic GTA 6 updates. You can unsubscribe at any time. We do not share, sell, or rent email addresses to third parties.</p>
        </section>

        <section>
          <h2 className="text-base font-medium">Cookies</h2>
          <p className="mt-2 text-secondary">This site may use minimal cookies for analytics and functionality. No tracking cookies are used for advertising purposes at this time.</p>
        </section>

        <section>
          <h2 className="text-base font-medium">Third-Party Services</h2>
          <p className="mt-2 text-secondary">We may use third-party services for analytics (e.g., Vercel Analytics) and content delivery. These services have their own privacy policies governing data handling.</p>
        </section>

        <section>
          <h2 className="text-base font-medium">Data Security</h2>
          <p className="mt-2 text-secondary">We implement reasonable security measures to protect your information. However, no internet transmission is completely secure.</p>
        </section>

        <section>
          <h2 className="text-base font-medium">Contact</h2>
          <p className="mt-2 text-secondary">For privacy-related inquiries, contact the site owner through the contact information on the main site.</p>
        </section>

        <section>
          <h2 className="text-base font-medium">Changes</h2>
          <p className="mt-2 text-secondary">We may update this privacy policy. Changes will be posted on this page with an updated date.</p>
        </section>
      </div>
    </div>
  );
}
