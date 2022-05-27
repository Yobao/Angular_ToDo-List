export interface Task {
  name: string;
  description: string;
  day: number;
  month: string;
}

export interface Month {
  name: string;
  days: number;
}

export interface Date {
  month: string;
  day: any;
}

interface TempPrioButtons {
  i: number;
  name: string;
  color: string;
  status: number;
}

export interface PrioButtons {
  buttons: { i: number; name: string; color: string; status: number }[];
  history: any;
}
