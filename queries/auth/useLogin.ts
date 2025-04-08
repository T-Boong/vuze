import { useMutation, useQuery } from "@tanstack/react-query";
import { login } from "@/networks/auth/login";
import { useRouter } from "next/navigation";
import { LoginRequest, LoginResponse } from "@/types/auth/login";
import { useUserStore } from "@/stores/auth/authAtom";
import getUser from "@/networks/auth/user";
import { useEffect } from "react";

const useLogin = () => {
  const router = useRouter();
  const { setToken, user, token, setUser, setIsLoggedIn } = useUserStore();
  const { data: userData, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(token || ""),
    enabled: !!user,
  });

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: ({ email, password, autoLogin }: LoginRequest) =>
      login({ email, password, autoLogin }),
    onSuccess: (data: LoginResponse) => {
      setToken(data.access_token);
      refetch();
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  useEffect(() => {
    if (userData) {
      setUser(userData);
      setIsLoggedIn(true);
      router.push("/");
    }
  }, [userData]);
  return { mutate, isPending, isSuccess, isError };
};

export default useLogin;
