import QUERY_KEYS from "@/constants/queryKeys";
import { getChannelDetails } from "@/networks/youtube/channel/channel";
import { useQuery } from "@tanstack/react-query";

const useChannel = (channelIds: string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.YOUTUBE_LIVE_CHANNELS, channelIds],
    queryFn: () => getChannelDetails(channelIds),
    enabled: channelIds.length > 0,
  });
  return { data, isLoading, error };
};
export { useChannel };
