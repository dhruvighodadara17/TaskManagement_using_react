import React, { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import Cards from "../components/Cards";
import InputData from "../components/InputData";

const AllTasks = () => {
  const [inputDiv, setInputDiv] = useState(false);

  return (
    <>  <div className="w-full flex justify-end">
          <button onClick={() => setInputDiv(true)} className="flex justify-end items-center">
          <IoAddCircleSharp className="text-4xl font-bold text-gray-900 cursor-pointer " />
          <p className="mx-3">Add Task</p>
          </button>
        </div>
      <div className="p-4 relative w-full flex justify-end px-2 rounded items-center">
        
        <Cards home="true" setInputDiv={setInputDiv} />
      </div>
      {inputDiv && <InputData InputDiv="fixed" setInputDiv={setInputDiv} />}
    </>
  );
};

export default AllTasks;
