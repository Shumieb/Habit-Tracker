export const setDay = (day:number) =>{
    switch(day){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4: 
            return "Thursday"
        case 5:
            return "Friday"
        case 6: 
            return "Saturday"
        case 0:
            return "Sunday"
    }
}

export const setDate = (date:number) =>{
    if (date < 1){
        console.log("invalid date")
        return ""
    }else if(date < 10){
        return "0" + date.toString()
    }else{
        return date.toString()
    }
}

export const setDatesToDisplay = (day:number, date:number) =>{

    let displayDates = [
        {day: "Sun", date:"2"},
        {day: "Mon", date:"2"},
        {day: "Tue", date:"2"},
        {day: "Wed", date:"2"},
        {day: "Thur", date:"2"},
        {day: "Fri", date:"2"},
        {day: "Sat", date:"2"}
    ]

    for(let index=0; index < displayDates.length; index++){
        if(day == index){
            displayDates[index].date = setDate(date)
            }else if(index < day){
                let d = date - (day - index)
                displayDates[index].date = setDate(d)
            }else{
                let d = date + (index-day)
                displayDates[index].date = setDate(d)
            }
    }    
   
    return displayDates
}