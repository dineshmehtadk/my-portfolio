import { About } from "@/components/ui/About";
import { Skills } from "@/components/ui/Skills";


function AboutMePage() {



  return (
    <>
     
      <About />

       <div className=" max-w-[1024px] mx-auto mt-15">
        <h1 className="text-white text-xl md:text-2xl font-semibold whitespace-nowrap">
          <span className="text-primary">#</span>skills
        </h1>
      </div>

      <Skills />
   

    </>


  );
}

export default AboutMePage;