"use client";
import { useState } from "react";
import InputFiled from "../ui/InputFiled";
import { ConsentCheckbox } from "../ui/ConsentCheckbox";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useLogin from "@/queries/auth/useLogin";
import SocialLoginField from "../ui/SocialLoginField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const router = useRouter();
  const { mutate } = useLogin();
  const handleLogin = async () => {
    mutate({ email, password, autoLogin });

    // TODO: Supabase 로그인 요청 + Redis 저장
  };

  const goToSignUp = () => {
    router.push("/auth/signup");
  };
  return (
    <div>
      <div className="mb-4">
        <InputFiled
          label="이메일"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </div>

      {/* 비밀번호 */}
      <div className="mb-4">
        <InputFiled
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />
      </div>
      {/* 자동 로그인 */}
      <div className="flex items-center mb-6">
        <ConsentCheckbox
          label="자동 로그인"
          checked={autoLogin}
          onChange={() => setAutoLogin(!autoLogin)}
        />
      </div>
      {/* 일반 로그인 버튼 */}
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
      >
        로그인
      </button>

      {/* 구분선 */}
      <div className="my-6 text-center text-sm text-gray-400 relative">
        <span className="bg-zinc-900 px-2 relative z-10">또는</span>
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-700 z-0"></div>
      </div>
      {/* 소셜 로그인 버튼 */}
      <SocialLoginField />

      {/* 회원가입 안내 */}
      <p className="text-sm mt-6 text-center text-gray-400">
        아직 계정이 없으신가요?{" "}
        <button onClick={goToSignUp} className="text-blue-400 hover:underline">
          <Link href="/signup">회원가입</Link>
        </button>
      </p>
    </div>
  );
};

export default Login;
