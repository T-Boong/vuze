// 또는 content만 따로 타입으로 만들고 싶다면:
type ChzzkTokenContent = {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  scope: string;
  tokenType: string;
};

type ChzzkAuthResponse = {
  code: number;
  content: ChzzkTokenContent;
  message: string | null;
};

export type { ChzzkAuthResponse, ChzzkTokenContent };
