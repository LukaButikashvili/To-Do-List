import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function Avatar({ src, alt, width, height }: IProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-full"
    />
  );
}

export default Avatar;
