export interface ChannelDetail {
  id: string;
  kind?: string;
  etag: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
    };
    defaultLanguage?: string;
    localized: {
      title: string;
      description: string;
    };
    country?: string;
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
}

export interface YoutubeChannelsResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ChannelDetail[];
}
