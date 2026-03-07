import { create } from "zustand";
import { combine } from "zustand/middleware";
import { categories } from "../mockData/mockData";
import type { categoryType } from "../helpers/entityTypes";

const useCategoriesStore = create(
  combine(
    { categories: [] as categoryType[] },

    (set) => ({
      // Function to initialize the store with data
      initializeCategories: async () => {
        if (useCategoriesStore.getState().categories.length < 1) {
          // get data from mockData
          set({ categories: categories });
          return categories;
        } else {
          // return state data
          return useCategoriesStore.getState().categories;
        }
      },

      //Function to get category by Id
      getCategoryById: (id: string) => {
        return useCategoriesStore
          .getState()
          .categories.find((category: categoryType) => category.id === id);
      },
    }),
  ),
);

export default useCategoriesStore;
