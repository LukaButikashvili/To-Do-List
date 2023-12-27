import { getDataFromLocalstorage } from "@/utils/list";
import { useList } from "@/store/list";
import Image from "next/image";
import { useEffect, useState } from "react";

function Search() {
  const { list, filter, setSearchList, setList } = useList();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await getDataFromLocalstorage("to-do-list", filter).then(
        (list) => setList(list)
      );
    };

    if (!inputValue) {
      getData();
    }

    setSearchList(list, inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full gap-16 p-2 rounded-md text-[#30507D]"
        style={{
          boxShadow: "0px 2px 4px 0px rgba(106, 108, 224, 0.15)",
        }}
        value={inputValue}
        placeholder="Search for notes"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="w-[26px] h-[26px] absolute top-[7px] right-2 flex items-center justify-center rounded-md bg-[#6A6CE0]">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={16}
          height={16}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Search;
