import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../Utils/UserContext";

function Login() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  async function onSubmit() {
    try {
      const res = await axios.post("http://localhost:8000/user/login", inputs);
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      setUser(true);
      navigate("/");
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <div className="flex justify-center mt-10 ">
      <div className="bg-white w-2/5 h-fit text-center py-5 drop-shadow-xl rounded-lg">
        <h1 className="font-bold text-lg">Login </h1>

        <h1 className="text-gray-400 text-sm">
          Get food delivered to your door step!
        </h1>
        <div className="flex flex-col w-3/5 m-auto space-y-2 my-4">
          <input
            type="text"
            placeholder="Email"
            className="px-3 py-2 rounded-sm bg-gray-100 text-sm "
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="px-3 py-2 rounded-sm bg-gray-100 text-sm"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <button className="btn-dark" onClick={onSubmit}>
          Login
        </button>
        <div>
          <p className="text-sm text-gray-500 p-4">
            You dont have an account?{" "}
            <Link to="/signup" className="font-bold">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
