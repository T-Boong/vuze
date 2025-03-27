import { ChzzkAuthResponse } from "@/types/chzzk/auth";
import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { code, state } = await req.json();
  try {
    const response = await axios.post<ChzzkAuthResponse>(
      process.env.NEXT_PUBLIC_CHZZK_API_URL + "/auth/v1/token",
      {
        grantType: "authorization_code",
        clientId: process.env.NEXT_PUBLIC_CHZZK_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CHZZK_CLIENT_SECRET,
        code: code,
        state: state,
      }
    );

    const data = response.data;
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
};
