import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";

const Cards = ({ home ,setInputDiv}) => {
  const data = [
    {
    title: "The best coding channel",
    desc: "I have to create my channel the best ever coding in Hindi for those who do not understand English pro",
    status: "Incomplete"
    },
    {
    title: "CPP concepts",
    desc: "I need to clear basics of CPP. Topic: Abstraction, Inheritance, Polymorphism, Virtual functions, etc.",
    status: "Incomplete"
    },
    {
    title: "Assignment",
    desc: "My assignment is on 30th June, I have to complete it.",
    status: "Complete"
    },
    {
    title: "Projects",
    desc: "For the project, I need to see tutorials of the code on a YouTube channel",
    status: "Incomplete"
    },
  ];
  // const [ImportantButton, setImportantButton] = useState("Incomplete");

  // export const getIncompleteTasks = () => {
  //   return data.filter(task => task.status === "Incomplete");
  // };


  // const handleAddTask = () => {
  //   // Implement adding a new task functionality here
  // };

  return (
  <>
      <div className="grid grid-cols-4 gap-4 p-4">
        {data &&
          data.map((item, i) => (
            <div key={i} className="flex flex-col justify-between bg-gray-600 border rounded p-3 text-gray-200">
              <div>
                <h3 className="text-xl font-semibold my-3">{item.title}</h3>
                <hr />
                <p className="my-2">{item.desc}</p>
              </div>
              <div className="w-full flex items-center">
                <button className={`px-2 py-1 rounded w-3/6 ${item.status === "Incomplete" ? "bg-red-400" : "bg-green-400"}`}>
                  {item.status}
                </button>
                <div className="w-3/6 px-2 py-1 flex justify-between">
                  <button className="text-2xl"><CiHeart /></button>
                  <button className="text-xl"><FaRegEdit /></button>
                  <button className="text-xl"><MdDelete /></button>
                </div>
              </div>
            </div>
          ))}
          {home==="true" && (<div className="flex flex-col justify-between items-center bg-gray-600 border rounded p-3 text-gray-200 hover:scale-105 cursor-pointer transition-all duration-300" onClick={()=>setInputDiv("fixed")}>
          <IoAddCircleSharp className="text-5xl" />
          <h2 className="text-2xl text-gray-200 m-2">Add Task</h2>
        </div>
      )}
        
      </div>
    </>
  );
}

export default Cards;