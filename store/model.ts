import React from 'react';
import { create } from 'zustand';
export type MODEL = {
  isOpen: boolean;
  toggelOpen: () => void;
  setChildren: (data: React.ReactNode) => void;
  content?: React.ReactNode;
};
const useModel = create<MODEL>((set) => ({
  isOpen: false,
  toggelOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  content: null,
  setChildren: (data) => set(() => ({ content: data })),
}));

export default useModel;
