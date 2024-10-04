import Categories from "@/components/Categories";
import Header from "@/components/Header";
import { getHomeInfo } from "@/utils/get-home-info";

export default async function Home() {
  const { title, description, image } = await getHomeInfo();

  return (
    <div className="w-full h-full">
      <Header title={title} description={description} image={image} />

      <Categories />
    </div>
  );
}
