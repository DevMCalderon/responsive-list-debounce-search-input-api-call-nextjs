import ItemList from "@/components/item-list";

export default async function Home() {
  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!res) throw new Error("Fallo al obtener los datos");

    return res.json();
  }

  const data = await getData();

  return <ItemList data={data} />;
}
