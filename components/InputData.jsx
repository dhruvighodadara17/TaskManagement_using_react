import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const InputData = ({ InputDiv, setInputDiv }) => {
  return (
    <>
      {/* Background Overlay */}
      <div className={`${InputDiv} fixed top-0 left-0 bg-gray-500 opacity-40 h-screen w-full`}></div>

      {/* Centered Modal */}
      <div className={`${InputDiv} fixed top-0 left-0 flex justify-center items-center h-screen w-full`}>
        <div className="w-2/5 bg-blue-200 rounded-xl p-4 shadow-lg">
          <div className="flex justify-end">
            <button
              className="text-2xl cursor-pointer"
              onClick={() => setInputDiv(false)}
              aria-label="Close"
            >
              <IoCloseSharp />
            </button>
          </div>
          {/* Title Input */}
          <input
            type="text"
            placeholder="Title"
            name="title"
            aria-label="Title"
            className="w-full my-2 px-3 py-2 rounded mb-4 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          {/* Description Textarea */}
          <textarea
            name="desc"
            cols="5"
            rows="15"
            placeholder="Enter Description..."
            aria-label="Description"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          {/* Submit Button */}
          <button className="w-full px-4 py-2 rounded bg-gray-600 text-white text-xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 my-3">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
