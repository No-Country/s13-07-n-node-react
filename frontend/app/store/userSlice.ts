// userSlice.js


export const createUserSlice = (set:any, get:any) => {
  return{
    user: {},
    rolUser:"",
    setUser: (user:Object) => set({ user:{...user}}),
    setRolUser:(rolUser:string) => set({rolUser:rolUser}),
  // ... más acciones relacionadas con el usuario
  }
  
};