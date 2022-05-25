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
