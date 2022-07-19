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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/order" element={<Order />} />
        <Route path="/list" element={<List />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/restaurant" element={<RestaurantDetails />} />
        <Route path="/admin/order" element={<OrderList />} />
        <Route path="/admin/menu/new" element={<MenuForm />} />
        <Route path="/admin/menu" element={<Menu />} />
        <Route path="/admin/profile" element={<Profile />} />
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
  );
}

export default App;
