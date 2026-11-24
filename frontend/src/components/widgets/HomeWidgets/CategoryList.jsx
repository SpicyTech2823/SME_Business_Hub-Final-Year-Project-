import { UtensilsCrossed, Cap, HeartPulse, Ellipsis, Zap } from "lucide-react";
const CategoryList = () => {
  // category list
  const categories = [
    {
      name: "Food & Beverages",
      icon: UtensilsCrossed,
    },
    {
      name: "Fashion & Apparel",
      icon: Cap,
    },
    {
      name: "Health & Wellness",
      icon: HeartPulse,
    },
    {
      name: "Electronics & Computers",
      icon: Zap,
    },
    {
      name: "more",
      icon: Ellipsis,
    },
  ];
  return (
    <div className="mt-16">
      <h2 className="mb-6 text-2xl font-semibold text-sky-700 sm:text-2xl lg:text-3xl text-center">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 hover:cursor-pointer">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center gap-2 rounded-lg bg-[#E4E5E4] p-4 text-center transition hover:bg-[#D9D9D9]"
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-gray-50 shadow-md flex items-center justify-center text-4xl">
              <category.icon className="h-8 w-8 text-[#3B8D5C]" />
            </div>

            <span className="text-sm font-medium text-[#2E544B]">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
