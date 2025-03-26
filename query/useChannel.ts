import { useQuery } from "@tanstack/react-query";
import getChannels from "@/network/channel/channel";

const useChannel = (channelIds: string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["channels"],
    queryFn: () => getChannels(channelIds),
  });

  return { data, isLoading, error };
};

export default useChannel;
