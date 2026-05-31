import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import PageTransition from "../components/PageTransition";
import WhatsAppButton from "../components/WhatsAppButton";
import SocialLinks from "../components/SocialLinks";
import { COMPANY, whatsappUrl } from "../config";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi ARCO! I'm ${form.name}.\n\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\n\n${form.message}`;
    window.open(whatsappUrl(text), "_blank");
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-arco-accent">
              Contact Us
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-arco-text sm:text-5xl lg:text-6xl">
              Let's start your{" "}
              <span className="text-gradient">next project</span>
            </h1>
            <p className="mt-6 text-lg text-arco-muted">
              Reach out via WhatsApp for the fastest response, or fill out the form
              below and we'll open a chat with your details pre-filled.
            </p>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-4">
            <WhatsAppButton
              label="Message on WhatsApp"
              message="Hi ARCO! I'd like to discuss a project."
            />
            <SocialLinks />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: COMPANY.phoneDisplay,
                  href: `tel:${COMPANY.phone}`,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@arco.tech",
                  href: "mailto:hello@arco.tech",
                },
                {
                  icon: MapPin,
                  label: "Availability",
                  value: "Remote · Worldwide",
                  href: undefined,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass flex gap-4 rounded-2xl p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-arco-accent/10">
                    <item.icon className="h-5 w-5 text-arco-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-arco-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block font-medium text-arco-text hover:text-arco-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-arco-text">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="glass rounded-2xl p-6"
              >
                <p className="text-sm font-medium text-arco-text">Connect with us</p>
                <p className="mt-1 text-sm text-arco-muted">
                  Follow ARCO on social media for updates and insights.
                </p>
                <SocialLinks className="mt-4" />
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <a
                    href={COMPANY.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-arco-muted hover:text-[#0A66C2] transition-colors"
                  >
                    LinkedIn →
                  </a>
                  <a
                    href={COMPANY.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-arco-muted hover:text-[#1877F2] transition-colors"
                  >
                    Facebook →
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 glass rounded-3xl p-8 glow-ring lg:p-10"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-400" />
                    <h3 className="mt-6 font-display text-2xl font-bold text-arco-text">
                      Opening WhatsApp…
                    </h3>
                    <p className="mt-2 text-arco-muted">
                      Your message was prepared. Send it in WhatsApp to reach our team.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm text-arco-accent hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-xl font-semibold text-arco-text">
                      Project inquiry
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-arco-muted mb-2"
                        >
                          Full name *
                        </label>
                        <input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full rounded-xl border border-arco-border bg-arco-bg/80 px-4 py-3 text-sm text-arco-text placeholder:text-arco-muted/50 focus:border-arco-accent focus:outline-none focus:ring-1 focus:ring-arco-accent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-arco-muted mb-2"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="w-full rounded-xl border border-arco-border bg-arco-bg/80 px-4 py-3 text-sm text-arco-text placeholder:text-arco-muted/50 focus:border-arco-accent focus:outline-none focus:ring-1 focus:ring-arco-accent transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-arco-muted mb-2"
                      >
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-arco-border bg-arco-bg/80 px-4 py-3 text-sm text-arco-text placeholder:text-arco-muted/50 focus:border-arco-accent focus:outline-none focus:ring-1 focus:ring-arco-accent transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-arco-muted mb-2"
                      >
                        Tell us about your project *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full resize-none rounded-xl border border-arco-border bg-arco-bg/80 px-4 py-3 text-sm text-arco-text placeholder:text-arco-muted/50 focus:border-arco-accent focus:outline-none focus:ring-1 focus:ring-arco-accent transition-colors"
                        placeholder="What are you looking to build?"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-arco-accent to-cyan-500 px-8 py-3 text-sm font-semibold text-arco-bg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
                    >
                      <Send className="h-4 w-4" />
                      Send via WhatsApp
                    </motion.button>
                    <p className="text-xs text-arco-muted">
                      Submitting opens WhatsApp with your message pre-filled — no
                      backend required.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
