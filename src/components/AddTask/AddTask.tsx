import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useId } from "react";
import { Item, Statuses } from "@/types/list";

interface IProps {
  item?: Item;
  handleClick: (item: Item) => Promise<void>;
  closeModal: () => void;
}

function AddTask({ item, closeModal, handleClick }: IProps) {
  const id = useId();

  const [name, setName] = useState(item?.name || "");
  const [details, setDetails] = useState(item?.details || "");

  return (
    <Modal>
      <div className="flex flex-col gap-2 p-3">
        <div className="flex justify-between items-center">
          <div className="w-5"></div>
          <h1 className="text-[#30507D]">Create Task</h1>
          <Image
            className="cursor-pointer"
            onClick={() => closeModal()}
            src={"/assets/icons/close.svg"}
            alt={"close"}
            height={20}
            width={20}
          />
        </div>
        <label htmlFor="textInput">Your Label:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-md text-[#30507D]"
          id="textInput"
          name="textInput"
          placeholder="Task Name"
        />
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full py-5 px-3 rounded-md h-24 resize-none text-[#30507D] bg-[#E8F1FD]"
          style={{
            boxShadow: "1px 1px 4px 0px rgba(48, 80, 125, 0.25) inset",
          }}
          placeholder="Type task details here..."
        />
        <button
          className="rounded-md py-[10px] bg-[#6A6CE0]"
          onClick={() =>
            handleClick({
              name,
              details,
              id: item?.id || id,
              status: Statuses.TODO,
            })
          }
        >
          Save
        </button>
      </div>
    </Modal>
  );
}

export default AddTask;
