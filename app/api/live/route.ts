import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ChzzLiveResponse } from "@/types/chzzk/live";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const size = searchParams.get("size");
  const next = searchParams.get("next");

  try {
    const response = await axios.get<ChzzLiveResponse>(
      process.env.CHZZK_API_URL + "/open/v1/lives",
      {
        params: {
          size: size,
          next: next,
        },
        headers: {
          "Content-Type": "application/json",
          "Client-Id": process.env.CHZZK_CLIENT_ID,
          "Client-Secret": process.env.CHZZK_CLIENT_SECRET,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
