import React from "react";
import Container from "./Container";
import Link from "next/link";
import { Search } from "lucide-react";

export const navLinks = [
  {
    label: "ទំព័រដើម",
    href: "/",
  },
  {
    label: "កម្សាន្ត",
    href: "/entertainment",
  },
  {
    label: "កីឡា",
    href: "/sport",
  },
  {
    label: "ជំនឿសាសនា",
    href: "/religion",
  },
  {
    label: "បច្ចេកវិទ្យា",
    href: "/technology",
  },
  {
    label: "ជីវិតនិងសង្គម",
    href: "/",
  },
];

const Header = () => {
  return (
    <header className="sticky bg-slate-100 top-0 z-10 w-full overflow-hidden shadow-2xl select-none">
      <div className="py-4">
        <Container>
          <nav className="flex justify-between items-center">
            {/* Left */}
            <div className="flex gap-20">
              <Link
                href="/"
                className="flex items-center text-3xl text-red-500"
              >
                <h2>News</h2>
              </Link>
              <ul className="text-blue-800 hidden md:flex items-center gap-4">
                {navLinks.map((link) => (
                  <li className="text-base cursor-pointer" key={link.label}>
                    <Link
                      className="bayon text-xs sm:text-[0.8rem] lg:text-xl"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  className="bg-gray-300 py-2 pl-4 pr-11 rounded-md focus:outline-none focus:border-gray-400 transition duration-100 ease-in-out border text-gray-700"
                  type="text"
                  placeholder="Search..."
                  name="search"
                />
                <button type="submit" name="search">
                  <Search className="absolute top-2 right-3 text-gray-500" />
                </button>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;
