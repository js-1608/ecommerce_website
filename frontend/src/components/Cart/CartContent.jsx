import React from "react";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Product 1",
      size: "M",
      color: "red",
      price: 29.99,
      quantity: 2,
      image: "https://placehold.co/600x400/png",
    },
    {
      productId: 2,
      name: "Product 2",
      size: "L",
      color: "blue",
      price: 49.99,
      quantity: 1,
      image: "https://placehold.co/600x400/png",
    },
    {
      productId: 3,
      name: "Product 3",
      size: "S",
      color: "green",
      price: 19.99,
      quantity: 3,
      image: "https://placehold.co/600x400/png",
    },
    {
        productId: 4,
        name: "Product 4",
        size: "XL",
        color: "black",
        price: 39.99,
        quantity: 1,
        image: "https://placehold.co/600x400/png",
    }
  ];
  return (
    <div className="space-y-4">
      {cartProducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-center border-b border-0 border-gray-300 pb-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="ml-4 flex-grow">
            <h3 className="font-medium text-base">{product.name}</h3>
            <p className="text-[10px] text-gray-500">
              Size: {product.size}, Color: {product.color}
            </p>
            <div>
              <div className="inline-flex items-center border-0 border-gray-300 rounded mt-1 text-[10px]">
                <button className="px-2 py-1  border rounded-l">-</button>
                <span className="px-2 py-1 border-t border-b">
                  {product.quantity}
                </span>
                <button className="px-2 py-1 border rounded-r">+</button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="ml-auto">
            <p className="text-sm">${product.price.toFixed(2)}</p>
            <button className="text-red-600 text-xs mt-2 hover:underline">
                Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
