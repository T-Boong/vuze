"use client";
import { useUser } from "@/query/useUsert";
import Image from "next/image";

const Header = () => {
  const { data, isLoading, error } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const nickname = data?.content.nickname;
  return (
    <div className="w-full h-[60px] flex justify-between items-center px-[20px] box-border">
      <div className="h-[40px] flex items-center gap-2">
        <Image
          src="/menu.svg"
          alt="menu"
          width={40}
          height={40}
          className="text-white" // style 대신 className으로 색상 지정
        />
        <Image
          src="/chzzklogo_kor(White).png"
          alt="logo"
          width={70}
          height={30}
        />
      </div>
      <div className="h-[40px] flex items-center gap-2">
        <span className="text-[12px]">{nickname}</span>

        <button className="w-[40px] h-[40px] rounded-full border-2 cursor-pointer">
          <Image src="/profile.png" alt="profile" width={40} height={40} />
        </button>
      </div>
    </div>
  );
};

export default Header;
