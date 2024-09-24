import { useEffect, useCallback } from "react";
import { useMap } from "react-leaflet";
import useDatasetStore from "../stores/datasetStore";
import useListingStore from "../stores/listingStore";

function useMapBounds() {
  const map = useMap();
  const { dataset } = useDatasetStore(); 
  const { setList, setBounds, bounds } = useListingStore();

  const onMove = useCallback(() => {
    const result = map.getBounds();
    console.log("Map moved. New bounds:", result);
    setBounds(result); 
  }, [map, setBounds]);

  useEffect(() => {
    if (bounds && dataset) {
      const filteredList = dataset.filter((item) => {
        const markerLatLng = [item.latitude, item.longitude]; 
        return bounds.contains(markerLatLng); 
      });

      const listLength = filteredList.length
      const sliced = filteredList.slice(0, listLength / 3 )

      setList(sliced); 
      console.log(`Filtered ${filteredList.length} items based on map bounds.`);
    }
  }, [bounds, dataset, setList]);

  useEffect(() => {
    map.on("move", onMove); 
    return () => {
      map.off("move", onMove); 
    };
  }, [map, onMove]);
}

export default useMapBounds;
