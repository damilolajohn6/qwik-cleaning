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
    <div>
      <footer className="bg-[#005b89] text-white pt-16 pb-6 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
              <span className="text-white">
                Qwik
                <span className="text-blue-400">C</span>
                <span className="text-red-400">l</span>
                <span className="text-blue-500">e</span>
                <span className="text-green-400">a</span>
                <span className="text-indigo-400">n</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              We deliver fast, reliable on-demand cleaning services tailored to
              your needs anytime.
            </p>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Subscribe to our Newsletter</h4>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="p-3 rounded-full text-black w-full sm:w-auto flex-1 outline-none"
                />
                <button className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                  Sign-Up
                </button>
              </form>

              {/* Social Icons */}
              <div className="flex gap-4 text-white text-xl mt-4">
                <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
                <FaInstagram className="hover:text-gray-300 cursor-pointer" />
                <FaYoutube className="hover:text-gray-300 cursor-pointer" />
                <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row sm:justify-between md:justify-evenly gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Programs</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Social Media</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">LinkedIn</Link>
                </li>
                <li>
                  <Link href="#">YouTube</Link>
                </li>
                <li>
                  <Link href="#">Twitter</Link>
                </li>
                <li>
                  <Link href="#">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-black text-white py-4 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p>©2025 QwikClean. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
