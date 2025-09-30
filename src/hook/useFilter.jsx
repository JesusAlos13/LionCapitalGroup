// src/hooks/useFilteredProperties.jsx
import { useState, useMemo } from "react";

export default function useFilteredProperties(properties) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("priceAsc");
  const [filterType, setFilterType] = useState("all");

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Filtro por tipo
    if (filterType !== "all") {
      result = result.filter((p) => p.type === filterType);
    }

    // Búsqueda por título o ubicación
    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenación
    if (sortOption === "priceAsc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [properties, searchTerm, sortOption, filterType]);

  return { filteredProperties, searchTerm, setSearchTerm, sortOption, setSortOption, filterType, setFilterType };
}
