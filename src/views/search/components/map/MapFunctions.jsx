import { debounce } from "lodash";
import { useEffect, useState, useCallback } from "react";
import { useMap } from "react-leaflet"; // Asumiendo que usas React-Leaflet
import useDatasetStore from "../../../../stores/datasetStore";
import useMarkerStore from "../../../../stores/markerStore";

// Corrigiendo el parámetro list
function sliceByKm(km, list) {
  let reduced;
  if (km > 10) {
    reduced = list.slice(0, 5000);
  } else if (km > 5) {
    reduced = list.slice(0, 1000);
  } else if (km <= 5) {
    reduced = list.slice(0, 500);
  }
  console.log(`Displaying ${reduced.length} items based on zoom level (km: ${km})`);
  return reduced;
}

const filterByBounds = debounce((km, northEastBound, southWestBound, data) => {
  const latMin = southWestBound.lat;
  const latMax = northEastBound.lat;
  const lonMin = southWestBound.lng;
  const lonMax = northEastBound.lng;

  const filtered = data.filter((item) => {
    return (
      item.latitude >= latMin &&
      item.latitude <= latMax &&
      item.longitude >= lonMin &&
      item.longitude <= lonMax
    );
  });
  
  console.log(`Filtered ${filtered.length} items based on map bounds.`);
  
  const sliced = sliceByKm(km, filtered);
  return sliced;
}, 300);

function MapFunctions() {
  const map = useMap();
  const { dataset } = useDatasetStore();
  const { setMarkers } = useMarkerStore();

  const [bounds, setBounds] = useState(null);
  const [mapWidthKM, setMapWidthKm] = useState(null);

  const onMove = useCallback(() => {
    const result = map.getBounds();
    console.log("Map moved. New bounds:", result);
    setBounds(result);
  }, [map]);

  useEffect(() => {
    if (bounds) {
      const northEastBound = bounds.getNorthEast();
      const southWestBound = bounds.getSouthWest();

      const widthInMeters = map.distance(northEastBound, southWestBound);
      const widthInKm = widthInMeters / 1000;
      setMapWidthKm(widthInKm);

      // Filtramos los elementos visibles en el mapa según el bounds actual y el dataset
      const result = filterByBounds(widthInKm, northEastBound, southWestBound, dataset);
      setMarkers(result); // Se corrige la variable usada para setMarkers
    }
  }, [bounds, map, dataset, setMarkers]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  return null;
}

export default MapFunctions;
