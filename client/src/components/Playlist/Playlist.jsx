import React, { useRef, useState } from "react";
import "./playlist.css";
import { GrSpotify } from "react-icons/gr";
import { FiClock, FiMoreHorizontal } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import Sing from "./Sing";
import SbLogin from "../Sidebar/SbLogin";
import { fetchApiAlbum } from "../../redux/musicsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Playlist() {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const ref = useRef();
    const listAlbum = useSelector((state) => state.listMusic.listAlbum);
    const isAlbum = listAlbum.find((e) => e.album_id === albumId);

    useEffect(() => {
        dispatch(fetchApiAlbum());
    }, []);
    let backgroundAll = isAlbum?.background;
    useEffect(() => {
        backgroundAll = isAlbum?.background;
    });
    return (
        <div
            style={{
                backgroundImage: `linear-gradient( ${backgroundAll}, rgb(18,18,18), rgb(18,18,18))`,
            }}
            className={`w-full font-normal rounded-md`}
            ref={ref}
        >
            <SbLogin opacity={"bg-opacity-0"} />
            <div className="bg-black bg-opacity-10 scroll">
                <div className="pt-[4.5rem] pl-3 ">
                    <div className="flex items-center">
                        <div className="h-[190px] w-[190px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] mx-5 mb-2">
                            <img
                                src={isAlbum && isAlbum.album_image}
                                alt=""
                                className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] object-cover w-full h-full"
                            />
                        </div>
                        <div>
                            <p className="text-xs font-bold translate-y-4">
                                Playlist
                            </p>
                            <p className="font-extrabold tracking-tight text-[4.88rem] font-family">
                                {isAlbum && isAlbum.album_name}
                            </p>
                            <p className="text-gray-300 text-[0.7rem] ">
                                {isAlbum && isAlbum.recs}
                            </p>
                            <div className="flex items-center py-2 text-[0.7rem] font-semibold">
                                <div className="flex items-center">
                                    <GrSpotify className="mr-1 text-xl text-[rgb(30,215,96)]" />
                                    <span className="hover:underline">
                                        Spotify
                                    </span>
                                </div>
                                <span className="mx-1">&#8226;</span>
                                <p>34,274,729 likes</p>
                                <span className="mx-1">&#8226;</span>
                                <p>
                                    {isAlbum && isAlbum.list_music.length} songs
                                    {",   "}
                                    <span className="font-normal text-gray-300">
                                        about 2 hr 30 min
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`mt-3  bg-opacity-90 backdrop-blur-[100px] text-[#989898]`}
                >
                    <div className="flex items-center py-5 mx-4">
                        <div className="text-[2.9rem] text-[rgb(30,215,96)] ">
                            <BsFillPlayCircleFill className="cursor-pointer hover:scale-105" />
                        </div>
                        <div className="mx-5 text-2xl font-extrabold">
                            <BsHeart className="hover:text-white" />
                        </div>
                        <div className="text-2xl">
                            <FiMoreHorizontal className="hover:text-white" />
                        </div>
                    </div>
                    <div className="mx-5 font-semibold h-[30rem] scroll">
                        <table className="items-center w-full border-collapse ">
                            <thead>
                                <tr>
                                    <th className="w-5 px-4 py-2 text-xs font-semibold text-left border-b border-gray-800 text-blueGray-500 whitespace-nowrap">
                                        #
                                    </th>
                                    <th className=" w-[30%] py-2 text-xs font-semibold text-left border-b border-gray-800 text-blueGray-500 whitespace-nowrap">
                                        Title
                                    </th>
                                    <th className=" w-[27%] py-2 text-xs font-semibold text-left border-b border-gray-800 text-blueGray-500 whitespace-nowrap">
                                        Album
                                    </th>
                                    <th className="py-2 text-xs font-semibold text-left border-b border-gray-800 text-blueGray-500 whitespace-nowrap">
                                        Date added
                                    </th>
                                    <th className="py-2 text-xs font-semibold text-center border-b border-gray-800 text-blueGray-500 whitespace-nowrap">
                                        <FiClock className="block text-center" />
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {isAlbum?.list_music.map((e, i) => (
                                    <Sing
                                        track={e}
                                        key={i}
                                        index={i}
                                        albumName={isAlbum.album_name}
                                        isAlbum={isAlbum}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playlist;
