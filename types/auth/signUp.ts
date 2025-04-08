export type SignUpRequest = {
  email: string;
  password: string;
  nickname: string;
  agreeMarketing: boolean;
  profileImage: File | null; // ← 여기 File 타입으로!
};
