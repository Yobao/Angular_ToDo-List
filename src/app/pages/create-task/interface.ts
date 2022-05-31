export interface Task {
  name: string;
  description: string;
  day: number;
  month: string;
  priority: string;
  [key: string]: any;
}

export interface Month {
  name: string;
  days: number;
}

export interface Date {
  month: string;
  day: any;
}

export interface PrioButtons {
  buttons: { i: number; name: string; color: string; status: number }[];
  active: string;
  history: any;
}

export interface Inputs {
  title: string;
  id: string;
  placeH: string;
}

export interface TableColumns {
  day: string;
  description: string;
  month: string;
  name: string;
  priority: string;
}
