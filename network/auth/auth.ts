import axios from "axios";

const putAccessToken = async (code: string, state: string) => {
  const response = await axios.post("/api/auth", { code, state });
  return response.data;
};
export { putAccessToken };
