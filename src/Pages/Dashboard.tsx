import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import './Dashboard.css'; // You can style the dashboard component here.

function Dashboard() {
  // Sample data for the sales chart (this can be replaced with dynamic data)
  const salesData = [
    { month: 'January', sales: 3000 },
    { month: 'February', sales: 4500 },
    { month: 'March', sales: 5000 },
    { month: 'April', sales: 6500 },
    { month: 'May', sales: 7000 },
    { month: 'June', sales: 8500 },
  ];

  // Sample data for a BarChart (Product categories sales example)
  const categoryData = [
    { name: 'Electronics', sales: 4000 },
    { name: 'Clothing', sales: 3000 },
    { name: 'Home', sales: 2000 },
    { name: 'Sports', sales: 1000 },
    { name: 'Toys', sales: 500 },
  ];

  // Sample data for a PieChart (Order Status)
  const orderStatusData = [
    { name: 'Pending', value: 120 },
    { name: 'Shipped', value: 300 },
    { name: 'Delivered', value: 500 },
    { name: 'Canceled', value: 80 },
  ];



  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="dashboard-summary">
        <div className="summary-card-common summary-card-a">
          <h3>Total Products</h3>
          <p>200</p> {/* Replace with dynamic data */}
        </div>
        <div className="summary-card-common summary-card-b">
          <h3>Total Orders</h3>
          <p>120</p> {/* Replace with dynamic data */}
        </div>
        <div className="summary-card-common summary-card-c">
          <h3>Total Customers</h3>
          <p>50</p> {/* Replace with dynamic data */}
        </div>
        <div className="summary-card-common summary-card-d">
          <h3>Total Sales</h3>
          <p>$5,000</p> {/* Replace with dynamic data */}
        </div>
      </div>

      <div className='charts-container'>
        {/* Sales Overview - LineChart */}
        <div className="flex-col dashboard-charts">
          <h3>Sales Overview</h3>
          <div className="chart">
            <ResponsiveContainer width={500} height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Categories Sales - BarChart */}
        <div className="dashboard-charts">
          <h3>Product Categories Sales</h3>
          <div className="chart">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-charts">
          <h3>Order Status</h3>
          <div className="chart">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={orderStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  labelLine={false}
                // Custom label with percentage
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ff8042', '#ff7373'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>






    </div>
  );
}

export default Dashboard;
