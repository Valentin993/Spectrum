"use client";
import Link from "next/link";
import Image from "next/image";
import hm from "../image/menu.svg";
import logo from "../image/logo.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { delay: 0.3 },
        },
      }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-end lg:justify-between items-center py-2">
          <div className="px-5">
            <Link href="">
              <Image
                href="#"
                onClick={toggleMenu}
                src={hm}
                alt="Hamburger Menu"
                width="70"
                height="70"
                className="transform transition duration-300 hover:scale-105 hover:opacity-60"
              />
            </Link>

            {isMenuOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-[#40463e] bg-opacity-70 z-50">
                <div className="flex flex-col items-center justify-center w-full h-full text-white">
                  <ul className="space-y-6 text-5xl md:text-7xl font-bold text-center">
                    <li className="hover:text-[#3e5a42]">
                      <Link href="/" onClick={toggleMenu}>
                        Home
                      </Link>
                    </li>
                    <li className="hover:text-[#3e5a42]">
                      <Link href="#about" onClick={toggleMenu}>
                        About
                      </Link>
                    </li>
                    <li className="hover:text-[#3e5a42]">
                      <Link href="/cocktails" onClick={toggleMenu}>
                        Cocktails
                      </Link>
                    </li>
                    <li className="hover:text-[#3e5a42]">
                      <Link href="/contackt" onClick={toggleMenu}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div>
            <Link href="/">
              <Image
                src={logo}
                alt="logo "
                width="140"
                className="hidden lg:block transform transition duration-300 hover:scale-105 hover:opacity-60"
              />
            </Link>
          </div>
          <div className=" hidden lg:block text-3xl bg-[#FFFFFF]/[.30] px-5 py-3 rounded-2xl transform transition duration-300 hover:scale-105 hover:bg-[#000000]/[.70] hover:text-[#FFFFFF]/[.80]">
            <Link href="/contackt">CONTACT</Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
