
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import googleLogo from "../assets/google.png"; // ✅ FIXED PATH


const Signup = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(""); // ✅ start empty, not "error"

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // ✅ Handle email signup
  const handleSignup = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await createUser(email, password);
      alert("Sign up successful!");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  // ✅ Handle Google signup
  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      alert("Signed in successfully with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        {/* Signup Card */}
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Create your account
            </h1>

            {error && (
              <p className="text-red-600 bg-red-100 border border-red-300 rounded-md px-3 py-2 mb-4 text-sm text-center">
                {error}
              </p>
            )}

            <form
              onSubmit={handleSignup}
              className="space-y-6 text-gray-700 text-base"
            >
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none"
                  required
                />
              </div>

              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none"
                  required
                />
              </div>

              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Login
                </Link>
              </p>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
              >
                Sign Up
              </button>
            </form>

            {/* Google Signup */}
            <div className="flex flex-col items-center mt-6">
              <button
                onClick={handleGoogleSignup}
                className="flex items-center justify-center gap-3 border border-gray-300 rounded-md px-5 py-2 hover:bg-gray-50 transition-all duration-200"
              >
                <img
                  src={googleLogo}
                  alt="Google logo"
                  className="w-6 h-6"
                />
                <span className="text-gray-700 font-medium">
                  Continue with Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
