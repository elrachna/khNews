import React from "react";
import Container from "../Container";
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
    <header className="sticky top-0 z-50 w-full overflow-hidden bg-slate-700 bg-opacity-40 shadow-2xl">
      <div className="py-4">
        <Container>
          <nav className="flex justify-between items-center">
            {/* Left */}
            <div className="flex gap-4">
              <Link
                href="/"
                className="flex items-center text-3xl font-semibold text-red-500"
              >
                <h2>News</h2>
              </Link>
              <ul className="text-blue-800 hidden lg:flex items-center gap-4">
                {navLinks.map((link) => (
                  <li className="text-base cursor-pointer" key={link.label}>
                    <Link className="bayon text-xl " href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right */}
            <div className="text-white flex items-center gap-4">
              <div className="relative ">
                <button type="submit" name="search">
                  <Search className="absolute top-2 left-3" />
                </button>
                <input
                  className="min-w-[30vw] bg-slate-700 py-2 px-11 rounded-xl"
                  type="text"
                  placeholder="Search..."
                  name="search"
                />
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;
