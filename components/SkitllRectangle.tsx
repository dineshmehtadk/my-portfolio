function SkillRectangle() {
  return (
    <div className="relative w-[220px] h-[220px]">

      {/* Top Square */}
      <div className="absolute bottom-[30px] left-[69px] w-[60px] h-[90px] border border-primary"></div>

      {/* Middle Square */}
      <div className="absolute bottom-0 left-[10px] w-[60px] h-[90px] border border-primary"></div>

      {/* Bottom Square */}
      <div className="absolute bottom-[60px] left-[69px] w-[30px] h-[30px] border border-primary"></div>


      <div className="absolute bottom-[31px] left-[40px] w-[30px] h-[30px] border border-primary"></div>

    </div>
  );
}

export default SkillRectangle;