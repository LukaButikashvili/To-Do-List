import { useEffect } from "react";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import AddTaskButton from "@/components/AddTask";
import { ListItems } from "@/components/List";
import Header from "@/components/Header";
import { useList } from "@/store/list";
import { getDataFromLocalstorage } from "@/utils/list";
import { Statuses } from "@/types/list";

export default function Home() {
  const { filter, setList } = useList();

  console.log(filter, "filter");

  useEffect(() => {
    const getData = async () => {
      const data = await getDataFromLocalstorage("to-do-list", filter).then(
        (list) => setList(list)
      );
    };

    getData();
  }, [filter, setList]);

  return (
    <main>
      <Header />
      <div className="mt-4 mb-11">
        <Search />
      </div>
      <Filters />
      <ListItems />
      {filter === Statuses.TODO && (
        <div
          style={{
            position: "fixed",
            left: "50%",
            transform: "translate(-50%)",
            bottom: "5px",
            width: "52px",
            height: "52px",
            background: "#6A6CE0",
            borderRadius: "999px",
            cursor: "pointer",
          }}
        >
          <AddTaskButton />
        </div>
      )}
    </main>
  );
}
