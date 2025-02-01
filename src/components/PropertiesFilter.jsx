function PropertiesFilter() {
    return (
        <div className="flex h-[10%] w-full space-x-5 bg-base-100 items-center px-10">
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                    Precio
                </option>
                <option>This feature is still under development</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                    Ubicacion
                </option>
                <option>This feature is still under development</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                    Tipo de propiedad
                </option>
                <option>This feature is still under development</option>
            </select>
            <button className="btn btn-neutral">Limpiar filtro</button>
        </div>
    )
}

export default PropertiesFilter;