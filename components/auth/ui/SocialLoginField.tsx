import Image from "next/image";

const SocialLoginField = () => {
  const handleSocialLogin = (provider: "kakao" | "naver" | "google") => {
    console.log(`소셜 로그인 시도: ${provider}`);
    // TODO: 소셜 로그인 리다이렉트 or API 연동
  };
  return (
    <div>
      {/* 소셜 로그인 버튼 */}
      <div className="space-x-4 flex justify-center">
        <button
          onClick={() => handleSocialLogin("kakao")}
          className="w-11 h-11 rounded-full bg-[#FEE500] hover:brightness-95 flex items-center justify-center"
        >
          <Image
            src="/social/kakao.svg"
            alt="kakao"
            width={24}
            height={24}
            className="rounded-full"
          />
        </button>
        <button
          onClick={() => handleSocialLogin("naver")}
          className="w-11 h-11 shrink-0 rounded-full bg-[#03C75A] hover:bg-[#02b152] flex items-center justify-center"
        >
          <Image src="/social/naver.svg" alt="naver" width={20} height={20} />
        </button>
        <button
          onClick={() => handleSocialLogin("google")}
          className="w-11 h-11 rounded-full bg-[#fff] hover:bg-[#f0f0f0] flex items-center justify-center"
        >
          <Image src="/social/google.svg" alt="google" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default SocialLoginField;
