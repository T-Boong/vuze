export type ChzzLiveContent = {
  adult: boolean;
  categoryType: string;
  channelId: string;
  channelImageUrl: string;
  channelName: string;
  concurrentUserCount: number;
  liveCategory: string;
  liveCategoryValue: string;
  liveId: number;
  liveThumbnailImageUrl: string;
  liveTitle: string;
  openDate: string;
  tags: string[];
};
export type ChzzLiveResponse = {
  code: number;
  content: {
    data: ChzzLiveContent[];
    page: {
      next: string;
    };
  };
  message: string | null;
};
