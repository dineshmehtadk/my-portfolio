"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "about-me", path: "/about-me" },
    { name: "contacts", path: "/contacts" },
  ];

  return (
    <header className="max-w-[1024px] mx-auto px-4 flex items-center justify-between h-[61px] relative">
      
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
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

   {/* Mobile Sidebar Menu */}
<div
  className={`fixed top-0 right-0 w-[160px] h-[420px] bg-[#262626] border-l border-gray transform transition-transform duration-300 md:hidden flex flex-col ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Close Button */}
  <div className="flex justify-end p-4">
    <button
      className="text-white text-2xl"
      onClick={() => setOpen(false)}
    >
      ✕
    </button>
  </div>

  {/* Menu List */}
  <ul className="flex flex-col gap-6 px-6 text-lg flex-1 justify-center">
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
    </header>
  );
}