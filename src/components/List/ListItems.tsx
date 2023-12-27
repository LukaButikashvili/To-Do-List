import { useState } from "react";
import { List } from "./index";
import { Item, Statuses } from "@/types/list";
import { useList } from "@/store/list";

function ListItems() {
  const { list } = useList();

  return (
    <div className="grid gap-3 mt-5">
      {list.map((item) => (
        <List list={list} item={item} key={item.id} />
      ))}
      {!list.length && <div className="w-full h-[1px] bg-[#6A6CE04D]" />}
    </div>
  );
}

export { ListItems };
