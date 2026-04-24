import Link from "next/link";

import { Container } from "@/src/components/layout/container";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/solutions", label: "What We Build" },
      { href: "/#catalog", label: "How It Works" },
      { href: "/#pilot", label: "Request Pilot" },
      { href: "/quality", label: "Quality & Ethics" },
    ],
  },
  {
    title: "Languages",
    links: [
      { href: "/languages", label: "Amharic" },
      { href: "/languages", label: "Oromifa" },
      { href: "/languages", label: "Tigrinya" },
      { href: "/languages", label: "Somali" },
      { href: "/languages", label: "Harari" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contributors", label: "Become a Contributor" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1F2937] bg-[#0B0F19]">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-4 border-t border-[#1F2937] pt-8">
          <div className="flex flex-col gap-2 text-sm text-[#9CA3AF] sm:flex-row sm:items-center sm:justify-between">
            <a href="mailto:contact@qali.et" className="hover:text-white">
              contact@qali.et
            </a>
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/#pilot" className="text-sm text-[#9CA3AF] hover:text-white">
              Request a pilot
            </Link>
            <Link href="/privacy" className="text-sm text-[#9CA3AF] hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#9CA3AF] hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-[#1F2937] pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-[#9CA3AF]">
            (c) {currentYear} Qali. All rights reserved.
          </p>
          <p className="text-sm text-[#9CA3AF]">Local truth for artificial intelligence.</p>
        </div>
      </Container>
    </footer>
  );
}
