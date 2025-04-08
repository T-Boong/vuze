// /networks/auth/signUp.ts
import { SignUpRequest } from "@/types/auth/signUp";
import axios from "axios";

export const signUp = async (request: SignUpRequest) => {
  const formData = new FormData();
  formData.append("email", request.email);
  formData.append("password", request.password);
  formData.append("nickname", request.nickname);
  formData.append("agreeMarketing", String(request.agreeMarketing));

  if (request.profileImage) {
    formData.append("profileImage", request.profileImage);
  }

  const res = await axios.post("/api/auth/signup", formData);

  return res.data;
};
