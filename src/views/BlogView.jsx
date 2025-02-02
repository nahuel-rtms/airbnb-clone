import BlogPostContainer from "../components/blog/BlogContainer";

function BlogView () {
    return (
        <div className="flex flex-col w-full h-full overflow-scroll no-scrollbar">
             <div className="flex h-[10%] w-full space-x-5 bg-base-100 items-center px-10">
            <input
                type="text"
                placeholder="Ubicacion"
                className="input input-bordered w-full max-w-xs"
            />
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                    Dormitorios y baños
                </option>
                <option>This feature is still under development</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                    Operacion y precio
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
            <BlogPostContainer/>
        </div>
    )
}

export default BlogView;