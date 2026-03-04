import { createPageMetadata } from "@/src/lib/seo";
import { Section } from "@/src/components/sections/section";

export const metadata = createPageMetadata({
  title: "Terms of Service | Qali",
  description: "Terms and conditions governing the use of Qali services and datasets.",
});

export default function TermsOfServicePage() {
  return (
    <Section eyebrow="LEGAL" title="Terms of Service" description="Last updated: March 2026">
      <div className="mx-auto max-w-3xl space-y-10">
        <TermsSection title="1. Overview">
          <p>These Terms of Service govern your use of the Qali website and services. By accessing our website or engaging our services, you agree to be bound by these terms. If you do not agree, please do not use our services.</p>
          <p>Qali provides AI training data services including dataset licensing, custom data collection, annotation services, and workforce solutions for enterprise clients.</p>
        </TermsSection>

        <TermsSection title="2. Services">
          <p>Our services include but are not limited to:</p>
          <ul>
            <li><strong className="text-white">Dataset licensing:</strong> access to pre-built African language datasets for speech, vision, and text AI applications.</li>
            <li><strong className="text-white">Custom data collection:</strong> bespoke dataset creation according to client specifications.</li>
            <li><strong className="text-white">Annotation services:</strong> human annotation, quality assurance, and validation by native speakers.</li>
            <li><strong className="text-white">Sample requests:</strong> free dataset samples for evaluation purposes.</li>
          </ul>
        </TermsSection>

        <TermsSection title="3. Dataset Licensing">
          <p>Datasets provided by Qali are licensed, not sold. Specific licensing terms are defined in individual dataset agreements and may include:</p>
          <ul>
            <li>Permitted use cases (research, commercial, internal evaluation).</li>
            <li>Restrictions on redistribution, sublicensing, or derivative dataset creation.</li>
            <li>Attribution requirements where applicable.</li>
            <li>Duration and territory of the license.</li>
          </ul>
          <p>Dataset samples provided for evaluation are licensed solely for internal evaluation purposes and may not be used in production systems.</p>
        </TermsSection>

        <TermsSection title="4. Confidentiality & NDA">
          <p>Enterprise engagements may be conducted under mutual non-disclosure agreements (NDAs). When an NDA is in place:</p>
          <ul>
            <li>All project specifications, data schemas, and deliverables are treated as confidential.</li>
            <li>Neither party may disclose confidential information without prior written consent.</li>
            <li>Confidentiality obligations survive the termination of the engagement.</li>
          </ul>
        </TermsSection>

        <TermsSection title="5. Payment Terms">
          <p>Payment terms for enterprise services are defined in individual project agreements. General terms include:</p>
          <ul>
            <li>Invoices are issued upon milestone completion or as specified in the agreement.</li>
            <li>Payment is due within 30 days of invoice date unless otherwise agreed.</li>
            <li>All fees are quoted in USD unless otherwise specified.</li>
          </ul>
        </TermsSection>

        <TermsSection title="6. Quality Assurance">
          <p>Qali commits to delivering datasets that meet the quality specifications defined in the project agreement. Our quality assurance process includes:</p>
          <ul>
            <li>Multi-stage review (annotator self-review, peer verification, expert audit).</li>
            <li>Inter-annotator agreement measurement (98%+ target).</li>
            <li>Documented QA reports included with every delivery.</li>
          </ul>
          <p>If delivered data does not meet agreed specifications, we will rework the affected portions at no additional cost within the scope of the original agreement.</p>
        </TermsSection>

        <TermsSection title="7. Data Ethics & Compliance">
          <p>All data collected and delivered by Qali adheres to ethical standards:</p>
          <ul>
            <li>Informed consent is obtained from all data contributors.</li>
            <li>Personally identifiable information is removed before delivery.</li>
            <li>Contributors are fairly compensated for their work.</li>
            <li>We comply with applicable data protection regulations.</li>
          </ul>
        </TermsSection>

        <TermsSection title="8. Intellectual Property">
          <p>Upon full payment and subject to licensing terms:</p>
          <ul>
            <li>Licensed datasets may be used as specified in the dataset agreement.</li>
            <li>Custom-collected data is licensed exclusively to the commissioning client unless otherwise agreed.</li>
            <li>Qali retains ownership of its methodologies, tools, and processes.</li>
          </ul>
        </TermsSection>

        <TermsSection title="9. Limitation of Liability">
          <p>To the maximum extent permitted by law, Qali shall not be liable for indirect, incidental, special, or consequential damages arising from the use of our services or datasets. Our total liability is limited to the fees paid for the specific service giving rise to the claim.</p>
        </TermsSection>

        <TermsSection title="10. Termination">
          <p>Either party may terminate an engagement with 30 days written notice. Upon termination:</p>
          <ul>
            <li>Client retains rights to any fully paid and delivered datasets.</li>
            <li>Work in progress will be delivered and invoiced proportionally.</li>
            <li>Confidentiality obligations continue per the NDA terms.</li>
          </ul>
        </TermsSection>

        <TermsSection title="11. Governing Law">
          <p>These terms are governed by the laws of the Federal Democratic Republic of Ethiopia. Any disputes arising from these terms shall be resolved through good-faith negotiation, and if necessary, through arbitration in Addis Ababa, Ethiopia.</p>
        </TermsSection>

        <TermsSection title="12. Contact">
          <p>For questions about these terms:</p>
          <ul>
            <li>Email: <a href="mailto:contact@qali.et" className="text-primary hover:text-primary/80">contact@qali.et</a></li>
            <li>Location: Addis Ababa, Ethiopia</li>
          </ul>
        </TermsSection>
      </div>
    </Section>
  );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 font-display text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-3 text-sm leading-relaxed text-[#D1D5DB] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-primary [&_a]:hover:text-primary/80">
        {children}
      </div>
    </div>
  );
}
