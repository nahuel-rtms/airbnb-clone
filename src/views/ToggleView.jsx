import { useState } from "react"
import ListingContainer from "../components/Listing/ListingContainer"
import Map from "../components/map/Map"
import ListingFilter from "../components/listing/ListingFilter"

function ToggleView() {

    const [view, setView] = useState(true)
    // true = map view - false = list view

    let buttonText = view ? "List View" : "Map View"

    return (
        <div className="flex flex-col w-full h-full overflow-scroll no-scrollbar relative">
            <ListingFilter/>
            {view ? <Map /> : <ListingContainer />}
            <button onClick={() => setView(!view)} className="btn btn-primary text-white btn-circle min-w-fit px-5 items-center justify-center absolute bottom-8 right-1/2">{buttonText}</button>
        </div>
    )
}

export default ToggleView