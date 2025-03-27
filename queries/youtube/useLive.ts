import QUERY_KEYS from "@/constants/queryKeys";
import { getLiveStreams } from "@/networks/youtube/live/live";
import { useQuery } from "@tanstack/react-query";

const useLive = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.YOUTUBE_LIVE_USERS],
    queryFn: () => getLiveStreams("게임"),
  });
  return { data, isLoading, error };
};
export { useLive };
