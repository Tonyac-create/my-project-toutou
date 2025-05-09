'use client';

import Link from "next/link";
import { useState, useEffect, useMemo } from 'react';

type MenuNavigationProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function MenuNavigation({ setIsMenuOpen }: MenuNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>('#hero');

  const navigation = useMemo(() => [
    { name: "Accueil", href: "#hero" },
    { name: "Votre nounou", href: "#nounou" },
    { name: "Photos & vidéos", href: "#pictures" },
    { name: "Nous trouver & contact", href: "#contact" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigation]);

  return (
    <>
      {navigation.map((item) => (
        <li key={item.name} onClick={() => {
          setIsMenuOpen(false);
        }}>
          <Link href={item.href} className={`tracking-wide hover:underline hover:underline-offset-8 ${activeSection === item.href ? 'underline underline-offset-8' : 'text-[var(--foreground)]'}`}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}
