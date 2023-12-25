import React, { useEffect } from "react";
import { GrSpotify } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiusers } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function AdminNavbar() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApiusers());
    }, []);
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            navigate("/login");
        }
    };
    return (
        <div className="absolute top-0 left-0 w-full ">
            <div className="navbar bg-[rgb(255,255,255)] py-3 border-b border-[#d6d6d6] backdrop-blur-[100px] bg-opacity-30">
                <div className="flex items-center justify-between mx-10">
                    <div className="relative flex items-center text-base font-bold">
                        <GrSpotify className="text-xl" />
                        <span className="ml-1">Spotify </span>
                        <span className="text-[0.5rem] absolute top-0 right-[-1.5rem]">
                            admin{" "}
                        </span>
                    </div>
                    <div
                        className="flex items-center cursor-pointer user"
                        onClick={handleLogout}
                    >
                        <p className="mx-2 text-base font-bold">Admin</p>
                        <p className="translate-y-[0.10rem]">
                            <MdLogout className="text-xl" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;
