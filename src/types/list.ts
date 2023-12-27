export enum Statuses {
  TODO = "todo",
  COMPLETED = "COMPLETED",
}

export interface Item {
  name: string;
  details: string;
  status: Statuses;
  id: string;
}

export enum FiltersOptions {
  TASK = "Tasks",
  HISTORY = "History",
}
