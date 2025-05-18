import React, { useRef } from "react";
import dynamic from "next/dynamic";

interface ItemsWrapperProps {
  platform: "chzzk" | "youtube" | "soop";
  children: React.ReactNode;
}

const ItemsWrapper = ({ platform, children }: ItemsWrapperProps) => {
  const containerRef = useRef<HTMLUListElement>(null);

  return (
    <div className="relative w-screen overflow-hidden px-4">
      <ul
        ref={containerRef}
        className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {children}
      </ul>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ItemsWrapper), { ssr: false });
