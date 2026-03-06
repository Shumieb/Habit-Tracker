import { useEffect, useState } from "react"
import DayDateCard from "../components/dayDateCard"
import { setDatesToDisplay } from "../helpers/helperFunctions"
import HabitHomeCard from "../components/habitHomeCard"
import { mockHabitsHistory } from "../mockData/mockData"

interface habitType{
    id:string,
    date:number,
    day:number,
    month:number,
    year:number,
    habitId:string,
    completed:boolean 
}

function GoalsPage() {

  // variables
  const [userName, setUserName] = useState("User Name")
  const [dailyHabits, setDailyHabits] = useState<habitType[]>()
  

  const [daysToDisplay, setDaysToDisplay] = useState([
        {day: "Sun", date:"2"},
        {day: "Mon", date:"2"},
        {day: "Tue", date:"2"},
        {day: "Wed", date:"2"},
        {day: "Thur", date:"2"},
        {day: "Fri", date:"2"},
        {day: "Sat", date:"2"}
      ])  

  useEffect(()=>{
    
    // set dates to display
    const today = new Date()    
    let displayDays = setDatesToDisplay(today.getDay(), today.getDate())
    displayDays && setDaysToDisplay(displayDays)

    // get todays habit only
    let todayHabits = mockHabitsHistory.filter(item => item.date == today.getDate() && item.day == today.getDay() && item.month == (today.getMonth() + 1) && item.year == today.getFullYear())
    setDailyHabits(todayHabits)
  },[])


  const handleComplete = (id:string) =>{
    // find and update habit complete status
    const copyDailyHabits: habitType[]= [...(dailyHabits as habitType[])]
    let cHabit = copyDailyHabits.find(item => item.id == id)
    if(cHabit) cHabit.completed = !cHabit.completed
    setDailyHabits(copyDailyHabits)
  } 


  return (
    <section className="w-[90%] mx-auto py-2">

      <h1 className="text-xl px-2 py-1">Hello, {userName}!</h1>

      <h2 className="text-lg px-2 py-1">Your Habits</h2>

      {/* display dates */}
      <div className="flex justify-between items-center px-2">
        {
          daysToDisplay && daysToDisplay.map(({day, date})=>{
            return <DayDateCard date={date} day={day} key={day}/>
          })
        }        
      </div>

      {/* habits */}
      <div className="px-2 py-2">
        { dailyHabits && dailyHabits.map((habit)=>{            
            return <HabitHomeCard habit={habit} handleComplete={handleComplete} key={habit.id}/> 
          }) 
        } 
      </div>


    </section>
  )
}

export default GoalsPage