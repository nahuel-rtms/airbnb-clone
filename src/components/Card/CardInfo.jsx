import { Bathtub, Bed, Cube } from "@phosphor-icons/react";

function CardInfo( item ) {

  // console.log(item)

  return (
    <div className="w-full h-full p-3">
      <div className="w-full h-[60%] ">
        <p className="font-bold line-clamp-1">{item.item.item.name}</p>
        <p className="font-light">{item.item.item.neighbourhood}</p>
        <p className="font-bold text-lg">$ {item.item.item.price}</p>
      </div>
      <div className="w-full h-[20%]  flex space-x-3">
        <div className="flex items-center space-x-1">
          <Bathtub size={20} weight="thin" />
          <p className="font-thin">2</p>
        </div>
        <div className="flex items-center space-x-1">
          <Bed size={20} weight="thin" />
          <p className="font-thin">2</p>
        </div>
        <div className="flex items-center space-x-1">
          <Cube size={20} weight="thin" />
          <p className="font-thin">2</p>
        </div>
      </div>
      <div className="w-full flex items-center h-[20%] ">
        <p className="font-thin text-sm">
          Anunciado por <span className="color-red">{item.item.item.host_name}</span>
        </p>
      </div>
    </div>
  );
}

export default CardInfo;
