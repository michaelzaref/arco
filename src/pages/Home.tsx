import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import WhatsAppButton from "../components/WhatsAppButton";
import SocialLinks from "../components/SocialLinks";
import ReviewsSection from "../components/ReviewsSection";
import ServicesGrid, { ServicesSectionHeader } from "../components/ServicesGrid";
import AnimatedSection from "../components/AnimatedSection";
import { COMPANY, whatsappUrl } from "../config";
import { processSteps } from "../data/process";

const stats = [
  { value: "50+", label: "Happy Clients" },
  { value: "100%", label: "Custom Built" },
  { value: "24/7", label: "Support Ready" },
];

const highlights = [
  "Landing pages & corporate sites",
  "E-commerce & booking systems",
  "Dashboards & SaaS platforms",
  "Mobile-first responsive design",
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-arco-accent/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-arco-violet/10 blur-[120px] animate-pulse-glow" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-arco-accent/30 bg-arco-accent/5 px-4 py-1.5 text-sm text-arco-accent"
              >
                <Sparkles className="h-4 w-4" />
                {COMPANY.tagline}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-arco-text sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                We build{" "}
                <span className="text-gradient">any website</span> you can
                imagine
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 max-w-xl text-lg text-arco-muted"
              >
                ARCO is a software development company crafting modern web
                applications and scalable digital products. We've worked with
                clients across industries — your vision is our blueprint.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 space-y-3"
              >
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-arco-muted"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-arco-accent" />
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Button to="/contact" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
                  Start Your Project
                </Button>
                <WhatsAppButton message="Hi ARCO! I have a project idea I'd like to discuss." />
                <Button to="/services" variant="secondary">
                  Explore Services
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center gap-6"
              >
                <span className="text-xs text-arco-muted uppercase tracking-wider">
                  Follow us
                </span>
                <SocialLinks size="sm" />
              </motion.div>
            </div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-arco-accent/20"
                />
                <div className="absolute inset-8 glass rounded-3xl glow-ring p-6 animate-float">
                  <div className="flex items-center gap-2 border-b border-arco-border pb-4">
                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-500/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                      <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="ml-2 text-xs text-arco-muted font-mono">
                      arco — build.tsx
                    </span>
                  </div>
                  <pre className="mt-4 text-xs font-mono text-arco-muted leading-relaxed overflow-hidden">
                    <code>
                      <span className="text-arco-violet">const</span>{" "}
                      <span className="text-arco-accent">project</span> = {"{"}
                      {"\n"}
                      {"  "}vision:{" "}
                      <span className="text-green-400">"your idea"</span>,
                      {"\n"}
                      {"  "}design:{" "}
                      <span className="text-green-400">"stunning"</span>,
                      {"\n"}
                      {"  "}delivery:{" "}
                      <span className="text-green-400">"on time"</span>,
                      {"\n"}
                      {"  "}scale:{" "}
                      <span className="text-green-400">"unlimited"</span>
                      {"\n"}
                      {"}"}
                      {"\n\n"}
                      <span className="text-arco-violet">await</span>{" "}
                      <span className="text-arco-accent">arco</span>.
                      <span className="text-amber-300">launch</span>(
                      project);
                    </code>
                  </pre>
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 flex items-center gap-2"
                >
                  <Zap className="h-5 w-5 text-amber-400" />
                  <span className="text-sm font-medium">Lightning fast</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-2 -left-4 glass rounded-xl px-4 py-3 flex items-center gap-2"
                >
                  <Code2 className="h-5 w-5 text-arco-accent" />
                  <span className="text-sm font-medium">Clean code</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-arco-border bg-arco-surface/20 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-arco-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ServicesSectionHeader />
          <div className="mt-16">
            <ServicesGrid limit={6} />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-arco-accent hover:underline"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-arco-surface/20 border-y border-arco-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-arco-accent">
              How We Work
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-arco-text sm:text-4xl">
              From idea to launch
            </h2>
          </AnimatedSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <span className="font-display text-5xl font-bold text-arco-accent/20">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-arco-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-arco-muted">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <div className="absolute top-8 left-full hidden h-px w-full bg-gradient-to-r from-arco-accent/30 to-transparent lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-sm font-medium uppercase tracking-widest text-arco-accent">
                Why ARCO
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-arco-text sm:text-4xl">
                Built for clients who demand{" "}
                <span className="text-gradient">excellence</span>
              </h2>
              <p className="mt-4 text-arco-muted leading-relaxed">
                We don't rely on templates or shortcuts. Every project is engineered
                from scratch with attention to performance, accessibility, and
                design — because your brand deserves nothing less.
              </p>
            </AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Users,
                  title: "Client-First",
                  desc: "We've collaborated with dozens of teams — your goals shape every decision.",
                },
                {
                  icon: Zap,
                  title: "Fast Delivery",
                  desc: "Agile sprints and clear milestones keep your project moving forward.",
                },
                {
                  icon: Code2,
                  title: "Modern Stack",
                  desc: "React, TypeScript, and cloud-native tools for future-proof products.",
                },
                {
                  icon: Sparkles,
                  title: "Pixel Perfect",
                  desc: "Animations and micro-interactions that make your site unforgettable.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-xl p-5"
                >
                  <item.icon className="h-6 w-6 text-arco-accent" />
                  <h3 className="mt-3 font-semibold text-arco-text">{item.title}</h3>
                  <p className="mt-1 text-sm text-arco-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-arco-accent/20 bg-gradient-to-br from-arco-surface to-arco-bg p-12 text-center lg:p-16 glow-ring"
          >
            <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-arco-text sm:text-4xl">
                Ready to build something amazing?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-arco-muted">
                Tell us about your project. We'll respond quickly and help you
                bring your vision to life.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button to="/contact" variant="primary">
                  Contact Us
                </Button>
                <Button
                  href={whatsappUrl("Hi ARCO! I'd like to start a new project.")}
                  external
                  variant="whatsapp"
                >
                  WhatsApp Us
                </Button>
              </div>
              <div className="mt-8 flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
