import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapFunctions from './MapFunctions';
import { useMemo, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import useDatasetStore from "../../stores/datasetStore";
import LoadingSpinner from "../LoadingSpinner";
import PopupCard from "../PopupCard/PopupCard";

const center = [-34.60371, -58.38156];
const zoom = 13;

function PropertyMap() {
  const { dataset, isLoading } = useDatasetStore();
  const [sliced, setSliced] = useState([]); // Mueve el useState fuera del useMemo

  // Actualiza el estado cuando el dataset cambia
  useMemo(() => {
    if (dataset) {
      const datasetLength = dataset.length;
      const result = dataset.slice(0, datasetLength / 10);
      setSliced(result);
    }
  }, [dataset]);

  // Genera los markers basados en el estado 'sliced'
  const markers = sliced.map((spot, index) => (
    <Marker
      key={index}
      position={[spot.latitude, spot.longitude]}
      title={spot.name}
      eventHandlers={{
        click: () => console.log(`Clicked on marker: ${spot.name} (${spot.latitude}, ${spot.longitude})`),
      }}
    >
      <Popup>
        {/* <PopupCard name={spot.name} neighbourhood={spot.neighbourhood} price={spot.price} host_name={spot.host_name} /> */}
        <div className="w-full h-full flex flex-col items-center justify-center p-5">
          <p className="text-lg font-thin">{spot.name}</p>
          <p className="text-lg font-bold">$ {spot.price}</p>
        </div>
      </Popup>
    </Marker>
  ));

  return (
    <div className="w-full h-full flex items-center justify-center">
      <MapContainer
        preferCanvas={true}
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: 94 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapFunctions />
        {isLoading ? <LoadingSpinner /> :
          <MarkerClusterGroup chunkedLoading>
            {markers}
          </MarkerClusterGroup>}
      </MapContainer>
    </div>
  );
}

export default PropertyMap;
