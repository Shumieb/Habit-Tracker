import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { frequencyType } from "../helpers/entityTypes";
import { mockFrequency } from "../mockData/mockData";

const useFrequenciesStore = create(
  combine(
    { frequencies: [] as frequencyType[] },

    (set) => ({
      // Function to initialize the store with data
      initializeFrequencies: async () => {
        if (useFrequenciesStore.getState().frequencies.length < 1) {
          // get data from mockData
          set({ frequencies: mockFrequency });
          return mockFrequency;
        } else {
          // return state data
          return useFrequenciesStore.getState().frequencies;
        }
      },

      //Function to get frequency by Id
      getFrequencyById: (id: string) => {
        return useFrequenciesStore
          .getState()
          .frequencies.find((freq: frequencyType) => freq.id === id);
      },
    }),
  ),
);

export default useFrequenciesStore;
