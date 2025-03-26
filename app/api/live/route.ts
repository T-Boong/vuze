import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ChzzLiveResponse } from "@/types/live";
import { cookies } from "next/headers";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const size = searchParams.get("size");
  const next = searchParams.get("next");
  const cookieStore = await cookies();
  const nid_aut = cookieStore.get("NID_AUT")?.value;
  const nid_ses = cookieStore.get("NID_SES")?.value;
  console.log(nid_aut, nid_ses);
  try {
    const response = await axios.get<ChzzLiveResponse>(
      process.env.NEXT_PUBLIC_CHZZK_API_URL + "/open/v1/lives",
      {
        params: {
          size: size,
          next: next,
        },
        headers: {
          "Content-Type": "application/json",
          "Client-Id": process.env.NEXT_PUBLIC_CHZZK_CLIENT_ID,
          "Client-Secret": process.env.NEXT_PUBLIC_CHZZK_CLIENT_SECRET,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
