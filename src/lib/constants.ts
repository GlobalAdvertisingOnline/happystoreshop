export const COMPANY = {
  name: "HappyStoreShop",
  legalName: "HappyStoreShop LLC",
  tagline: "Your Trusted Online Shopping Partner",
  email: "support@happystoreshop.com",
  phone: "(844) 308-2059",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM EST",
  url: "https://happystoreshop.com",
  year: 2024,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Track Order", href: "/tracking" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
] as const;
