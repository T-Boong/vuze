import { UserType } from "@/types/auth/login";
import { create } from "zustand";

interface UserStore {
  isLoggedIn: boolean;
  user: UserType | null;
  token: string | null;
  setUser: (user: UserType) => void;
  setToken: (token: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: false,
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));

export { useUserStore };
