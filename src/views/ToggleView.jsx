import PropertiesFilter from "../components/PropertiesFilter"
import PropertyMap from "../components/PropertyMap/PropertyMap"

function ToggleView() {
    return (
        <div className="flex flex-col w-full h-full overflow-scroll no-scrollbar relative">
            <PropertiesFilter />
            <PropertyMap />
            <button className="btn btn-primary text-white btn-circle min-w-fit px-5 items-center justify-center absolute bottom-8 right-1/2 translate-x-1/2">List View</button>
        </div>
    )
}

export default ToggleView