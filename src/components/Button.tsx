import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  to?: never;
  onClick?: never;
}

interface ButtonAsRouter extends ButtonBaseProps {
  to: string;
  href?: never;
  external?: never;
  onClick?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  onClick?: () => void;
  href?: never;
  to?: never;
  external?: never;
}

type ButtonProps = ButtonAsLink | ButtonAsRouter | ButtonAsButton;

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-arco-accent to-cyan-500 text-arco-bg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40",
  secondary:
    "glass text-arco-text hover:border-arco-accent/50 hover:bg-arco-surface/80",
  ghost: "text-arco-muted hover:text-arco-accent",
  whatsapp:
    "bg-[#25D366] text-white font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:bg-[#20bd5a]",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  icon,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <motion.a
        href={props.href}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  if ("to" in props && props.to) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link to={props.to} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={props.onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
