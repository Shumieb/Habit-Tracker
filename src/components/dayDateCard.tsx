import { useEffect, useState } from "react";

interface PropTypes {
  day: {
    dayTxt: string;
    day: number;
    date: string;
    month: number;
    year: number;
  };
  toggleDates: (day: {
    dayTxt: string;
    date: string;
    month: number;
    year: number;
    day: number;
  }) => void;
  selectedDay: {
    date: number;
    day: number;
    year: number;
  };
}

function DayDateCard({ day, toggleDates, selectedDay }: PropTypes) {
  // variables
  const [currentday, setCurrentDay] = useState(false);
  const [futureDay, setFutureDay] = useState(false);

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

  return (
    <div
      className={`border-2 border-purple-900 rounded-lg py-2 px-4 min-w-[12%] cursor-pointer text-center my-2 ${currentday ? "bg-purple-950 text-white" : "bg-white text-gray-950"}`}
      onClick={() => toggleDates(day)}
    >
      <p className="text-lg">{day.date}</p>
      <p className="text-lg">{day.dayTxt}</p>
    </div>
  );
}

export default DayDateCard;
