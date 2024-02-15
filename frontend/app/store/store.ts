import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export const useBearStore = create(
  persist(
    (set:any, get:any) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears  + 1 }),
      counter:["hola", "espero", "verte"],
    }),
    {
      name: 'spotter-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

