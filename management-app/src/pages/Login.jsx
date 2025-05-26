import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: '', role: 'manager' });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded shadow-md space-y-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Login</h2>
        
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />

        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        >
          <option value="manager">Manager</option>
          <option value="storekeeper">Store Keeper</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
