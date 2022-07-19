import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex justify-center mt-10 ">
      <div className="bg-white w-2/5 h-fit text-center py-5 drop-shadow-xl rounded-lg">
        <h1 className="font-bold text-lg">Login</h1>
        <h1 className="text-gray-400 text-sm">
          Get food delivered to your door step!
        </h1>
        <div className="flex flex-col w-3/5 m-auto space-y-2 my-4">
          <input
            type="text"
            placeholder="Email"
            className="px-3 py-2 rounded-sm bg-gray-100 text-sm "
          />

          <input
            type="password"
            placeholder="Password"
            className="px-3 py-2 rounded-sm bg-gray-100 text-sm"
          />
        </div>
        <button className="btn-dark">Login</button>
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
