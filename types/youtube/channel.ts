export interface ChannelDetail {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
  };
  statistics: {
    subscriberCount: string;
  };
}

export interface YoutubeChannelsResponse {
  items: ChannelDetail[];
}
