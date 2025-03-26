import axios from "axios";

const getChannels = async (channelIds: string[]) => {
  const response = await axios.get("/api/channel", {
    params: {
      channelIds: channelIds.join(","),
    },
  });
  return response.data;
};

export default getChannels;
