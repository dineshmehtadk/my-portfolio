import Image from "next/image";

import discordIcon from "../../public/discord-icon.png";
import mailIcon from "../../public/mail-icon.png";

export function Contact() {
  return (
    <section className="mt-16 mb-24">

            <div className="flex items-center justify-between w-[1024px] mx-auto">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <h1 className="text-white text-2xl font-semibold">
            <span className="text-primary">#</span>contact
          </h1>

          <div className="w-[239px] h-[1px] bg-primary"></div>
        </div>

        {/* Right Side */}
        <button className="text-white ml-6 hover:text-primary transition">
          View all →
        </button>
      </div>
    <div className="mt-14 w-[1024px] mx-auto flex justify-between">
        <div className=" w-[515px] h-[312px]">
       
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me          </p>
        
      
        </div>
<div className="border border-gray px-4 py-3 text-white h-[141px] w-[204px] flex flex-col gap-3">
  
  <p className="text-sm">Message me here</p>

  <div className="flex items-center gap-2">
    <Image
      src={discordIcon}
      alt="Discord Icon"
      width={24}
      height={24}
    />
    <span className="text-gray">Discord#34</span>
  </div>


  <div className="flex items-center gap-2">
    <Image
      src={mailIcon}
      alt="mail Icon"
      width={24}
      height={24}
    />
    <span className="text-gray">dinesh@m.me</span>
  </div>

</div>
      </div>
    </section>
  );
}             