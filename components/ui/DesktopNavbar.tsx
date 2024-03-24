import ActiveLink from "../utils/ActiveLink";

export default function DesktopNavbar() {
  return (
    <nav className="hidden navbar:flex navbar:grow" data-aos="fade-down">
      {/* Desktop menu links */}
      <ul className="flex grow flex-wrap items-center justify-end gap-6">
        <li>
          <ActiveLink href="/">Accueil</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/le-studio">Le studio</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/nos-services">Nos services</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/nos-references">Nos références</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contact-acces">Contact/Acces</ActiveLink>
        </li>
      </ul>
    </nav>
  );
}
