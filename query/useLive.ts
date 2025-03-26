import { getLive } from "@/network/live/live";
import { useQuery } from "@tanstack/react-query";

const useLive = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["live"],
    queryFn: () => getLive(10, ""),
  });
  return { data, isLoading, error };
};
export { useLive };
