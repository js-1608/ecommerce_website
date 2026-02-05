import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa"
import SortOption from '../components/Products/SortOption';
import ProductGrid from '../components/Products/ProductGrid';
import FilterSIdeBar from '../components/Products/FilterSIdeBar';


const Collections = () => {


  const [product, setProoduct] = useState([]);
  const sideBarRef = useRef(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const handleClickOutside = (e) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setIsSideBarOpen(false);
    }
  };


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    setTimeout(() => {
      const ProductDetailArray = [
        {
          _id: 1,
          name: "product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/seed/picsum/200/300" }],
        },
        {
          _id: 2,
          name: "product 2",
          price: 120,
          images: [{ url: "https://picsum.photos/id/25/200/300" }],
        },
        {
          _id: 3,
          name: "product 3",
          price: 150,
          images: [{ url: "https://picsum.photos/id/20/200/300" }],
        },
        {
          _id: 4,
          name: "product 4",
          price: 200,
          images: [{ url: "https://picsum.photos/id/3/200/300" }],
        },
      ];
      setProoduct(ProductDetailArray)
    }, 1000)
  }, [])

  return (
    <>
      <div className='flex flex-col items-end'>
        {/* mobile filter button */}
        <button
          onClick={toggleSideBar}
          className='lg:hidden w-20 border p-2 flex justify-center items-center'
        >
          <FaFilter className='mr-2' />
        </button>



      </div>

      {/* filter side bar */}
      <div ref={sideBarRef} className={`max-w-1/3 h-full  bg-white ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300`} >
        <FilterSIdeBar />
      </div>
      <div className='flex items-center justify-between'>
        <h2 className="text-2xl uppercase mb-4 w-2/5">
          All Collection
        </h2>
        <SortOption />
      </div>

      <ProductGrid products={product} />

    </>
  )

}

export default Collections
