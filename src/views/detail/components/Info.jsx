import { Bathtub, Campfire, PawPrint, Wheelchair } from "@phosphor-icons/react";
import Map from "./Map";

function Info() {
  return (
    <div className="flex-1 space-y-32 pb-48 pr-2">
      <div className="flex flex-col">
        <p className="font-bold text-sm text-stone-600">
          Departamento · 90m² · 4 ambientes
        </p>
        <div className="space-y-2">
          <p className="font-bold text-2xl">Venta USD 144.000</p>
          <p className="font-medium text-md">Departamento en Ituzaingó</p>
        </div>
      </div>
      <div className="h-96 rounded-lg overflow-hidden">
        <Map latitude={"123.2093"} longitude={"133.2093"} />
      </div>
      <div className="space-y-5">
        <p className="text-xl font-bold">Descripcion</p>
        <p>
          Este amplio departamento de dos ambientes cuenta con un living-comedor
          con cocina integrada y un balcón. El dormitorio principal incluye un
          placard empotrado y hay un baño completo. El edificio ofrece seguridad
          nocturna, laundry, una terraza compartida con parrilla, salón de usos
          múltiples y gimnasio. Los requisitos incluyen un contrato a 2 años,
          ajuste trimestral según IPC, garantía propietaria y comprobante de
          ingresos. La capacidad máxima es de 2 personas, no se aceptan
          mascotas, el depósito en garantía es de U$500 y las expensas mensuales
          son de $60,000.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7 font-thin">
        <div className="flex space-x-2">
          <Bathtub size={24} weight="thin" />
          <p>2</p>
          <p>Banio</p>
        </div>
        <div className="flex space-x-2">
          <Bathtub size={24} weight="thin" />
          <p>2</p>
          <p>Dormitorio</p>
        </div>
        <div className="flex space-x-2">
          <Bathtub size={24} weight="thin" />
          <p>45 m de superficie total</p>
        </div>
        <div className="flex space-x-2">
          <Campfire size={24} weight="thin" />
          <p>Parrilla</p>
        </div>
        <div className="flex space-x-2">
          <PawPrint size={24} weight="thin" />
          <p>Apto para mascotas</p>
        </div>
        <div className="flex space-x-2">
          <Wheelchair size={24} weight="thin" />
          <p>Ascensor</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
