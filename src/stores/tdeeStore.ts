import { create } from "zustand";

type TdeeStore = {
  bmr: number;
  updateBmr: (bmr: number) => void;
};

export const useTdeeStore = create<TdeeStore>((set) => ({
  bmr: 0,
  updateBmr: (bmr: number) => set({ bmr }),
}));
