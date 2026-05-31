export const COMPANY = {
  name: "ARCO",
  tagline: "Turn your idea into reality",
  phone: "01558136038",
  phoneDisplay: "0155 813 6038",
  whatsapp: "201558136038",
  linkedin: "https://www.linkedin.com/company/arco-technology/",
  facebook: "https://www.facebook.com/profile.php?id=61590521695653",
} as const;

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${COMPANY.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
