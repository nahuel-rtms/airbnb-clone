import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapFunctions from './MapFunctions';
import { useMemo, useState } from "react";
import useDatasetStore from "../../stores/datasetStore";
import LoadingSpinner from "../LoadingSpinner";
import './Popup.css';
import image from "../../assets/house.jpg"

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
      <Popup className="custom-popup">
        <div className="container">
          <img src={image} alt="popup-image" width={"100%"}/>
          <div className="content">
            <p className="name">{spot.name}</p>
            <p className="price">$ {spot.price}</p>
          </div>
        </div>
      </Popup>
    </Marker>
  ));

  return (
    <div className="w-full h-full flex items-center justify-center relative z-0">
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
