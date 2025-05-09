import Link from "next/link";
import { usePathname } from 'next/navigation'

type MenuNavigationProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function MenuNavigation({ setIsMenuOpen }: MenuNavigationProps) {
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Votre nounou", href: "#nounou" },
    { name: "Photos & vidéos", href: "#videos" },
    { name: "Nous trouver & contact", href: "#contact" },
  ];

  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <li key={item.name} onClick={() => setIsMenuOpen(false)}>
          <Link href={item.href} className={`tracking-wide hover:underline hover:underline-offset-8 ${pathname === item.href ? 'underline underline-offset-8' : 'text-[var(--foreground)]'}`}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}
