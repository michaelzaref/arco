import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "../data/reviews";
import AnimatedSection from "./AnimatedSection";

export default function ReviewsSection() {
  return (
    <AnimatedSection className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-widest text-arco-accent"
          >
            Client Stories
          </motion.span>
          <h2 className="mt-3 font-display text-3xl font-bold text-arco-text sm:text-4xl lg:text-5xl">
            Trusted by teams{" "}
            <span className="text-gradient">worldwide</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-arco-muted">
            We've partnered with businesses across industries to deliver digital
            experiences that drive results.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass group relative rounded-2xl p-6 glow-ring transition-shadow hover:shadow-cyan-500/10"
            >
              <Quote className="h-8 w-8 text-arco-accent/30" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-arco-muted group-hover:text-arco-text/90 transition-colors">
                "{review.text}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-arco-border/50 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-arco-accent/30 to-arco-violet/30 font-display text-sm font-bold text-arco-accent">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-arco-text">
                    {review.name}
                  </p>
                  <p className="text-xs text-arco-muted">
                    {review.role}, {review.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
