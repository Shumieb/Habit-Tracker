import { useEffect, useState } from "react"
import DayDateCard from "../components/dayDateCard"
import { setDatesToDisplay } from "../helpers/helperFunctions"

function GoalsPage() {

  // variables
  const [userName, setUserName] = useState("User Name")


  const [daysToDisplay, setDaysToDisplay] = useState([
        {day: "Sun", date:"2"},
        {day: "Mon", date:"2"},
        {day: "Tue", date:"2"},
        {day: "Wed", date:"2"},
        {day: "Thur", date:"2"},
        {day: "Fri", date:"2"},
        {day: "Sat", date:"2"}
      ])  


  // set date and day
  useEffect(()=>{
    
    // set dates to display
    const today = new Date()    
    let displayDays = setDatesToDisplay(today.getDay(), today.getDate())
    displayDays && setDaysToDisplay(displayDays)


  },[])

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
        <div className="flex justify-between align-center border rounded py-2 px-2">
          <div className="flex justify-start align-center">
            <p>icon</p>
            <p>Walk 2 miles</p>
          </div>          
          <button>icon</button>
        </div>        
      </div>


    </section>
  )
}

export default GoalsPage