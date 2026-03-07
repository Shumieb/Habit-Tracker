import { useEffect, useState } from "react";
import type { dayDictType, selectedDayType } from "../helpers/entityTypes";

interface PropTypes {
  day: dayDictType;
  toggleDates: (day: dayDictType) => void;
  selectedDay: selectedDayType;
}

function DayDateCard({ day, toggleDates, selectedDay }: PropTypes) {
  // variables
  const [currentday, setCurrentDay] = useState(false);
  const [futureDay, setFutureDay] = useState(false);

  useEffect(() => {
    const today = new Date();
    if (today.getDay() < day.day) {
      setFutureDay(true);
    } else {
      setFutureDay(false);
    }
  }, [day]);

  useEffect(() => {
    if (
      selectedDay.date == Number(day.date) &&
      selectedDay.day == day.day &&
      selectedDay.year == day.year
    ) {
      setCurrentDay(true);
    } else {
      setCurrentDay(false);
    }
  }, [selectedDay]);

  const handleClick = () => {
    if (futureDay) return;
    toggleDates(day);
  };

  return (
    <div
      className={`border-2 border-purple-900 rounded-lg py-2 px-4 min-w-[12%] text-center my-2 ${currentday ? "bg-purple-950" : futureDay ? "bg-gray-300" : "bg-white"} ${futureDay ? "cursor-not-allowed" : "cursor-pointer"}`}
      onClick={handleClick}
    >
      <p
        className={`text-lg ${currentday ? "text-white" : futureDay ? "text-gray-950" : "text-purple-950"}`}
      >
        {day.date}
      </p>
      <p
        className={`text-lg ${currentday ? "text-white" : futureDay ? "text-gray-950" : "text-purple-950"}`}
      >
        {day.dayTxt}
      </p>
    </div>
  );
}

export default DayDateCard;
