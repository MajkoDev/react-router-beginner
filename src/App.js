import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";

import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";

import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";

import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />

        <Route path="products" element={<Products />}>
          {/* Index Route - choose which child route should render ar parent level */}
          <Route index element={<FeaturedProducts />} />
          {/* Nested Routes */}
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>

        {/* Dynamic Routes */}
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>

        {/* No Match Route */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
