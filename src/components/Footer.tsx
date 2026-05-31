import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { COMPANY } from "../config";
import SocialLinks from "./SocialLinks";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-arco-border bg-arco-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl font-bold text-gradient">
              {COMPANY.name}
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-arco-muted">
              A software development company focused on building modern web applications
              and scalable digital products. We turn your ideas into reality.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-arco-text">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-arco-muted transition-colors hover:text-arco-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-arco-text">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 text-sm text-arco-muted transition-colors hover:text-arco-accent"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:hello@${COMPANY.name.toLowerCase()}.tech`}
                  className="flex items-center gap-2 text-sm text-arco-muted transition-colors hover:text-arco-accent"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  hello@arco.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-arco-border pt-8 md:flex-row">
          <p className="text-xs text-arco-muted">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-arco-muted">
            Built with precision — ready for your next project.
          </p>
        </div>
      </div>
    </footer>
  );
}
