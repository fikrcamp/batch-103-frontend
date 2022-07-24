import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Utils/UserContext";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between items-center py-5 px-10 bg-white">
      <div>
        <Link to="/">
          <img src="/logo.png" alt="logo" className="h-4" />
        </Link>
      </div>
      {/* <div className="space-x-3">
        <Link to="/" className="text-sm">
          Home
        </Link>
        <Link to="/list" className="text-sm">
          List
        </Link>
      </div> */}
      <div>
        {user ? (
          <Link to="/admin/order">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="profile"
              className="h-14 rounded-full"
            />
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn-light">Login</button>
          </Link>
        )}
        {/*  */}
      </div>
    </div>
  );
}

export default Header;
