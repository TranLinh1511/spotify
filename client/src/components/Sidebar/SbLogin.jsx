import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchApiusers, loginUserApi } from "../../redux/userSlice";
function SbLogin({ opacity }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const listUsers = useSelector((state) => state.listUser.listUsers);
    useEffect(() => {
        dispatch(fetchApiusers());
    }, []);
    const userLogin = listUsers.find((e) => e.status === "active");
    const [logoutToggle, setLogoutToggle] = useState(false);
    const styles = {
        navBox: `h-[50px] bg-[rgb(16,16,16)] absolute top-0 left-0 z-50 w-full`,
        navOpa: opacity,
    };
    const handleLogout = () => {
        setLogoutToggle(false);
        if (window.confirm("Are you sure you want to log out?")) {
            const logoutUser = { ...userLogin, status: "" };
            dispatch(loginUserApi(logoutUser));
            navigate("/login");
        }
    };
    return (
        <div className={`${styles.navBox} ${opacity} rounded-t-lg`}>
            <div className="flex items-center justify-between px-4  text-[#989898]  w-full h-full rounded-t-lg">
                <div className="flex items-center ">
                    <i
                        className="fa-solid fa-chevron-left w-7 text-center pt-[8px]  h-7 bg-[#0A0A0A] rounded-full mx-1 hover:bg-[#242424] cursor-pointer"
                        onClick={() => navigate(-1)}
                    ></i>
                    <i
                        className="fa-solid fa-chevron-right w-7 text-center pt-[8px]  h-7 bg-[#0A0A0A] rounded-full mx-1 hover:bg-[#242424] cursor-pointer"
                        onClick={() => navigate(1)}
                    ></i>
                </div>
                {userLogin ? (
                    <div className="relative mx-4">
                        <div className="flex items-center font-bold">
                            Wellcome back{" "}
                            <div
                                className="flex items-center ml-3 cursor-pointer"
                                onClick={() => setLogoutToggle(!logoutToggle)}
                            >
                                <span className="mx-2 text-base text-white">
                                    {userLogin.name}
                                </span>
                                <span>
                                    {logoutToggle ? (
                                        <MdKeyboardArrowUp className="text-sm" />
                                    ) : (
                                        <MdKeyboardArrowDown className="text-sm" />
                                    )}
                                </span>
                            </div>
                        </div>
                        <div
                            className={`absolute -right-[1.35rem] text-[#989898] bg-white rounded-sm top-10 after:content-[""] after:w-[25px] after:h-[25px] after:absolute after:bg-white after:rotate-45 after:-top-2 after:right-4  ${
                                !logoutToggle && "hidden"
                            }`}
                        >
                            <div className="flex flex-col items-center py-2">
                                <p className="px-4 py-1 text-sm font-bold cursor-pointer w-[8.5rem] hover:text-green-500 active_profile">
                                    Account
                                </p>
                                <p
                                    className="px-4 py-1 text-sm font-bold cursor-pointer w-[8.5rem] hover:text-green-500 "
                                    onClick={handleLogout}
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <Link to={"/signup"}>
                            <button className="px-6 py-[0.6rem] font-bold hover:text-white rounded-full">
                                Sign up
                            </button>
                        </Link>
                        <Link to={"/login"}>
                            <button className="px-6 py-[0.6rem] font-bold text-black bg-white rounded-full scale">
                                Log in
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SbLogin;
// py-[0.45rem] absolute top-0 left-0   w-full
