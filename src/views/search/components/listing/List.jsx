import Card from "../../../../components/Card/Card";

function List() {
  return (
    <div className="h-full w-full bg-base-300">
      <div className="h-[15%] w-full p-5 space-y-1">
        <p className="font-bold text-xl">Buenos Aires - Alquiler</p>
        <p className="font-bold">1236 resultados</p>
      </div>
      <div className="w-full h-[85%] grid grid-cols-2 gap-2 p-5 overflow-scroll no-scrollbar">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default List;
