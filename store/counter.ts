import { create } from 'zustand';

export interface COUNTER_STATE {
  count: number;
  increment: () => void;
  decrement: () => void;
}
const useCounter = create<COUNTER_STATE>((set) => ({
  count: 0,
  increment: () => set((state) => ({ ...state, count: state.count + 1 })),
  decrement: () => set((state) => ({ ...state, count: state.count - 1 })),
}));

export default useCounter;
