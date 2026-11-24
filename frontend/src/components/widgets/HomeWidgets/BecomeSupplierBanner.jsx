import React from "react";
import call from "../../../assets/call.jpg";
const BecomeSupplierBanner = () => {
    const benefits = [
      "6 lakh+ Trust Shopora to sell online",
      "11 Crore+ Customers buying across India",
      "28000+ Pincode Supported for delivery",
      "700+ Categories to sell online",
    ];
  
    return (
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl bg-[#f8f9fb] shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          
          {/* Left Image Section with Right Fade */}
          <div className="relative md:col-span-6 h-72 md:h-full min-h-[360px]">
            <img
              src={call}
              alt="Shopora seller working on laptop"
              className="w-full h-full object-cover object-left"
            />
            {/* Gradient overlay to blend the image smoothly into the right side */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-36 bg-gradient-to-r from-transparent to-[#f8f9fb]" />
            <div className="md:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f8f9fb] to-transparent" />
          </div>
  
          {/* Right Content Section */}
          <div className="md:col-span-6 p-8 md:py-12 md:px-10 z-10">
            <h2 className="text-3xl font-bold text-[#143d7a] mb-2">
              Become Supplier
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-6 max-w-md leading-relaxed">
              Become a Shopora seller and grow your business across India.
            </p>
  
            {/* Checklist */}
            <ul className="space-y-3.5 mb-8">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-600 shrink-0">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-semibold text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
  
            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 bg-[#164b9a] hover:bg-[#103875] text-white font-medium text-sm px-6 py-3 rounded-full shadow-sm transition cursor-pointer">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Become Supplier
            </button>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default BecomeSupplierBanner;
  