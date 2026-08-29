"use client";

import { useState } from "react";

type Data = {
  data: { id: number; title: string }[]; // El [] al final = "es un array de estos objetos"
};

export default function ItemList({ data }: Data) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full">
      <h1 className="text-2xl text-center">To-do list</h1>
      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Buscar
        </label>
        <input
          type="search"
          className="w-full px-3 py-2 border border-gray-200 rounded-xl outline-none"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        ></input>
      </div>

      <ul className="space-y-2 list-decimal list-inside">
        {filteredItems.map((item: { id: number; title: string }) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
