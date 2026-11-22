import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Logo onDark />
        <nav className="navbar-links">
          <Link to="/login" className="btn btn-ghost">Log in</Link>
          <Link to="/signup" className="btn btn-lime">Sign up</Link>
        </nav>
      </div>
    </header>
  );
}
