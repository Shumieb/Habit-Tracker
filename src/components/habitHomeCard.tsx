import { FaBaseball, FaRegCircle, FaRegCircleCheck, FaBrain, FaBusinessTime, FaBookOpen, FaBuildingColumns, FaHouseChimney } from "react-icons/fa6";
import { categories } from "../mockData/mockData";
import { useEffect, useState } from "react";

interface PropTypes{
    habit: {
        id:string,
        name: string,
        category: string,
        frequency: string,
        day: string | undefined,
        date: string | undefined,
    },
    completed: boolean,
}


function HabitHomeCard({habit, completed}: PropTypes) {

    // variables
    const [category, setCategory] = useState({id: "1", name: "Physical health", icon: "physical"})

    const catIconImgs = [
        {name: "physical", icon: <FaBaseball /> },
        {name: "mental", icon: <FaBrain /> },
        {name: "work", icon: <FaBusinessTime /> },
        {name: "learn", icon: <FaBookOpen />},
        {name: "finance", icon: <FaBuildingColumns /> },
        {name: "household", icon: <FaHouseChimney /> },
    ]

    useEffect(()=>{
        let cat = categories.find(item => item.id == habit.category)
        cat && setCategory(cat)     

    }, [habit])     

  return (
    <div className={`flex justify-between align-center border-2 rounded py-2 px-2 mb-4 shadow-md ${completed ? "border-green-900 line-through":"border-rose-950"}`}>
        <div className="flex justify-start align-center">
            <p className="text-lg">
                {
                    catIconImgs.map(catIcon =>{
                        if(catIcon.name == category.icon){
                            return <p className="px-2 pt-2" key={catIcon.name}>{catIcon.icon}</p>
                        }
                    })
                }
            </p>
            <p className="text-lg px-2 capitalize pt-0.5">{habit.name}</p>
        </div>  
        <div>
            {
                completed ?
                    <button className="cursor-pointer text-xl pt-1.5"><FaRegCircleCheck /></button>:
                    <button className="cursor-pointer text-xl pt-1.5"><FaRegCircle /></button>                     
            }            
        </div>        
        
    </div>   
  )
}

export default HabitHomeCard