import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import Restaurant from "./Pages/Restaurant";
import Order from "./Pages/Order";
import List from "./Pages/List";
import RestaurantDetails from "./Pages/Admin/RestaurantDetails";
import OrderList from "./Pages/Admin/Order";
import Menu from "./Pages/Admin/Menu";
import MenuForm from "./Pages/Admin/MenuForm";
import Profile from "./Pages/Admin/Profile";
import NotFound from "./Pages/NotFound";
import Protect from "./Protect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { UserContext } from "./Utils/UserContext";
import axios from "axios";
function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    }

    setLoading(false);
  }, []);

  if (loading) return <h1>Loading ....</h1>;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/order" element={<Order />} />
          <Route path="/list" element={<List />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<Protect />}>
            <Route path="restaurant" element={<RestaurantDetails />} />
            <Route path="order" element={<OrderList />} />
            <Route path="menu/new" element={<MenuForm />} />
            <Route path="menu/edit/:id" element={<MenuForm />} />
            <Route path="menu" element={<Menu />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
