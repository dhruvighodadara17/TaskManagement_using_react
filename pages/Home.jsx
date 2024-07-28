import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";


const Home = () => {
    return (
        <div className="flex h-[97vh] gap-3">
            <div className="flex flex-col justify-between  bg-blue-100 w-1/5 border border-gray-400 rounded-xl p-5">   
                    <Sidebar /> 
            </div>
            <div className=" w-4/5 p-5 "> <Outlet /></div>
        </div>

        
    );
};

export default Home;
