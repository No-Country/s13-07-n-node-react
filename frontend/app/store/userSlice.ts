// userSlice.js

type User = {
    user: string
}

export const createUserSlice = (set:any, get:any) => ({
  user: "",
  setUser: (user: string) => set({ user }),
});