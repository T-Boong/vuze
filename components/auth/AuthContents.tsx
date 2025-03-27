"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePutAccessToken } from "@/queries/chzzk/useAuth";
import { useRouter } from "next/navigation";

export const AuthContents = () => {
  const searchParams = useSearchParams();
  const { mutate } = usePutAccessToken();

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const router = useRouter();

  useEffect(() => {
    if (!code) {
      const state = Math.random().toString(36).substring(7);
      // 인증 페이지로 리다이렉트
      window.location.href = `https://chzzk.naver.com/account-interlock?${new URLSearchParams(
        {
          clientId: process.env.NEXT_PUBLIC_CHZZK_CLIENT_ID || "",
          redirectUri: process.env.NEXT_PUBLIC_CHZZK_REDIRECT_URI || "",
          state: state,
        }
      )}`;
    }
    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);
    console.log(cookies);
  }, [code]);
  const handleLogin = () => {
    if (code && state) {
      mutate({ code, state });
      router.push("/main");
    }
  };

  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full flex justify-center items-center  text-white">
        {code && <button onClick={handleLogin}>치지직 로그인</button>}
      </div>
    </div>
  );
};
