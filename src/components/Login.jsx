
import React, { useContext, useState,useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import { Spinner } from "flowbite-react";
import googleLogo from "../assets/google.png";



//this is admin security
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../adminconfig.js";

const handleLogin = (e) => {
  e.preventDefault();

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem("role", "admin");
    alert("Welcome, Admin!");
    navigate("/dashboard");
  } else {
    localStorage.setItem("role", "user");
    navigate("/");
  }
};




const Login = () => {
  const { login, googleSignIn, loading, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to intended route or home
  const from = location.state?.from?.pathname || "/";

  // If already logged in, redirect to dashboard
  // if (user) {
  //   navigate("/dashboard");
  // }


  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

const handleLogin = async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  // ✅ Check if admin credentials match
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem("role", "admin");
    alert("Welcome, Admin!");
    navigate("/dashboard");
    return; // stop here — don't use Firebase
  }

  // 🔥 Otherwise, go with Firebase login
  try {
    const userCredential = await login(email, password);

    if (userCredential?.user) {
      localStorage.setItem("role", "user");
      alert("✅ Login Successful!");
      navigate(from, { replace: true });
    }
  } catch (err) {
    console.error("Login error:", err);

    if (err.code === "auth/user-not-found") {
      alert("⚠️ No account found with this email. Redirecting to Sign-Up...");
      navigate("/sign-up");
    } else if (err.code === "auth/wrong-password") {
      setError("❌ Incorrect password. Please try again.");
    } else if (err.code === "auth/invalid-email") {
      setError("⚠️ Please enter a valid email address.");
    } else {
      setError("⚠️ Something went wrong. Please try again later.");
    }
  }
};



  // Google login
  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      alert("✅ Login Successful!");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setError("⚠️ Google sign-in failed. Please try again.");
    }
  };

  // Loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Spinner size="xl" aria-label="Loading spinner" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-white p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Welcome Back 👋
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-400 text-red-600 px-4 py-2 rounded-md mb-4 text-center text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition duration-200"
          >
            <img src={googleLogo} alt="Google" className="w-5 h-5" />
            <span className="text-gray-700 font-medium">Continue with Google</span>
          </button>

          <p className="text-center text-gray-600 text-sm mt-6">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

