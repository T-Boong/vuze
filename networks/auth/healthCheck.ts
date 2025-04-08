import axios from "axios";

export const healthCheck = async () => {
  try {
    const res = await axios.get("/api/auth/health-check", {
      withCredentials: true,
    });

    const { access_token } = res.data;

    return { access_token };
  } catch (err) {
    // 401, 네트워크 오류 등 모두 여기로 옴
    console.warn(err);
    return null;
  }
};
