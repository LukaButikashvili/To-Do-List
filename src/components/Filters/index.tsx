import { FiltersOptions, Statuses } from "@/types/list";
import { useState } from "react";
import Option from "./Option";
import { clearSpecificData } from "@/utils/list";
import { useList } from "@/store/list";

function Filters() {
  const { list, setList, changeFilter, filter } = useList();

  const [selectedFilter, setSelectedFilter] = useState(FiltersOptions.TASK);

  const clearItems = async (status: Statuses) => {
    const clear = await clearSpecificData("to-do-list", list, status).then(
      (data) => setList(data)
    );
  };

  return (
    <div className="flex justify-between items-end">
      <div className="flex gap-4">
        {Object.values(FiltersOptions).map((filter) => (
          <Option
            key={filter}
            src={
              filter === FiltersOptions.TASK
                ? "/assets/icons/calendar.svg"
                : "/assets/icons/time.svg"
            }
            alt="src"
            onClickHandler={() => {
              setSelectedFilter(filter);
              changeFilter(
                filter === FiltersOptions.TASK
                  ? Statuses.TODO
                  : Statuses.COMPLETED
              );
            }}
            name={filter}
            isSelected={selectedFilter === filter}
          />
        ))}
      </div>
      <div>
        {selectedFilter === FiltersOptions.TASK ? (
          <h2
            style={{ borderBottom: "1px solid #30507d" }}
            className="text-sm font-medium cursor-pointer"
            onClick={() => clearItems(Statuses.TODO)}
          >
            Clear all reminders
          </h2>
        ) : (
          <h2
            style={{ borderBottom: "1px solid #30507d" }}
            onClick={() => clearItems(Statuses.COMPLETED)}
            className="text-sm font-medium cursor-pointer"
          >
            Clear history
          </h2>
        )}
      </div>
    </div>
  );
}

export default Filters;
