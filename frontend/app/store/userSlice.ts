// userSlice.js


export const createUserSlice = (set:any, get:any) => ({
  user: "",
  setUser: (user:string) => set({ user:user }),
  // ... más acciones relacionadas con el usuario
});