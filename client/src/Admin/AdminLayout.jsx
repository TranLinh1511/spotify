import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";
import SideBarAdmin from "./SideBarAdmin";

function AdminLayout() {
    return (
        <div className="relative h-screen text-black bg-[rgb(250,250,250)] pb-1">
            <AdminNavbar />
            <div className="flex">
                <div className="w-[15%]">
                    <SideBarAdmin />
                </div>
                <div className="w-[85%]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
