export function Quote() {
  return (
    <section className="max-w-[1024px] mx-auto px-4 mt-24 flex flex-col items-center">

      {/* Quote Box */}
      <div className="relative border border-[--white] bg-[#2c2f36] px-6 md:px-10 py-6 text-gray text-base md:text-[20px] text-center md:text-left">

        {/* Left Quote */}
        <span className="absolute -top-4 left-2 text-gray text-3xl md:text-[40px]">
          “
        </span>

        With great power comes great electricity bill

        {/* Right Quote */}
        <span className="absolute -bottom-4 right-2 text-gray text-3xl md:text-[40px]">
          ”
        </span>
      </div>

      {/* Author */}
      <div className="mt-4 border border-[--white] px-4 py-2 text-gray text-sm md:text-[16px] self-end">
        - Dr. Who
      </div>

    </section>
  );
}