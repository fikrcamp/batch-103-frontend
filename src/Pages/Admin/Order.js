import AdminNav from "../../Components/AdminNav";
import { MdOutlineRemoveRedEye, MdOutlineRemoveCircle } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/order", {
        headers: { authentication: token },
      })
      .then((res) => setOrders(res.data.order));
  });

  async function deleteOrder(id) {
    await axios.delete(`http://localhost:8000/order/${id}`);
    toast.success("deleted Order");
  }
  return (
    <div>
      <AdminNav />
      <div className="flex justify-center">
        <div className="flex justify-center w-1/2">
          <table className="bg-white drop-shadow-md">
            <tr>
              <th>Customer</th>
              <th>Address</th>
              <th>Phone</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
            {orders.map((order) => (
              <tr>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>
                  {order.cart.map((item) => (
                    <h1>
                      {item.qty}x {item.name}
                    </h1>
                  ))}
                </td>

                <td>
                  <MdOutlineRemoveCircle
                    color="red"
                    className="m-auto"
                    onClick={() => deleteOrder(order._id)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;
