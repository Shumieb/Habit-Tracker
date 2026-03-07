import { useEffect, useState } from "react";
import type { habitOriginType } from "../helpers/entityTypes";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { categories, mockFrequency } from "../mockData/mockData";
import { setDay } from "../helpers/helperFunctions";
import { Link } from "react-router";
import { catIconImgs, freqIconImgs } from "../helpers/iconsBank";

interface PropTypes {
  habit: habitOriginType;
}

function HabitDashCard({ habit }: PropTypes) {
  // variables
  const [dayOfWeek, setDayOfWeek] = useState("");

  // run when component first renders
  useEffect(() => {
    if (habit.frequency == "2") {
      let weekDay = setDay(Number(habit.frequency));
      weekDay && setDayOfWeek(weekDay);
    } else [setDayOfWeek("")];
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
        {categories.map((cat) => {
          if (cat.id == habit.category) {
            return (
              <div className="flex justify-center align-center" key={cat.id}>
                <div className="text-lg">
                  {catIconImgs.map((catIcon) => {
                    if (catIcon.name == cat.icon) {
                      return (
                        <p
                          className="px-1 pt-2 text-gray-600"
                          key={catIcon.name}
                        >
                          {catIcon.icon}
                        </p>
                      );
                    }
                  })}
                </div>
                <p
                  className="text-lg px-1 text-gray-600 pt-0.5 italic"
                  key={cat.id}
                >
                  Category - {cat.name}
                </p>
              </div>
            );
          }
        })}

        {/* display frequency */}
        {mockFrequency.map((freq) => {
          if (freq.id == habit.frequency) {
            return (
              <div className="flex justify-center align-center" key={freq.id}>
                <div className="text-lg">
                  {freqIconImgs.map((freqIcon) => {
                    if (freqIcon.name == freq.name) {
                      return (
                        <p
                          className="px-1 pt-2 text-gray-600"
                          key={freqIcon.name}
                        >
                          {freqIcon.icon}
                        </p>
                      );
                    }
                  })}
                </div>
                <p
                  className="text-lg px-2 text-gray-600 pt-0.5 italic"
                  key={freq.id}
                >
                  Frequency - {freq.name}
                </p>
              </div>
            );
          }
        })}

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
