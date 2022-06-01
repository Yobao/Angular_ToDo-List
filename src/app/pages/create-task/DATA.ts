export const MONTH_DAY = [
  {
    name: 'January',
    days: 31,
  },
  {
    name: 'February',
    days: 28,
  },
  {
    name: 'March',
    days: 31,
  },
  {
    name: 'April',
    days: 30,
  },
  {
    name: 'May',
    days: 31,
  },
  {
    name: 'June',
    days: 30,
  },
  {
    name: 'July',
    days: 31,
  },
  {
    name: 'August',
    days: 31,
  },
  {
    name: 'September',
    days: 30,
  },
  {
    name: 'October',
    days: 31,
  },
  {
    name: 'November',
    days: 30,
  },
  {
    name: 'December',
    days: 31,
  },
];

export const DAY_LIST: string[] = [
  'Sunday',
  'Monay',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const MONTH_LIST: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const INPUTS = [
  { title: 'Task Name', id: 'taskName', placeH: 'Name of the task' },
  {
    title: 'Description',
    id: 'description',
    placeH: 'Description max. 200 characters',
  },
];

export const PRIO_BUTTONS = {
  buttons: [
    { i: 0, name: 'Urgent', color: 'red', status: 0 },
    { i: 1, name: 'High', color: 'yellow', status: 0 },
    { i: 2, name: 'Low', color: 'blue', status: 0 },
    { i: 3, name: 'No priority', color: 'grey', status: 0 },
  ],
  active: '',
  activeNumber: null,
  history: null,
};

export const TABLE_HEAD = [
  'Select',
  'Task Name',
  'Priority',
  'Due Date',
  'Description',
];

export const TABLE_COLUMNS = [
  'tick',
  'name',
  'priority',
  'date',
  'description',
];
