import Image from "next/image";

import discordIcon from "../../public/discord-icon.png";
import mailIcon from "../../public/mail-icon.png";
import gitIcon from "../../public/git-icon.png";

export function Footer() {
  return (
    <footer className="mt-16">

      {/* Top Border */}
      <div className="w-full h-[1px] bg-gray"></div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-2 w-[1024px] mx-auto py-8">

        {/* Left Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white">༕</span>
            <span className="text-white font-bold text-[16px]">DK</span>
            <span className="text-gray text-sm">dkmehta127@gmail.com</span>
          </div>

          <p className="text-gray text-sm">
            Web designer and front-end developer
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end gap-3">
          <h2 className="text-white font-semibold mr-14">Media</h2>

          <div className="flex items-center gap-4">
            <Image
              src={mailIcon}
              alt="mail Icon"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-80"
            />

            <Image
              src={discordIcon}
              alt="Discord Icon"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-80"
            />

            <Image
              src={gitIcon}
              alt="Git Icon"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-[1024px] mx-auto pb-6 text-center">
        <p className="text-gray text-sm">
          © Copyright 2026, Made by Dinesh Mehta.
        </p>
      </div>

    </footer>
  );
}