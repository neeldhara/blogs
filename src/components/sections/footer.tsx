import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { Home } from "lucide-react";

const navigation = [
  {
    title: "Products",
    links: [
      { name: "VAR", href: "/#code-security" },
      { name: "Credit Transfers", href: "/#why-charter" },
      { name: "Credit Accounts", href: "/#ai-chatbot" },
      { name: "Loan Origination", href: "/#ai-chatbot" },
      { name: "Loan Purchase", href: "/#ai-chatbot" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Pricing", href: "/pricing" },
      { name: "FAQ", href: "/faq" },
      { name: "Demo", href: "/contact" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="pt-16 md:pt-28 lg:pt-32">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Navigation Section */}
          <nav className="flex flex-wrap justify-between gap-x-32 gap-y-20 border-b pb-14 lg:pb-20">
            
          </nav>

          {/* Bottom Section */}
          <div className="py-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <Home className="h-6 w-6" />
              <p className="text-sm font-medium">
                © {new Date().getFullYear()} Charter -{" "}
                <a
                  href="https://shadcnblocks.com"
                  className="underline transition-opacity hover:opacity-80"
                  target="_blank"
                >
                  Shadcnblocks.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  aria-label={link.label}
                  key={link.href}
                  href={link.href}
                  className="hover:text-muted-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
