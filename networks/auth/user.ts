import axios from "axios";

const getUser = async (token: string) => {
  const response = await axios.get("/api/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default getUser;
