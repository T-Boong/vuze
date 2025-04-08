import axios from "axios";
import { LoginRequest } from "@/types/auth/login";

export const login = async ({ email, password, autoLogin }: LoginRequest) => {
  const response = await axios.post("/api/auth/login", {
    email,
    password,
    autoLogin,
  });
  return response.data;
};
