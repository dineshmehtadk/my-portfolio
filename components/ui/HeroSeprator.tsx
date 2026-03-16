"use client";

import { useRouter } from "next/navigation";

type HeroSeparatorProps = {
  title: string;
  viewAllLink?: string;
};

export function HeroSeparator({ title, viewAllLink }: HeroSeparatorProps) {
  const router = useRouter();

  const handleViewAll = () => {
    if (viewAllLink) {
      router.push(viewAllLink);
    }
  };
  return (
    <div className="flex items-center justify-between max-w-[1024px] mx-auto">
      
      <div className="flex items-center gap-4 flex-1">
        <h1 className="text-white text-xl md:text-2xl font-semibold whitespace-nowrap">
          <span className="text-primary">#</span>{title}
        </h1>

        <div className="flex-1 h-[1px] bg-primary"></div>
      </div>

      <button onClick={handleViewAll} className="text-white ml-6 hover:text-primary transition whitespace-nowrap">
        View all →
      </button>

    </div>
  );
}