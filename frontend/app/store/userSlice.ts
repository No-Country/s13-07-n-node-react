// userSlice.js


export const createUserSlice = (set:any, get:any) => {
  return{
    user: {},
    setUser: (user:Object) => set({ user:{...user}}),
  // ... más acciones relacionadas con el usuario
  }
  
};