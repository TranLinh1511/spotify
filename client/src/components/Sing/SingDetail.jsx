import React, { useEffect } from "react";
import "./album.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsFillPlayCircleFill, BsHeart } from "react-icons/bs";
import SbLogin from "../Sidebar/SbLogin";
import ListCartSing from "../CartSing/ListCartSing";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiArtist, fetchApiTrack } from "../../redux/musicsSlice";
import Sing from "../Playlist/Sing";
function SingDetail() {
    const { trackId } = useParams();
    const listTrack = useSelector((state) => state.listMusic.listMusics);
    const listArtist = useSelector((state) => state.listMusic.artist);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApiArtist());
    }, []);
    useEffect(() => {
        dispatch(fetchApiTrack());
    }, []);
    const isMusic = listTrack.find((e) => e.track_id === trackId);
    const isArtist = listArtist.find(
        (e) => e.artist_id === parseInt(isMusic?.artist_id)
    );
    let backgroundAll = isArtist?.background;
    useEffect(() => {
        backgroundAll = isArtist?.background;
    });
    return (
        <div
            className="w-full font-normal rounded-lg"
            style={{
                backgroundImage: `linear-gradient( ${backgroundAll}, rgb(18,18,18), rgb(18,18,18)) `,
            }}
        >
            <SbLogin opacity={"bg-opacity-30"} />
            <div className="bg-opacity-25 rounded-lg scroll">
                <div className="flex items-center mt-20 mb-5">
                    <div className="h-[190px] w-[190px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] mx-5 ">
                        <img
                            src={isMusic && isMusic.track_image}
                            alt=""
                            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] object-cover w-full h-full"
                        />
                    </div>
                    <div className="translate-y-3">
                        <p className="text-[0.7rem] font-bold translate-y-5">
                            Song
                        </p>
                        <p className="font-extrabold tracking-tight text-[4.88rem] font-family">
                            {isMusic && isMusic.track_name}
                        </p>
                        <div className="flex items-center translate-y-3">
                            <div className="rounded-[50%] w-5 h-5">
                                <img
                                    src={isArtist && isArtist.artist_image}
                                    alt=""
                                    className="w-full h-full rounded-[50%]"
                                />
                            </div>
                            <div className="flex items-center py-2 text-[0.7rem] font-semibold">
                                <Link
                                    to={`/artist/${
                                        isMusic && isMusic.artist_id
                                    }`}
                                >
                                    <p className="ml-2 font-bold cursor-pointer hover:underline">
                                        {isMusic && isMusic.artist}
                                    </p>
                                </Link>
                                <span className="mx-1">&#8226;</span>
                                <p>2023</p>
                                <span className="mx-1">&#8226;</span>
                                <p>3:51</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`mt-3  bg-opacity-90 backdrop-blur-[100px] text-[#989898]`}
                >
                    <div className="flex items-center py-5 mx-5">
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
                    <div className="pb-3">
                        <div className="flex items-center mx-10 hover:bg-white hover:bg-opacity-10 rounded-md p-2 w-[300px] cursor-pointer">
                            <div className="h-16 w-16 rounded-[50%]">
                                <img
                                    src={isArtist && isArtist.artist_image}
                                    alt=""
                                    className="w-full h-full rounded-[50%] "
                                />
                            </div>
                            <div className="mx-4 font-bold text-white">
                                <p>Artist</p>
                                <Link
                                    to={`/artist/${
                                        isArtist && isArtist.artist_id
                                    }`}
                                >
                                    <p className="hover:underline">
                                        {isArtist && isArtist.artist_name}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mx-16 my-2 text-base font-semibold">
                        Other by{" "}
                        <span className="text-white">
                            {isMusic && isMusic.artist}
                        </span>{" "}
                    </div>
                    <div className="mx-5 overflow-y-scroll font-semibold scroll h-60">
                        <table className="items-center w-full border-collapse ">
                            <tbody>
                                {isArtist?.list_music.map((e, i) => (
                                    <Sing
                                        track={e}
                                        key={e.track_id}
                                        index={i}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mx-3 mt-10">
                        <ListCartSing />
                        <ListCartSing />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingDetail;
