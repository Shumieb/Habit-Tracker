import { useEffect, useState } from "react"
import DayDateCard from "../components/dayDateCard"
import { setDatesToDisplay } from "../helpers/helperFunctions"
import HabitHomeCard from "../components/habitHomeCard"
import { mockCompletedHabits, mockHabits } from "../mockData/mockData"

function GoalsPage() {

  // variables
  const [userName, setUserName] = useState("User Name")
  const [habits, setHabits] = useState(mockHabits)
  const [completedHabits, setCompletedHabits] = useState(mockCompletedHabits)
  const [todayCompleted, setTodayCompleted] = useState<string[]>([])

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

  },[])

  useEffect(()=>{
    
    const today = new Date()    
    // find today's completed habits
    let todayCompletedHabits = completedHabits.find(item =>
       item.date == today.getDate() && item.month == (today.getMonth() + 1) && item.year == today.getFullYear()
    )

    todayCompletedHabits && setTodayCompleted(todayCompletedHabits.habits)

  },[completedHabits])

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
        { habits && habits.map((habit)=>{
          let completed = todayCompleted.includes(habit.id)
          return <HabitHomeCard habit={habit} completed={completed} key={habit.id}/>  
          }) 
        } 
      </div>


    </section>
  )
}

export default GoalsPage