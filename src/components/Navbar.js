import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{backgroundColor: 'ghostwhite', padding: '10px'}}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="products">Products</NavLink>
    </nav>
  );
};

export default Navbar;
