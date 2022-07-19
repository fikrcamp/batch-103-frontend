import AdminNav from "../../Components/AdminNav";
import { MdModeEdit, MdOutlineRemoveCircle } from "react-icons/md";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <AdminNav />
      <div className="flex justify-center">
        <div className="flex justify-center w-1/2">
          <div>
            <Link to="/admin/menu/new">
              <button className="bg-green-400 py-1.5 px-4 font-bold text-sm my-2 text-white">
                Add Item
              </button>
            </Link>
            <table className="bg-white drop-shadow-md">
              <tr>
                <th>Image</th>
                <th>Menu Item</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
                    alt="food"
                    className="h-16"
                  />
                </td>
                <td>Mexican Pizza</td>
                <td>$12.4</td>
                <td>
                  <MdModeEdit className="text-blue-400 m-auto" />
                </td>
                <td>
                  <MdOutlineRemoveCircle color="red" className="m-auto" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
