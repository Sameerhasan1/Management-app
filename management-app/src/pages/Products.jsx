import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sampleProducts = [
  { id: 1, name: 'Wheat', quantity: 100, price: 20 },
  { id: 2, name: 'Rice', quantity: 50, price: 30 },
  { id: 3, name: 'Corn', quantity: 75, price: 25 },
];

function Products() {
  const [products, setProducts] = useState(sampleProducts);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products List</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Price ($)</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, quantity, price }) => (
            <tr key={id} className="text-center hover:bg-gray-50">
              <td className="border px-4 py-2">{id}</td>
              <td className="border px-4 py-2">{name}</td>
              <td className="border px-4 py-2">{quantity}</td>
              <td className="border px-4 py-2">{price}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => navigate(`/edit-product/${id}`)}
                  className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
