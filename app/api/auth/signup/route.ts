// app/api/auth/signup/route.ts
import { supabase, supabaseAdmin } from "@/lib/supabase";
import { uploadProfileImage } from "@/utils/uploadProfileImage";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const nickname = formData.get("nickname") as string;
  const agreeMarketing = formData.get("agreeMarketing") as string;
  const profileImage = formData.get("profileImage") as File;

  // 1. Supabase auth 계정 생성

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("supabase 회원가입 실패:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  //2. 프로필 이미지 업로드 (재사용 가능한 유틸 함수)
  let profileImageUrl: string | null = null;
  if (profileImage && user?.id) {
    try {
      profileImageUrl = await uploadProfileImage(user.id, profileImage);
    } catch (uploadErr) {
      console.error("프로필 이미지 업로드 실패:", uploadErr);
    }
  }

  // 3. public.users 테이블에 nickname, 이미지 URL 저장
  const { error: insertError } = await supabaseAdmin.from("users").insert({
    id: user?.id,
    username: nickname,
    profile_img: profileImageUrl,
    agree_marketing: agreeMarketing === "true",
  });
  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
