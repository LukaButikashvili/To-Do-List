import { FiltersOptions } from "@/types/list";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  src: string;
  alt: string;
  name: string;
  isSelected: boolean;
  onClickHandler: () => void;
}

function Option({ src, alt, name, isSelected, onClickHandler }: IProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center font-medium text-xs">{name}</h2>
      <div
        className="flex items-center justify-center rounded-lg p-1 cursor-pointer w-9"
        style={{ background: isSelected ? "#6A6CE0" : "#D8D8D8" }}
        onClick={() => onClickHandler()}
      >
        <Image src={src} alt={alt} height={28} width={28} />
      </div>
    </div>
  );
}

export default Option;
