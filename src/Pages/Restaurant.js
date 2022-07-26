import MenuCard from "../Components/MenuCard";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import OrderCard from "../Components/OrderCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Cart from "../Components/Cart";
function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8000/restaurant/${id}`).then((res) => {
      setRestaurant(res.data.restaurant);
      setMenu(res.data.menu);
    });
  });
  function addToCart(item) {
    //if item already in cart   qty++

    //else
    const index = cart.findIndex((cartItem) => cartItem.id === item._id);

    if (index >= 0) {
      const newCart = cart;
      newCart[index].qty = newCart[index].qty + 1;
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          id: item._id,
          name: item.name,
          image: item.image,
          qty: 1,
          price: item.price,
        },
      ]);
    }

    setTotal(total + item.price);
  }

  function removeFromCart(item) {
    const found = cart.find((cartItem) => cartItem.id === item._id);
    const index = cart.findIndex((cartItem) => cartItem.id === item._id);
    if (found.qty === 1) {
      //remove
      const newCart = cart.filter((cartItem) => cartItem.id !== item._id);
      setCart(newCart);
    } else {
      const newCart = cart;
      newCart[index].qty = newCart[index].qty - 1;
      setCart(newCart);
    }
    setTotal(total - item.price);
  }

  function removeFullItem(item) {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    const itemTotal = item.price * item.qty;

    setTotal(total - itemTotal);
    setCart(newCart);
  }

  function emptyCart() {
    setCart([]);
    setTotal(0);
  }

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
              src={`http://localhost:8000/${restaurant.image}`}
              alt="food"
              className="h-28 w-28 rounded-full bg-black p-1 -mt-10 ml-5"
            />
            <div className="pl-2">
              <h2 className="text-2xl font-bold">{restaurant.name}</h2>
              <p className="text-sm text-gray-400">
                Arabian | Somali | Turkish
              </p>
            </div>
          </div>
          {/* RESTAURANT INFO */}
          <div className="p-5">
            <p>{restaurant.description}</p>
          </div>
        </div>
        {/* RESTAURANT CARD */}
        {/* CART CARD */}
        <Cart
          cart={cart}
          total={total}
          remove={removeFullItem}
          empty={emptyCart}
        />
        {/* CART CARD */}

        {/* MENU CARD */}
        <div className="bg-white col-span-3 p-5">
          <h3 className="text-lg font-bold">MENU ITEMS</h3>
          <div className="grid grid-cols-2 gap-3 py-4">
            {menu.map((item) => (
              <MenuCard item={item} add={addToCart} remove={removeFromCart} />
            ))}
          </div>
        </div>
        {/* MENU CARD */}
      </div>
    </div>
  );
}

export default Restaurant;
