import AdminNav from "../../Components/AdminNav";
import { MdModeEdit, MdOutlineRemoveCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/menu", { headers: { authentication: token } })
      .then((res) => setMenuItems(res.data.items));
  });

  async function removeMenuItem(id) {
    try {
      await axios.delete(`http://localhost:8000/menu/${id}`);
      toast.success("Item deleted");
    } catch (e) {
      toast.error("Error");
    }
  }

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
              {menuItems.map((item) => (
                <tr>
                  <td>
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt="food"
                      className="h-16"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Link to={`/admin/menu/edit/${item._id}`}>
                      <MdModeEdit className="text-blue-400 m-auto" />
                    </Link>
                  </td>
                  <td>
                    <MdOutlineRemoveCircle
                      color="red"
                      className="m-auto"
                      onClick={() => removeMenuItem(item._id)}
                    />
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
