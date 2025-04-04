import React, { useRef } from "react";
import dynamic from "next/dynamic";
import MoreCard from "../card/MoreCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ItemsWrapperProps {
  platform: "chzzk" | "youtube" | "soop";
  children: React.ReactNode;
}

const ItemsWrapper = ({ platform, children }: ItemsWrapperProps) => {
  const containerRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = containerRef.current.offsetWidth * 0.4;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-screen overflow-hidden px-4">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-[90px] z-10 -translate-y-1/2 h-full px-2 py-1 bg-gradient-to-r from-black/90 to-transparent transition-colors"
      >
        <ChevronLeft className="w-20 h-full text-[#aaa] hover:opacity-100 cursor-pointer transition-opacity opacity-0" />
      </button>
      <ul
        className="flex gap-4 overflow-hidden scroll-smooth px-4"
        ref={containerRef}
      >
        {children}
        <MoreCard platform={platform} />
      </ul>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-[90px] z-10 -translate-y-1/2 h-full px-2 py-1 bg-gradient-to-l from-black/90 to-transparent transition-colors"
      >
        <ChevronRight className="w-20 h-full text-[#aaa] hover:opacity-100 cursor-pointer transition-opacity opacity-0" />
      </button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ItemsWrapper), { ssr: false });
