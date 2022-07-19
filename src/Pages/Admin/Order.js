import AdminNav from "../../Components/AdminNav";
import { MdOutlineRemoveRedEye, MdOutlineRemoveCircle } from "react-icons/md";
function Order() {
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
            <tr>
              <td>Ali</td>
              <td>Jigjiga Yar</td>
              <td>063333333</td>
              <td>
                <MdOutlineRemoveRedEye className="text-blue-400 m-auto" />
              </td>
              <td>
                <MdOutlineRemoveCircle color="red" className="m-auto" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;
