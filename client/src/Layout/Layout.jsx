import Sidabar from "../components/Sidebar/Sidabar";
import "./layout.css";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import SbMusic from "../components/Sidebar/SbMusic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchApiusers } from "../redux/userSlice";
import SbSignUp from "../components/Sidebar/SbSignUp";

function Layout() {
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.listUser.listUsers);
    useEffect(() => {
        dispatch(fetchApiusers());
    }, []);

    const userLogin = listUsers.find((e) => e.status === "active");
    return (
        <div className="flex gap-[0.4rem] p-[5px]">
            <div className="w-[20%]">
                <Sidabar />
            </div>
            <div className="w-[80%]  font-bold nav bg-[rgb(18,18,18)] relative h-[606px]">
                <div id="scrollBox" className="h-full rounded-md scroll ">
                    <Outlet />
                    <Footer />
                </div>
            </div>
            {userLogin ? <SbMusic /> : <SbSignUp />}
        </div>
    );
}

export default Layout;
