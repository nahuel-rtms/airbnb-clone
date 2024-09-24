import { create } from 'zustand';

const useDatasetStore = create((set) => ({
  dataset: null,
  isLoading: false,
  error: null,
  fetchDataset: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/listings.json');
      if (!response.ok) {
        throw new Error('Failed to fetch dataset');
      }
      const data = await response.json();
      set({ dataset: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));


export default useDatasetStore;
