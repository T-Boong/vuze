import { healthCheck } from "@/networks/auth/healthCheck";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "@/stores/auth/authAtom";

const useHealthChecker = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["health-checker"],
    queryFn: healthCheck,
    retry: false, // 401이면 다시 요청 안 하게
  });
  const { setToken } = useUserStore();
  useEffect(() => {
    if (isSuccess) {
      setToken(data?.access_token);
    }
  }, [data, isSuccess, setToken]);
  return { isSuccess, access_token: data?.access_token };
};

export default useHealthChecker;
