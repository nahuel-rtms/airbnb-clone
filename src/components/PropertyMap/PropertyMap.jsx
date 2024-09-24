import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapFunctions from './MapFunctions';
import { useEffect, useMemo } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import useListingStore from "../../stores/listingStore";
import useDatasetStore from "../../stores/datasetStore";

const center = [-34.60371, -58.38156];
const zoom = 13;

function PropertyMap() {
  const { list } = useListingStore();
  const { dataset } = useDatasetStore();

  const datasetLength = dataset.length
  const sliced = dataset.slice(0, datasetLength / 4)

  useEffect(() => {
    console.log("Total properties in store:", list?.length || 0);
  }, [list]);

  const markers = useMemo(() => {
    return sliced?.map((spot, index) => (
      <Marker
        key={index}
        position={[spot.latitude, spot.longitude]}
        title={spot.name}
        eventHandlers={{
          click: () => console.log(`Clicked on marker: ${spot.name} (${spot.latitude}, ${spot.longitude})`),
        }}
      >
        <Popup>
          <PropertyCard item={spot} />
        </Popup>
      </Marker>
    ));
  }, []);

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
        <MarkerClusterGroup chunkedLoading>
          {markers}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default PropertyMap;
