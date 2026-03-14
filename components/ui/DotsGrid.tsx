type DotsGridProps = {
  width: number;
  height: number;
  gap?: number;
};

export function DotsGrid({ width, height, gap = 12 }: DotsGridProps) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        gap: `${gap}px`,
      }}
      className="grid grid-cols-5 grid-rows-5"
    >
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="w-[5px] h-[5px] bg-gray rounded-full" />
      ))}
    </div>
  );
}