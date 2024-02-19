// userSlice.js

// ejemplo de como crear una rebanada de estado; una funcion que retorna un objeto con propiedades y funciones
// que actualizan esas propiedades


export const createUserSlice = (set:any, get:any) => {
  return{
    user: "",
    setUser: (user:string) => set({ user:user }),
  // ... más acciones relacionadas con el usuario
  }
  
};