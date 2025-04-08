import { createSupabaseClientWithToken } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const authHeader = req.headers.get("Authorization");

  const token = authHeader?.split(" ")[1]; // "Bearer ..." 형식이라서 잘라줌
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const supabase = createSupabaseClientWithToken(token);
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser(token);

  if (userError || !user) {
    return NextResponse.json(
      { error: userError?.message || "Unauthorized" },
      { status: 401 }
    );
  }

  const { data: userData, error: userDataError } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (userDataError) {
    return NextResponse.json({ error: userDataError.message }, { status: 500 });
  }

  if (!userData) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(userData);
}
