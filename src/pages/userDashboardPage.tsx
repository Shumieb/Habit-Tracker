import { useEffect, useState } from "react";
import type { habitOriginType } from "../helpers/entityTypes";
import HabitDashCard from "../components/habitDashCard";
import { Link } from "react-router";
import useCategoriesStore from "../stores/categoriesStore";
import useFrequenciesStore from "../stores/frequenciesStore";
import useGoalsStore from "../stores/goalsStore";

function UserDashboardPage() {
  // variables
  const [userName, setUserName] = useState("User Name");
  const [habits, setHabits] = useState<habitOriginType[]>();

  // get today's date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // store
  const categories = useCategoriesStore.getState().initializeCategories();
  const frequencies = useFrequenciesStore.getState().initializeFrequencies();
  const goals = useGoalsStore.getState().initializeGoals();

  // run when page loads
  useEffect(() => {
    // set goals
    let goalData = useGoalsStore.getState().goals;
    goalData && setHabits(goalData);
  }, [goals]);

  return (
    <section className="w-[90%] mx-auto py-2 px-2">
      <h1 className="text-xl px-2 py-1 text-center text-purple-950">
        Hello, {userName}!
      </h1>

      <h2 className="text-xl px-2 py-1 text-center text-purple-950">
        Today is {formattedDate}
      </h2>

      <div className="flex justify-between align-center">
        <h2 className="text-2xl px-2 py-2 underline text-purple-950">
          My Goals
        </h2>
        <Link
          to="/add-new-goal"
          className="border-2 text-lg rounded-md py-2 px-4 cursor-pointer shadow-md hover:shadow-lg border-purple-950 bg-purple-950 text-white"
        >
          Add New Goal
        </Link>
      </div>

      <div className="mt-2 py-2 grid grid-cols-2 gap-5">
        {habits &&
          habits.map((item) => {
            return <HabitDashCard habit={item} key={item.id} />;
          })}
      </div>
    </section>
  );
}

export default UserDashboardPage;
