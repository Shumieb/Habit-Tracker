import { useEffect, useState } from "react";
import type { categoryType, frequencyType } from "../helpers/entityTypes";
import { mockFrequency, mockHabits } from "../mockData/mockData";
import { catIconImgs, freqIconImgs } from "../helpers/iconsBank";
import { Link, useNavigate } from "react-router";
import useCategoriesStore from "../stores/categoriesStore";

function AddNewGoalPage() {
  // variables
  const [goalName, setGoalName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [frequencyId, setFrequencyId] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState<string | undefined>();
  const [dateOfMonth, setDateOfMonth] = useState<number | undefined>();
  const [errors, setErrors] = useState<string[]>([]);
  const [categoriesData, setCategoriesData] = useState<categoryType[]>();

  const [frequencies, setFrequencies] =
    useState<frequencyType[]>(mockFrequency);

  // store
  const categories = useCategoriesStore.getState().initializeCategories();

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

  // run on component render
  useEffect(() => {
    // set categories
    let cats = useCategoriesStore.getState().categories;
    if (cats.length > 0) {
      setCategoriesData(cats);
    }
  }, []);

  // run on form submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (goalName.trim().length < 3) {
      setErrors([...errors, "Please enter a New Goal"]);
      return;
    }

    if (categoryId.trim().length < 1) {
      setErrors([...errors, "Please select a Category"]);
      return;
    }

    if (frequencyId.trim().length < 1) {
      setErrors([...errors, "Please select a Frequency"]);
      return;
    }

    let newId = mockHabits.length + 1;

    let newDay = "";
    let newDate = "";

    if (frequencyId == "2") {
      if (dayOfWeek) {
        newDay = dayOfWeek;
      } else {
        setErrors([...errors, "Please select a Day of the Week"]);
        return;
      }
    }

    if (frequencyId == "3") {
      if (dateOfMonth) {
        newDate = dateOfMonth.toString();
      } else {
        setErrors([...errors, "Please enter a Monthly Date"]);
        return;
      }
    }

    let newHabit = {
      id: newId,
      name: goalName,
      category: categoryId,
      frequency: frequencyId,
      day: newDay,
      date: newDate,
      active: true,
    };

    // TODO: Add new goal to array
    console.log(newHabit);

    // clear state
    setErrors([]);
    setGoalName("");
    setCategoryId("");
    setFrequencyId("");
    setDayOfWeek(undefined);
    setDateOfMonth(undefined);

    // redirect to dashboard
    navigate("/user-dashboard/1");
  };

  // reset error array
  const resetErrors = () => {
    setErrors([]);
  };

  return (
    <section className="w-[90%] mx-auto py-2 text-purple-950">
      <h1 className="text-xl px-2 py-2 text-center">Add A New Goal</h1>

      <form onSubmit={(e) => handleSubmit(e)} className="w-[60%] mx-auto">
        {/* goal name */}
        <div className="py-2 px-2">
          <label className="text-lg px-2">New Goal:</label>
          <input
            type="text"
            name="goal"
            placeholder="e.g journaling, take an online course"
            className="border-b-2 py-1 px-1 outline-none w-[350px] capitalize text-lg"
            onChange={(e) => setGoalName(e.target.value)}
            onFocus={resetErrors}
            value={goalName}
          />
        </div>

        {/* category */}
        <div className="py-2 px-2">
          <label className="text-lg px-2 block">Category:</label>
          <div className="grid grid-cols-3 gap-2 px-2 py-2">
            {categoriesData &&
              categoriesData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col justify-center align-center border-2 border-purple-950 py-2 px-6 text-lg mx-2 shadow-md hover:shadow-lg rounded-md cursor-pointer ${item.id == categoryId ? "bg-purple-950 text-white" : "bg-white text-purple-950"}`}
                    onClick={() => {
                      setCategoryId(item.id);
                      resetErrors();
                    }}
                  >
                    {catIconImgs.map((icon) => {
                      if (icon.name == item.icon) {
                        return (
                          <div
                            key={icon.name}
                            className="flex justify-center text-2xl"
                          >
                            {icon.icon}
                          </div>
                        );
                      }
                    })}
                    <p className="capitalize text-center">{item.name}</p>
                  </div>
                );
              })}
          </div>
        </div>

        {/* frequency */}
        <div className="py-2 px-2">
          <label className="text-lg px-2 block">Frequency:</label>
          <div className="grid grid-cols-3 gap-2 px-2 py-2">
            {frequencies.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`border-2 border-purple-950 py-2 px-6 text-lg mx-2 shadow-md hover:shadow-lg rounded-md cursor-pointer ${item.id == frequencyId ? "bg-purple-950 text-white" : "bg-white text-purple-950"}`}
                  onClick={() => {
                    setFrequencyId(item.id);
                    resetErrors();
                  }}
                >
                  {freqIconImgs.map((icon) => {
                    if (icon.name == item.name) {
                      return (
                        <div
                          key={icon.name}
                          className="flex justify-center text-2xl"
                        >
                          {icon.icon}
                        </div>
                      );
                    }
                  })}
                  <p className="capitalize text-center">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* show day of the week if frequency is weekly */}
        {frequencyId == "2" && (
          <div className="py-2 px-2">
            <label className="text-lg px-2">Day of the Week:</label>
            <select
              name="day"
              className="text-lg border-2 rounded-md py-1 px-2 w-[350px] capitalize"
              onChange={(e) => setDayOfWeek(e.target.value)}
              onFocus={resetErrors}
            >
              <option disabled>Select a Day</option>
              {weekDays.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.day}
                  </option>
                );
              })}
            </select>
          </div>
        )}

        {/* show date if frequency is monthly */}
        {frequencyId == "3" && (
          <div className="py-2 px-2">
            <label className="text-lg px-2">Monthly Date:</label>
            <input
              type="number"
              min={1}
              max={31}
              name="date"
              className="border-b-2 py-1 px-1 outline-none w-[250px] text-lg"
              onChange={(e) => setDateOfMonth(Number(e.target.value))}
              onFocus={resetErrors}
            />
          </div>
        )}

        {/* show errors */}
        <div className="text-center">
          {errors.map((error, index) => {
            return (
              <p className="text-lg text-red-950 italic py-2" key={index}>
                {error}
              </p>
            );
          })}
        </div>

        {/* submit btn */}
        <div className="py-2 px-2 mt-4 flex justify-center align-center">
          <input
            type="submit"
            value="Add Goal"
            className="bg-purple-950 text-white text-lg py-2 px-4 rounded-md w-[46%] me-2 cursor-pointer"
          />
          <Link
            to="/user-dashboard/1"
            className="bg-gray-600 text-white text-lg py-2 px-4 rounded-md cursor-pointer ms-2 w-[46%] text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
}

export default AddNewGoalPage;
