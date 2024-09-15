import { MapContainer, TileLayer } from "react-leaflet";
import MapEvent from "./DetailMapEvent";

function DetailMap() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <MapContainer
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: 94 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapEvent />
      </MapContainer>
    </div>
  );
}

export default DetailMap;
