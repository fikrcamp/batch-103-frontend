import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
function Signup() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  async function handleOnSubmit() {
    try {
      const res = await axios.post("http://localhost:8000/user/", inputs);
      toast.success(res.data.message);
      navigate("/home");
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <div className="flex justify-center mt-10 ">
      <div className="bg-white w-2/5 h-fit text-center py-5 drop-shadow-xl rounded-lg">
        <h1 className="font-bold text-lg">Eat when you want</h1>
        <h1 className="text-gray-400 text-sm">
          Get food delivered to your door step!
        </h1>
        <div className="flex flex-col w-3/5 m-auto space-y-2 my-4">
          <input
            type="text"
            placeholder="Name"
            className="px-3 py-2 rounded-sm bg-gray-100 text-sm "
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            className="px-3 py-2 rounded-sm bg-gray-100 text-sm"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-2 rounded-sm bg-gray-100 text-sm"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-3 py-2 rounded-sm bg-gray-100 text-sm"
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>
        <button className="btn-dark" onClick={handleOnSubmit}>
          Sign Up
        </button>
        <div>
          <p className="text-sm text-gray-500 p-4">
            Already have an account?{" "}
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
