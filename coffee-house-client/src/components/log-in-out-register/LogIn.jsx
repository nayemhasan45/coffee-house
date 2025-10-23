import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import bg from "../../assets/images/more/13.jpg";
import Navber from "../Navber";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { loginUser } = useContext(AuthContext);
  const navigae = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await loginUser(email, password);
      setSuccess("Login successful!");
      navigae("/");
    } catch (err) {
      setError(err.message || "Failed to login.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navber />

      <div className="flex justify-center items-center flex-1 px-4">
        {/* Glassmorphic card */}
        <div className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-4xl font-bold text-center text-[#331a15] mb-6">
            Login
          </h2>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#331a15]">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered placeholder-gray-400 focus:outline-none focus:border-[#331a15] focus:ring-1 focus:ring-[#331a15] w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#331a15]">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered placeholder-gray-400 focus:outline-none focus:border-[#331a15] focus:ring-1 focus:ring-[#331a15] w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-2 mt-4 rounded-full border-2 border-[#331A15] text-[#331A15] font-semibold text-lg hover:bg-[#331A15] hover:text-white transition-all duration-300"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-5 text-[#331a15]">
            Don't have an account?{" "}
            <Link to={"/user/register"} className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
