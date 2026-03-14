"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "home", path: "/" },
    { name: "works", path: "/works" },
    { name: "about-me", path: "/about-me" },
    { name: "contacts", path: "/contacts" },
  ];

  return (
    <header className="max-w-[1024px] mx-auto px-4 flex items-center justify-between h-[61px]">
      
      {/* Logo */}
      <div className="flex items-center gap-2 text-white font-bold text-[16px]">
        <span>༕</span>
        <span>DK</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 text-base">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`cursor-pointer ${
                pathname === item.path
                  ? "text-white"
                  : "text-primary hover:text-white"
              }`}
            >
              <Link href={item.path}>
                <span className="text-primary">#</span>
                {item.name}
              </Link>
            </li>
          ))}
          <li className="ml-4 text-white">EN</li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[61px] left-0 w-full bg-[--background] border-t border-gray md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={`cursor-pointer ${
                  pathname === item.path
                    ? "text-white"
                    : "text-primary hover:text-white"
                }`}
              >
                <Link href={item.path} onClick={() => setOpen(false)}>
                  <span className="text-primary">#</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}