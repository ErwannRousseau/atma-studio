import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ActiveLink({ href, children, onClick }: LinkProps) {
  const pathname = usePathname();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "relative inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text font-medium text-lg text-transparent",
        {
          "before:absolute before:top-6 before:h-[2px] before:w-full before:rounded-full before:bg-gradient-to-r before:from-buttercup-500 before:to-buttercup-200":
            pathname === href,
        },
      )}
    >
      {children}
    </Link>
  );
}
