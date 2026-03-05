
interface PropTypes {
  date: string,
  day: string
}

function DayDateCard({date, day}:PropTypes) {
  return (
    <div className="border-2 border-purple-900 rounded-lg py-2 px-4 min-w-[12%] cursor-pointer text-center my-2">
      <p className="text-lg">{date}</p>
      <p className="text-lg">{day}</p>
    </div>
  )
}

export default DayDateCard