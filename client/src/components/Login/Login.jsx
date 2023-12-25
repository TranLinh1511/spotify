import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { GrSpotify } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiusers, loginUserApi } from "../../redux/userSlice";
import * as Yup from "yup";
import { useFormik } from "formik";
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const listUsers = useSelector((state) => state.listUser.listUsers);
    useEffect(() => {
        dispatch(fetchApiusers());
    }, []);
    const formik = useFormik({
        initialValues: {
            user: "",
            password: "",
        },
        validationSchema: Yup.object({
            user: Yup.string().required("The name must not empty."),
            password: Yup.string().required("The password must not empty."),
        }),
        onSubmit: (values) => {
            const isUser = listUsers.find(
                (e) =>
                    (e.email === values.user &&
                        e.password === values.password) ||
                    (e.name === values.user && e.password === values.password)
            );
            if (!isUser) {
                setError("Accounts or passwords incorrectly");
            } else {
                if (isUser.role === "admin") {
                    navigate("/admin");
                } else if (isUser.status === "block") {
                    setError("Your account has been locked!");
                } else {
                    const loginUser = { ...isUser, status: "active" };
                    dispatch(loginUserApi(loginUser));
                    navigate(`/`);
                }
            }
        },
    });
    return (
        <div className="bg-gradient-to-b from-[rgb(30,30,30)] via-[rgb(18,18,18)] to-black h-screen font-semibold">
            <div className="w-1/2 py-10 mx-auto text-center rounded-md">
                <div className="w-full my-10 text-[1.6rem] logo">
                    <Link to={"/"}>
                        <div className="flex items-center justify-center font-bold ">
                            <GrSpotify />
                            <span className="ml-2">Spotify</span>
                        </div>
                    </Link>
                </div>
                <h1 className="text-3xl font-bold tracking-[-0.08em] mb-7">
                    Log in to Spotify
                </h1>
                <div className="w-3/4 mx-auto my-4 border-b border-gray-700"></div>
                <small className="text-sm text-red-500">{error}</small>
                <form
                    className="w-1/2 mx-auto text-center "
                    onSubmit={formik.handleSubmit}
                >
                    <div className="w-full py-4 text-left">
                        <label
                            htmlFor="email"
                            className="inline-block mb-2 font-semibold"
                        >
                            Email or username
                        </label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            placeholder="Email or username"
                            className="block w-full rounded-[4px] border-0  text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-white bg-[#1a1919]"
                            onChange={formik.handleChange}
                            value={formik.values.user}
                        />
                        {formik.errors.user && formik.touched.user && (
                            <small className="text-red-500">
                                {formik.errors.user}
                            </small>
                        )}
                    </div>
                    <div className="w-full py-4 text-left">
                        <label
                            htmlFor="password"
                            className="inline-block mb-2 font-semibold"
                        >
                            Password
                        </label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="block w-full rounded-[4px] border-0  text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-white bg-[#1a1919]"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password && formik.touched.password && (
                            <small className="text-red-500">
                                {formik.errors.password}
                            </small>
                        )}
                    </div>

                    <div className="w-full py-4 text-left">
                        <input
                            type="submit"
                            value="Log in"
                            placeholder="Password"
                            className="block w-full p-3 font-medium text-center text-black duration-200 bg-[rgb(74,222,128)] rounded-full outline-none cursor-pointer hover:scale-105 translate-all hover:font-semibold "
                        />
                    </div>
                    <div className="w-full py-4 text-center">
                        <Link
                            to="/password/forgot"
                            className="mx-auto font-bold text-white decoration-[1.5px] underline  hover:decoration-[rgb(30,215,96)]"
                        >
                            Forgot your password?
                        </Link>
                    </div>
                </form>
                <div className="w-3/4 mx-auto my-4 border-b border-gray-700"></div>
                <p className="pt-8">
                    <span className="font-semibold text-gray-300">
                        Don't have an account? &nbsp;
                    </span>

                    <Link
                        to="/signup"
                        className="mx-auto font-semibold text-white underline hover:text-[rgb(74,222,128)]"
                    >
                        Sign up for Spotify
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
