// app/api/auth/health-check/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access-token")?.value;
  const refreshToken = cookieStore.get("refresh-token")?.value;

  if (!refreshToken) {
    return NextResponse.json(
      { message: "자동 로그인 설정 안 됨" },
      { status: 401 }
    );
  }
  const { data } = await supabase.auth.getUser(accessToken);
  if (data) {
    return NextResponse.json(
      {
        access_token: accessToken,
      },
      { status: 200 }
    );
  }
  const {
    data: { session },
    error,
  } = await supabase.auth.refreshSession({ refresh_token: refreshToken });

  if (!session) {
    return NextResponse.json({ message: error }, { status: 401 });
  }

  return NextResponse.json(
    {
      access_token: session.access_token,
    },
    { status: 200 }
  );
}
