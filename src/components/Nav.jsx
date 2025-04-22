"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "contact" },
  //{ href: "/contact", label: "Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex text-white gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`capitalize font-bold transition-all  ${
            link.href === pathname
              ? " border-b-2 border-blue-700"
              : "hover:text-blue-700"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;