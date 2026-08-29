import ItemList from "@/components/item-list";

export default async function Home() {
  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!res) throw new Error("Fallo al obtener los datos");

    return res.json();
  }

  const data = await getData();

  return (
    <div className="mx-auto sm:w-2/3 lg:w-1/3">
      <ItemList data={data} />
    </div>
  );
}
