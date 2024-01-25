// store.js
import { create } from 'zustand';

export const useStore = create((set) => ({
  selected: 'all',
  setSelected: (status: string) => set({ selected: status }),
}));
