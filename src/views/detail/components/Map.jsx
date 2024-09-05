import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map({ latitude, longitude }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {latitude && longitude ? (
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", zIndex: 94 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>Ubicación</Popup>
          </Marker>
          <Marker position={[latitude, "153.2093"]}>
            <Popup>Ubicación</Popup>
          </Marker>
          <Marker position={[latitude, "141.2093"]}>
            <Popup>Ubicación</Popup>
          </Marker>
          <Marker position={[latitude, "121.2093"]}>
            <Popup>Ubicación</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="h-96 w-full border border-gray-400 flex items-center justify-center bg-orange-100 flex-col">
          <p className="mt-8 text-xs font-fantasy text-orange-400">
            Marca "Location" para el mapa.
          </p>
        </div>
      )}
    </div>
  );
}

export default Map;
