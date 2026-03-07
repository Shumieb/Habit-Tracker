import { useEffect, useState } from "react";
import type { habitOriginType } from "../helpers/entityTypes";
import { mockHabits } from "../mockData/mockData";
import HabitDashCard from "../components/habitDashCard";
import { Link } from "react-router";

function UserDashboardPage() {
  // variables
  const [userName, setUserName] = useState("User Name");
  const [habits, setHabits] = useState<habitOriginType[]>(mockHabits);

  // get today's date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="w-[90%] mx-auto py-2 px-2">
      <h1 className="text-xl px-2 py-1 text-center">Hello, {userName}!</h1>

      <h2 className="text-xl px-2 py-1 text-center">
        Today is {formattedDate}
      </h2>

      <div className="flex justify-between align-center">
        <h2 className="text-2xl px-2 py-2 underline">My Goals</h2>
        <Link
          to="/add-new-goal"
          className="border-2 text-lg rounded-md py-2 px-4 cursor-pointer shadow-md border-purple-950 bg-purple-950 text-white"
        >
          Add New Goal
        </Link>
      </div>

      <div className="mt-2 py-2">
        {habits.map((item) => {
          return <HabitDashCard habit={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}

export default UserDashboardPage;
