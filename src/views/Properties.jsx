import { lazy, Suspense } from "react";
import PropertyList from "../components/PropertyList/PropertyList";
import LoadingSpinner from "../components/LoadingSpinner";


function Properties() {

const Map = lazy(() => import("../components/PropertyMap/PropertyMap"))

  return (
    <div className="w-full h-full">
      <div className="flex h-[10%] w-full space-x-5 bg-base-100 items-center px-10">
        <input
          type="text"
          placeholder="Ubicacion"
          className="input input-bordered w-full max-w-xs"
        />
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Dormitorios y baños
          </option>
          <option>No disponible con este dataset</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Operacion y precio
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Tipo de propiedad
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <button className="btn btn-neutral">Limpiar filtro</button>
      </div>
      <div className="w-full h-[90%] flex">
        <div className="h-full w-[52%] bg-base-200">
          <Suspense fallback={<LoadingSpinner /> }>
            <Map latitude={"-33.8688"} longitude={"151.2093"} />
          </Suspense>
        </div>
        <div className="h-full w-[48%]">
          <PropertyList />
        </div>
      </div>
    </div>
  );
}

export default Properties;
