import React, { useEffect, useState } from "react";

const Myorder = () => {
  const [order, setOrder] = useState([]);

  const mockOrders = [
    {
      _id: "12345",
      creatdAt: new Date(),
      shipping: { city: "New York", country: "USA" },
      orderItem: [
        {
          productname: "Product 1",
          image: "https://picsum.photos/500/500?random=1",
        },
      ],
      totalPrice: 100,
      isPaid: true,
    },
    {
      _id: "12346",
      creatdAt: new Date(),
      shipping: { city: "New York", country: "USA" },
      orderItem: [
        {
          productname: "Product 2",
          image: "https://picsum.photos/500/500?random=2",
        },
      ],
      totalPrice: 100,
      isPaid: true,
    },
  ];

  useEffect(() => {
    setOrder(mockOrders);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      {order.length>0 ? (
        <div className="relative shadow-md sm:rounded-lg overflow-hidden">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-300 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Order Id</th>
                <th className="py-3 px-4">Created</th>
                <th className="py-3 px-4">Shipping</th>
                <th className="py-3 px-4">Items</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {order.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <img
                      src={item.orderItem[0].image}
                      alt={item.orderItem[0].productname}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>

                  <td className="py-3 px-4">{item._id}</td>

                  <td className="py-3 px-4">
                    {new Date(item.creatdAt).toLocaleDateString()}
                  </td>

                  <td className="py-3 px-4">
                    {item.shipping.city}, {item.shipping.country}
                  </td>

                  <td className="py-3 px-4">{item.orderItem.length}</td>

                  <td className="py-3 px-4">
                    {item.isPaid ? "Paid ✅" : "Pending ❌"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Myorder;
