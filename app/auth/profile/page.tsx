import Profile from "@/components/auth/profile/Profile";

export default function ProfileSetup() {
  return (
    <div className="w-full h-[calc(100vh-60px)] flex justify-center items-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl w-full max-w-sm text-white text-center space-y-6">
        <h2 className="text-xl font-bold">프로필 사진 등록</h2>

        <Profile />
      </div>
    </div>
  );
}
