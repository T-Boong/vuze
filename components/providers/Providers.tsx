"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";
import useHealthChecker from "@/queries/auth/useHealthChecker";
import getUser from "@/networks/auth/user";
import { useUserStore } from "@/stores/auth/authAtom";
const queryClient = new QueryClient();

function InnerProvider({ children }: { children: ReactNode }) {
  const { access_token } = useHealthChecker();
  const { setUser } = useUserStore();
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(access_token || ""),
    enabled: !!access_token,
  });
  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData, setUser]);
  return <>{children}</>;
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <InnerProvider>{children}</InnerProvider>
    </QueryClientProvider>
  );
}
