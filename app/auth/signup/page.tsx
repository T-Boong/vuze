import { SignUp } from "@/components/auth/signup/SignUp";

export default function SignUpPage() {
  return (
    <div className="w-screen h-[calc(100vh-60px)] bg-black flex justify-center items-center">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl w-full max-w-sm text-white">
        <h2 className="text-xl font-bold mb-6 text-center">회원가입</h2>
        <SignUp />
      </div>
    </div>
  );
}
