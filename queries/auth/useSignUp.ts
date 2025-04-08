import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/networks/auth/signUp";
import { SignUpRequest } from "@/types/auth/signUp";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (signUpRequest: SignUpRequest) => signUp(signUpRequest),
    onSuccess: () => {
      router.push("/auth/login");
    },
    onError: (error) => {
      console.log("회원가입 실패", error.message);
    },
  });
};
