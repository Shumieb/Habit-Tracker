import { useEffect, useState } from "react";
import type { habitOriginType } from "../helpers/entityTypes";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { setDay } from "../helpers/helperFunctions";
import { Link } from "react-router";
import { catIconImgs, freqIconImgs } from "../helpers/iconsBank";
import useCategoriesStore from "../stores/categoriesStore";
import useFrequenciesStore from "../stores/frequenciesStore";

interface PropTypes {
  habit: habitOriginType;
}

function HabitDashCard({ habit }: PropTypes) {
  // variables
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [catIcon, setCatIcon] = useState<React.ReactNode>();
  const [catName, setCatName] = useState<string>();
  const [freqIcon, setFreqIcon] = useState<React.ReactNode>();
  const [freqName, setFreqName] = useState<string>();

  // run when component first renders
  useEffect(() => {
    // set day of week
    if (habit.frequency == "2") {
      let weekDay = setDay(Number(habit.day));
      weekDay && setDayOfWeek(weekDay);
    } else [setDayOfWeek("")];

    // set category name
    let cat = useCategoriesStore.getState().getCategoryById(habit.category);
    cat && setCatName(cat.name);

    //set category icon
    if (cat) {
      catIconImgs.map((catIcon) => {
        if (catIcon.name == cat.icon) {
          setCatIcon(catIcon.icon);
        }
      });
    }

    // set frequency name
    let freq = useFrequenciesStore.getState().getFrequencyById(habit.frequency);
    freq && setFreqName(freq.name);

    //set frequency icon
    if (freq) {
      freqIconImgs.map((freqIcon) => {
        if (freqIcon.name == freq.name) {
          setFreqIcon(freqIcon.icon);
        }
      });
    }
  }, []);

  return (
    <div
      className={
        "flex flex-col justify-between border-2 rounded py-2 px-2 shadow-md text-center border-purple-950 hover:shadow-lg"
      }
    >
      <div>
        <p className="text-xl px-2 capitalize pt-0.5 text-purple-950 font-bold">
          {habit.name}
        </p>

        {/* display category */}
        <div className="flex justify-center align-center">
          <div className="text-lg">
            <p className="px-1 pt-2 text-gray-600">{catIcon}</p>
          </div>
          <p className="text-lg px-1 text-gray-600 pt-0.5 italic">
            Category - {catName}
          </p>
        </div>

        {/* display frequency */}
        <div className="flex justify-center align-center">
          <div className="text-lg">
            <p className="px-1 pt-2 text-gray-600">{freqIcon}</p>
          </div>
          <p className="text-lg px-2 text-gray-600 pt-0.5 italic">
            Frequency - {freqName}
          </p>
        </div>

        {/* display day if weekly */}
        {habit.frequency == "2" && (
          <p className="text-lg px-2 text-gray-600 pt-0.5">Every {dayOfWeek}</p>
        )}

        {/* display date if monthly */}
        {habit.frequency == "3" && (
          <p className="text-lg px-2 text-gray-600 pt-0.5">
            {habit.date}th of every month
          </p>
        )}
      </div>

      <div className="flex justify-end align-center mt-2">
        <Link
          to={`/edit-goal/${habit.id}`}
          className="text-xl mx-2 my-2 text-green-900 shadow-md hover:shadow-lg"
        >
          <FaPenToSquare />
        </Link>
        <Link
          to={`/delete-goal/${habit.id}`}
          className="text-xl mx-2 my-2 text-red-950 shadow-md hover:shadow-lg"
        >
          <FaTrashCan />
        </Link>
      </div>
    </div>
  );
}

export default HabitDashCard;
