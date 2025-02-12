// Import necessary modules and components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Invoices from './pages/Invoices';

// Define the main App component
function App() {
  return (
    <>
      {/* Apply CSS baseline for consistent styling */}
      <CssBaseline />
      <BrowserRouter>
        {/* Layout component wrapping the main content */}
        <Layout>
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/invoices" element={<Invoices />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

// Export the App component as the default export
export default App;
