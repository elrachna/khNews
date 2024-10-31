import React from "react";
import Container from "../Container";
import Link from "next/link";
import { navLinks } from "../header/Header";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-400 text-slate-800">
      <Container>
        <div className="h-[20vh] justify-center flex flex-col space-y-4">
          <ul className="flex gap-4 justify-center text-blue-800">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-9 justify-center text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaTelegram />
            <FaX />
            <FaYoutube />
            <FaTiktok />
          </div>

          <p className="flex justify-center text-sm opacity-50">
            &copy;{new Date().getFullYear()} Khmer News, Inc. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
