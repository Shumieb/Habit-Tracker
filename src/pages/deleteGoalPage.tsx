import { useEffect, useState } from "react";
import type { habitOriginType } from "../helpers/entityTypes";
import { mockHabits } from "../mockData/mockData";
import { useNavigate, useParams } from "react-router";
import useCategoriesStore from "../stores/categoriesStore";
import useFrequenciesStore from "../stores/frequenciesStore";

function DeleteGoalPage() {
  // variables
  const [habit, setHabit] = useState<habitOriginType>();
  const [categoryName, setCategoryName] = useState<string>();
  const [frequencyName, setFrequencyName] = useState<string>();
  const [dayOfWeek, setDayofWeek] = useState<string>();

  const weekDays = [
    { id: 0, day: "Sunday" },
    { id: 1, day: "Monday" },
    { id: 2, day: "Tuesday" },
    { id: 3, day: "Wednesday" },
    { id: 4, day: "Thursday" },
    { id: 5, day: "Friday" },
    { id: 6, day: "Saturday" },
  ];

  const navigate = useNavigate();
  const param = useParams();

  // store
  const categories = useCategoriesStore.getState().initializeCategories();
  const frequencies = useFrequenciesStore.getState().initializeFrequencies();

  // runs when component mounts
  useEffect(() => {
    let foundHabit = mockHabits.find((item) => item.id == param.id?.toString());

    if (foundHabit) {
      setHabit(foundHabit);
    }
  }, []);

  // runs when habit changes
  useEffect(() => {
    // set category
    if (habit) {
      let cat = useCategoriesStore.getState().getCategoryById(habit.category);
      cat && setCategoryName(cat.name);
    }

    // set frequency
    if (habit) {
      let freq = useFrequenciesStore
        .getState()
        .getFrequencyById(habit.frequency);
      freq && setFrequencyName(freq.name);
    }

    // set week day
    weekDays.map((day) => {
      if (day.id == Number(habit?.day)) {
        setDayofWeek(day.day);
      }
    });
  }, [habit]);

  // run to delete habit
  const handleDelete = () => {
    console.log("delete", param.id);
  };

  // run to cancel delete
  const handleCancel = () => {
    // redirect to dashboard
    navigate("/user-dashboard/1");
  };

  return (
    <section className="w-[90%] mx-auto py-2 text-red-950 text-center flex flex-col justify-center align-center">
      <h1 className="text-xl px-2 py-2 font-bold mb-2">Delete Goal</h1>

      <p className="text-lg px-2 py-2 font-bold">
        Are you sure you want to Delete the following goal?
      </p>

      <p className="capitalize text-lg py-0.5 px-2">
        <b>Goal:</b> {habit?.name}
      </p>

      {/* category */}
      <p className="capitalize text-lg py-0.5 px-2">
        <b>Category:</b> {categoryName}
      </p>

      {/* frequency */}
      <p className="capitalize text-lg py-0.5 px-2">
        <b>Frequency:</b> {frequencyName}
      </p>

      {/* display day if weekly */}
      {habit?.frequency == "2" && (
        <p className="text-lg px-2 pt-0.5">
          <b>Every:</b> {dayOfWeek}
        </p>
      )}

      {/* display date if monthly */}
      {habit?.frequency == "3" && (
        <p className="text-lg px-2 pt-0.5">{habit.date}th of every month</p>
      )}

      <div className="mt-3 py-2 px-2">
        <button
          className="bg-red-950 text-white text-lg py-2 px-6 rounded-md cursor-pointer mx-4 w-[200px]"
          onClick={handleDelete}
        >
          Delete Goal
        </button>
        <button
          className="w-[200px] bg-gray-700 rounded-md cursor-pointer mx-4 py-2.5 px-6 text-white text-lg"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

export default DeleteGoalPage;
