import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ActiveLink({ href, children, onClick }: LinkProps) {
  const pathname = usePathname();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Appelez onClick si elle est définie
    } // Ajoutez ici la logique pour fermer la navigation mobile
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`relative inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-lg font-medium text-transparent ${
        pathname === href &&
        'before:absolute before:top-6 before:h-[2px] before:w-full before:rounded-full before:bg-gradient-to-r before:from-buttercup-500 before:to-buttercup-200'
      }`}
    >
      {children}
    </Link>
  );
}
