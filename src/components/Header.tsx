import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import React from "react";

interface HeaderProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description: any;
  image: string;
}

export default function Header({ title, description, image }: HeaderProps) {
  return (
    <header className="flex items-center justify-center gap-10 bg-gray-100 py-10 px-10 rounded-t-lg">
      <div className="flex flex-col gap-7 items-start justify-start">
        <h1 className="text-5xl text-gray-800 font-bold leading-6">{title}</h1>

        <div className="text-gray-700 font-medium">
          <BlocksRenderer content={description} />
        </div>

        <button className="border rounded-lg px-4 py-4 w-56 bg-gray-400 text-white font-bold transition duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
          See all Collections
        </button>
      </div>

      <div className="w-auto">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          loading="lazy"
          className="rounded-lg transition ease-in-out hover:scale-90 cursor-pointer duration-500"
        />
      </div>
    </header>
  );
}
