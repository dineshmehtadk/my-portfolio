import Image from "next/image";
import HeroImage from "@/public/Image.png";
import { DotsGrid } from "@/components/ui/DotsGrid";

export function Hero() {
  return (
    <section className="w-[1024px] mx-auto flex items-center justify-between mt-16">
      {/* Left Content */}
      <div className="max-w-[520px] space-y-6">
        <h1 className="text-white text-[32px] font-semibold leading-[42px]">
          Dinesh is a <span className="text-primary">frontend developer</span>{" "}
          and <span className="text-primary">software engineer</span>
        </h1>

        <p className="text-gray text-[16px] max-w-[420px]">
          I build modern, responsive web applications and scalable software
          solutions where performance, usability, and clean code meet.
        </p>

        <button className="border border-primary px-5 py-2 text-white hover:bg-primary hover:text-black transition">
          Contact me !!
        </button>
      </div>

      {/* Right Content */}
      <div className="relative">
        <Image
          src={HeroImage}
          alt="Hero"
          width={400}
          height={400}
          className="relative z-10"
        />

        {/* Dot Grid */}
        <div className="absolute bottom-[80px] right-[10px] z-20">
          <DotsGrid height={84} width={84} />
        </div>

        {/* Status Badge */}
        <div className="bg-[--background] text-gray-300 text-[14px] px-4 py-2 border border-[--white]">
          Currently working on{" "}
          <span className="text-white font-medium">Portfolio</span>
        </div>
      </div>
    </section>
  );
}
