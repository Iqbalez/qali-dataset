import { createPageMetadata } from "@/src/lib/seo";
import { Section } from "@/src/components/sections/section";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Qali",
  description: "How Qali collects, uses, and protects your personal information.",
});

export default function PrivacyPolicyPage() {
  return (
    <Section eyebrow="LEGAL" title="Privacy Policy" description="Last updated: March 2026">
      <div className="mx-auto max-w-3xl space-y-10">
        <PolicySection title="1. Information We Collect">
          <p>When you interact with Qali, we may collect the following information:</p>
          <ul>
            <li><strong className="text-white">Contact information:</strong> name, email address, company name, and phone number provided through our forms.</li>
            <li><strong className="text-white">Project details:</strong> use case descriptions, language requirements, dataset specifications, and timeline information submitted via inquiry forms.</li>
            <li><strong className="text-white">Usage data:</strong> anonymized analytics about how you browse our website, including pages visited, time spent, and referral sources.</li>
            <li><strong className="text-white">Contributor data:</strong> information provided by annotators applying to join our workforce, including language proficiency, experience, and availability.</li>
          </ul>
        </PolicySection>

        <PolicySection title="2. How We Use Your Information">
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to dataset sample requests and enterprise inquiries.</li>
            <li>Evaluate contributor applications and manage our annotator workforce.</li>
            <li>Improve our website, services, and dataset offerings.</li>
            <li>Send project updates and relevant communications (only with your consent).</li>
            <li>Comply with legal obligations and enforce our terms.</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties.</p>
        </PolicySection>

        <PolicySection title="3. Data Security">
          <p>We implement industry-standard security measures to protect your information:</p>
          <ul>
            <li>All data is encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
            <li>Access to personal data is restricted to authorized personnel only.</li>
            <li>We conduct regular security audits and vulnerability assessments.</li>
            <li>NDA workflows are available for enterprise clients handling sensitive projects.</li>
          </ul>
        </PolicySection>

        <PolicySection title="4. Dataset Privacy & Ethics">
          <p>For all datasets we produce and deliver:</p>
          <ul>
            <li>Personally identifiable information (PII) is removed through automated and manual screening.</li>
            <li>All data contributors provide documented informed consent.</li>
            <li>Consent records are maintained with full chain of custody.</li>
            <li>We follow ethical data collection practices aligned with responsible AI principles.</li>
          </ul>
        </PolicySection>

        <PolicySection title="5. Cookies & Analytics">
          <p>Our website uses minimal, privacy-respecting analytics to understand traffic patterns. We do not use third-party advertising trackers. You can disable cookies in your browser settings at any time.</p>
        </PolicySection>

        <PolicySection title="6. Third-Party Services">
          <p>We may use the following third-party services:</p>
          <ul>
            <li><strong className="text-white">Email delivery:</strong> for sending form confirmations and project communications.</li>
            <li><strong className="text-white">Hosting:</strong> our website is hosted on secure cloud infrastructure.</li>
          </ul>
          <p>Each third-party provider is bound by their own privacy policies and our data processing agreements.</p>
        </PolicySection>

        <PolicySection title="7. Your Rights">
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Withdraw consent for communications at any time.</li>
            <li>Lodge a complaint with a relevant data protection authority.</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:contact@qali.et" className="text-primary hover:text-primary/80">contact@qali.et</a>.</p>
        </PolicySection>

        <PolicySection title="8. Data Retention">
          <p>We retain personal information only as long as necessary to fulfill the purposes described in this policy, or as required by law. Project-related data is retained for the duration of the engagement plus any contractual retention period.</p>
        </PolicySection>

        <PolicySection title="9. Changes to This Policy">
          <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
        </PolicySection>

        <PolicySection title="10. Contact">
          <p>For privacy-related inquiries:</p>
          <ul>
            <li>Email: <a href="mailto:contact@qali.et" className="text-primary hover:text-primary/80">contact@qali.et</a></li>
            <li>Location: Addis Ababa, Ethiopia</li>
          </ul>
        </PolicySection>
      </div>
    </Section>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 font-display text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-3 text-sm leading-relaxed text-[#D1D5DB] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-primary [&_a]:hover:text-primary/80">
        {children}
      </div>
    </div>
  );
}
