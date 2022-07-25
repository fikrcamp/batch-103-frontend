import { FiShoppingCart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import OrderCard from "../Components/OrderCard";
function Cart({ cart, total, remove }) {
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
          <Link to="/order">
            <button className="bg-green-400 w-full rounded-md text-white font-bold p-3 my-2">
              Place Order
            </button>
          </Link>
        </div>
        {/* CART TOTAL */}
      </div>
    </div>
  );
}

export default Cart;
