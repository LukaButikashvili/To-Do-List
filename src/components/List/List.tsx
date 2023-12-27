import {
  deleteItemFromLocalstorage,
  updateItemFromLocalstorage,
} from "@/utils/list";
import { useList } from "@/store/list";
import { Item } from "@/types/list";
import Image from "next/image";
import { useState } from "react";
import AddTask from "../AddTask/AddTask";

interface IProps {
  item: Item;
  list: Item[];
}

function List({ item, list }: IProps) {
  const { setList } = useList();

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleEditItem = async (item: Item) => {
    const updateList = await updateItemFromLocalstorage(
      "to-do-list",
      list,
      item
    ).then((data) => {
      setList(data);
      setShowModal(false);
    });
  };

  const handleDeleteItem = async () => {
    const updateList = await deleteItemFromLocalstorage(
      "to-do-list",
      list,
      item
    ).then((data) => setList(data));
  };

  const wrapperClasses = `flex justify-between ${
    isDetailsVisible ? "mb-[30px]" : ""
  }`;

  return (
    <div
      className="bg-white text-black p-3 rounded-xl"
      style={{
        boxShadow: "0px 2px 8px 0px rgba(106, 108, 224, 0.26)",
      }}
    >
      <div className={wrapperClasses}>
        <div className="flex gap-2 items-center">
          <h1 className="text-[#30507D] font-medium text-xl">{item.name}</h1>
          {!isDetailsVisible && (
            <Image
              src={"/assets/icons/complete.svg"}
              alt={"completed"}
              height={25}
              width={25}
            />
          )}
        </div>
        {isDetailsVisible ? (
          <Image
            src={"/assets/icons/show-less.svg"}
            alt={"show less"}
            onClick={() => setIsDetailsVisible(false)}
            height={20}
            width={20}
            className="rounded-full cursor-pointer"
          />
        ) : (
          <Image
            src={"/assets/icons/show-more.svg"}
            alt={"show less"}
            onClick={() => setIsDetailsVisible(true)}
            height={25}
            width={25}
            className="rounded-full cursor-pointer"
          />
        )}
      </div>
      {isDetailsVisible && (
        <>
          <div
            className="bg-[#E8F1FD] p-3 pr-0 mb-[23px] h-16 overflow-auto"
            style={{
              boxShadow: "1px 1px 4px 0px rgba(48, 80, 125, 0.25) inset",
            }}
          >
            <p className="text-[#6C86A8]">{item.details}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-[10px]">
              <Image
                src={"/assets/icons/edit.svg"}
                alt={"edit"}
                onClick={() => setShowModal(true)}
                height={20}
                width={20}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/icons/trash.svg"}
                alt={"delete"}
                onClick={() => handleDeleteItem()}
                height={25}
                width={25}
                className="cursor-pointer"
              />
            </div>
            <div className="flex gap-1 items-center">
              <h2 className="text-sm font-medium">Mark Completed</h2>
              <Image
                src={"/assets/icons/complete.svg"}
                alt={"completed"}
                height={25}
                width={25}
              />
            </div>
          </div>
        </>
      )}
      {showModal && (
        <AddTask
          closeModal={() => setShowModal(false)}
          item={item}
          handleClick={(item: Item) => handleEditItem(item)}
        />
      )}
    </div>
  );
}

export { List };
