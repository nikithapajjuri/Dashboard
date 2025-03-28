import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Settings, Box, ShoppingCart, Layers, User } from 'lucide-react'; // Import icons
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import Categories from './Pages/Categories';
import Customers from './Pages/Customers';
import Dashboard from './Pages/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="sidebar">
        <div className="sidebar-header" >
        <h1>Ecommerce</h1>
        </div>
         <ul>
            <li>
              <Link to="/" className="sidebar-link">
                <Box className="sidebar-icon" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/products" className="sidebar-link">
                <ShoppingCart className="sidebar-icon" />
                Products
              </Link>
            </li>
            <li>
              <Link to="/categories" className="sidebar-link">
                <Layers className="sidebar-icon" />
                Categories
              </Link>
            </li>
            <li>
              <Link to="/orders" className="sidebar-link">
                <ShoppingCart className="sidebar-icon" />
                Orders
              </Link>
            </li>
            <li>
              <Link to="/customers" className="sidebar-link">
                <User className="sidebar-icon" />
                Customers
              </Link>
            </li>
            <li>
              <Link to="/settings" className="sidebar-link">
                <Settings className="sidebar-icon" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>

  );
}

export default App;
