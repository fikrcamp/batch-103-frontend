import {
  MdSupervisedUserCircle,
  MdRestaurant,
  MdRestaurantMenu,
  MdOutlineReceipt,
  MdLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";
function AdminNav() {
  return (
    <div className="flex justify-center space-x-2 my-5">
      <Link to="/admin/profile">
        <div className="bg-black p-5 rounded-full">
          <MdSupervisedUserCircle color="white" size="25" />
        </div>
      </Link>
      <Link to="/admin/restaurant">
        <div className="bg-black p-5 rounded-full">
          <MdRestaurant color="white" size="25" />
        </div>
      </Link>
      <Link to="/admin/menu">
        <div className="bg-black p-5 rounded-full">
          <MdRestaurantMenu color="white" size="25" />
        </div>
      </Link>
      <Link to="/admin/order">
        <div className="bg-black p-5 rounded-full">
          <MdOutlineReceipt color="white" size="25" />
        </div>
      </Link>
      <div className="bg-black p-5 rounded-full">
        <MdLogout color="white" size="25" />
      </div>
    </div>
  );
}
export default AdminNav;
