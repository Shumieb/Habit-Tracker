export interface categoryType {
  id: string;
  name: string;
  icon: string;
}

export interface dayDictType {
  dayTxt: string;
  date: string;
  month: number;
  year: number;
  day: number;
}

export interface displayDays {
  dayTxt: string;
  day: number;
  date: string;
  month: number;
  year: number;
}

export interface frequencyType {
  id: string;
  name: string;
}

export interface habitOriginType {
  id: string;
  name: string;
  category: string;
  frequency: string;
  day: string | undefined;
  date: string | undefined;
  active: boolean;
}

export interface habitType {
  id: string;
  date: number;
  day: number;
  month: number;
  year: number;
  habitId: string;
  completed: boolean;
}

export interface selectedDayType {
  date: number;
  day: number;
  year: number;
}
