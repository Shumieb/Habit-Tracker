import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { habitOriginType, habitType } from "../helpers/entityTypes";
import { mockHabits, mockHabitsHistory } from "../mockData/mockData";

const useGoalsStore = create(
  combine(
    {
      goals: [] as habitOriginType[],
      goalsHistory: [] as habitType[],
    },

    (set) => ({
      // Function to initialize the store with goals data
      initializeGoals: async () => {
        if (useGoalsStore.getState().goals.length < 1) {
          // get data from mockData
          set({ goals: mockHabits });
          return mockHabits;
        } else {
          // return state data
          return useGoalsStore.getState().goals;
        }
      },

      // Function to initialize the store with goalsHistory data
      initializeGoalsHistory: async () => {
        if (useGoalsStore.getState().goalsHistory.length < 1) {
          // get data from mockData
          set({ goalsHistory: mockHabitsHistory });
          return mockHabitsHistory;
        } else {
          // return state data
          return useGoalsStore.getState().goalsHistory;
        }
      },

      // Function to get goals history for a specific day
      getGoalHistoryByDay: (
        date: number,
        day: number,
        month: number,
        year: number,
      ) => {
        let todayGoals = useGoalsStore
          .getState()
          .goalsHistory.filter(
            (goal) =>
              goal.date == date &&
              goal.day == day &&
              goal.month == month &&
              goal.year == year,
          );
        return todayGoals;
      },

      // Function to get goal by ID
      getGoalById: (id: string) => {
        return useGoalsStore
          .getState()
          .goals.find((goal: habitOriginType) => goal.id === id);
      },

      // Function to add to a new goal
      addNewGoal: (newGoal: habitOriginType) => {
        // add to state
        set((state) => ({
          goals: [...state.goals, newGoal],
        }));
      },

      //Function to edit an existing goal
      updateGoal: (id: string, updatedGoal: habitOriginType) => {
        // update state
        set((state) => ({
          goals: state.goals.map((goal: habitOriginType) =>
            goal.id == id ? updatedGoal : goal,
          ),
        }));
      },

      //Function to delete a goal
      deleteGoal: (id: string) => {
        set((state) => ({
          goals: state.goals.filter((goal: habitOriginType) => goal.id != id),
        }));
      },
      // end
    }),
  ),
);

export default useGoalsStore;
