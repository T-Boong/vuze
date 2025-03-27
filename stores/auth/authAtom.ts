import { atom } from "jotai";

const authAtom = atom<{
  token: string | null;
}>({ token: null });

export { authAtom };
