"use client";

import Image from "next/image";
import SearchBar from "../search/SearchBar";

const Header = () => {
  return (
    <div className="w-full h-[90px] flex justify-between items-center px-[30px] box-border">
      <div className="h-[40px] flex items-center gap-2">
        <Image
          className="rounded-full"
          src="/vuze.png"
          alt="logo"
          width={100}
          height={45}
        />
      </div>
      <SearchBar />
      <div className="flex items-center gap-2">
        <button className="w-[45px] h-[45px] rounded-full border-2 cursor-pointer">
          <Image
            className="rounded-full"
            src="/profile.png"
            alt="profile"
            width={45}
            height={45}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
