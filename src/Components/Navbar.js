import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>This is a Website</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;