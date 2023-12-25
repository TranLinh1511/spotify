import React, { useEffect } from "react";
import SbLogin from "../Sidebar/SbLogin";
import { FiMoreHorizontal } from "react-icons/fi";
import {
    BsFillPlayCircleFill,
    BsHeart,
    BsPatchCheckFill,
} from "react-icons/bs";
import SingInArtist from "./SingInArtist";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiArtist, fetchApiPlaylist } from "../../redux/musicsSlice";
import ListCard from "../Card/ListCard";
import CartAtrist from "../Home/CartAtrist";

function Artist() {
    const { artistId } = useParams();
    const listArtist = useSelector((state) => state.listMusic.artist);
    const isArtist = listArtist.find((e) => e.artist_id === parseInt(artistId));
    const listPlaylist = useSelector((state) => state.listMusic.listPlaylist);
    const playListQuantify = listPlaylist.slice(0, 1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApiArtist());
    }, []);
    useEffect(() => {
        dispatch(fetchApiPlaylist());
    }, []);
    const artistQuantity = listArtist.slice(0, 6);

    return (
        <div
            className="font-normal bg-no-repeat bg-contain "
            style={{
                backgroundImage: `url(${isArtist && isArtist.bg_image})`,
            }}
        >
            <SbLogin opacity={"bg-opacity-20"} />
            <div className="bg-[rbg(18,18,18)] bg-opacity-25 scroll">
                <div className="pt-[4.2rem] pl-5 ">
                    <div className="flex items-center translate-y-3">
                        <span className="text-xl text-blue-600">
                            <BsPatchCheckFill />
                        </span>
                        <span className="text-[0.7rem] mx-2">
                            Verified Artist
                        </span>
                    </div>
                    <p className="font-extrabold tracking-tight text-[4.88rem] font-family">
                        {isArtist && isArtist.artist_name}
                    </p>

                    <p className="py-4 text-bold">
                        62,210,922 monthly listeners
                    </p>
                </div>
                <div className={`mt-3  backdrop-blur-[150px] text-[#989898]`}>
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
                    <div className="mx-5 font-semibold ">
                        <div className="flex text-start">
                            <div className="w-[50%]">
                                <h3 className="pb-3 text-lg font-bold text-white">
                                    Popular
                                </h3>
                                <table className="items-center w-full border-collapse ">
                                    <tbody>
                                        {isArtist &&
                                            isArtist.list_music.map((e, i) => (
                                                <SingInArtist
                                                    track={e}
                                                    key={e.track_id}
                                                    index={i}
                                                />
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white ">
                                    Artist pick
                                </h3>
                                <div className="flex  p-2 w-[300px] cursor-pointer">
                                    <div className="w-[4.5rem] h-[4.5rem] object-cover">
                                        <img
                                            src={
                                                isArtist &&
                                                isArtist.artist_image
                                            }
                                            alt=""
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="mx-4 mt-2 font-bold text-white">
                                        <p className="mb-3 hover:underline">
                                            SCARLET -{" "}
                                            <span>
                                                {isArtist &&
                                                    isArtist.artist_name}
                                            </span>
                                        </p>
                                        <p className="text-xs text-[#989898] font-normal tracking-tighter">
                                            Play list
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="px-3 mt-[3.9rem]">
                            {playListQuantify.map((e) => (
                                <ListCard key={e.playList_id} playList={e} />
                            ))}
                        </div>
                        <div className="px-5 mt-[3.9rem] ">
                            <div className="flex items-center justify-between my-5">
                                <h3 className="text-lg cursor-pointer hover:underline">
                                    Popular artist
                                </h3>
                            </div>
                            <div className="grid grid-cols-6 gap-2">
                                {artistQuantity?.map((e, i) => (
                                    <CartAtrist key={e.artist_id} artist={e} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artist;
