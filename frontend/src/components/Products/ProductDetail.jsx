import React, { useState, useCallback, useMemo, memo } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
/* -------------------- Product Data -------------------- */
const selectProduct = {
  name: "Classic White T-Shirt",
  description:
    "A timeless white t-shirt made from 100% organic cotton. Features a crew neck and short sleeves, perfect for everyday wear.",
  price: 20,
  originalPrice: 25,
  brand: "EcoWear",
  sizes: ["S", "M", "L", "XL"],
  colors: ["White", "Black", "Gray"],
  material: "Organic Cotton",
  images: [
    { src: "https://picsum.photos/seed/picsum/200/300", alt: "Front View" },
    { src: "https://picsum.photos/id/23/200/300", alt: "Back View" },
    { src: "https://picsum.photos/id/2/200/300", alt: "Side View" },
    { src: "https://picsum.photos/id/237/200/300", alt: "Detail View" },
  ],
};

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

const SimilarProducts = [
  {
    _id: 1,
    name: "product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/id/29/200/300" }],
  },
  {
    _id: 2,
    name: "product 2",
    price: 120,
    images: [{ url: "https://picsum.photos/id/55/200/300" }],
  },
  {
    _id: 3,
    name: "product 3",
    price: 150,
    images: [{ url: "https://picsum.photos/id/34/200/300" }],
  },
  {
    _id: 4,
    name: "product 4",
    price: 200,
    images: [{ url: "https://picsum.photos/id/73/200/300" }],
  },
];
/* -------------------- Memoized Components -------------------- */

const ThumbnailList = memo(({ images, activeImage, onSelect }) => (
  <>
    {images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        className={`w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 ${
          activeImage === image.src ? "border" : ""
        }`}
        onClick={() => onSelect(image.src)}
      />
    ))}
  </>
));

const ColorSelector = memo(({ colors, selectedColor, onSelect }) => (
  <div className="flex gap-2 mt-2 items-center">
    {colors.map((color) => (
      <button
        key={color}
        className={`rounded-full border transition ${
          selectedColor === color
            ? "border-black w-8 h-8"
            : "border-gray-200 w-7 h-7"
        }`}
        style={{ backgroundColor: color.toLowerCase() }}
        onClick={() => onSelect(color)}
      />
    ))}
  </div>
));

const SizeSelector = memo(({ sizes, selectedSize, onSelect }) => (
  <div className="flex gap-2 mt-2">
    {sizes.map((size) => (
      <button
        key={size}
        className={`w-8 h-8 rounded-lg border ${
          selectedSize === size ? "bg-gray-500 text-white" : "border-gray-300"
        }`}
        onClick={() => onSelect(size)}
      >
        {size}
      </button>
    ))}
  </div>
));

const QuantitySelector = memo(({ quantity, onIncrease, onDecrease }) => (
  <div className="flex space-x-4 mt-2 items-center text-xl">
    <button className="px-2 py-1 bg-gray-200 rounded" onClick={onDecrease}>
      -
    </button>
    <span>{quantity}</span>
    <button className="px-2 py-1 bg-gray-200 rounded" onClick={onIncrease}>
      +
    </button>
  </div>
));

/* -------------------- Main Component -------------------- */

const ProductDetail = () => {
  const [mainImage, setMainImage] = useState(selectProduct.images[0].src);
  const [selectedColor, setSelectedColor] = useState(selectProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [buttonDisabled, setIsDisabled] = useState(true);

  /* -------------------- Memoized Handlers -------------------- */
  const handleImageSelect = useCallback((src) => {
    setMainImage(src);
  }, []);

  const handleColorSelect = useCallback((color) => {
    setSelectedColor(color);
  }, []);

  const handleSizeSelect = useCallback((size) => {
    setSelectedSize(size);
  }, []);

  const incrementQty = useCallback(() => {
    setQuantity((q) => q + 1);
  }, []);

  const decrementQty = useCallback(() => {
    setQuantity((q) => Math.max(1, q - 1));
  }, []);

  /* -------------------- Memoized Values -------------------- */
  const originalPrice = useMemo(
    () => selectProduct.originalPrice && `$${selectProduct.originalPrice}`,
    []
  );

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("please select the size", {
        duration: 1000,
      });
      return;
    }

    setTimeout(() => {
      toast.success("item added succesfully");
    }, 500);
    setIsDisabled(false);
  };

  /* -------------------- JSX -------------------- */
  return (
    <div className=" mx-auto bg-white p-8 rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/* Desktop Thumbnails */}
        <div className="hidden md:flex flex-col space-y-4 mr-6">
          <ThumbnailList
            images={selectProduct.images}
            activeImage={mainImage}
            onSelect={handleImageSelect}
          />
        </div>

        {/* Main Image */}
        <div className="md:w-1/2 mb-4">
          <img
            src={mainImage}
            alt="Product"
            className="w-full max-w-sm rounded-lg"
          />
        </div>

        {/* Mobile Thumbnails */}
        <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
          <ThumbnailList
            images={selectProduct.images}
            activeImage={mainImage}
            onSelect={handleImageSelect}
          />
        </div>

        {/* Product Info */}
        <div className="md:ml-10">
          <h1 className="text-3xl font-semibold mb-2">{selectProduct.name}</h1>

          <p className="text-lg text-gray-500 mb-1">
            <span className="line-through mr-2">{originalPrice}</span>$
            {selectProduct.price}
          </p>

          <p className="mb-4">{selectProduct.description}</p>

          <ColorSelector
            colors={selectProduct.colors}
            selectedColor={selectedColor}
            onSelect={handleColorSelect}
          />

          <div className="mb-4">
            <p className="text-gray-700 mt-4">Size</p>
            <SizeSelector
              sizes={selectProduct.sizes}
              selectedSize={selectedSize}
              onSelect={handleSizeSelect}
            />
          </div>

          <div className="mb-6">
            <p className="text-gray-700">Quantity</p>
            <QuantitySelector
              quantity={quantity}
              onIncrease={incrementQty}
              onDecrease={decrementQty}
            />
          </div>

          {buttonDisabled ? (
            <button
              onClick={handleAddToCart}
              className={`bg-black text-white w-full py-2 rounded mb-4`}
            >
              ADD TO CART
            </button>
          ) : (
            <Link
              to="/cart"
              className={`bg-blue-900  w-full inline-block text-center text-white py-2 rounded mb-4`}
            >
              Go To cart
            </Link>
          )}

          <div className="text-gray-600">
            <h3 className="text-xl font-bold mb-4">Characteristics</h3>
            <table className="w-full border">
              <tbody>
                <tr>
                  <td className="border p-2">Brand</td>
                  <td className="border p-2">{selectProduct.brand}</td>
                </tr>
                <tr>
                  <td className="border p-2">Material</td>
                  <td className="border p-2">{selectProduct.material}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* you may like section */}
      <div className="mt-20">
        <h2 className="  text-2xl text-center font-medium mb-4">
          You May Also Like
        </h2>
        <ProductGrid products={ProductDetailArray} />
      </div>
      <div className="mt-20">
        <h2 className="  text-2xl text-center font-medium mb-4">
          Top Wear For Women
        </h2>
        <ProductGrid products={SimilarProducts} />
      </div>
    </div>
  );
};

