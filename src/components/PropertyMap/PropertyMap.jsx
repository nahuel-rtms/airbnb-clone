import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapFunctions from './MapFunctions'; // Asegúrate de tener este import correctamente definido
import { useEffect } from "react";
import { debounce } from "lodash";
import useMarkerStore from "../../stores/markerStore";
import PropertyCard from "../PropertyCard/PropertyCard";

const center = [-34.60371, -58.38156];
const zoom = 13;

function PropertyMap() {
  const { markers } = useMarkerStore(); // Extrae correctamente los markers del store

  // Agregar logs útiles para depuración
  useEffect(() => {
    console.log("Total markers in store:", markers?.length || 0);
  }, [markers]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: 94 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Componente que maneja el movimiento y filtrado */}
        <MapFunctions />

        {/* MarkerClusterGroup con chunkedLoading para mejorar el rendimiento */}
        <MarkerClusterGroup chunkedLoading>
          {markers?.length > 0 ? (
            markers.map((spot, index) => (
              <Marker
                key={index}
                position={[spot.latitude, spot.longitude]}
                title={spot.name}
                eventHandlers={{
                  click: () => console.log(`Clicked on marker: ${spot.name} (${spot.latitude}, ${spot.longitude})`),
                }}
              >
                <Popup>
                  {/* Usando un componente de tarjeta para mostrar los detalles */}
                  <PropertyCard item={spot} />
                </Popup>
              </Marker>
            ))
          ) : (
            null // Puedes mostrar un mensaje o loading si prefieres
          )}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default PropertyMap;
