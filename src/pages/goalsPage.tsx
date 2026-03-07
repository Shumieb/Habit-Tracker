import { useEffect, useState } from "react";
import DayDateCard from "../components/dayDateCard";
import { setDatesToDisplay } from "../helpers/helperFunctions";
import HabitHomeCard from "../components/habitHomeCard";
import type {
  dayDictType,
  displayDays,
  habitType,
  selectedDayType,
} from "../helpers/entityTypes";
import useCategoriesStore from "../stores/categoriesStore";
import useGoalsStore from "../stores/goalsStore";

function GoalsPage() {
  // variables
  const [userName, setUserName] = useState("User Name");
  const [dailyHabits, setDailyHabits] = useState<habitType[] | undefined>();
  const [selectedDay, setSelectedDay] = useState<selectedDayType | undefined>();

  const [daysToDisplay, setDaysToDisplay] = useState<displayDays[]>();

  // get today's date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // store
  const categories = useCategoriesStore.getState().initializeCategories();
  const goalsHistoryData = useGoalsStore.getState().initializeGoalsHistory();

  // runs when the component first mounts
  useEffect(() => {
    // set dates to display
    let displayDays = setDatesToDisplay(today.getDay(), today.getDate());
    displayDays && setDaysToDisplay(displayDays);

    // get todays habit only
    let todayHabits = useGoalsStore
      .getState()
      .getGoalHistoryByDay(
        today.getDate(),
        today.getDay(),
        today.getMonth() + 1,
        today.getFullYear(),
      );

    todayHabits && setDailyHabits(todayHabits);

    //set selected day
    let selDay = {
      date: today.getDate(),
      day: today.getDay(),
      year: today.getFullYear(),
    };
    setSelectedDay(selDay);
  }, []);

  // called to mark a goal as complete
  const handleComplete = (id: string) => {
    // find and update habit complete status
    const copyDailyHabits: habitType[] = [...(dailyHabits as habitType[])];
    let cHabit = copyDailyHabits.find((item) => item.id == id);
    if (cHabit) cHabit.completed = !cHabit.completed;
    setDailyHabits(copyDailyHabits);
  };

  // called to change the date/day
  const toggleDates = (day: dayDictType) => {
    // set habits to display
    let displayHabits = useGoalsStore
      .getState()
      .getGoalHistoryByDay(Number(day.date), day.day, day.month, day.year);

    displayHabits && setDailyHabits(displayHabits);

    // set selected day
    let selDay = { date: Number(day.date), day: day.day, year: day.year };
    setSelectedDay(selDay);
  };

  return (
    <section className="w-[90%] mx-auto py-2">
      <h1 className="text-xl px-2 py-1 text-center text-purple-950">
        Hello, {userName}!
      </h1>

      <h2 className="text-xl px-2 py-1 text-center text-purple-950">
        Today is {formattedDate}
      </h2>

      {/* display dates */}
      <div className="flex justify-between items-center px-2 mt-2">
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
          <p className="text-center py-2 px-2 text-xl mt-3 text-purple-950">
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
