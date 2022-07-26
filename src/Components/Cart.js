import { FiShoppingCart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import OrderCard from "../Components/OrderCard";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function Cart({ cart, total, remove, empty }) {
  const [customer, setCustomer] = useState({});
  const { id } = useParams();
  async function handleOnSubmit() {
    const data = {
      ...customer,
      cart,
      restaurant: id,
    };
    try {
      await axios.post("http://localhost:8000/order", data);
      empty();
      toast.success("order send");
    } catch (e) {
      toast.error("error");
    }
  }

  return (
    <div className="bg-white rounded-md p-5 h-fit row-span-2 drop-shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl">Cart</h2>
        <FiShoppingCart size={20} />
      </div>
      <div className="py-5 space-y-2">
        {/* CART ITEM */}
        {cart.map((item) => (
          <OrderCard item={item} remove={remove} />
        ))}

        {/* CART ITEM */}
        {/* CART TOTAL */}
        <div className="border-t mt-4">
          <div className="flex align-items justify-between py-1">
            <h2 className="font-bold">Total</h2>
            <h2>${total}</h2>
          </div>
          <div className="flex align-items justify-between py-1">
            <h2 className="font-bold">Delivery</h2>
            <h2>$2</h2>
          </div>
          <div className="flex align-items justify-between py-1">
            <h2 className="font-bold">Sub Total</h2>
            <h2>${total > 0 ? total + 2 : 0}</h2>
          </div>
          {cart.length > 0 && (
            <>
              <div>
                <h2 className="font-bold text-center py-2">Place Order</h2>
              </div>
              <div className="space-y-2 mt-2">
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Full Name"
                  onChange={(e) =>
                    setCustomer({ ...customer, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Phone"
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Address"
                  onChange={(e) =>
                    setCustomer({ ...customer, address: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Payment Method"
                  onChange={(e) =>
                    setCustomer({ ...customer, payment: e.target.value })
                  }
                />
              </div>

              <button
                className="bg-green-400 w-full rounded-md text-white font-bold p-3 my-2"
                onClick={handleOnSubmit}
              >
                Place Order
              </button>
            </>
          )}
        </div>
        {/* CART TOTAL */}
      </div>
    </div>
  );
}

export default Cart;
