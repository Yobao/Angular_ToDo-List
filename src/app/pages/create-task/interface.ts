export interface Task {
  name: string;
  description: string;
  date: any;
  priority: string;
  priorityNumber: number | null;
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
  activeNumber: any;
  history: any;
}

export interface Inputs {
  title: string;
  id: string;
  placeH: string;
}
