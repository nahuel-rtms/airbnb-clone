import { useState } from "react"
import PropertiesFilter from "../components/PropertiesFilter"
import PropertyMap from "../components/Map/Map"
import PropertyList from "../components/PropertyList/PropertyList"

function ToggleView() {

    const [view, setView] = useState(true)
    // true = map view - false = list view

    let buttonText = view ? "List View" : "Map View"

    return (
        <div className="flex flex-col w-full h-full overflow-scroll no-scrollbar relative">
            <PropertiesFilter/>
            {view ? <PropertyMap /> : <PropertyList />}
            <button onClick={() => setView(!view)} className="btn btn-primary text-white btn-circle min-w-fit px-5 items-center justify-center absolute bottom-8 right-1/2">{buttonText}</button>
        </div>
    )
}

export default ToggleView