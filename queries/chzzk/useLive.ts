import QUERY_KEYS from "@/constants/queryKeys";
import { getLive } from "@/networks/chzzk/live/live";
import { useQuery } from "@tanstack/react-query";

const useLive = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.CHZZK_LIVE_USERS],
    queryFn: () => getLive(10, ""),
  });
  return { data, isLoading, error };
};
export { useLive };
