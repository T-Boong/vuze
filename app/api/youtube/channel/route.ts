import { YoutubeChannelsResponse } from "@/types/youtube/channel";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const part = searchParams.get("part");
  const id = searchParams.get("id");

  try {
    const response = await axios.get<YoutubeChannelsResponse>(
      process.env.NEXT_PUBLIC_YOUTUBE_API_URL + "/channels",
      {
        params: {
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
          id,
          part,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
