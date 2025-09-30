import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard.jsx";
import propertiesData from "../data/properties.json";
import useFilteredProperties from "../hook/useFilter.jsx";

function PropertyList({ onSelect }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProperties(propertiesData);
      setLoading(false);
    }, 500);
  }, []);

  const {
    filteredProperties,
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    filterType,
    setFilterType,
  } = useFilteredProperties(properties);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-80">
        <p className="text-gray-700 text-lg font-medium">Cargando propiedades...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Buscar por título o ubicación..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-5 py-3 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full md:w-1/4 px-5 py-3 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="priceAsc">Precio: menor a mayor</option>
          <option value="priceDesc">Precio: mayor a menor</option>
        </select>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-full md:w-1/4 px-5 py-3 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="all">Todos los tipos</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="oficina">Oficina</option>
        </select>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} onClick={onSelect} />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-3">
              No se encontraron propiedades.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
