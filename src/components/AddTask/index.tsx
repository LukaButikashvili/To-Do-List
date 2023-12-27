import Image from "next/image";
import { useState } from "react";
import AddTask from "./AddTask";
import { Item } from "@/types/list";
import { addItemToLocalstorage } from "@/utils/list";
import { useList } from "@/store/list";

interface IProps {}

function AddTaskButton({}: IProps) {
  const { list, setList } = useList();

  const [showModal, setShowModal] = useState(false);

  const handleSave = async (item: Item) => {
    const addItem = await addItemToLocalstorage("to-do-list", list, {
      ...item,
    }).then((data) => {
      setList(data);
      setShowModal(false);
    });
  };

  return (
    <>
      <div
        className="h-full flex justify-center items-center"
        onClick={() => setShowModal((prev) => !prev)}
      >
        <Image
          src={"/assets/icons/add-button.svg"}
          alt={"add button"}
          height={15}
          width={15}
        />
      </div>
      {showModal && (
        <AddTask
          handleClick={(item: Item) => handleSave(item)}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default AddTaskButton;
