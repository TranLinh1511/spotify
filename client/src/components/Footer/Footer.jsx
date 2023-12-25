import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="flex flex-row justify-between mx-3 mt-[5rem]  border-b-[#989898] border-b-[1px] pb-8 px-3">
                <div className="flex">
                    <div className="w-44">
                        <p className="mb-2">Company</p>
                        <ul>
                            <li className=" text-[#989898] font-semibold text-xs py-[0.35rem] ">
                                <a
                                    className="cursor-pointer hover:underline hover:text-white"
                                    href="#"
                                >
                                    About
                                </a>
                            </li>
                            <li className=" text-[#989898] font-semibold text-xs py-[0.35rem] ">
                                <a
                                    className="cursor-pointer hover:underline hover:text-white"
                                    href="#"
                                >
                                    Jobs
                                </a>
                            </li>
                            <li className=" text-[#989898] font-semibold text-xs py-[0.35rem] ">
                                <a
                                    className="cursor-pointer hover:underline hover:text-white"
                                    href="#"
                                >
                                    For the Record
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-44">
                        <p className="mb-2 ">Communities</p>
                        <ul>
                            <li className=" text-[#989898] font-semibold text-xs py-[0.35rem] ">
                                <a
                                    className="cursor-pointer hover:underline hover:text-white"
                                    href="#"
                                >
                                    For Artists
                                </a>
                            </li>
                            <li className=" text-[#989898] font-semibold text-xs py-[0.35rem] ">
                                <a
                                    className="cursor-pointer hover:underline hover:text-white"
                                    href="#"
                                >
                                    Developers
                                </a>
                            </li>
                            <li className=" text-[#989898] font-semibold text-xs py-[0.35rem] ">
                                <a
                                    className="cursor-pointer hover:underline hover:text-white"
                                    href="#"
                                >
                                    Advertising
                                </a>
                            </li>
                            <li className=" text-[#989898] font-semibold text-xs py-[0.35rem] ">
                                <a
                                    className="cursor-pointer hover:underline hover:text-white"
                                    href="#"
                                >
                                    Investors
                                </a>
                            </li>
                            <li className=" text-[#989898] font-semibold text-xs py-[0.35rem] ">
                                <a
                                    className="cursor-pointer hover:underline hover:text-white"
                                    href="#"
                                >
                                    Vendors
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-44">
                        <p className="mb-2 ">Useful links</p>
                        <ul>
                            <li className=" text-[#989898] font-semibold text-xs py-[0.35rem] ">
                                <a
                                    className="cursor-pointer hover:underline hover:text-white"
                                    href="#"
                                >
                                    Support
                                </a>
                            </li>
                            <li className=" text-[#989898] font-semibold text-xs py-[0.35rem] ">
                                <a
                                    className="cursor-pointer hover:underline hover:text-white"
                                    href="#"
                                >
                                    Free Mobile App
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-start ">
                    <div className="p-[0.6rem] bg-[#242424] mx-[0.4rem] rounded-full hover:bg-[rgb(100,100,100)]">
                        <FaInstagram />
                    </div>
                    <div className="p-[0.6rem] bg-[#242424] mx-[0.4rem] rounded-full hover:bg-[rgb(100,100,100)]">
                        <FaTwitter />
                    </div>
                    <div className="p-[0.6rem] bg-[#242424] mx-[0.4rem] rounded-full hover:bg-[rgb(100,100,100)]">
                        <FaFacebook />
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[0.7rem] font-semibold text-[#989898] mx-2 mb-10 pt-7">
                    © 2023 Spotify AB
                </p>
            </div>
        </div>
    );
}

export default Footer;
