import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Shield } from "lucide-react";
import PageTransition from "../components/PageTransition";
import AnimatedSection from "../components/AnimatedSection";
import Button from "../components/Button";
import ReviewsSection from "../components/ReviewsSection";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every line of code and every pixel serves a purpose. We build with intention, not guesswork.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "Your success is our success. We treat every project as a long-term relationship, not a transaction.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of trends so your product feels modern today and stays relevant tomorrow.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Clear communication, honest timelines, and dependable delivery — every single time.",
  },
];

export default function About() {
  return (
    <PageTransition>
      {/* Page hero */}
      <section className="pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-arco-accent">
              About Us
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-arco-text sm:text-5xl lg:text-6xl">
              Crafting digital products that{" "}
              <span className="text-gradient">make an impact</span>
            </h1>
            <p className="mt-6 text-lg text-arco-muted leading-relaxed">
              ARCO is a software development company focused on building modern web
              applications and scalable digital products. We help businesses of all
              sizes turn ambitious ideas into polished, high-performing websites and
              applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 border-y border-arco-border bg-arco-surface/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold text-arco-text">
                Our story
              </h2>
              <div className="mt-6 space-y-4 text-arco-muted leading-relaxed">
                <p>
                  We started ARCO with a simple belief: every business deserves a
                  digital presence that matches the quality of their work. Too many
                  companies settle for generic templates — we set out to change that.
                </p>
                <p>
                  Over time, we've worked with a wide range of clients — from startups
                  launching their first product to established brands refreshing their
                  online presence. Each collaboration taught us something new, and
                  every project pushed our craft further.
                </p>
                <p>
                  Today, we specialize in custom websites, web applications, and
                  digital experiences that are fast, beautiful, and built to scale.
                  Our process, our standards, and our clients' feedback define who we are.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="glass rounded-3xl p-8 glow-ring">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: "50+", label: "Clients served" },
                    { num: "6+", label: "Service areas" },
                    { num: "100%", label: "Custom solutions" },
                    { num: "∞", label: "Ideas we can build" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center p-4 rounded-xl bg-arco-bg/50"
                    >
                      <p className="font-display text-3xl font-bold text-gradient">
                        {item.num}
                      </p>
                      <p className="mt-1 text-xs text-arco-muted uppercase tracking-wider">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-arco-text sm:text-4xl">
              Our mission
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-arco-muted leading-relaxed">
              To empower businesses with digital products that are as ambitious as
              their vision — built with craftsmanship, delivered with integrity, and
              designed to grow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-arco-surface/20 border-y border-arco-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-arco-accent">
              Our Values
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-arco-text">
              What drives us every day
            </h2>
          </AnimatedSection>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-arco-accent/10">
                  <value.icon className="h-7 w-7 text-arco-accent" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-arco-text">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-arco-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-arco-text">
            Let's build something together
          </h2>
          <p className="mt-3 text-arco-muted">
            We'd love to hear about your next project.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
