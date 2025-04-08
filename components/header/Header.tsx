"use client";

import Image from "next/image";
import SearchBar from "../search/SearchBar";
import { useUserStore } from "@/stores/auth/authAtom";
import { useEffect } from "react";
import { useState } from "react";

import { useRouter } from "next/navigation";
const Header = () => {
  const { user, isLoggedIn } = useUserStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const loginHandler = () => {
    router.push("/auth/login");
  };
  if (!mounted) return null; // hydration mismatch 방지
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
        {!isLoggedIn && (
          <button
            className="w-[45px] h-[45px] text-white"
            onClick={loginHandler}
          >
            로그인
          </button>
        )}

        {isLoggedIn && (
          <button className="w-[45px] h-[45px] rounded-full border-2 cursor-pointer shrink-0 overflow-hidden relative">
            {user?.profile_img ? (
              <Image
                fill
                className="rounded-full"
                src={user.profile_img}
                alt="profile"
              />
            ) : (
              <Image
                fill
                className="rounded-full"
                src="/profile.png"
                alt="default"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
