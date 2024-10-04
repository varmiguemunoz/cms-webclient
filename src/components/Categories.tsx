import { getCategoriesInfo } from "@/utils/get-home-info";
import { CategoriesProps } from "@/types";

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default async function Categories() {
  const categories = await getCategoriesInfo();

  return (
    <div className="grid grid-cols-3 gap-8 items-center justify-center py-14 bg-gray-300 px-10">
      {categories.map(
        ({
          name,
          description,
          rawImage,
          documentId,
          slug,
        }: CategoriesProps) => (
          <Link key={documentId} href={`/categories/${slug}`}>
            <div className="flex flex-col gap-5 bg-gray-200 px-5 py-5 rounded-lg cursor-pointer transition ease-in-out duration-500 hover:scale-105">
              <div className="flex flex-col gap-2 items-start justify-start">
                <h1 className="text-3xl font-bold text-gray-600 capitalize">
                  {name}
                </h1>
                <p className="font-medium text-gray-700">{description}</p>
              </div>

              <Image
                src={rawImage}
                alt={name}
                width={500}
                height={300}
                loading="lazy"
                className="w-auto h-[300px] rounded-lg object-cover"
              />
            </div>
          </Link>
        )
      )}
    </div>
  );
}
