import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({products}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          products.map((product,index)=> (
            <Link key={index} to={`/products/${product._id}`} className='block'>
              <div className="border border-gray-200 p-2 rounded-lg ">
                  <div className="w-full h-96 mb-4">
                    <img src={product.images[0].url} alt={product.name} className='w-full h-[90%] object-cover rounded-lg'/>
                    <h3 className="text-small mb-2">{product.name}</h3>
                    <p className='text-gray-500 fonr-600 '>₹{product.price}</p>
                  </div>
              </div>
            </Link>
            )
          )
        }
    </div>
  )
}

export default ProductGrid
