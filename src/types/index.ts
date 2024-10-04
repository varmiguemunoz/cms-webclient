interface CategoriesProps {
  name: string;
  description: string;
  documentId: string;
  id: number;
  slug?: string;
  rawImage: string;
  image: {
    url: string;
  };
}

interface ProductsProps {
  name: string;
  description: string;
  documentId: string;
  slug?: string;
  rawImage: string;
  images: {
    url: string;
  }[];
  price: number;
  stock: number;
}

export type { CategoriesProps, ProductsProps };
