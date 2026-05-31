import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import AnimatedSection from "../components/AnimatedSection";
import ServicesGrid, { ServicesSectionHeader } from "../components/ServicesGrid";
import Button from "../components/Button";
import { processSteps } from "../data/process";

export default function Services() {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-arco-accent">
              Services
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-arco-text sm:text-5xl lg:text-6xl">
              Everything you need to{" "}
              <span className="text-gradient">go digital</span>
            </h1>
            <p className="mt-6 text-lg text-arco-muted leading-relaxed">
              Whether you need a stunning landing page, a full e-commerce store, or a
              complex web application — we have the expertise to design, build, and
              launch it. No project is too ambitious.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ServicesGrid showAll />
        </div>
      </section>

      <section className="py-24 border-t border-arco-border bg-arco-surface/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ServicesSectionHeader />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 glass rounded-2xl p-6"
              >
                <span className="font-display text-4xl font-bold text-arco-accent/40 shrink-0">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-arco-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-arco-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="glass rounded-3xl p-12 text-center glow-ring lg:p-16">
            <h2 className="font-display text-3xl font-bold text-arco-text">
              Not sure what you need?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-arco-muted">
              Tell us about your goals and we'll recommend the right approach —
              no obligation, no pressure.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Free Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
