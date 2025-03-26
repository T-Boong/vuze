import axios from "axios";
import { ChzzLiveResponse } from "@/types/live";
const getLive = async (size: number, next: string) => {
  const response = await axios.get<ChzzLiveResponse>("api/live", {
    params: {
      size: size,
      next: next,
    },
  });
  return response.data;
};
export { getLive };
