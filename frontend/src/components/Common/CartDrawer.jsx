import React, { useState } from "react";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={` fixed top-0 right-0 w-80 h-screen bg-white shadow-lg z-50 
            ${
              drawerOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            onClick={toggleCartDrawer}
            className="text-gray-600 hover:text-gray-800"
          >
            {drawerOpen ? "Close" : "Open"}
          </button>
        </div>

        {/* cart items with scroll */}
        <div className="grow p-4 overflow-y-auto">
          {/* <p>Your cart is empty.</p> */}
          <CartContent/>
        </div>
        <div>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
          <p className="text-[10px] tracking-tighter lowercase text-gray-500 text-center">Shipping , Taxes , Copouns Applicable At Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
