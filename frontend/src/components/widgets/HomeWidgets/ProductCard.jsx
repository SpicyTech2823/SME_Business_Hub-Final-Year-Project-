import React from 'react'

const ProductCard = ({image, name, category, rate, location}) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg bg-[#E4E5E4] p-4 text-center transition hover:bg-[#D9D9D9]">
        <img src={image} alt={name} className="h-32 w-32 rounded-full object-cover" />
        <h3 className="text-sm font-medium text-[#2E544B]">{name}</h3>
        <p className="text-xs text-[#2E544B]">{category}</p>
        <p className="text-xs text-[#2E544B]">{rate}</p>
        <p className="text-xs text-[#2E544B]">{location}</p>
    </div>
  )
}

export default ProductCard;