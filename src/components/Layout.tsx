import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 bg-grid-pattern bg-[length:64px_64px] opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-hero-glow"
        aria-hidden
      />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
      <WhatsAppButton
        floating
        message="Hi ARCO! I'd like to discuss a project."
      />
    </div>
  );
}
