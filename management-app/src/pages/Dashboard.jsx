import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 8,
    categories: 4,
    lowStock: 2,
    managers: 1,
  });

  const chartData = [
    { name: 'Jan', products: 5 },
    { name: 'Feb', products: 8 },
    { name: 'Mar', products: 6 },
    { name: 'Apr', products: 10 },
    { name: 'May', products: 7 },
  ];

  const pieData = [
    { name: 'Electronics', value: 4 },
    { name: 'Groceries', value: 2 },
    { name: 'Clothing', value: 1 },
    { name: 'Stationery', value: 1 },
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card title="Total Products" value={stats.totalProducts} />
        <Card title="Categories" value={stats.categories} />
        <Card title="Low Stock" value={stats.lowStock} />
        <Card title="Managers" value={stats.managers} />
      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-2">Inventory Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="products" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-2">Product Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const Card = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
    <div className="text-lg font-semibold">{title}</div>
    <div className="text-3xl font-bold mt-2">{value}</div>
  </div>
);

export default Dashboard;
