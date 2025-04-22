"use client";

import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#005b89] text-white pt-16 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
            <span className="text-white">
              Qwik<span className="text-blue-400">C</span>
              <span className="text-red-400">l</span>
              <span className="text-blue-500">e</span>
              <span className="text-green-400">a</span>
              <span className="text-indigo-400">n</span>
            </span>
          </div>
          <p className="text-sm">
            We deliver fast, reliable on-demand cleaning services tailored to your needs anytime.
          </p>
        </div>

        {/* Quick Links & Social Media */}
        <div className="flex justify-between md:justify-evenly gap-12">
          <div>
            <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Programs</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Social Media</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">LinkedIn</Link></li>
              <li><Link href="#">YouTube</Link></li>
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">Facebook</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold">Subscribe to our Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-4 rounded-l-full text-black outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-full font-semibold hover:bg-blue-700">
              Sign-Up
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 text-white text-xl mt-4">
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
        <p className="text-white">
          ©2025. QwikClean. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="#" className="hover:underline">
            Term Of Use
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
