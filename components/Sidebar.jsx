import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const data = [
        {
            title: "All tasks",
            icon: <CgNotes />,
            link: "/"
        },
        {
            title: "Important tasks",
            icon: <MdLabelImportant />,
            link: "/importanttasks"
        },
        {
            title: "Completed tasks",
            icon: <FaCheckDouble />,
            link: "/completedtasks"
        },
        {
            title: "Incompleted tasks",
            icon: <TbNotebookOff />,
            link: "/incompletedtasks"
        },
    ];

    return (
       <>
            {/* Your profile section */}
            <div className="border border-gray-500 rounded-xl p-4 mb-4">
                <h2 className="text-xl font-semibold">User Profile</h2>
                <h4 className="mb-1 text-gray-400">user@example.com</h4>
            </div>
            {/* Navigation links */}
            <div className="flex-grow">
                {data.map((item, i) => (
                    <Link
                        key={i}
                        to={item.link}
                        className="flex items-center my-2 p-2 hover:bg-gray-700 rounded transition-all duration-300"
                    >
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                    </Link>
                ))}
            </div>
            {/* Logout button */}
            <div className="mt-auto">
                <button className="bg-gray-500 p-2 w-full font-semibold rounded">Log Out</button>
            </div>
        
        </>
    );
};

export default Sidebar;
