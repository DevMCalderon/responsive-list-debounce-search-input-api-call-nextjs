"use client";

import { useEffect, useState } from "react";

type Data = {
  data: { id: number; title: string }[]; // El [] al final = "es un array de estos objetos"
};

export default function ItemList({ data }: Data) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Valor debounceado (se actualiza después de 300ms sin escribir)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const filteredItems = data.filter((item) =>
    item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
  );

  return (
    <div className="p-10 mx-auto sm:w-2/3 lg:w-3/7">
      <h1 className="text-2xl text-center mb-4">
        Responsive list, debounce search input, API call
      </h1>
      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Buscar
        </label>
        <input
          type="search"
          className="w-full px-3 py-2 border border-gray-200 rounded-xl outline-none"
          placeholder="Search something..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        ></input>
      </div>

      <ul className="space-y-2 list-decimal list-inside">
        {filteredItems && filteredItems.length > 0 ? (
          filteredItems.map((item: { id: number; title: string }) => (
            <li key={item.id}>{item.title}</li>
          ))
        ) : (
          <div>No matches were found.</div>
        )}
      </ul>
    </div>
  );
}
