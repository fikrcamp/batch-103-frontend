import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center py-5 px-10 bg-white">
      <div>
        <img src="./logo.png" alt="logo" className="h-4" />
      </div>
      <div className="space-x-3">
        <Link to="/home" className="text-sm">
          Home
        </Link>
        <Link to="/home" className="text-sm">
          List
        </Link>
        <Link to="/home" className="text-sm">
          Contact
        </Link>
      </div>
      <div>
        <button className="btn-light">Login</button>
      </div>
    </div>
  );
}

export default Header;
