export function Quote() {
  return (
    <section className="w-[1024px] mx-auto mt-24 flex flex-col items-center">

      {/* Quote Box */}
      <div className="relative border border-[--white] bg-[#2c2f36] px-10 py-6 text-gray-200 text-[20px]">
        
        {/* Left Quote */}
        <span className="absolute -top-4 left-2 text-gray-400 text-[40px]">
          “
        </span>

        With great power comes great electricity bill

        {/* Right Quote */}
        <span className="absolute -bottom-6 right-4 text-gray-400 text-[40px]">
          ”
        </span>
      </div>

      {/* Author */}
      <div className="self-end mr-70  border border-[--white] px-4 py-2 text-gray-300 text-[16px]">
        - Dr. Who
      </div>

    </section>
  );
}