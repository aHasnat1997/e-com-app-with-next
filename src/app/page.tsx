import Image from "next/image";
import Hero from "./home/Hero";
import HealthyCard from "./home/HealthyCard";
import TopProducts from "./home/TopProducts";
import Banner from "./home/Banner";
import NewArrivals from "./home/NewArrivals";

export default function Home() {
  return (
    <main>
      <Hero />
      <HealthyCard />
      <TopProducts />
      <Banner />
      <NewArrivals />
    </main>
  );
}
