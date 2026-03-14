"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-[1024px] h-[61px] mx-auto flex items-center justify-between px-4">
      
      {/* Logo */}
      <div className="flex items-center gap-2 text-white font-bold text-[16px]">
        <span>༕</span>
        <span>DK</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-6 text-base">
          
          <li className={`cursor-pointer ${pathname === "/" ? "text-white" : "text-primary hover:text-white"}`}>
            <Link href="/">
              <span className="text-primary">#</span>home
            </Link>
          </li>

          <li className={`cursor-pointer ${pathname === "/works" ? "text-white" : "text-primary hover:text-white"}`}>
            <Link href="/works">
              <span className="text-primary">#</span>works
            </Link>
          </li>

          <li className={`cursor-pointer ${pathname === "/about-me" ? "text-white" : "text-primary hover:text-white"}`}>
            <Link href="/about-me">
              <span className="text-primary">#</span>about-me
            </Link>
          </li>

          <li className={`cursor-pointer ${pathname === "/contacts" ? "text-white" : "text-primary hover:text-white"}`}>
            <Link href="/contacts">
              <span className="text-primary">#</span>contacts
            </Link>
          </li>

          <li className="ml-4 text-white">EN</li>

        </ul>
      </nav>
    </header>
  );
}