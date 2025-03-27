"use client";
import { getChzzUser } from "@/networks/chzzk/user/user";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { authAtom } from "@/stores/auth/authAtom";
import { ChzzUserResponse } from "@/types/chzzk/user";
import QUERY_KEYS from "@/constants/queryKeys";

const useUser = () => {
  const auth = useAtomValue(authAtom);
  const { data, isLoading, error } = useQuery<ChzzUserResponse, Error>({
    queryKey: [QUERY_KEYS.CHZZK_USERS],
    queryFn: () => {
      if (!auth.token) throw new Error("No token available");
      return getChzzUser(auth.token);
    },
    enabled: !!auth.token,
  });

  return { data, isLoading, error };
};

export { useUser };
