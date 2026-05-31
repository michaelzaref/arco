import { motion } from "framer-motion";
import { services } from "../data/services";
import AnimatedSection from "./AnimatedSection";

interface ServicesGridProps {
  showAll?: boolean;
  limit?: number;
}

export default function ServicesGrid({
  showAll = false,
  limit = 6,
}: ServicesGridProps) {
  const items = showAll ? services : services.slice(0, limit);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -8 }}
            className="group glass rounded-2xl p-6 transition-all hover:border-arco-accent/30 hover:glow-ring"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-arco-accent/10 text-arco-accent transition-colors group-hover:bg-arco-accent/20">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-arco-text">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-arco-muted">
              {service.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export function ServicesSectionHeader() {
  return (
    <AnimatedSection className="text-center">
      <span className="text-sm font-medium uppercase tracking-widest text-arco-accent">
        What We Build
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold text-arco-text sm:text-4xl">
        Any website. <span className="text-gradient">Any vision.</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-arco-muted">
        From sleek landing pages to complex web platforms — if you can imagine it,
        we can build it.
      </p>
    </AnimatedSection>
  );
}
