import React from "react";
import { useState } from "react";
import bg from "../../assets/bg_image.jpg";
import CategoryList from "../widgets/HomeWidgets/CategoryList";
import { Search } from "lucide-react";
import ProductList from "../widgets/HomeWidgets/ProductList";
import ExtraInfo from "../widgets/HomeWidgets/ExtraInfo";
import BecomeSupplierBanner from "../widgets/HomeWidgets/BecomeSupplierBanner";
const Home = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (onSearch) {
      onSearch(trimmed);
    } else {
      console.log("Searching for:", trimmed);
    }
  };
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headline + Search Form */}
          <div className="lg:col-span-6 gap-6">
            <h1 className="font-medium text-3xl leading-tight tracking-tight text-[#2E544B] sm:text-4xl lg:text-[42px]">
              Support Local Businesses
              <br />
              Build A Stronger Economy
            </h1>

            <div className="mt-16 text-lg text-[#2E544B] sm:text-xl lg:text-2xl">
              <form
                onSubmit={handleSubmit}
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
                role="search"
                aria-label="Search local businesses and products"
              >
                <div className="relative flex-1">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-base"
                  >
                    <Search />
                  </span>
                  <label htmlFor="hero-search" className="sr-only">
                    Search for business or product
                  </label>
                  <input
                    id="hero-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for business, product ..."
                    className="w-full rounded-lg bg-[#E4E5E4] py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-800 focus:bg-[#ECEEEC] focus:outline-none focus:ring-2 focus:ring-[#3B8D5C]"
                  />
                </div>

                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-[#3B8D5C] px-6 py-3 mr-10 font-sans text-sm font-semibold text-white transition hover:bg-[#32794E] focus:outline-none focus:ring-2 focus:ring-[#3B8D5C] focus:ring-offset-2"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Feature Image */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
              <img
                src={bg}
                alt="Supermarket aisles stocked with local and everyday goods with a shopping cart in the foreground"
                className="aspect-[16/9] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <CategoryList />
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-sky-700 sm:text-2xl lg:text-3xl text-center">
            Featured Products
          </h2>
          <ProductList />
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-[#2E544B] sm:text-xl lg:text-2xl">
            We provide quality products and<span className="block">system management.</span> 
          </p>
          <div className="mt-6 flex justify-center gap-4">
             <ExtraInfo />
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-[#2E544B] sm:text-xl lg:text-2xl">
            Join our platform and<span className="block">become a supplier today!</span> 
          </p>
          <div className="mt-16 flex justify-center gap-4">
             <BecomeSupplierBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
