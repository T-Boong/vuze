import axios from "axios";
import { ChzzUserResponse } from "@/types/user";
const getChzzUser = async (token: string) => {
  const response = await axios.get<ChzzUserResponse>("/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export { getChzzUser };
