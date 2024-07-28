import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-white h-[98vh] flex justify-center items-center">
            <div className="bg-gray-600 p-6 w-4/6 max-w-md rounded shadow-lg">
                <div className="text-white py-3 text-2xl text-center">Login</div>

                <input
                    type="text"
                    placeholder="Username"
                    className="px-3 py-2 my-3 w-full rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="username"
                    aria-label="Username"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="px-3 py-2 my-3 w-full rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="password"
                    aria-label="Password"
                    required
                />

                <div className="w-full flex items-center justify-between mt-4">
                    <button className="bg-blue-400 text-white text-xl font-semibold px-4 py-2 rounded hover:bg-blue-500 transition duration-300">
                        Login
                    </button>
                    <Link to="/signup" className="text-white hover:underline">
                        Not having an Account? Create Account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
