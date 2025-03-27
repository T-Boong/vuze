import { YoutubeSearchResponse } from "@/types/youtube/live";
import axios from "axios";

const getLiveStreams = async (query: string) => {
  const response = await axios.get<YoutubeSearchResponse>("/api/youtube/live", {
    params: {
      part: "snippet",
      q: query, // 예: '롤', '게임', '음악 방송' 등 키워드
      type: "video",
      eventType: "live", // 이게 핵심!
      maxResults: 10,
    },
  });
  return response.data;
};
export { getLiveStreams };
