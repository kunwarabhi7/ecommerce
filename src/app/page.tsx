import Banner from "@/components/Banner";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex flex-col space-x-4">
      <Banner />
      <Products />
    </main>
  );
}
