import react from "react"

 const SortOption=()=>{
    return(
        <>
            <div className="flex items-center gap-2 mb-4 w-1/2 justify-end">
                <p>Sort By</p>
                <select className="border p-2 m-2 rounded-lg">
                    <option value="">Select</option>
                    <option value="">Price: Low to High</option>
                    <option value="">Price: High to Low</option>
                    <option value="">Newest</option>
                    <option value="">Oldest</option>
                </select>
            </div>
        </>
    )
}


export default SortOption;