export default ProductDetail;

{
  /*
  
  import React, { useState } from "react";

const selectProduct = {
  name: "Classic White T-Shirt",
  description:
    "A timeless white t-shirt made from 100% organic cotton. Features a crew neck and short sleeves, perfect for everyday wear.",
  price: 20,
  originalPrice: 25,
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
      src: "https://picsum.photos/id/23/200/300",
      alt: "Classic White T-Shirt Back View",
    },
    {
      src: "https://picsum.photos/id/2/200/300",
      alt: "Classic White T-Shirt Side View",
    },
    {
      src: "https://picsum.photos/id/237/200/300",
      alt: "Classic White T-Shirt Back View",
    },
  ],
};

const ProductDetail = () => {
  const [mainImage, setMainImage] = useState(selectProduct.images[0].src);
  const [selectedColor, setSelectedColor] = useState(selectProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  alert(quantity)
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg ">
      <div className="flex flex-col md:flex-row">
        //  left thumbanil         
        <div className="hidden md:flex flex-col space-y-4 mr-6">
          {selectProduct.images.map((image, index) => (
            <img
              src={image.src}
              alt={image.alt}
              key={index}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 ${
                mainImage === image.src ? "border" : ""
              }`}
              onClick={() => setMainImage(image.src)}
            />
          ))}
        </div>
        // main image
        <div className="md:w-1/2">
          <div className="mb-4">
            <img
              src={mainImage || selectProduct.images[0]?.src}
              alt=""
              className="w-full max-w-sm h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        // mobile thumbnial 
        <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
          {selectProduct.images.map((image, index) => (
            <img
              src={image.src}
              alt={image.alt}
              key={index}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 shrink-0 ${
                mainImage === image.src ? "border" : ""
              }`}
              onClick={() => setMainImage(image.src)}
            />
          ))}
        </div>

        //  right side
        <div className="md:m-1/2 md:ml-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            {selectProduct.name}
          </h1>
          <p className="text-lg texxt-gray-400 mb-1">
            <span className="line-through">{selectProduct.originalPrice && `${selectProduct.originalPrice}`}</span> ${selectProduct.price}
          </p>
          <p>{selectProduct.description}</p>

          <div className="flex gap-2 mt-2 items-center">
            {selectProduct.colors.map((color) => (
              <button
                key={color}
                className={`w-7 h-7 rounded-full border ${selectedColor==color?' border-black w-8 h-8':'border-gray-200'}`}
                style={{
                  background: color.toLowerCase(),
                }}
                onClick={()=>setSelectedColor(color)}
              ></button>
            ))}
          </div>

          <div className="mb-4">
            <p className="text-gray-700">size</p>
            <div className="flex gap-2 mt-2">
              {selectProduct.sizes.map((size) => (
                <button
                  key={size}
                  className={`w-8 h-8 rounded-lg border cursor-pointer ${
                    selectedSize === size
                      ? "bg-gray-500 text-white"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 ">
            <p className="text-gray-700">Quantity:</p>
            <div className="flex space-x-4 mt-2 items-center text-xl">
              <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>

          <div className="text-center bg-black text-white w-full mb-4 py-2 rounded">
            ADD TO CART
          </div>
          <div className="mt-2 text-gray-600">
            <h3 className="text-xl font-bold mb-4"> Charactersticks</h3>
            <table className="w-full">
              <tbody className="border ">
                <tr>
                  <td className="py-1 px-2 border border-gray-100">Brand</td>
                  <td className="py-1 px-2 border border-gray-100">
                    {selectProduct.brand}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-2 border border-gray-100">Material</td>
                  <td className="py-1 px-2 border border-gray-100">
                    {selectProduct.material}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
*/
}
