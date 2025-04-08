import { create } from "zustand";

interface SignUpState {
  email: string;
  password: string;
  nickname: string;
  agreeMarketing: boolean;
  setStep1: (data: Partial<SignUpState>) => void;
  reset: () => void;
}

export const useSignUpStore = create<SignUpState>((set) => ({
  email: "",
  password: "",
  nickname: "",
  agreeMarketing: false,
  setStep1: (data) => set(data),
  reset: () =>
    set({
      email: "",
      password: "",
      nickname: "",
      agreeMarketing: false,
    }),
}));
