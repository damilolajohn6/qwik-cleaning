import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <div className="w-full">
      <header className=" top-0 left-0 w-full bg-transparent z-50 py-4 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/QwikClean.png" alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          <Nav />
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <MobileNav />
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex items-center space-x-2 text-gray-700">
          <Link href="/booking">
            <Button className="bg-blue-600">Book Now </Button>
          </Link>
        </div>
      </header>

      {/* Add spacing to avoid content being hidden under the sticky header */}
      <div className="h-20"></div>
    </div>
  );
};

export default Header;