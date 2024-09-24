import { create } from "zustand"

const useListingStore = create((set) => ({
    list: null,
    bounds: null,
    setList: (properties) => {
      set({list: properties})
    },
    setBounds: (bounds) => {
      set({bounds: bounds})
    }
  }))

export default useListingStore;