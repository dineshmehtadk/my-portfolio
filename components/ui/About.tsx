import Image from "next/image";
import about from "../../public/about.png";
import { DotsGrid } from "./DotsGrid";

export function About() {
  return (


      <div className="mt-14 max-w-[1024px] mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Text Section */}
        <div className="max-w-[515px] text-center lg:text-left">
          <p className="text-gray text-base md:text-lg leading-relaxed mb-4">
            Hello, I am Dinesh.
          </p>

          <p className="text-gray text-base md:text-lg leading-relaxed mb-4">
            I’m a self-taught front-end developer who builds responsive,
            modern web applications with clean and maintainable code.
          </p>

          <p className="text-gray text-base md:text-lg leading-relaxed mb-6">
            I enjoy turning ideas into real products and continuously learning
            new technologies to improve my development skills.
          </p>

          <button className="border border-primary px-4 py-2 text-white hover:bg-primary/20 transition">
            Read More →
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center">

          {/* Decorations */}
          <div className="absolute top-10 left-0 hidden md:block">
            <DotsGrid height={84} width={84} />
          </div>

          <div className="absolute bottom-32 right-0 hidden md:block">
            <DotsGrid height={84} width={84} />
          </div>

          <Image
            src={about}
            alt="about image"
            className="w-[260px] md:w-[300px] lg:w-[339px] h-auto"
          />

        </div>

      </div>  );
}