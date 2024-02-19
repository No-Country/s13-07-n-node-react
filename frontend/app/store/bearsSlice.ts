export const createBearsSlice =(set:any, get:any)=>{ 
    return {
        bears: 0,
        addABear: () => set({ bears: get().bears + 1 })
    }
}