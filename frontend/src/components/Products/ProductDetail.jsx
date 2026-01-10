import React from "react";

const selectProduct = {
  name: "Classic White T-Shirt",
  description:
    "A timeless white t-shirt made from 100% organic cotton. Features a crew neck and short sleeves, perfect for everyday wear.",
  price: 25,
  originalPrice: 20,
  brand: "EcoWear",
  sizes: ["S", "M", "L", "XL"],
  colors: ["White", "Black", "Gray"],
  material: "Organic Cotton",
  images: [
    {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "Classic White T-Shirt",
    },
    {
      src: "https://picsum.photos/id/237/200/300",
      alt: "Classic White T-Shirt Back View",
    },
    {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "Classic White T-Shirt Side View",
    },
    {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "Classic White T-Shirt Side View",
    },
    {
      src: "https://picsum.photos/id/237/200/300",
      alt: "Classic White T-Shirt Back View",
    },
  ],
};

const ProductDetail = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg ">
      <div className="flex flex-col md:flex-row">
        {/* left thumbanil */}
        <div className="hidden md:flex flex-col space-y-4 mr-6">
          {selectProduct.images.map((image, index) => (
            <img
              src={image.src}
              alt={image.alt}
              key={index}
              className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75"
            />
          ))}
        </div>
        {/* main image */}
        <div className="md:w-1/2">
          <div className="mb-4">
            <img
              src={selectProduct.images[0]?.src}
              alt=""
              className="w-full max-w-sm h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* mobile thumbnial */}
        <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
          {selectProduct.images.map((image, index) => (
            <img
              src={image.src}
              alt={image.alt}
              key={index}
              className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 shrink-0"
            />
          ))}
        </div>

        {/* right side */}
        <div className="md:m-1/2 md:ml-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            {selectProduct.name}
          </h1>
          <p className="text-lg texxt-gray-400 mb-1 line-through">
            {selectProduct.originalPrice && `${selectProduct.originalPrice}`}
          </p>
          <p className="text-xl text-gray-500 mb-2">
            ${selectProduct.price}
          </p>
          <p>{selectProduct.description}</p>
          <div className="flex gap-2 mt-2">
            {
              selectProduct.colors.map((color)=>(
                <button
                  key={color}
                  className="w-8 h-8 rounded-full border"
                  style={{background:color.toLowerCase(),filter:"brightness(0.9"}}
                ></button>
              ))
            }
          </div>

          <div className="mb-4">
            <p className="text-gray-700">
              size
            </p>
             <div className="flex gap-2 mt-2">
            {
              selectProduct.sizes.map((size)=>(
                <button
                  key={size}
                  className="w-8 h-8 rounded-lg border"
                >{size}</button>
              ))
            }
          </div>

          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ProductDetail;
