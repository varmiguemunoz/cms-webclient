import { query } from "./strapi";
import { CategoriesProps, ProductsProps } from "@/types/index";

const { STRAPI_HOST } = process.env;

export async function getHomeInfo() {
  const { data } = await query("home?populate=cover");

  const { title, description, cover } = data;

  const image = `${STRAPI_HOST}${cover.url}`;

  return { title, description, image };
}

export async function getCategoriesInfo() {
  const { data } = await query(
    "product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url"
  );

  return data.map((category: CategoriesProps) => {
    const { name, description, image, slug, documentId, id } = category;
    const rawImage = `${STRAPI_HOST}${image.url}`;

    return {
      name,
      description,
      rawImage,
      slug,
      documentId,
      id,
    };
  });
}

export async function getProductInfo({ categoryId }: { categoryId: string }) {
  const { data, meta } = await query(
    `products?filters[product_category][slug][$contains]=${categoryId}&populate=images`
  );

  const products = data.map((category: ProductsProps) => {
    const { name, description, images, slug, documentId, price, stock } =
      category;

    const rawImage = `${STRAPI_HOST}${images[0].url}`;

    return {
      name,
      description,
      rawImage,
      slug,
      documentId,
      price,
      stock,
    };
  });

  return { products, pagination: meta.pagination };
}
