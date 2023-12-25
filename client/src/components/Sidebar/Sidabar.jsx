import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiSolidHome, BiSearch, BiLibrary } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import "./common.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiusers } from "../../redux/userSlice";
import SbPlaylist from "./SbPlaylist";
import { fetchApiAlbum } from "../../redux/musicsSlice";
function Sidabar() {
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.listUser.listUsers);
    const listAlbum = useSelector((state) => state.listMusic.listAlbum);
    useEffect(() => {
        dispatch(fetchApiusers());
    }, []);
    useEffect(() => {
        dispatch(fetchApiAlbum());
    }, []);
    const userLogin = listUsers.find((e) => e.status === "active");
    return (
        <div className="w-full text-xs sidebar">
            <div className="p-4 font-bold rounded-md nav secodary_bg text-[#989898] ">
                <NavLink to={"/"}>
                    <div className="flex items-center gap-4 cursor-pointer hover:text-white ">
                        <BiSolidHome className="text-xl " />
                        <span>Home</span>
                    </div>
                </NavLink>
                <NavLink to={"search"}>
                    <div className="flex items-center gap-4 mt-4 cursor-pointer hover:text-white">
                        <BiSearch className="text-xl" />
                        <span>Search</span>
                    </div>
                </NavLink>
            </div>
            <div className="py-3 mt-[0.4rem] rounded-md nav secodary_bg">
                <div className="flex items-center justify-between px-5 mb-3 text-[#989898]">
                    <div className="flex items-center gap-4 font-bold cursor-pointer hover:text-white">
                        <BiLibrary className="text-xl " />
                        <span className="">Your library</span>
                    </div>
                    <button className="hover:bg-[#242424] rounded-[50%] p-1 font-bold">
                        <FiPlus className="text-xl " />
                    </button>
                </div>
                {userLogin ? (
                    <div className="h-[28rem] scroll">
                        {listAlbum.map((e) => (
                            <SbPlaylist key={e.album_id} album={e} />
                        ))}
                    </div>
                ) : (
                    <div className="your_libreary">
                        <div className="px-4 py-[0.7rem] mx-2 mt-2 leading-7 rounded-lg tertiary_bg">
                            <p className="font-bold">
                                Create your first playlist
                            </p>
                            <p>It's easy, we'll help you</p>
                            <button className="px-4 py-[0.04rem] mt-3 font-semibold text-black bg-white rounded-full scale">
                                Create playlist
                            </button>
                        </div>
                        <div className="px-4 py-[0.7rem] mx-2 mt-4 leading-7 rounded-lg tertiary_bg">
                            <p className="font-bold">
                                Let's find some podcasts to follow
                            </p>
                            <p>We'll keep you updated on new episodes</p>
                            <button className="px-4 py-[0.04rem] mt-3 font-semibold text-black bg-white rounded-full scale">
                                Browse podcasts
                            </button>
                        </div>
                        <div>
                            <div className="mx-2">
                                <div className="flex flex-wrap text-[#989898] mt-[1.8rem]">
                                    <a className="m-2  text-[0.65rem]" href="#">
                                        Legal
                                    </a>
                                    <a className="m-2  text-[0.65rem]" href="#">
                                        Privacy Center
                                    </a>
                                    <a className="m-2  text-[0.65rem]" href="#">
                                        Privacy Policy
                                    </a>
                                    <a className="m-2  text-[0.65rem]" href="#">
                                        Cookies
                                    </a>
                                    <a className="m-2  text-[0.65rem]" href="#">
                                        About Ads
                                    </a>
                                    <a className="m-2  text-[0.65rem]" href="#">
                                        Accessibility
                                    </a>
                                    <a className="m-2  text-[0.65rem]" href="#">
                                        About Ads
                                    </a>
                                    <a className="m-2  text-[0.65rem]" href="#">
                                        Accessibility
                                    </a>
                                </div>
                            </div>
                            <div className="mx-3 my-[1.2rem]">
                                <button className="flex items-center px-2 py-1 my-3 font-semibold border border-gray-400 rounded-full hover:border-white hover:scale-[1.05]">
                                    <TbWorld className="text-lg" />
                                    <span className="ml-1 font-bold">
                                        English
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sidabar;
