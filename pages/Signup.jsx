import React from "react";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div className="bg-white h-[98vh] flex justify-center items-center">
      <div className="bg-gray-600 p-6 w-2/6 max-w-md rounded shadow-lg">
        <div className="text-white py-3 text-2xl text-center">Signup</div>
        
        <form>
          <input
            type="text"
            placeholder="Username"
            className="px-3 py-2 my-3 w-full rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="username"
            aria-label="Username"
            required
          />
          
          <input
            type="email"
            placeholder="Email"
            className="px-3 py-2 my-3 w-full rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="email"
            aria-label="Email"
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
          
          <div><button
            type="submit"
            className="bg-blue-400 text-white text-xl font-semibold px-4 py-2 my-3 w-full rounded hover:bg-blue-500 transition duration-300"
          >
            Signup
          </button>
        <Link to="/login" className="text-white hover:underline">
                Already have Account? Login Here             
        </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
