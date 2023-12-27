import { Item, Statuses } from "@/types/list";
import create from "zustand";

interface ListStore {
  list: Item[];
  filter: Statuses;
  setList: (list: Item[]) => void;
  setSearchList: (list: Item[], value: string) => void;
  changeFilter: (status: Statuses) => void;
}

const useList = create<ListStore>((set) => ({
  list: [],
  filter: Statuses.TODO,
  setList: (list) =>
    set(() => ({
      list,
    })),
  setSearchList: (list, value) => {
    const search = list.filter(
      (item) => item.name.includes(value) || item.details.includes(value)
    );

    set(() => ({
      list: search,
    }));
  },
  changeFilter: (status: Statuses) =>
    set(() => ({
      filter: status,
    })),
}));

export { useList };
