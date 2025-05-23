import {
  ChannelDetail,
  YoutubeChannelsResponse,
} from "@/types/youtube/channel";
import axios from "axios";

const getChannelDetails = async (
  channelIds: string[]
): Promise<ChannelDetail[]> => {
  const response = await axios.get<YoutubeChannelsResponse>(
    "/api/youtube/channel",
    {
      params: {
        part: "snippet,statistics",
        id: channelIds.join(","),
      },
    }
  );

  return response.data.items;
};
export { getChannelDetails };
