import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const channelIds = searchParams.get("channelIds")?.split(",");
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_CHZZK_API_URL + "/open/v1/channels",
      {
        params: {
          channelIds: channelIds,
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
