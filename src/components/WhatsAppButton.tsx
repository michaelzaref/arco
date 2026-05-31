import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../config";

interface WhatsAppButtonProps {
  floating?: boolean;
  label?: string;
  message?: string;
  className?: string;
}

export default function WhatsAppButton({
  floating = false,
  label = "Chat on WhatsApp",
  message,
  className = "",
}: WhatsAppButtonProps) {
  if (floating) {
    return (
      <motion.a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 md:bottom-8 md:right-8"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-300" />
        </span>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-shadow hover:bg-[#20bd5a] hover:shadow-green-500/40 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </motion.a>
  );
}
