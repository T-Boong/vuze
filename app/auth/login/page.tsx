import Login from "@/components/auth/login/Login";

export default function LoginPage() {
  return (
    <div className="w-screen h-[calc(100vh-60px)] bg-black flex justify-center items-center">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl w-full max-w-sm text-white">
        <h2 className="text-xl font-bold mb-6 text-center">로그인</h2>

        <Login />
      </div>
    </div>
  );
}
