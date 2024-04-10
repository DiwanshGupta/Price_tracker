import HeroCarsousel from "@/components/heroCarsousel";
import Searchbar from "@/components/searchBar";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <section className="px-6 md:px-20 py-24 ">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text items-center">
              Smart shopping <FaArrowRight />
            </p>
            <h1 className="head-text">
              Unleash the power of{" "}
              <span className="text-primary">Price Tracker</span>
            </h1>
            <p className="mt-6">Track your product Price</p>
            <Searchbar />{" "}
          </div>
          <HeroCarsousel />{" "}
        </div>
      </section>
      <section className="trending-section">
        <h2>Trending </h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16"></div>
      </section>
    </>
  );
}
