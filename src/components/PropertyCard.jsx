import React from "react";

function PropertyCard({ property, onClick }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-3xl w-80"
      onClick={() => onClick(property)}
    >
      <div className="relative h-64 w-full">
        <img
          src={property.images?.[0] || "https://source.unsplash.com/500x300/?house"}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 px-4 py-1 rounded-full text-sm font-semibold text-white bg-blue-600 shadow-lg">
          {property.status?.toUpperCase() || "DESCONOCIDO"}
        </span>
      </div>

      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800 truncate">{property.title}</h2>
          <p className="text-gray-600 text-sm mb-2 truncate">{property.location}</p>
          <p className="text-gray-900 font-semibold text-xl mb-3">
            {property.currency} {property.price?.toLocaleString() || "-"}
          </p>
          <p className="text-gray-500 text-sm">
            {property.bedrooms ? `${property.bedrooms} hab` : ""}{" "}
            {property.bathrooms ? `| ${property.bathrooms} baños` : ""}{" "}
            {property.area ? `| ${property.area} m²` : ""}
          </p>
        </div>

        <button className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition font-semibold">
          Ver detalles
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
