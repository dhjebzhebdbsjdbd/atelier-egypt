// Primary navigation — used by both Header and Footer.
export interface NavLink {
  href: string;
  ar: string;
  en: string;
}

export const navLinks: NavLink[] = [
  { href: '/', ar: 'الرئيسية', en: 'Home' },
  { href: '/about', ar: 'من نحن', en: 'About' },
  { href: '/contact', ar: 'تواصل', en: 'Contact' },
  { href: '/start', ar: 'ابدأ مشروعك', en: 'Start a project' },
];
