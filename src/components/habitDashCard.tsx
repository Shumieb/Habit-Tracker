import { useEffect, useState } from "react";
import type { habitOriginType } from "../helpers/entityTypes";
import {
  FaBaseball,
  FaBrain,
  FaBusinessTime,
  FaBookOpen,
  FaBuildingColumns,
  FaHouseChimney,
  FaCalendarDay,
  FaCalendarWeek,
  FaCalendarDays,
} from "react-icons/fa6";
import { categories, mockFrequency } from "../mockData/mockData";
import { setDay } from "../helpers/helperFunctions";
import { Link } from "react-router";

interface PropTypes {
  habit: habitOriginType;
}

function HabitDashCard({ habit }: PropTypes) {
  // variables
  const [dayOfWeek, setDayOfWeek] = useState("");

  const catIconImgs = [
    { name: "physical", icon: <FaBaseball /> },
    { name: "mental", icon: <FaBrain /> },
    { name: "work", icon: <FaBusinessTime /> },
    { name: "learn", icon: <FaBookOpen /> },
    { name: "finance", icon: <FaBuildingColumns /> },
    { name: "household", icon: <FaHouseChimney /> },
  ];

  const freqIconImgs = [
    { name: "daily", icon: <FaCalendarDay /> },
    { name: "weekly", icon: <FaCalendarWeek /> },
    { name: "monthly", icon: <FaCalendarDays /> },
  ];

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
        "border-2 rounded py-2 px-2 mb-4 shadow-md text-center border-purple-950"
      }
    >
      <p className="text-xl px-2 capitalize pt-0.5">{habit.name}</p>

      {/* display category */}
      {categories.map((cat) => {
        if (cat.id == habit.category) {
          return (
            <div className="flex justify-center align-center" key={cat.id}>
              <div className="text-lg">
                {catIconImgs.map((catIcon) => {
                  if (catIcon.name == cat.icon) {
                    return (
                      <p className="px-1 pt-2 text-gray-600" key={catIcon.name}>
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

      <div>
        <Link to={`/edit-goal/${habit.id}`}>Edit</Link>
        <Link to={`/delete-goal/${habit.id}`}>Delete</Link>
      </div>
    </div>
  );
}

export default HabitDashCard;
