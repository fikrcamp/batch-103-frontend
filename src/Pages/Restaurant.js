import MenuCard from "../Components/MenuCard";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import OrderCard from "../Components/OrderCard";
function Restaurant() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-3">
        {/* RESTAURANT CARD */}
        <div className="col-span-3 bg-white rounded-md drop-shadow-md">
          {/* BACKGROUND IMAGE */}
          <div className="bg-[url('../public/food.jpg')] bg-bottom bg-no-repeat bg-cover h-52"></div>
          {/* BACKGROUND IMAGE */}
          {/* RESTAURANT INFO */}
          <div className="flex">
            <img
              src="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
              alt="food"
              className="h-28 w-28 rounded-full bg-black p-1 -mt-10 ml-5"
            />
            <div className="pl-2">
              <h2 className="text-2xl font-bold">Sultan</h2>
              <p className="text-sm text-gray-400">
                Arabian | Somali | Turkish
              </p>
            </div>
          </div>
          {/* RESTAURANT INFO */}
          <div className="p-5">
            <p>The description about restaurant</p>
          </div>
        </div>
        {/* RESTAURANT CARD */}
        {/* CART CARD */}
        <div className="bg-white rounded-md p-5 h-fit row-span-2 drop-shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl">Cart</h2>
            <FiShoppingCart size={20} />
          </div>
          <div className="py-5 space-y-2">
            {/* CART ITEM */}
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            {/* CART ITEM */}
            {/* CART TOTAL */}
            <div className="border-t mt-4">
              <div className="flex align-items justify-between py-1">
                <h2 className="font-bold">Total</h2>
                <h2>$14</h2>
              </div>
              <div className="flex align-items justify-between py-1">
                <h2 className="font-bold">Delivery</h2>
                <h2>$2</h2>
              </div>
              <div className="flex align-items justify-between py-1">
                <h2 className="font-bold">Sub Total</h2>
                <h2>$16</h2>
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
        {/* CART CARD */}

        {/* MENU CARD */}
        <div className="bg-white col-span-3 p-5">
          <h3 className="text-lg font-bold">MENU ITEMS</h3>
          <div className="grid grid-cols-2 gap-3 py-4">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
        {/* MENU CARD */}
      </div>
    </div>
  );
}

export default Restaurant;
