import { create } from 'zustand';

export interface BearState {
  bears: number;
  history: { action: string; time: string }[];
  addHistory: (data: { action: string; time: string }) => void;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  history: [],
  addHistory: (data) => set((state) => ({ ...state, history: [...state.history, data] })),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
