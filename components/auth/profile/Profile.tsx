"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useSignUp } from "@/queries/auth/useSignUp";
import { useSignUpStore } from "@/stores/auth/signup";
export default function Profile() {
  const [previewUrl, setPreviewUrl] = useState<string | null>("/profile.png");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { email, nickname, password, agreeMarketing } = useSignUpStore();
  const { mutate: signUp } = useSignUp();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    signUp({
      email,
      nickname,
      password,
      agreeMarketing,
      profileImage: selectedFile,
    });
    // TODO: Supabase Storage 업로드
    // const { data, error } = await supabase.storage.from("profile-images").upload(...)
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => fileInputRef.current?.click()}
        className="relative cursor-pointer w-32 h-32 mx-auto rounded-full overflow-hidden bg-zinc-800 flex justify-center items-center hover:opacity-80 transition"
      >
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt="미리보기"
            fill
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400">이미지 선택</span>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
        className="hidden"
      />

      <button
        onClick={handleUpload}
        className={`w-full py-2 rounded-lg font-semibold ${"bg-blue-600 hover:bg-blue-700"}`}
      >
        완료
      </button>
    </div>
  );
}
