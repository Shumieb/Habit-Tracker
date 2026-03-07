import { useEffect, useState } from "react";
import type { habitOriginType } from "../helpers/entityTypes";
import { useNavigate, useParams } from "react-router";
import useCategoriesStore from "../stores/categoriesStore";
import useFrequenciesStore from "../stores/frequenciesStore";
import { weekDays } from "../helpers/staticData";
import useGoalsStore from "../stores/goalsStore";
import { catIconImgs, freqIconImgs } from "../helpers/iconsBank";

function DeleteGoalPage() {
  // variables
  const [habit, setHabit] = useState<habitOriginType>();
  const [categoryName, setCategoryName] = useState<string>();
  const [frequencyName, setFrequencyName] = useState<string>();
  const [dayOfWeek, setDayofWeek] = useState<string>();
  const [catIcon, setCatIcon] = useState<React.ReactNode>();
  const [freqIcon, setFreqIcon] = useState<React.ReactNode>();

  const navigate = useNavigate();
  const param = useParams();

  // store
  const categories = useCategoriesStore.getState().initializeCategories();
  const frequencies = useFrequenciesStore.getState().initializeFrequencies();

  // runs when component mounts
  useEffect(() => {
    if (!param.id) return;

    // find habit to delete
    let foundHabit = useGoalsStore.getState().getGoalById(param.id);

    if (foundHabit) {
      setHabit(foundHabit);

      // set category icon
      let cat = useCategoriesStore
        .getState()
        .getCategoryById(foundHabit.category);
      if (cat) {
        let icon = catIconImgs.find((icon) => icon.name == cat.icon);
        icon && setCatIcon(icon.icon);
      }

      // set category icon
      let freq = useFrequenciesStore
        .getState()
        .getFrequencyById(foundHabit.frequency);
      if (freq) {
        let icon = freqIconImgs.find((icon) => icon.name == freq.name);
        icon && setFreqIcon(icon.icon);
      }
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
    if (!param.id) return;

    // delete in state
    useGoalsStore.getState().deleteGoal(param.id);

    // redirect to dashboard
    navigate("/user-dashboard/1");
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
      <div className="flex justify-center align-center py-0.5 px-2">
        <p className="text-lg pt-1.5">{catIcon}</p>
        <p className="capitalize text-lg ms-2">
          <b>Category:</b> {categoryName}
        </p>
      </div>

      {/* frequency */}
      <div className="flex justify-center align-center py-0.5 px-2">
        <p className="text-lg pt-1.5">{freqIcon}</p>
        <p className="capitalize text-lg ms-2">
          <b>Frequency:</b> {frequencyName}
        </p>
      </div>

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
