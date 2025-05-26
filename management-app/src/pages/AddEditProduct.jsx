import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function AddEditProduct() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEdit) {
      setFormData({
        name: 'Laptop',
        category: 'Electronics',
        price: 1500,
        quantity: 10,
      });
    }
  }, [id]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.category.trim()) errs.category = 'Category is required';
    if (!formData.price || isNaN(formData.price)) errs.price = 'Valid price is required';
    if (!formData.quantity || isNaN(formData.quantity)) errs.quantity = 'Valid quantity is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    alert(isEdit ? 'Product updated! ✅' : 'Product added! ✅');
    navigate('/products');
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">{isEdit ? 'Edit' : 'Add'} Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>

        <div>
          <label className="block font-medium">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        <div>
          <label className="block font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {isEdit ? 'Update' : 'Add'} Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEditProduct;
