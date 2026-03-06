export const setDay = (day: number) => {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 0:
      return "Sunday";
  }
};

export const setDate = (date: number) => {
  if (date < 1) {
    console.log("invalid date");
    return "";
  } else if (date < 10) {
    return "0" + date.toString();
  } else {
    return date.toString();
  }
};

export const setDatesToDisplay = (day: number, date: number) => {
  let today = new Date();

  let displayDates = [
    { dayTxt: "Sun", day: 0, date: "2", month: 3, year: 2026 },
    { dayTxt: "Mon", day: 1, date: "2", month: 3, year: 2026 },
    { dayTxt: "Tue", day: 2, date: "2", month: 3, year: 2026 },
    { dayTxt: "Wed", day: 3, date: "2", month: 3, year: 2026 },
    { dayTxt: "Thur", day: 4, date: "2", month: 3, year: 2026 },
    { dayTxt: "Fri", day: 5, date: "2", month: 3, year: 2026 },
    { dayTxt: "Sat", day: 6, date: "2", month: 3, year: 2026 },
  ];

  for (let index = 0; index < displayDates.length; index++) {
    // update date
    if (day == index) {
      displayDates[index].date = setDate(date);
    } else if (index < day) {
      let d = date - (day - index);
      displayDates[index].date = setDate(d);
    } else {
      let d = date + (index - day);
      displayDates[index].date = setDate(d);
    }
    // update month
    displayDates[index].month = today.getMonth() + 1;
    //update year
    displayDates[index].year = today.getFullYear();
  }

  return displayDates;
};
