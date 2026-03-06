import { useEffect, useState } from "react";
import DayDateCard from "../components/dayDateCard";
import { setDatesToDisplay } from "../helpers/helperFunctions";
import HabitHomeCard from "../components/habitHomeCard";
import { mockHabitsHistory } from "../mockData/mockData";

interface habitType {
  id: string;
  date: number;
  day: number;
  month: number;
  year: number;
  habitId: string;
  completed: boolean;
}

interface selectedDayType {
  date: number;
  day: number;
  year: number;
}

function GoalsPage() {
  // variables
  const [userName, setUserName] = useState("User Name");
  const [dailyHabits, setDailyHabits] = useState<habitType[]>();
  const [selectedDay, setSelectedDay] = useState<selectedDayType>({
    date: 1,
    day: 1,
    year: 2026,
  });

  const [daysToDisplay, setDaysToDisplay] = useState([
    { dayTxt: "Sun", day: 0, date: "2", month: 3, year: 2026 },
    { dayTxt: "Mon", day: 1, date: "2", month: 3, year: 2026 },
    { dayTxt: "Tue", day: 2, date: "2", month: 3, year: 2026 },
    { dayTxt: "Wed", day: 3, date: "2", month: 3, year: 2026 },
    { dayTxt: "Thur", day: 4, date: "2", month: 3, year: 2026 },
    { dayTxt: "Fri", day: 5, date: "2", month: 3, year: 2026 },
    { dayTxt: "Sat", day: 6, date: "2", month: 3, year: 2026 },
  ]);

  useEffect(() => {
    const today = new Date();
    // set dates to display
    let displayDays = setDatesToDisplay(today.getDay(), today.getDate());
    displayDays && setDaysToDisplay(displayDays);

    // get todays habit only
    let todayHabits = mockHabitsHistory.filter(
      (item) =>
        item.date == today.getDate() &&
        item.day == today.getDay() &&
        item.month == today.getMonth() + 1 &&
        item.year == today.getFullYear(),
    );
    setDailyHabits(todayHabits);

    //set selected day
    let selDay = {
      date: today.getDate(),
      day: today.getDay(),
      year: today.getFullYear(),
    };
    setSelectedDay(selDay);
  }, []);

  const handleComplete = (id: string) => {
    // find and update habit complete status
    const copyDailyHabits: habitType[] = [...(dailyHabits as habitType[])];
    let cHabit = copyDailyHabits.find((item) => item.id == id);
    if (cHabit) cHabit.completed = !cHabit.completed;
    setDailyHabits(copyDailyHabits);
  };

  const toggleDates = (day: {
    dayTxt: string;
    date: string;
    month: number;
    year: number;
    day: number;
  }) => {
    // set habits to display
    let displayHabits = mockHabitsHistory.filter(
      (item) =>
        item.date == Number(day.date) &&
        item.month == day.month &&
        item.year == day.year,
    );
    setDailyHabits(displayHabits);

    // set selected day
    let selDay = { date: Number(day.date), day: day.day, year: day.year };
    setSelectedDay(selDay);
  };

  return (
    <section className="w-[90%] mx-auto py-2">
      <h1 className="text-xl px-2 py-1">Hello, {userName}!</h1>

      <h2 className="text-lg px-2 py-1">Your Habits</h2>

      {/* display dates */}
      <div className="flex justify-between items-center px-2">
        {daysToDisplay &&
          daysToDisplay.map((day) => {
            return (
              <DayDateCard
                day={day}
                toggleDates={toggleDates}
                selectedDay={selectedDay}
                key={day.dayTxt}
              />
            );
          })}
      </div>

      {/* habits */}
      <div className="px-2 py-2">
        {dailyHabits?.length == 0 && (
          <p className="text-center py-2 px-2 text-xl mt-3">
            No Habits for today
          </p>
        )}
        {dailyHabits &&
          dailyHabits.map((habit) => {
            return (
              <HabitHomeCard
                habit={habit}
                handleComplete={handleComplete}
                key={habit.id}
              />
            );
          })}
      </div>
    </section>
  );
}

export default GoalsPage;
