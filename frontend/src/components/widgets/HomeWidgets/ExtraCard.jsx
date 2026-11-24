const ExtraCard = ({icon, title, description}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow  text-center transition hover:shadow-lg w-full sm:w-80 flex flex-col items-center">
      {/* Circle background with shadow for the icon */}
      <div className="w-16 h-16 mb-4 rounded-full bg-gray-50 shadow-md flex items-center justify-center text-4xl">
        {icon}
      </div>

      {/* Centered title */}
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>

      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ExtraCard;