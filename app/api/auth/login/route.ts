// app/api/auth/login/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password, autoLogin } = await req.json();

  const {
    data: { session, user },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !user) {
    return NextResponse.json(
      { error: error?.message || "로그인 실패" },
      { status: 401 }
    );
  }

  const { access_token, refresh_token } = session;

  // ✅ 환경 분기: 개발이면 httpOnly 꺼두기
  const isProd = process.env.NODE_ENV === "production";
  const cookieStore = await cookies();
  cookieStore.set("access-token", access_token, {
    httpOnly: isProd, // 개발 중엔 JS에서도 접근 가능
    secure: isProd, // 프로덕션은 https만
    sameSite: isProd ? "strict" : "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 하루
  });
  // ✅ refresh_token 쿠키에 저장
  console.log(autoLogin);
  cookieStore.delete("refresh-token");
  if (autoLogin) {
    cookieStore.set("refresh-token", refresh_token, {
      httpOnly: isProd, // 개발 중엔 JS에서도 접근 가능
      secure: isProd, // 프로덕션은 https만
      sameSite: isProd ? "strict" : "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30일
    });
  }

  return NextResponse.json({
    access_token,
  });
}
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: 유저 로그인
 *     description: 이메일과 비밀번호로 로그인합니다.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: securepassword
 *     responses:
 *       200:
 *         description: 로그인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   description: Supabase 유저 정보
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "ae3e7a8d-d7c3-4ae5-b7c1-04052fd0bfb1"
 *                     created_at:
 *                       type: string
 *                       example: "2024-01-01T00:00:00.000Z"
 *                     updated_at:
 *                       type: string
 *                       example: "2024-01-01T00:00:00.000Z"
 *                     email:
 *                       type: string
 *                       example: user@example.com
 *                     username:
 *                       type: string
 *                       example: "치지직"
 *                     profile_img:
 *                       type: string
 *                       example: "https://example.com/profile.jpg"
 *                     provider:
 *                       type: string
 *                       example: "치지직"
 *                     is_active:
 *                       type: boolean
 *                       example: true
 *                     agree_marketing:
 *                       type: boolean
 *                       example: true
 *                 access_token:
 *                   type: string
 *                   description: 액세스 토큰
 *                   example: eyJhbGciOi...
 *       401:
 *         description: 로그인 실패 (이메일 또는 비밀번호 불일치)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "로그인 실패"
 */
