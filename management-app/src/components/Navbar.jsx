import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  if (!user) return null;

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-blue-800 dark:bg-gray-900 shadow-lg">
      <div
        className="text-3xl font-bold text-white tracking-wide cursor-pointer hover:text-gray-100 transition-all"
        onClick={() => navigate('/products')}
      >
        Management App
      </div>

      <div className="flex items-center space-x-6 text-white text-base font-medium">
        {user.role === 'manager' && (
          <Link to="/dashboard" className="hover:text-yellow-300 transition">
            Dashboard
          </Link>
        )}
        <Link to="/products" className="hover:text-yellow-300 transition">
          Products
        </Link>
        <Link to="/add-product" className="hover:text-yellow-300 transition">
          Add Product
        </Link>

        <span className="text-sm italic text-gray-300 dark:text-gray-400">
          ({user.role})
        </span>

        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-gray-700 text-blue-800 dark:text-white px-4 py-1.5 rounded-full shadow hover:scale-105 transition"
          aria-label="Toggle Dark Mode"
          title="Toggle Dark Mode"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white text-sm font-semibold shadow transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
