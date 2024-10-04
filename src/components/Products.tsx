import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import React from "react";

interface ProductsProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description: any;
  rawImage: string;
  price: number;
}

export default function Products({
  name,
  description,
  rawImage,
  price,
}: ProductsProps) {
  return (
    <article className="px-6 py-8 bg-gray-100 rounded-lg flex flex-col gap-5 transition duration-300 ease-in-out hover:bg-gray-300 hover:scale-90">
      <div className="rounded-lg">
        <Image
          src={rawImage}
          alt={name}
          width={500}
          height={500}
          loading="lazy"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col items-start justify-start gap-3">
        <h1 className="text-2xl text-gray-700 font-bold">{name}</h1>
        <div className="text-gray-600 font-medium">
          <BlocksRenderer content={description} />
        </div>

        <p className="text-gray-800 font-bold text-xl">${price}</p>

        <button className="border rounded-lg px-4 py-4 w-[150px] bg-gray-400 text-white font-bold transition duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
          Buy Now
        </button>
      </div>
    </article>
  );
}
