"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputFiled from "../ui/InputFiled";
import { ConsentCheckbox } from "../ui/ConsentCheckbox";

import { useSignUpStore } from "@/stores/auth/signup";
import SocialLoginField from "../ui/SocialLoginField";

export const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [isOver14, setIsOver14] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const { setStep1 } = useSignUpStore();

  const isValid =
    email && password && nickname && agreeTerms && agreePrivacy && isOver14;

  const handleSignUp = async () => {
    if (!isValid) return;

    setStep1({ email, password, nickname, agreeMarketing });
    router.push("/auth/profile"); // 프로필 설정 페이지로 이동해도 OK
  };

  return (
    <div className="space-y-4">
      <InputFiled
        label="이메일"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일을 입력해주세요"
      />

      <InputFiled
        label="닉네임"
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임을 입력해주세요"
      />

      <InputFiled
        label="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력해주세요"
      />

      <div className="space-y-2 text-sm text-gray-300 mb-6">
        <ConsentCheckbox
          label="[필수] 이용약관에 동의합니다"
          checked={agreeTerms}
          onChange={() => setAgreeTerms(!agreeTerms)}
        />
        <ConsentCheckbox
          label="[필수] 개인정보 수집 및 이용에 동의합니다"
          checked={agreePrivacy}
          onChange={() => setAgreePrivacy(!agreePrivacy)}
        />
        <ConsentCheckbox
          label="[필수] 만 14세 이상입니다"
          checked={isOver14}
          onChange={() => setIsOver14(!isOver14)}
        />
        <ConsentCheckbox
          label="[선택] 마케팅 정보 수신에 동의합니다"
          checked={agreeMarketing}
          onChange={() => setAgreeMarketing(!agreeMarketing)}
        />
      </div>

      <button
        onClick={handleSignUp}
        disabled={!isValid}
        className={`w-full text-white py-2 rounded-lg font-semibold ${
          isValid
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-600 cursor-not-allowed"
        }`}
      >
        이메일로 회원가입
      </button>

      {/* 구분선 */}
      <div className="my-4 text-center text-sm text-gray-400 relative">
        <span className="bg-zinc-900 px-2 relative z-10">또는</span>
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-700 z-0"></div>
      </div>

      {/* 소셜 */}
      <SocialLoginField />
    </div>
  );
};
