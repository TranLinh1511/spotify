import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import "./Admin.css";
function SideBarAdmin() {
    return (
        <div className="border-r border-[#d6d6d6] h-screen bg-[rgb(255,255,255)] mt-12">
            <div className="mx-2 text-[#7d7d7d] pt-3">
                <Link to={"/admin"}>
                    <div className="flex items-center p-2 text-md rounded-[0.28rem] hover:bg-[rgb(249,250,251)]  ">
                        <MdSpaceDashboard className="mx-2" />
                        <p>Dashboard</p>
                    </div>
                </Link>
                <Link to={"users"}>
                    <div className="flex items-center p-2 text-md hover:bg-[rgb(249,250,251)] rounded-[0.28rem]">
                        <AiOutlineUser className="mx-2" />
                        <p>Users</p>
                    </div>
                </Link>
                <Link to={"/"}>
                    <div className="flex items-center p-2 text-md hover:bg-[rgb(249,250,251)] rounded-[0.28rem]">
                        <BiHomeAlt2 className="mx-2" />
                        <p>Home Page</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default SideBarAdmin;
