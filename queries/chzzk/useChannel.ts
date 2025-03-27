import { useQuery } from "@tanstack/react-query";
import getChannels from "@/networks/chzzk/channel/channel";
import QUERY_KEYS from "@/constants/queryKeys";

const useChannel = (channelIds: string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.CHZZK_CHANNELS],
    queryFn: () => getChannels(channelIds),
  });

  return { data, isLoading, error };
};

export default useChannel;
