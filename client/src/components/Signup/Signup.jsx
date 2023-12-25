import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { GrSpotify } from "react-icons/gr";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addUsersApi, fetchApiusers } from "../../redux/userSlice";
const Signup = () => {
    const [checkbox, setCheckbox] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const listUsers = useSelector((state) => state.listUser.listUsers);
    useEffect(() => {
        dispatch(fetchApiusers());
    }, []);

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirm: "",
            role: "regular",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "The name is too short.")
                .max(25, "The name must be longer than 25 characters.")
                .required("The name must not empty."),
            email: Yup.string()
                .email("Not in accordance with email format")
                .required("Email must not empty"),
            password: Yup.string()
                .min(8, "The password must not be less than 8 characters")
                .required("Password can not be empty!")
                .matches(passwordRules, {
                    message: "Please create a stronger password",
                }),
            confirm: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password can not be empty"),
        }),
        onSubmit: (values) => {
            const exist = listUsers.find((e) => e.email === values.email);
            if (exist) {
                setError(true);
            } else {
                dispatch(addUsersApi(values));
                navigate("/login");
            }
        },
    });
    return (
        <div className="m-0 font-medium bg-white">
            <div className="text-black ">
                <div className="w-1/2 pt-1 mx-auto text-center pb-7">
                    <div className="my-10  text-[1.6rem] logo">
                        <Link to={"/"}>
                            <div className="flex items-center justify-center font-bold ">
                                <GrSpotify />
                                <span className="ml-2 tracking-tighter">
                                    Spotify
                                </span>
                            </div>
                        </Link>
                    </div>
                    <h1 className="text-3xl font-bold tracking-[-0.08em] mb-7">
                        Sign up for free to start listening.
                    </h1>

                    <div className="w-3/4 mx-auto my-4 border-b border-gray-700"></div>
                    <form
                        className="w-3/4 mx-auto text-center "
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="w-4/5 py-4 mx-auto text-left">
                            <label
                                htmlFor="name"
                                className="inline-block mb-2 text-sm font-semibold tracking-tighter"
                            >
                                What should we call you?{" "}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter a profile name."
                                className="block w-full rounded-[4px] border-0   text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <small>
                                This appears on your profile. <br />
                            </small>
                            {formik.errors.name && formik.touched.name && (
                                <small className="text-red-500">
                                    {formik.errors.name}
                                </small>
                            )}
                        </div>
                        <div className="w-4/5 py-4 mx-auto text-left">
                            <label
                                htmlFor="email"
                                className="inline-block mb-2 text-sm font-semibold tracking-tighter"
                            >
                                What's your email?{" "}
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="block w-full rounded-[4px] border-0 border-black   text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <small className="text-red-500">
                                    {formik.errors.email}
                                </small>
                            )}
                            {error && (
                                <small className="text-red-500">
                                    Email already exists
                                </small>
                            )}
                        </div>
                        <div className="w-4/5 py-4 mx-auto text-left ">
                            <label
                                htmlFor="password"
                                className="inline-block mb-2 text-sm font-semibold tracking-tighter"
                            >
                                Create a password{" "}
                            </label>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                placeholder="Enter your password."
                                className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff] "
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password &&
                                formik.touched.password && (
                                    <small className="text-red-500">
                                        {formik.errors.password}
                                    </small>
                                )}
                        </div>
                        <div className="w-4/5 py-4 mx-auto text-left ">
                            <label
                                htmlFor="confirm"
                                className="inline-block mb-2 text-sm font-semibold tracking-tighter"
                            >
                                Confirm password{" "}
                            </label>
                            <input
                                type="text"
                                id="confirm"
                                name="confirm"
                                placeholder="Enter your password."
                                className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff] "
                                onChange={formik.handleChange}
                                value={formik.values.confirm}
                            />
                            {formik.errors.confirm &&
                                formik.touched.confirm && (
                                    <small className="text-red-500">
                                        {formik.errors.confirm}
                                    </small>
                                )}
                        </div>
                        <div className="w-4/5 py-4 mx-auto text-left">
                            <div className="flex items-center gap-4 my-4">
                                <input
                                    type="checkbox"
                                    className="relative green-checkbox"
                                    onClick={() => setCheckbox(!checkbox)}
                                />
                                <p className="w-[23.5rem] text-xs font-medium">
                                    Share my registration data with Spotify's
                                    content providers for marketing purposes.
                                </p>
                            </div>

                            <div className="text-center text-[0.6rem]">
                                <p className="my-4 ">
                                    By clicking on sign-up, you agree to
                                    Spotify's &nbsp;
                                    <Link
                                        to="/"
                                        className="text-green-400 underline hover:text-green-300 "
                                    >
                                        Terms and Condition of Use.
                                    </Link>
                                </p>
                                <p className="my-4 ">
                                    To learn more about how Spotify collects,
                                    uses, shares and protects your personal
                                    data, please see &nbsp;
                                    <Link
                                        to="/"
                                        className="text-green-400 underline hover:text-green-300 "
                                    >
                                        Spotify's Privacy Policy.
                                    </Link>{" "}
                                </p>
                            </div>
                        </div>
                        <div className="w-full py-4 text-left">
                            <button
                                type="submit"
                                className={`block w-1/2 p-3 mx-auto font-medium text-center text-black duration-200 bg-green-400 rounded-full outline-none cursor-pointer  translate-all hover:font-semibold ${
                                    !checkbox
                                        ? "opacity-80 "
                                        : "hover:scale-105"
                                }`}
                                disabled={!checkbox}
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className="w-3/4 mx-auto my-4 border-b border-gray-400"></div>
                    <p className="pt-8">
                        <span className="font-semibold text-gray-800">
                            Do you already have an account? &nbsp;
                        </span>

                        <Link
                            to="/login"
                            className="mx-auto font-semibold text-green-400 underline hover:text-green-300 "
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
