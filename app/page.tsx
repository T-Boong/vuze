import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-60px)]  flex justify-center items-center ">
      <button className="p-2 rounded-md text-white">
        <Link href="/auth">시작하기</Link>
      </button>
    </div>
  );
}
