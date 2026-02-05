import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterSideBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState({
        category: "",
        gender: "",
        size: [],
        brand: [],
        material: [],
        color: "",
        priceRange: "",
        minPrice: 0,
        maxPrice: 100

    })

    const category = ["Top Wear", "Bottom Wear"]
    const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"]
    const sizes = ["S", "M", "L", "XL", "XXL"]
    const materials = ["Cotton", "Polyester", "Silk", "Wool", "Denim"]
    const brands = ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"]
    const gender = ["Male", "Female", "Unisex"]


    useEffect(() => {
        const params = Object.fromEntries([...searchParams.entries()]);
        setFilter({
            category: params.category || "",
            gender: params.gender || "",
            size: params.size ? params.size.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            color: params.color || "",
            priceRange: params.priceRange || "",
            minPrice: params.minPrice ? parseInt(params.minPrice) : 0,
            maxPrice: params.maxPrice ? parseInt(params.maxPrice) : 100
        });
    }, [searchParams]);

    const handleFilterChange = (e, key) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [key]: value
        });
        setSearchParams({
            ...Object.fromEntries([...searchParams.entries()]),
            [key]:  value
        });
    }


    return (
        <div className="flex flex-col m-2">
            <h2 className="text-2xl uppercase mb-4">
                All Collection
            </h2>
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Category</label>
                <select className="border p-2 rounded-lg" onChange={(e)=>handleFilterChange(e,"category")}>
                    <option value="">Select</option>
                    {
                        category.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Gender</label>
                <select className="border p-2 rounded-lg" onChange={(e)=>handleFilterChange(e,"gender")}>
                    <option value="">Select</option>
                    {
                        gender.map((gender,index)=>(
                            <option key={index} value={gender}>{gender}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Size</label>
                <select className="border p-2 rounded-lg" onChange={handleFilterChange}>
                    <option value="">Select</option>
                    {
                        sizes.map((size,index)=>(
                            <option key={index} value={size}>{size}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Material</label>
                <select className="border p-2 rounded-lg" onChange={handleFilterChange}>
                    <option value="">Select</option>
                    {
                        materials.map((material,index)=>(
                            <option key={index} value={material}>{material}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Brand</label>
                <select className="border p-2 rounded-lg" onChange={handleFilterChange}>
                    <option value="">Select</option>
                    {
                        brands.map((brand,index)=>(
                            <option key={index} value={brand}>{brand}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Color</label>
                <select className="border p-2 rounded-lg" onChange={handleFilterChange}>
                    <option value="">Select</option>
                    {
                        colors.map((color,index)=>(
                            <option key={index} value={color}>{color}</option>
                        ))
                    }
                </select>
            </div>
            {/* <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Price Range</label>
                <select className="border p-2 rounded-lg" onChange={handleFilterChange}>
                    <option value="">Select</option>
                    {
                        priceRange.map((priceRange,index)=>(
                            <option key={index} value={priceRange}>{priceRange}</option>
                        ))
                    }
                </select>
            </div> */}
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Min Price</label>
                <input type="number" className="border p-2 rounded-lg" onChange={handleFilterChange}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Max Price</label>
                <input type="number" className="border p-2 rounded-lg" onChange={handleFilterChange}/>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-lg">Apply</button>
        </div>
    );
};

export default FilterSideBar;
