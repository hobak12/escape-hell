import { create } from "zustand";
import { devtools } from "zustand/middleware";

type levelType = {
  level: number;
  setLevel: (level: number) => void;
};

const useLevelStore = create(
  devtools<levelType>((set) => ({
    level: 0,

    setLevel: (level: number) => set({ level }),
  }))
);

export default useLevelStore;
