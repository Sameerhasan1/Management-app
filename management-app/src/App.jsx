import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddEditProduct from './pages/AddEditProduct';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedLayout from './components/ProtectedLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

<Route
  path="/dashboard"
  element={
    <ProtectedRoute allowedRoles={['manager']}>
      <ProtectedLayout>
        <Dashboard />
      </ProtectedLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/products"
  element={
    <ProtectedRoute allowedRoles={['manager', 'storekeeper']}>
      <ProtectedLayout>
        <Products />
      </ProtectedLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/add-product"
  element={
    <ProtectedRoute allowedRoles={['manager', 'storekeeper']}>
      <ProtectedLayout>
        <AddEditProduct />
      </ProtectedLayout>
    </ProtectedRoute>
  }
/>
<Route
  path="/edit-product/:id"
  element={
    <ProtectedRoute allowedRoles={['manager', 'storekeeper']}>
      <ProtectedLayout>
        <AddEditProduct />
      </ProtectedLayout>
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;
