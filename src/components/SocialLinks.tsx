import { motion } from "framer-motion";
import { Facebook, Linkedin } from "lucide-react";
import { COMPANY } from "../config";

interface SocialLinksProps {
  size?: "sm" | "md";
  className?: string;
}

export default function SocialLinks({ size = "md", className = "" }: SocialLinksProps) {
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const btnSize = size === "sm" ? "h-9 w-9" : "h-11 w-11";

  const links = [
    {
      href: COMPANY.linkedin,
      label: "LinkedIn",
      icon: Linkedin,
      color: "hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/40",
    },
    {
      href: COMPANY.facebook,
      label: "Facebook",
      icon: Facebook,
      color: "hover:bg-[#1877F2]/20 hover:text-[#1877F2] hover:border-[#1877F2]/40",
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, icon: Icon, color }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`flex ${btnSize} items-center justify-center rounded-xl border border-arco-border glass text-arco-muted transition-colors ${color}`}
        >
          <Icon className={iconSize} />
        </motion.a>
      ))}
    </div>
  );
}
