export interface dayDictType {
  dayTxt: string;
  date: string;
  month: number;
  year: number;
  day: number;
}

export interface habitOriginType {
  id: string;
  name: string;
  category: string;
  frequency: string;
  day: string | undefined;
  date: string | undefined;
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
