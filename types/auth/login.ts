export type LoginRequest = {
  email: string;
  password: string;
  autoLogin: boolean;
};
export type LoginResponse = {
  access_token: string;
};

export type UserType = {
  id: string;
  created_at: string;
  updated_at: string;
  username: string;
  profile_img: string;
  provider: string;
  is_active: boolean;
};
