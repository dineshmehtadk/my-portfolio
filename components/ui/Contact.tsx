import Image from "next/image";

import discordIcon from "../../public/discord-icon.png";
import mailIcon from "../../public/mail-icon.png";

export function Contact() {
  return (

   

      <div className="mt-14 max-w-[1024px] mx-auto flex flex-col lg:flex-row items-start gap-10">

        {/* Text */}
        <div className="max-w-[515px]">
          <p className="text-gray text-base md:text-lg leading-relaxed">
            I’m interested in freelance opportunities. However, if you have
            other requests or questions, don’t hesitate to contact me.
          </p>
        </div>

        {/* Contact Card */}
        <div className="border border-gray px-4 py-4 text-white w-full max-w-[240px] flex flex-col gap-4">

          <p className="text-sm">Message me here</p>

          <div className="flex items-center gap-2">
            <Image src={discordIcon} alt="Discord Icon" width={24} height={24} />
            <span className="text-gray">Discord#34</span>
          </div>

          <div className="flex items-center gap-2">
            <Image src={mailIcon} alt="mail Icon" width={24} height={24} />
            <span className="text-gray">dkmehta127@gmail.com</span>
          </div>

        </div>

      </div>

  );
}