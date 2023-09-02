// import Link, { LinkProps } from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { PropsWithChildren, useState, useEffect } from 'react';

// type ActiveLinkProps = LinkProps & {
//   className?: string;
//   activeClassName: string;
// };

// const ActiveLink = ({ children, activeClassName, className, ...props }: PropsWithChildren<ActiveLinkProps>) => {
//   const [computedClassName, setComputedClassName] = useState(className);
//   const pathname = usePathname();
//   useEffect(() => {
//     // Check if the router fields are updated client-side

//     // Dynamic route will be matched via props.as
//     // Static route will be matched via props.href
//     const linkPathname = new URL((props.as || props.href) as string, location.href).pathname;
//     console.log('linkPathname :', linkPathname);

//     // Using URL().pathname to get rid of query and hash
//     const activePathname = pathname;
//     console.log('pathname :', activePathname);

//     const newClassName = linkPathname === activePathname ? activeClassName : className;

//     if (newClassName !== computedClassName) {
//       setComputedClassName(newClassName);
//     }
//   }, [pathname, props.as, props.href, activeClassName, className, computedClassName]);

//   return (
//     <Link className={computedClassName} {...props}>
//       {children}
//     </Link>
//   );
// };

// export default ActiveLink;

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
        'before:absolute before:top-6 before:h-[2px] before:w-full before:bg-gradient-to-r before:from-buttercup-500 before:to-buttercup-200'
      }`}
    >
      {children}
    </Link>
  );
}
