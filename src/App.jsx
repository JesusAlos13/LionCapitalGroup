import React, { useState } from "react";
import PropertyList from "./properties/PropertyList";

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 drop-shadow-lg mb-12">
        Listado de Propiedades
      </h1>

      
      <PropertyList onSelect={setSelectedProperty} />

      
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl max-w-lg w-full shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">{selectedProperty.title}</h2>
            <img
              src={selectedProperty.images?.[0] || "https://source.unsplash.com/500x300/?house"}
              alt={selectedProperty.title}
              className="w-full h-56 object-cover rounded mb-4"
            />
            <p className="mb-4 text-gray-700">{selectedProperty.description}</p>
            <p className="text-gray-900 font-semibold mb-2">
              {selectedProperty.currency} {selectedProperty.price?.toLocaleString() || "-"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {selectedProperty.bedrooms ? `${selectedProperty.bedrooms} hab` : ""}{" "}
              {selectedProperty.bathrooms ? `| ${selectedProperty.bathrooms} baños` : ""}{" "}
              {selectedProperty.area ? `| ${selectedProperty.area} m²` : ""}
            </p>
            <button
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition font-semibold"
              onClick={() => setSelectedProperty(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
