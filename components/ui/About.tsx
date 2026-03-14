import Image from "next/image";
import about from "../../public/about.png";
import { DotsGrid } from "./DotsGrid";

export function About() {
  return (
    <section className="mt-16 mb-24">
      <div className="flex items-center justify-between w-[1024px] mx-auto">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <h1 className="text-white text-2xl font-semibold">
            <span className="text-primary">#</span>about
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
            Hello, I am Dinesh.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.{" "}
          </p>
          <button className="border border-primary px-4 py-1 text-white hover:bg-primary/20 transition">
            Read More →
          </button>
        </div>
        <div className="relative">

          <div className="absolute top-10 left-0">
                <DotsGrid height={84} width={84} />
              </div>

                        <div className="absolute bottom-40 right-5">
                <DotsGrid height={84} width={84} />
              </div>
          <Image src={about}  alt="about image" width={339} height={507} />
        </div>
      </div>
    </section>
  );
}
