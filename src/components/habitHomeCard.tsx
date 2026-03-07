import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";
import { mockHabits } from "../mockData/mockData";
import { useEffect, useState } from "react";
import type { habitOriginType, habitType } from "../helpers/entityTypes";
import { catIconImgs } from "../helpers/iconsBank";
import useCategoriesStore from "../stores/categoriesStore";

interface PropTypes {
  habit: habitType;
  handleComplete: (id: string) => void;
}

function HabitHomeCard({ habit, handleComplete }: PropTypes) {
  // variables
  const [currentHabit, setCurrentHabit] = useState<habitOriginType>();
  const [catIcon, setCatIcon] = useState<React.ReactNode>();

  // runs when habit changes
  useEffect(() => {
    let cHabit = mockHabits.find((item) => item.id == habit.habitId);

    if (cHabit) {
      // set habit
      setCurrentHabit(cHabit);
      let cat = useCategoriesStore.getState().getCategoryById(cHabit.category);

      if (cat) {
        // set category icon
        catIconImgs.map((catIcon) => {
          if (catIcon.name == cat.icon) {
            setCatIcon(catIcon.icon);
          }
        });
      }
    }
  }, [habit]);

  return (
    <div
      className={`flex justify-between align-center border-2 rounded py-2 px-2 mb-4 shadow-md hover:shadow-lg ${habit.completed ? "border-green-900 line-through" : "border-purple-950"}`}
    >
      <div className="flex justify-start align-center">
        <div className="text-lg">
          <p className="px-2 pt-2 text-purple-950">{catIcon}</p>
        </div>
        <p className="text-lg px-2 capitalize pt-0.5 text-purple-950">
          {currentHabit?.name}
        </p>
      </div>
      <div>
        {habit.completed ? (
          <button
            className="cursor-pointer text-xl pt-1.5 text-purple-950"
            onClick={() => handleComplete(habit.id)}
          >
            <FaRegCircleCheck />
          </button>
        ) : (
          <button
            className="cursor-pointer text-xl pt-1.5 text-purple-950"
            onClick={() => handleComplete(habit.id)}
          >
            <FaRegCircle />
          </button>
        )}
      </div>
    </div>
  );
}

export default HabitHomeCard;
