import { listSchema } from "@/lib/validators/list";
import { Item, Statuses } from "@/types/list";

export async function getDataFromLocalstorage(name: string, status: Statuses) {
  try {
    const storedData = localStorage.getItem(name);
    const data: Item[] = storedData ? JSON.parse(storedData) : [];

    if (!!data.length) {
      listSchema.parse(data);
    }

    return data.filter((item) => item.status === status);
  } catch (e: any) {
    throw new Error(e.message);
  }
}

export async function deleteItemFromLocalstorage(
  name: string,
  list: Item[],
  item: Item
) {
  try {
    const storedData = list.filter((value) => value.id !== item.id);
    localStorage.setItem(name, JSON.stringify(storedData));

    return storedData;
  } catch {
    throw "Something went wrong";
  }
}

export async function addItemToLocalstorage(
  name: string,
  list: Item[],
  item: Item
) {
  try {
    const newList = [...list, item];
    localStorage.setItem(name, JSON.stringify(newList));

    return newList;
  } catch {
    throw "Something went wrong";
  }
}

export async function updateItemFromLocalstorage(
  name: string,
  list: Item[],
  item: Item
) {
  try {
    const data = [...list];
    const findIndex = list.findIndex((value) => value.id === item.id);
    data[findIndex] = item;

    localStorage.setItem(name, JSON.stringify(data));

    return data;
  } catch {
    throw "Something went wrong";
  }
}

export async function clearSpecificData(
  name: string,
  list: Item[],
  status: Statuses
) {
  try {
    const storedData = list.filter((value) => value.status !== status);
    localStorage.setItem(name, JSON.stringify(storedData));

    return storedData;
  } catch {
    throw "Something went wrong";
  }
}
