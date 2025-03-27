import { YoutubeSearchResponse } from "@/types/youtube/live";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const part = searchParams.get("part");
  const query = searchParams.get("q");
  const type = searchParams.get("type");
  const eventType = searchParams.get("eventType");
  const maxResults = searchParams.get("maxResults");

  try {
    const response = await axios.get<YoutubeSearchResponse>(
      process.env.NEXT_PUBLIC_YOUTUBE_API_URL + "/search",
      {
        params: {
          part,
          q: query,
          type,
          eventType,
          maxResults,
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
