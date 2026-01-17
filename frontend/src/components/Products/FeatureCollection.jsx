import React from 'react'
import featureImage from '../../assets/featured.webp'

const FeatureCollection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-16 mx-auto px-12 w-full">
      <div className="w-full lg:w-1/2">
        <img
          src={featureImage}
          alt="Feature"
          className="w-full h-auto"
        />
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
        <h1 className="text-2xl font-semibold">
          Feature Section
        </h1>
      </div>
    </div>
  )
}

export default FeatureCollection
