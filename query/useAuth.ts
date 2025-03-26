"use client";

import { useMutation } from "@tanstack/react-query";
import { putAccessToken } from "@/network/auth/auth";
import { authAtom } from "@/store/auth/authAtom";
import { useSetAtom } from "jotai";
import { ChzzkAuthResponse } from "@/types/auth";
const usePutAccessToken = () => {
  const setAtom = useSetAtom(authAtom);
  return useMutation<ChzzkAuthResponse, Error, { code: string; state: string }>(
    {
      mutationFn: ({ code, state }: { code: string; state: string }) =>
        putAccessToken(code, state),
      onSuccess: (data) => {
        setAtom({ token: data.content.accessToken });
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );
};

export { usePutAccessToken };
