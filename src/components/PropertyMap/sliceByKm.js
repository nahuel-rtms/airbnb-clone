export default function sliceByKm(km, list) {
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