import Products from "@/components/Products";
import { ProductsProps } from "@/types";
import { getProductInfo } from "@/utils/get-home-info";
import Link from "next/link";
import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";

export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const { products } = await getProductInfo(params);

  return (
    <section className="py-14 flex flex-col gap-14">
      <div className="flex flex-col gap-5">
        <Link href={"/"}>
          <div className="rounded-lg transition duration-500 ease-in-out hover:scale-105 bg-gray-300 items-center gap-2 justify-start flex border-gray-400 py-2 w-[150px] px-3">
            <IoArrowBackCircle size={36} />
            <p className="text-lg font-bold text-gray-600">Go Back</p>
          </div>
        </Link>

        <h1 className="text-5xl font-bold text-gray-800">
          Products by Categories
        </h1>
      </div>

      {products.map(
        ({ rawImage, name, description, price, documentId }: ProductsProps) => (
          <Link key={documentId} href={"#"}>
            <div className="grid grid-cols-3 items-center justify-center">
              <Products
                rawImage={rawImage}
                name={name}
                description={description}
                price={price}
              />
            </div>
          </Link>
        )
      )}
    </section>
  );
}
