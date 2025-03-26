"use client";
import { getChzzUser } from "@/network/user/user";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { authAtom } from "@/store/auth/authAtom";
import { ChzzUserResponse } from "@/types/user";

const useUser = () => {
  const auth = useAtomValue(authAtom);
  const { data, isLoading, error } = useQuery<ChzzUserResponse, Error>({
    queryKey: ["user"],
    queryFn: () => {
      if (!auth.token) throw new Error("No token available");
      return getChzzUser(auth.token);
    },
    enabled: !!auth.token,
  });

  return { data, isLoading, error };
};

export { useUser };
