import { create } from "zustand"

const useMarkerStore = create((set) => ({
    markers: null,
    setMarkers: (markers) => {
      set({markers: markers})
    }
  }))

export default useMarkerStore;