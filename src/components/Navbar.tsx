import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY } from "../config";
import Button from "./Button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <motion.span
            className="font-display text-2xl font-bold tracking-tight text-gradient"
            whileHover={{ scale: 1.02 }}
          >
            {COMPANY.name}
          </motion.span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? "text-arco-accent"
                    : "text-arco-muted hover:text-arco-text"
                }`}
              >
                {label}
                {location.pathname === to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-arco-accent"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 text-sm text-arco-muted transition-colors hover:text-arco-accent"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phoneDisplay}
          </a>
          <Button to="/contact" variant="primary">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-arco-border text-arco-text md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass overflow-hidden border-t border-arco-border md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                      location.pathname === to
                        ? "bg-arco-accent/10 text-arco-accent"
                        : "text-arco-muted"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-arco-border pt-4">
                <Button to="/contact" variant="primary" className="w-full">
                  Get Started
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
