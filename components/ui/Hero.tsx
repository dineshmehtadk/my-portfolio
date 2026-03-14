import Image from "next/image";
import HeroImage from "@/public/Image.png";
import { DotsGrid } from "@/components/ui/DotsGrid";

export function Hero() {
  return (
    <section className="max-w-[1024px] mx-auto px-4 mt-16 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="max-w-[520px] space-y-6 text-center lg:text-left">
        <h1 className="text-white text-2xl md:text-3xl lg:text-[32px] font-semibold leading-snug lg:leading-[42px]">
          Dinesh is a <span className="text-primary">frontend developer</span>{" "}
          and <span className="text-primary">software engineer</span>
        </h1>

        <p className="text-gray text-sm md:text-base max-w-[420px] mx-auto lg:mx-0">
          I build modern, responsive web applications and scalable software
          solutions where performance, usability, and clean code meet.
        </p>

        <a href="mailto:dkmehta127@gmail.com">
          <button className="border border-primary px-5 py-2 text-white hover:bg-primary hover:text-black transition">
            Contact me !!
          </button>
        </a>
      </div>

      {/* Right Content */}
      <div className="relative flex flex-col items-center">
        <Image
          src={HeroImage}
          alt="Hero"
          className="relative z-10 w-[260px] md:w-[320px] lg:w-[400px] h-auto"
        />

        {/* Dot Grid */}
        <div className="absolute bottom-[70px] right-[10px] hidden md:block z-20">
          <DotsGrid height={84} width={84} />
        </div>

        {/* Status Badge */}
        <div className="mt-4 bg-[--background] text-gray text-sm px-4 py-2 border border-[--white]">
          Currently working on{" "}
          <span className="text-white font-medium">Portfolio</span>
        </div>
      </div>
    </section>
  );
}
