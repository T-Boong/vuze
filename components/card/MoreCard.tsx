"use client";

import { Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";

interface MoreCardProps {
  platform: "chzzk" | "youtube" | "soop";
}

const MoreCard = ({ platform }: MoreCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${platform}`);
  };

  return (
    <li
      onClick={handleClick}
      className="flex flex-col items-center flex-shrink-0 justify-center gap-2 w-[300px] h-[180px] bg-[#222] rounded-lg cursor-pointer"
    >
      <Ellipsis className="w-[50%] h-[50%] text-[#555]" />
    </li>
  );
};

export default MoreCard;
